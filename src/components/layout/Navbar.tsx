import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ActiveView } from '../../types';
import { Compass, BookOpen, MessageSquare, CheckSquare, Layers } from 'lucide-react';

interface NavbarProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-beige-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Meta */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => onNavigate('landing')}
        >
          <div className="w-10 h-10 rounded-xl bg-rich-black text-canvas flex items-center justify-center font-bold text-lg tracking-tight shadow-sm">
            M
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-rich-black">
                MindPilot
              </span>
              <Badge variant="cream" className="text-[10px] uppercase font-mono tracking-wider">
                PS-06
              </Badge>
            </div>
            <p className="text-[11px] text-rich-black/60 font-medium">
              Zyrex • Personalized Learning Assistant
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-cream/60 p-1.5 rounded-full border border-beige-border">
          <button
            onClick={() => onNavigate('landing')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeView === 'landing'
                ? 'bg-canvas text-rich-black shadow-xs'
                : 'text-rich-black/70 hover:text-rich-black hover:bg-canvas/40'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('tutor')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'tutor'
                ? 'bg-canvas text-rich-black shadow-xs'
                : 'text-rich-black/70 hover:text-rich-black hover:bg-canvas/40'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            AI Tutor
          </button>
          <button
            onClick={() => onNavigate('roadmaps')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'roadmaps'
                ? 'bg-canvas text-rich-black shadow-xs'
                : 'text-rich-black/70 hover:text-rich-black hover:bg-canvas/40'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Roadmaps
          </button>
          <button
            onClick={() => onNavigate('materials')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'materials'
                ? 'bg-canvas text-rich-black shadow-xs'
                : 'text-rich-black/70 hover:text-rich-black hover:bg-canvas/40'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Study Notes
          </button>
          <button
            onClick={() => onNavigate('quizzes')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'quizzes'
                ? 'bg-canvas text-rich-black shadow-xs'
                : 'text-rich-black/70 hover:text-rich-black hover:bg-canvas/40'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            Quizzes
          </button>
        </nav>

        {/* Primary CTA */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            className="hidden sm:inline-flex"
            onClick={() => onNavigate('roadmaps')}
          >
            <Layers className="w-3.5 h-3.5 mr-1.5" />
            Syllabus Explorer
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => onNavigate('tutor')}
          >
            Launch Tutor
          </Button>
        </div>
      </div>
    </header>
  );
};
