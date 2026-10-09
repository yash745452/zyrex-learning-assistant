import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { activeLLMProvider } from '../../services/aiProvider';
import { Send, Terminal, RefreshCw, Cpu, CheckCircle } from 'lucide-react';

export const InteractiveTutorPreview: React.FC = () => {
  const samplePrompts = [
    'Explain Paging vs Segmentation with address translation',
    'How does Dijkstra algorithm relax edges in a graph?',
    'What are the 4 Coffman conditions for system deadlock?',
  ];

  const [inputQuery, setInputQuery] = useState(samplePrompts[0]);
  const [outputStream, setOutputStream] = useState<string>(
    `### Concept: Paging in Virtual Memory\n\nIn operating systems, **paging** is a memory management scheme by which a computer stores and retrieves data from secondary storage for use in main memory.\n\n1. **Logical Address Space:** Divided into fixed-size chunks called **Pages**.\n2. **Physical Address Space:** Divided into fixed-size chunks called **Frames** (same size as pages).\n3. **Page Table:** Hardware/OS structure mapping logical pages to physical frames.\n\n**Address Translation:**\nLogical Address = [Page Number (p) | Page Offset (d)]\nPhysical Address = [Frame Number (f) | Page Offset (d)]\n\n*Key Takeaway:* Paging eliminates external fragmentation, though internal fragmentation can occur on the final page frame.`
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRunQuery = async (queryText: string) => {
    setIsGenerating(true);
    setOutputStream('');
    try {
      const response = await activeLLMProvider.streamText([
        { role: 'user', content: queryText },
      ]);

      let accumulated = '';
      for await (const chunk of response.stream) {
        accumulated += chunk;
        setOutputStream(accumulated);
      }
    } catch {
      setOutputStream('Error generating response. Please retry.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-20 bg-canvas border-t border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <Badge variant="cream" className="font-mono text-xs mb-3">
            INTERACTIVE DEMO
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rich-black tracking-tight">
            See the Tutor in Action.
          </h2>
          <p className="text-sm text-rich-black/70 mt-2">
            Try a real engineering inquiry below to observe how MindPilot constructs step-by-step technical explanations.
          </p>
        </div>

        {/* Interactive Workspace Card (Cream background with beige borders) */}
        <Card variant="cream" className="p-6 md:p-8 max-w-5xl mx-auto shadow-sm">
          {/* Header Controls */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-beige-border gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rich-black/80" />
              <div className="w-3 h-3 rounded-full bg-beige-border" />
              <div className="w-3 h-3 rounded-full bg-beige-border" />
              <span className="ml-2 font-mono text-xs font-semibold text-rich-black">
                mindpilot-tutor-session://operating-systems
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-rich-black/60">
              <Cpu className="w-3.5 h-3.5 text-rich-black/80" />
              <span>Provider: {activeLLMProvider.name}</span>
            </div>
          </div>

          {/* Quick Concept Prompts */}
          <div className="py-5">
            <p className="text-xs font-bold text-rich-black/60 uppercase tracking-wider mb-2 font-mono">
              Suggested Engineering Topics:
            </p>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => {
                    setInputQuery(prompt);
                    handleRunQuery(prompt);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all text-left font-medium ${
                    inputQuery === prompt
                      ? 'bg-rich-black text-canvas border-rich-black'
                      : 'bg-canvas text-rich-black/80 border-beige-border hover:bg-cream-pale'
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isGenerating) {
                  handleRunQuery(inputQuery);
                }
              }}
              placeholder="Ask an engineering question (e.g. Virtual Memory, Dijkstra, Normalization)..."
              className="flex-1 bg-canvas border border-beige-border rounded-btn px-4 py-2.5 text-sm text-rich-black focus:outline-none focus:ring-2 focus:ring-rich-black font-medium"
            />
            <Button
              variant="primary"
              onClick={() => handleRunQuery(inputQuery)}
              isLoading={isGenerating}
              disabled={isGenerating || !inputQuery.trim()}
            >
              <Send className="w-4 h-4 mr-1.5" />
              Explain
            </Button>
          </div>

          {/* Response Box (White canvas inset inside cream container) */}
          <div className="bg-canvas rounded-xl border border-beige-border p-6 font-mono text-xs text-rich-black leading-relaxed min-h-[260px] whitespace-pre-wrap relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-beige-border/50 text-[11px] text-rich-black/50">
              <span className="flex items-center gap-1.5 font-semibold text-rich-black">
                <Terminal className="w-3.5 h-3.5" />
                TUTOR RESPONSE OUTPUT
              </span>
              {isGenerating && (
                <span className="flex items-center gap-1.5 text-rich-black font-medium animate-pulse">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  Streaming derivation...
                </span>
              )}
            </div>

            <div className="font-sans text-sm text-rich-black/90 leading-relaxed">
              {outputStream}
            </div>

            {!isGenerating && outputStream && (
              <div className="mt-6 pt-4 border-t border-beige-border/60 flex items-center justify-between text-xs font-mono text-rich-black/60">
                <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Conceptual derivation complete
                </span>
                <span>Response verified against curriculum</span>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
