import React, { useRef } from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ActiveView } from '../../types';
import { MessageSquare, BookOpen, Compass, CheckSquare, BarChart3, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface PillarsSectionProps {
  onNavigate: (view: ActiveView) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: 'tutor',
      icon: MessageSquare,
      title: 'AI Technical Tutor',
      category: 'PEDAGOGICAL CORE',
      description:
        'Engage in Socratic technical discussions. Deconstruct data structures, operating systems, and circuit theory with mathematical rigor and executable code.',
      view: 'tutor' as ActiveView,
      meta: 'Code & Math Derivations',
    },
    {
      id: 'materials',
      icon: BookOpen,
      title: 'Study-Material Assistant',
      category: 'DOCUMENT DIGESTION',
      description:
        'Upload professor lecture slides, syllabi, and textbook PDFs. Get grounded explanations with precise section and slide references.',
      view: 'materials' as ActiveView,
      meta: 'Local PDF & Notes Ingestion',
    },
    {
      id: 'roadmaps',
      icon: Compass,
      title: 'Personalized Learning Roadmaps',
      category: 'CURRICULUM PLANNING',
      description:
        'Transform your university syllabus into a week-by-week study plan with measurable milestone checkpoints and topic dependencies.',
      view: 'roadmaps' as ActiveView,
      meta: 'Semester & Exam Timelines',
    },
    {
      id: 'quizzes',
      icon: CheckSquare,
      title: 'Adaptive Practice & Quizzes',
      category: 'ACTIVE RECALL',
      description:
        'Generate technical multiple-choice and conceptual problem sets straight from your lecture notes with instant diagnostic answer keys.',
      view: 'quizzes' as ActiveView,
      meta: 'Exam-Level Problem Sets',
    },
    {
      id: 'progress',
      icon: BarChart3,
      title: 'Local Mastery Analytics',
      category: 'RETENTION TRACKING',
      description:
        'Monitor your learning velocity, completed modules, and conceptual weak spots stored securely on your local device.',
      view: 'progress' as ActiveView,
      meta: 'Zero Cloud Telemetry',
    },
  ];

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.gsap-pillar-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-canvas border-t border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Badge variant="cream" className="font-mono text-xs mb-3">
              CORE CAPABILITIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-rich-black tracking-tight">
              An Academic Instrument for Engineering.
            </h2>
          </div>
          <p className="text-sm text-rich-black/70 max-w-md">
            Built to eliminate superficial AI answers and ground student understanding in rigorous engineering principles.
          </p>
        </div>

        {/* 5 Pillar Grid — Cream surfaces with beige borders (~25% surface ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.id}
                variant="cream"
                interactive
                onClick={() => onNavigate(pillar.view)}
                className="p-7 flex flex-col justify-between group gsap-pillar-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-canvas border border-beige-border flex items-center justify-center text-rich-black group-hover:bg-rich-black group-hover:text-canvas transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono font-medium text-rich-black/50 group-hover:text-rich-black transition-colors">
                      <span>{pillar.category}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-rich-black mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-rich-black/75 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-beige-border/60 flex items-center justify-between text-xs font-mono text-rich-black/60">
                  <span>{pillar.meta}</span>
                  <span className="font-semibold text-rich-black group-hover:underline">
                    Explore →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
