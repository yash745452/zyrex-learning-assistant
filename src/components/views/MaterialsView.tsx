import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { UploadCloud, FileText, CheckCircle2, Lock, Search } from 'lucide-react';

export const MaterialsView: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState('doc1');

  const sampleDocuments = [
    {
      id: 'doc1',
      title: 'OS_Unit3_VirtualMemory_Paging.pdf',
      subject: 'Operating Systems',
      pages: 42,
      size: '3.4 MB',
      status: 'Indexed Locally',
    },
    {
      id: 'doc2',
      title: 'DBMS_Normalization_1NF_to_BCNF_Notes.pdf',
      subject: 'Database Systems',
      pages: 28,
      size: '2.1 MB',
      status: 'Indexed Locally',
    },
    {
      id: 'doc3',
      title: 'Algorithms_DynamicProgramming_Handout.pdf',
      subject: 'Design & Analysis of Algorithms',
      pages: 35,
      size: '2.8 MB',
      status: 'Indexed Locally',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Badge variant="cream" className="font-mono text-xs mb-2">
          DOCUMENT ENGINE
        </Badge>
        <h1 className="text-3xl font-extrabold text-rich-black tracking-tight">
          Study-Material Assistant
        </h1>
        <p className="text-sm text-rich-black/70 mt-1 max-w-2xl">
          Ingest professor lecture notes, university syllabi, and textbook chapters.
          All parsing occurs on your local device for maximum privacy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Zone */}
        <div className="lg:col-span-1 space-y-6">
          <Card variant="cream" className="p-6 text-center border-dashed border-2 border-beige-border">
            <div className="w-12 h-12 rounded-full bg-canvas border border-beige-border flex items-center justify-center mx-auto mb-3 text-rich-black">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-rich-black mb-1">
              Upload Course Materials
            </h3>
            <p className="text-xs text-rich-black/70 mb-4">
              Drop PDF, Markdown, or lecture TXT files here (Max 25MB).
            </p>
            <Button size="sm" variant="primary" className="w-full">
              Select Files
            </Button>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-mono text-rich-black/60">
              <Lock className="w-3 h-3" />
              <span>Processed 100% on-device</span>
            </div>
          </Card>

          {/* Ingested Documents List */}
          <Card variant="cream" className="p-5">
            <h4 className="text-xs font-mono font-bold uppercase text-rich-black/60 mb-3">
              Ingested Documents ({sampleDocuments.length})
            </h4>
            <div className="space-y-2.5">
              {sampleDocuments.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc.id)}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    selectedDoc === doc.id
                      ? 'bg-canvas border-rich-black shadow-xs'
                      : 'bg-canvas/50 border-beige-border hover:bg-canvas'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-rich-black/70 mt-0.5 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-rich-black truncate">{doc.title}</p>
                      <p className="text-[11px] text-rich-black/60 mt-0.5">
                        {doc.subject} • {doc.pages} Pages
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Document In-Context Query Assistant */}
        <div className="lg:col-span-2">
          <Card variant="cream" className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-beige-border mb-4">
                <div>
                  <h3 className="text-base font-bold text-rich-black">
                    Document Grounded Query
                  </h3>
                  <p className="text-xs font-mono text-rich-black/60 mt-0.5">
                    Active Context: OS_Unit3_VirtualMemory_Paging.pdf (Slide 14–22)
                  </p>
                </div>
                <Badge variant="beige" className="text-xs font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  RAG Grounding Active
                </Badge>
              </div>

              {/* Sample Grounded Extraction */}
              <div className="bg-canvas rounded-xl p-5 border border-beige-border space-y-3 text-xs leading-relaxed text-rich-black/85">
                <p className="font-bold text-rich-black font-sans text-sm">
                  Slide 14 Summary: Multi-Level Paging Architecture
                </p>
                <p>
                  According to slide 14 of your lecture deck:
                </p>
                <div className="p-3 bg-cream rounded border border-beige-border font-mono text-[11px]">
                  "A 32-bit logical address with 4KB page size uses a 2-level page table scheme:
                  10 bits for Page Directory index, 10 bits for Page Table entry, and 12 bits for Page Offset."
                </div>
                <p>
                  The tutor notes: This architecture avoids keeping the entire 4MB continuous page table in main memory at all times.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-beige-border mt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question grounded in this uploaded PDF..."
                  className="flex-1 bg-canvas border border-beige-border rounded-btn px-4 py-2.5 text-sm text-rich-black focus:outline-none focus:ring-2 focus:ring-rich-black"
                />
                <Button variant="primary">
                  <Search className="w-4 h-4 mr-1.5" />
                  Search & Explain
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
