import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TutorMessage } from '../../types';
import { activeLLMProvider } from '../../services/aiProvider';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';

/**
 * Minimal markdown-like renderer for tutor responses.
 * Handles **bold**, `inline code`, ### headings, and ```code blocks```.
 * No external dependencies.
 */
function renderFormattedText(text: string): React.ReactNode {
  const lines = text.split('\n');
  const result: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];

  const renderInline = (line: string, key: string): React.ReactNode => {
    // Split on **bold** and `code` patterns
    const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    return (
      <span key={key}>
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-rich-black">{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={i} className="px-1.5 py-0.5 rounded bg-cream border border-beige-border font-mono text-[0.85em]">{part.slice(1, -1)}</code>;
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        result.push(
          <pre key={`code-${i}`} className="p-3 rounded-lg bg-near-black text-cream font-mono text-xs leading-relaxed overflow-x-auto my-2">
            {codeBuffer.join('\n')}
          </pre>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.startsWith('### ')) {
      result.push(<p key={i} className="font-bold text-rich-black text-sm mt-2 mb-1">{line.slice(4)}</p>);
    } else if (line.trim() === '') {
      result.push(<br key={i} />);
    } else {
      result.push(<p key={i} className="leading-relaxed">{renderInline(line, `l-${i}`)}</p>);
    }
  }

  // Close any unclosed code block
  if (inCodeBlock && codeBuffer.length > 0) {
    result.push(
      <pre key="code-final" className="p-3 rounded-lg bg-near-black text-cream font-mono text-xs leading-relaxed overflow-x-auto my-2">
        {codeBuffer.join('\n')}
      </pre>
    );
  }

  return <>{result}</>;
}

export const TutorView: React.FC = () => {
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      id: '1',
      sender: 'tutor',
      timestamp: '17:00',
      content:
        'Hello! I am your MindPilot Engineering Tutor. Which subject or concept are we deconstructing today? (e.g., Virtual Memory, Graph Traversals, Relational Algebra, or Cache Coherence)',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickTopics = [
    'Paging vs Segmentation in OS',
    'Dijkstra Shortest Path Complexity',
    'ACID Properties in Transactions',
    'Karnaugh Map Minimization (Digital Logic)',
  ];

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMessage: TutorMessage = {
      id: Date.now().toString(),
      sender: 'student',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: textToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal('');
    setIsTyping(true);

    const tutorMessageId = (Date.now() + 1).toString();
    const initialTutorMsg: TutorMessage = {
      id: tutorMessageId,
      sender: 'tutor',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: '',
    };

    setMessages((prev) => [...prev, initialTutorMsg]);

    try {
      const response = await activeLLMProvider.streamText([
        { role: 'user', content: textToSend },
      ]);

      let accumulated = '';
      for await (const chunk of response.stream) {
        accumulated += chunk;
        setMessages((prev) =>
          prev.map((m) => (m.id === tutorMessageId ? { ...m, content: accumulated } : m))
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === tutorMessageId
            ? { ...m, content: 'Error retrieving explanation. Please retry.' }
            : m
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* View Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="cream" className="font-mono text-xs">
              WORKSPACE
            </Badge>
            <span className="text-xs font-mono text-rich-black/60">
              Active Session: Core Systems Engineering
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-rich-black tracking-tight">
            AI Technical Concept Tutor
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="beige" className="font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Socratic Mode Active
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar: Topic shortcuts & active course */}
        <div className="lg:col-span-1 space-y-4">
          <Card variant="cream" className="p-5">
            <h3 className="text-xs font-mono font-bold uppercase text-rich-black/60 tracking-wider mb-3">
              Course Context
            </h3>
            <p className="text-sm font-bold text-rich-black">CS301: Operating Systems</p>
            <p className="text-xs text-rich-black/70 mt-1">
              Unit 3: Memory Management & Paging
            </p>
            <div className="mt-4 pt-3 border-t border-beige-border text-xs text-rich-black/60 font-mono">
              Grounding: Lecture 8 Slides (PDF)
            </div>
          </Card>

          <Card variant="cream" className="p-5">
            <h3 className="text-xs font-mono font-bold uppercase text-rich-black/60 tracking-wider mb-3">
              Explore Concept Prompts
            </h3>
            <div className="space-y-2">
              {quickTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleSend(topic)}
                  disabled={isTyping}
                  className="w-full text-left text-xs p-2 rounded-lg border border-beige-border bg-canvas hover:bg-cream-pale transition-colors text-rich-black/90 font-medium disabled:opacity-50"
                >
                  {topic}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Main Chat Container */}
        <div className="lg:col-span-3 flex flex-col h-[650px] bg-canvas border border-beige-border rounded-card overflow-hidden">
          {/* Chat Messages Log */}
          <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-canvas">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3.5 ${
                  msg.sender === 'student' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'tutor' && (
                  <div className="w-8 h-8 rounded-lg bg-cream border border-beige-border flex items-center justify-center text-rich-black flex-shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.sender === 'student'
                      ? 'bg-rich-black text-canvas'
                      : 'bg-cream text-rich-black border border-beige-border'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1 text-[11px] opacity-60 font-mono">
                    <span>{msg.sender === 'student' ? 'Student' : 'MindPilot Tutor'}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div>
                    {msg.sender === 'tutor'
                      ? renderFormattedText(msg.content)
                      : <span className="whitespace-pre-wrap">{msg.content}</span>
                    }
                  </div>
                </div>

                {msg.sender === 'student' && (
                  <div className="w-8 h-8 rounded-lg bg-rich-black text-canvas flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 text-xs font-mono text-rich-black/60 items-center">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Deriving technical explanation...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-cream border-t border-beige-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about a formula, theorem, algorithm, or course slide..."
                className="flex-1 bg-canvas border border-beige-border rounded-btn px-4 py-2.5 text-sm text-rich-black focus:outline-none focus:ring-2 focus:ring-rich-black"
              />
              <Button type="submit" variant="primary" disabled={isTyping || !inputVal.trim()}>
                <Send className="w-4 h-4 mr-1.5" />
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
