type Concept = {
  id: string;
  nombre: string;
  importance_level?: number;
  womenlab_definition?: string;
  ester_guidance?: string;
  womenlab_quote?: string;
};

class ReasoningEngine {

  chooseBestConcept(concepts: Concept[]): Concept | null {

    if (concepts.length === 0) {
      return null;
    }

    const ordered = [...concepts].sort((a, b) => {
      return (b.importance_level ?? 0) - (a.importance_level ?? 0);
    });

    return ordered[0];

  }

}

export default new ReasoningEngine();