import React from 'react';
import { ShieldCheck, Cpu, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-canvas border-t border-beige-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Brand & Team */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rich-black text-canvas flex items-center justify-center font-bold text-sm">
                M
              </div>
              <span className="font-extrabold text-lg text-rich-black">MindPilot</span>
            </div>
            <p className="text-sm text-rich-black/70 max-w-md leading-relaxed">
              An AI-powered on-device personalized learning assistant built for BTech students.
              Engineered by Team Zyrex for Code Carnival 3.0 (PS-06).
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-beige-border text-xs font-mono text-rich-black">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>System Operational • On-Device Architecture</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Learning Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rich-black/50">
              Learning Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-rich-black/80 font-medium">
              <li>Socratic Concept Tutor</li>
              <li>Lecture Document Assistant</li>
              <li>Personalized Semester Roadmaps</li>
              <li>Adaptive Practice & Quizzes</li>
              <li>Local Mastery Tracking</li>
            </ul>
          </div>

          {/* Column 3: Engineering & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rich-black/50">
              Engineering Governance
            </h4>
            <ul className="space-y-2 text-sm text-rich-black/80 font-medium">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rich-black/60" />
                <span>Zero Secret Leakage</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rich-black/60" />
                <span>Modular LLM Provider</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-rich-black/60" />
                <span>Single Canonical Codebase</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-beige-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-rich-black/60 gap-4">
          <p>© 2026 Team Zyrex. Code Carnival 3.0 — PS-06. All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>DESIGN_SYSTEM.md</span>
            <span>PRD.md</span>
            <span>ARCHITECTURE.md</span>
            <span>SECURITY.md</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
