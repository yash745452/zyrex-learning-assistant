import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { QuizQuestion } from '../../types';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const QuizzesView: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 'q1',
      question:
        'In a virtual memory system with 4KB pages and 32-bit logical addresses, how many entries are required in a single-level page table if each entry is 4 bytes?',
      subject: 'Operating Systems',
      options: ['1,048,576 (2^20)', '4,096 (2^12)', '65,536 (2^16)', '262,144 (2^18)'],
      correctIndex: 0,
      explanation:
        '4KB page size implies 12 bits for offset (2^12 = 4096). The remaining 32 - 12 = 20 bits index the page table. Hence, 2^20 = 1,048,576 entries are needed.',
      conceptTag: 'Virtual Memory Paging',
    },
    {
      id: 'q2',
      question:
        'Why does Dijkstra algorithm fail when an input graph contains an edge with a negative weight?',
      subject: 'Algorithms',
      options: [
        'It causes infinite recursion immediately.',
        'The greedy invariant that a settled vertex has its final optimal distance is violated.',
        'Priority queues cannot hold negative numbers.',
        'It creates an undetected cycle in all directed acyclic graphs.',
      ],
      correctIndex: 1,
      explanation:
        'Dijkstra operates on the assumption that once a vertex distance is finalized, no future relaxation can reduce it further. A negative edge can offer a shorter path to a previously finalized vertex.',
      conceptTag: 'Greedy Graph Invariants',
    },
    {
      id: 'q3',
      question:
        'A relational schema R(A, B, C, D) has functional dependencies {A -> B, B -> C, C -> D}. What is the highest normal form of R?',
      subject: 'DBMS',
      options: ['1NF', '2NF', '3NF', 'BCNF'],
      correctIndex: 1,
      explanation:
        'Candidate key is A. All non-prime attributes (B, C, D) are fully functionally dependent on candidate key A (no partial dependencies), so it is in 2NF. However, transitive dependencies A -> B -> C and B -> C -> D exist, violating 3NF.',
      conceptTag: 'Database Normalization',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Badge variant="cream" className="font-mono text-xs mb-2">
          DIAGNOSTIC ASSESSMENT
        </Badge>
        <h1 className="text-3xl font-extrabold text-rich-black tracking-tight">
          Adaptive Engineering Practice
        </h1>
        <p className="text-sm text-rich-black/70 mt-1">
          Verify your conceptual comprehension with exam-style problem sets derived from core subjects.
        </p>
      </div>

      {!isCompleted ? (
        <Card variant="cream" className="p-8">
          {/* Question Header & Meta */}
          <div className="flex items-center justify-between pb-5 border-b border-beige-border mb-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-rich-black bg-canvas px-2.5 py-1 rounded border border-beige-border">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-xs font-mono text-rich-black/60">
                {currentQ.subject} • {currentQ.conceptTag}
              </span>
            </div>

            <span className="text-xs font-mono font-semibold text-rich-black/60">
              Score: {score}
            </span>
          </div>

          {/* Question Body */}
          <h2 className="text-lg sm:text-xl font-bold text-rich-black leading-snug mb-8">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let optionStyle =
                'bg-canvas border-beige-border text-rich-black hover:bg-cream-pale';
              if (isAnswerSubmitted) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'bg-rose-50 border-rose-600 text-rose-950';
                } else {
                  optionStyle = 'bg-canvas/40 border-beige-border/50 text-rich-black/40';
                }
              } else if (isSelected) {
                optionStyle = 'bg-canvas border-rich-black ring-1 ring-rich-black font-semibold';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-md bg-cream border border-beige-border flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt}</span>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-700 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswerSubmitted && (
            <div className="p-5 rounded-xl bg-canvas border border-beige-border mb-8 text-xs leading-relaxed space-y-2">
              <span className="font-mono font-bold text-rich-black uppercase tracking-wider block">
                Pedagogical Explanation:
              </span>
              <p className="text-rich-black/85 text-sm">{currentQ.explanation}</p>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-5 border-t border-beige-border">
            <span className="text-xs font-mono text-rich-black/60">
              Exam Target: University Semester End Exams
            </span>

            {!isAnswerSubmitted ? (
              <Button
                variant="primary"
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button variant="primary" onClick={handleNext}>
                {currentIndex + 1 < questions.length ? (
                  <>
                    Next Problem <ArrowRight className="w-4 h-4 ml-1.5" />
                  </>
                ) : (
                  'View Final Results'
                )}
              </Button>
            )}
          </div>
        </Card>
      ) : (
        /* Results View */
        <Card variant="cream" className="p-10 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-canvas border border-beige-border flex items-center justify-center mx-auto text-rich-black font-extrabold text-2xl font-mono">
            {score}/{questions.length}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-rich-black">
              Assessment Complete
            </h2>
            <p className="text-sm text-rich-black/70 mt-1 max-w-md mx-auto">
              You scored {Math.round((score / questions.length) * 100)}% on this diagnostic set.
              Results and concept mastery tags have been logged to your local study session.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <Button variant="primary" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-1.5" />
              Retake Practice Set
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
