import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Subject } from '../../types';

export const RoadmapsView: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('Sem 4');

  const subjects: Subject[] = [
    {
      id: 'cs401',
      code: 'CS-401',
      title: 'Operating Systems & System Programming',
      semester: 'Sem 4',
      category: 'Systems',
      topicsCount: 28,
      description: 'Processes, concurrency, virtual memory architectures, file systems, and IPC.',
    },
    {
      id: 'cs402',
      code: 'CS-402',
      title: 'Design and Analysis of Algorithms',
      semester: 'Sem 4',
      category: 'Core CS',
      topicsCount: 32,
      description: 'Divide and conquer, greedy methods, dynamic programming, graph algorithms, NP-completeness.',
    },
    {
      id: 'cs403',
      code: 'CS-403',
      title: 'Database Management Systems',
      semester: 'Sem 4',
      category: 'Core CS',
      topicsCount: 24,
      description: 'ER modeling, relational algebra, SQL, normalization (1NF-BCNF), transactions, and indexing.',
    },
    {
      id: 'cs404',
      code: 'CS-404',
      title: 'Computer Organization & Architecture',
      semester: 'Sem 4',
      category: 'Hardware',
      topicsCount: 26,
      description: 'Instruction sets, CPU pipelining, cache memory hierarchies, and hazards.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <Badge variant="cream" className="font-mono text-xs mb-2">
            SYLLABUS BLUEPRINT
          </Badge>
          <h1 className="text-3xl font-extrabold text-rich-black tracking-tight">
            Curriculum Roadmaps (BTech CSE)
          </h1>
          <p className="text-sm text-rich-black/70 mt-1">
            Structured week-by-week learning sequences aligned with university engineering criteria.
          </p>
        </div>

        {/* Semester Filter Tabs */}
        <div className="flex gap-1.5 p-1 bg-cream rounded-btn border border-beige-border">
          {['Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold font-mono transition-all ${
                selectedSemester === sem
                  ? 'bg-rich-black text-canvas'
                  : 'text-rich-black/70 hover:text-rich-black'
              }`}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((sub) => (
          <Card key={sub.id} variant="cream" className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-rich-black/70 bg-canvas px-2.5 py-1 rounded border border-beige-border">
                  {sub.code}
                </span>
                <Badge variant="beige" className="text-xs font-mono">
                  {sub.category}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-rich-black mb-2">{sub.title}</h3>
              <p className="text-xs text-rich-black/75 leading-relaxed mb-6">
                {sub.description}
              </p>
            </div>

            <div className="pt-4 border-t border-beige-border flex items-center justify-between">
              <span className="text-xs font-mono text-rich-black/60">
                {sub.topicsCount} Key Concepts In Syllabus
              </span>
              <Button size="sm" variant="primary">
                View Roadmap
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
