import React, { useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ActiveView } from '../../types';
import { ArrowRight, Sparkles, BookOpen, Lock, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface HeroSectionProps {
  onNavigate: (view: ActiveView) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.gsap-hero-el', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Badge */}
        <div className="flex items-center gap-2 mb-6 gsap-hero-el">
          <Badge variant="cream" className="text-xs font-mono py-1.5 px-3">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-rich-black" />
            BTech Engineering Learning Assistant • Team Zyrex
          </Badge>
          <span className="hidden sm:inline-block text-xs text-rich-black/50 font-medium">
            PS-06 On-Device Personalized Learning
          </span>
        </div>

        {/* Massive Bold Black Typography */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-rich-black tracking-tight leading-[1.08] gsap-hero-el">
            Master Complex Concepts. <br />
            <span className="text-rich-black/85">
              Grounded In Your Syllabus.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-rich-black/75 max-w-2xl leading-relaxed font-normal gsap-hero-el">
            MindPilot deconstructs dense engineering textbooks and lecture slides into
            rigorous step-by-step explanations, adaptive exam roadmaps, and targeted practice
            — engineered specifically for undergraduate engineering students.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4 gsap-hero-el">
            <Button
              size="lg"
              variant="primary"
              onClick={() => onNavigate('tutor')}
              className="group"
            >
              Start Learning with AI Tutor
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('roadmaps')}
            >
              Explore Semester Roadmaps
            </Button>
          </div>
        </div>

        {/* Engineering Value Proposition Strip (~25% Cream Surface) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-beige-border">
          <div className="p-5 rounded-card bg-cream border border-beige-border space-y-2 gsap-hero-el">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-rich-black">
              <Lock className="w-4 h-4 text-rich-black/70" />
              <span>ON-DEVICE PRIVACY</span>
            </div>
            <p className="text-xs text-rich-black/75 leading-relaxed">
              Your lecture notes, study materials, and questions stay on your device with local architecture.
            </p>
          </div>

          <div className="p-5 rounded-card bg-cream border border-beige-border space-y-2 gsap-hero-el">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-rich-black">
              <BookOpen className="w-4 h-4 text-rich-black/70" />
              <span>LECTURE GROUNDED</span>
            </div>
            <p className="text-xs text-rich-black/75 leading-relaxed">
              Synthesizes answers directly from uploaded course slides, PDFs, and university syllabi.
            </p>
          </div>

          <div className="p-5 rounded-card bg-cream border border-beige-border space-y-2 gsap-hero-el">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-rich-black">
              <Terminal className="w-4 h-4 text-rich-black/70" />
              <span>SOCRATIC DERIVATION</span>
            </div>
            <p className="text-xs text-rich-black/75 leading-relaxed">
              Mathematical formulas, architectural trade-offs, and executable code snippets explained in depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
