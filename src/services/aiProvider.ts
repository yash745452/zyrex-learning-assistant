export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMResponseStream {
  stream: AsyncIterable<string>;
  abort: () => void;
}

export interface ILLMProvider {
  id: string;
  name: string;
  isOnDevice: boolean;
  isReady: () => Promise<boolean>;
  generateText: (messages: LLMMessage[]) => Promise<string>;
  streamText: (messages: LLMMessage[]) => Promise<LLMResponseStream>;
}

/**
 * Pedagogical Stub Provider for Phase 1 & local verification.
 * Provides deterministic engineering concept explanations without requiring API keys or heavy local models.
 */
export class StubEngineeringProvider implements ILLMProvider {
  id = 'stub-educational-provider';
  name = 'MindPilot Pedagogical Engine (Stub)';
  isOnDevice = true;

  async isReady(): Promise<boolean> {
    return true;
  }

  async generateText(messages: LLMMessage[]): Promise<string> {
    const userMsg = messages[messages.length - 1]?.content.toLowerCase() || '';

    if (userMsg.includes('paging') || userMsg.includes('virtual memory')) {
      return `### Concept: Paging in Virtual Memory\n\nIn operating systems, **paging** is a memory management scheme by which a computer stores and retrieves data from secondary storage for use in main memory.\n\n1. **Logical Address Space:** Divided into fixed-size chunks called **Pages**.\n2. **Physical Address Space:** Divided into fixed-size chunks called **Frames** (same size as pages).\n3. **Page Table:** Hardware/OS structure mapping logical pages to physical frames.\n\n**Address Translation:**\nLogical Address = \`[Page Number (p) | Page Offset (d)]\`\nPhysical Address = \`[Frame Number (f) | Page Offset (d)]\`\n\n*Key Takeaway:* Paging eliminates external fragmentation, though internal fragmentation can occur on the final page frame.`;
    }

    if (userMsg.includes('dijkstra') || userMsg.includes('shortest path')) {
      return `### Dijkstra's Shortest Path Algorithm\n\n**Paradigm:** Greedy Algorithm.\n**Time Complexity:** $O((V + E) \\log V)$ using a Min-Priority Queue (Binary Heap).\n\n**Invariant:** At every step, the algorithm selects the vertex $u$ with the minimum tentative distance that has not yet been processed, and relaxes all outgoing edges $(u, v)$.\n\n\`\`\`cpp\n// Relaxation step:\nif (dist[u] + weight(u, v) < dist[v]) {\n    dist[v] = dist[u] + weight(u, v);\n    pq.push({dist[v], v});\n}\n\`\`\`\n\n*Constraint Warning:* Dijkstra fails if any edge weight is negative (use Bellman-Ford instead).`;
    }

    return `### Engineering Tutor Guidance\n\nI understand your question regarding "${messages[messages.length - 1]?.content}".\n\nIn technical problem solving, we deconstruct this into:\n1. **Theoretical Foundations:** What are the mathematical or architectural invariants?\n2. **Algorithmic/System Trade-offs:** What is the space/time complexity or memory footprint?\n3. **Practical Implementation:** How does this compile or execute on real silicon?\n\nWhich specific sub-topic would you like to explore deeper?`;
  }

  async streamText(messages: LLMMessage[]): Promise<LLMResponseStream> {
    const fullText = await this.generateText(messages);
    const words = fullText.split(' ');
    let cancelled = false;

    async function* generator() {
      for (const word of words) {
        if (cancelled) break;
        await new Promise((res) => setTimeout(res, 35));
        yield word + ' ';
      }
    }

    return {
      stream: generator(),
      abort: () => {
        cancelled = true;
      },
    };
  }
}

export const activeLLMProvider: ILLMProvider = new StubEngineeringProvider();
