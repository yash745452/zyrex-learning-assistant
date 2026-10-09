import React, { useState } from 'react';
import { ActiveView } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/landing/HeroSection';
import { PillarsSection } from './components/landing/PillarsSection';
import { InteractiveTutorPreview } from './components/landing/InteractiveTutorPreview';
import { RoadmapPreview } from './components/landing/RoadmapPreview';
import { TutorView } from './components/views/TutorView';
import { RoadmapsView } from './components/views/RoadmapsView';
import { MaterialsView } from './components/views/MaterialsView';
import { QuizzesView } from './components/views/QuizzesView';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('landing');

  const handleNavigate = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas text-rich-black flex flex-col font-sans selection:bg-beige selection:text-rich-black">
      {/* Persistent Navigation Shell */}
      <Navbar activeView={activeView} onNavigate={handleNavigate} />

      {/* Main View Router — key forces re-mount for fade-in animation */}
      <main className="flex-1">
        <div key={activeView} className="animate-fade-in-up">
          {activeView === 'landing' && (
            <>
              <HeroSection onNavigate={handleNavigate} />
              <PillarsSection onNavigate={handleNavigate} />
              <InteractiveTutorPreview />
              <RoadmapPreview onNavigate={handleNavigate} />
            </>
          )}

          {activeView === 'tutor' && <TutorView />}
          {activeView === 'roadmaps' && <RoadmapsView />}
          {activeView === 'materials' && <MaterialsView />}
          {activeView === 'quizzes' && <QuizzesView />}
        </div>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default App;
