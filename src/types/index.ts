export type ActiveView =
  | 'landing'
  | 'tutor'
  | 'roadmaps'
  | 'materials'
  | 'quizzes'
  | 'progress';

export interface Subject {
  id: string;
  code: string;
  title: string;
  semester: string;
  category: 'Core CS' | 'Mathematics' | 'Systems' | 'Hardware';
  topicsCount: number;
  description: string;
}

export interface RoadmapNode {
  id: string;
  week: number;
  title: string;
  concepts: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  estimatedHours: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subject: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  conceptTag: string;
}

export interface TutorMessage {
  id: string;
  sender: 'student' | 'tutor';
  timestamp: string;
  content: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  references?: string[];
}
