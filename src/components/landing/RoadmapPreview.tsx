import React, { useState, useRef } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ActiveView, RoadmapNode } from '../../types';
import { Check, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface RoadmapPreviewProps {
  onNavigate: (view: ActiveView) => void;
}

export const RoadmapPreview: React.FC<RoadmapPreviewProps> = ({ onNavigate }) => {
  const [nodes, setNodes] = useState<RoadmapNode[]>([
    {
      id: 'm1',
      week: 1,
      title: 'Processes, Threads & Syscalls',
      concepts: ['Process Control Block (PCB)', 'Kernel vs User Space', 'POSIX Fork & Exec'],
      status: 'completed',
      estimatedHours: 8,
    },
    {
      id: 'm2',
      week: 2,
      title: 'CPU Scheduling Algorithms',
      concepts: ['FCFS, SJF, Round Robin', 'Multi-level Feedback Queues', 'Starvation & Aging'],
      status: 'completed',
      estimatedHours: 10,
    },
    {
      id: 'm3',
      week: 3,
      title: 'Process Synchronization & Concurrency',
      concepts: ['Critical Section Problem', 'Peterson Algorithm', 'Semaphores & Mutex Locks'],
      status: 'in-progress',
      estimatedHours: 12,
    },
    {
      id: 'm4',
      week: 4,
      title: 'Virtual Memory & Paging Architectures',
      concepts: ['Multi-Level Page Tables', 'TLB Translation & Misses', 'Page Replacement (LRU, Clock)'],
      status: 'upcoming',
      estimatedHours: 14,
    },
    {
      id: 'm5',
      week: 5,
      title: 'Deadlock Detection & Banker Algorithm',
      concepts: ['Resource Allocation Graphs', 'Safety Algorithm', 'Deadlock Recovery'],
      status: 'upcoming',
      estimatedHours: 8,
    },
  ]);

  const toggleStatus = (id: string) => {
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === id) {
          const nextStatus =
            node.status === 'completed'
              ? 'upcoming'
              : node.status === 'in-progress'
              ? 'completed'
              : 'in-progress';
          return { ...node, status: nextStatus };
        }
        return node;
      })
    );
  };

  const completedCount = nodes.filter((n) => n.status === 'completed').length;
  const progressPercent = Math.round((completedCount / nodes.length) * 100);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.gsap-roadmap-el', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-canvas border-t border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="gsap-roadmap-el">
            <Badge variant="cream" className="font-mono text-xs mb-3">
              CURRICULUM ENGINE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-rich-black tracking-tight">
              Personalized Syllabus Roadmaps.
            </h2>
            <p className="text-sm text-rich-black/70 mt-2 max-w-xl">
              Turn an intimidating 200-page university syllabus into an achievable week-by-week plan with milestone verification.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-cream px-4 py-3 rounded-card border border-beige-border gsap-roadmap-el">
            <div className="text-right">
              <span className="text-[11px] font-mono uppercase text-rich-black/60 font-semibold block">
                Roadmap Progress
              </span>
              <span className="text-lg font-bold text-rich-black font-mono">
                {progressPercent}% Complete
              </span>
            </div>
            <div className="w-16 h-2 bg-canvas rounded-full overflow-hidden border border-beige-border">
              <div
                className="h-full bg-rich-black transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Roadmap Module Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {nodes.map((node) => {
            const isDone = node.status === 'completed';
            const isInProgress = node.status === 'in-progress';

            return (
              <Card
                key={node.id}
                variant="cream"
                className={`p-6 flex flex-col justify-between transition-all gsap-roadmap-el ${
                  isDone ? 'border-beige-border/80' : isInProgress ? 'border-rich-black/80 ring-1 ring-rich-black/10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-rich-black/60 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      WEEK {node.week}
                    </span>

                    <button
                      onClick={() => toggleStatus(node.id)}
                      className={`text-xs px-2.5 py-1 rounded-full font-mono font-semibold flex items-center gap-1.5 transition-colors ${
                        isDone
                          ? 'bg-rich-black text-canvas'
                          : isInProgress
                          ? 'bg-canvas text-rich-black border border-beige-border'
                          : 'bg-canvas/50 text-rich-black/50 border border-beige-border'
                      }`}
                      title="Click to toggle module status"
                    >
                      {isDone ? (
                        <>
                          <Check className="w-3 h-3" />
                          Done
                        </>
                      ) : isInProgress ? (
                        <>
                          <Clock className="w-3 h-3 animate-spin" />
                          In Progress
                        </>
                      ) : (
                        'Upcoming'
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-rich-black mb-3 leading-snug">
                    {node.title}
                  </h3>

                  <div className="space-y-1.5 mb-6">
                    {node.concepts.map((concept, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-rich-black/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-rich-black/40 mt-1.5 flex-shrink-0" />
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-beige-border/60 flex items-center justify-between text-xs font-mono text-rich-black/60">
                  <span>~{node.estimatedHours} study hours</span>
                  <button
                    onClick={() => onNavigate('quizzes')}
                    className="text-rich-black font-semibold hover:underline flex items-center gap-1"
                  >
                    Take Quiz <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            );
          })}

          {/* Add Subject / Custom Roadmap CTA Card */}
          <div className="p-6 rounded-card border-2 border-dashed border-beige-border flex flex-col justify-center items-center text-center bg-cream/40 space-y-3 gsap-roadmap-el">
            <div className="w-12 h-12 rounded-full bg-cream border border-beige-border flex items-center justify-center text-rich-black font-bold">
              +
            </div>
            <div>
              <h4 className="text-sm font-bold text-rich-black">
                Import Your University Syllabus
              </h4>
              <p className="text-xs text-rich-black/60 mt-1 max-w-xs">
                Upload your semester syllabus PDF or enter custom course deadlines.
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('materials')}
            >
              Upload Syllabus PDF
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center gsap-roadmap-el">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('roadmaps')}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Explore All 8 Semester Engineering Tracks
          </Button>
        </div>
      </div>
    </section>
  );
};
