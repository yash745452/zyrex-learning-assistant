import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ActiveView } from '../../types';
import { Compass, BookOpen, MessageSquare, CheckSquare, Layers, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
}

const navLinks: { view: ActiveView; label: string; icon: React.ElementType }[] = [
  { view: 'landing', label: 'Overview', icon: Layers },
  { view: 'tutor', label: 'AI Tutor', icon: MessageSquare },
  { view: 'roadmaps', label: 'Roadmaps', icon: Compass },
  { view: 'materials', label: 'Study Notes', icon: BookOpen },
  { view: 'quizzes', label: 'Quizzes', icon: CheckSquare },
];

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mobileOpen, closeMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMobileNav = (view: ActiveView) => {
    onNavigate(view);
    closeMobile();
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Meta */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => onNavigate('landing')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate('landing'); }}
            aria-label="Go to MindPilot home"
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
          <nav className="hidden md:flex items-center gap-1 bg-cream/60 p-1.5 rounded-full border border-beige-border" aria-label="Main navigation">
            {navLinks.map(({ view, label, icon: Icon }) => (
              <button
                key={view}
                onClick={() => onNavigate(view)}
                aria-current={activeView === view ? 'page' : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeView === view
                    ? 'bg-canvas text-rich-black shadow-xs'
                    : 'text-rich-black/70 hover:text-rich-black hover:bg-canvas/40'
                }`}
              >
                {view !== 'landing' && <Icon className="w-3.5 h-3.5" />}
                {label}
              </button>
            ))}
          </nav>

          {/* Primary CTA + Mobile Toggle */}
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
              className="hidden md:inline-flex"
              onClick={() => onNavigate('tutor')}
            >
              Launch Tutor
            </Button>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden w-10 h-10 rounded-xl bg-cream border border-beige-border flex items-center justify-center text-rich-black transition-colors hover:bg-cream-pale"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-rich-black/20 backdrop-blur-sm md:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />

          {/* Slide-in Panel */}
          <div
            ref={panelRef}
            className="fixed top-0 right-0 z-50 w-72 h-full bg-canvas border-l border-beige-border shadow-2xl md:hidden flex flex-col animate-slide-in"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-5 h-20 border-b border-beige-border">
              <span className="font-extrabold text-lg text-rich-black">Navigate</span>
              <button
                className="w-9 h-9 rounded-lg bg-cream border border-beige-border flex items-center justify-center text-rich-black"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto" aria-label="Mobile navigation">
              {navLinks.map(({ view, label, icon: Icon }) => (
                <button
                  key={view}
                  onClick={() => handleMobileNav(view)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeView === view
                      ? 'bg-rich-black text-canvas shadow-sm'
                      : 'text-rich-black/80 hover:bg-cream'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  {label}
                </button>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-beige-border space-y-2">
              <Button
                size="md"
                variant="primary"
                className="w-full"
                onClick={() => handleMobileNav('tutor')}
              >
                Launch Tutor
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
