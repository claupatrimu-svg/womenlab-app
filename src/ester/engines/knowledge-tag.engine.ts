export type KnowledgeTagMatch = {
  name: string;
  confidence: number;
};

class KnowledgeTagEngine {

  detect(text: string): KnowledgeTagMatch[] {

    const message = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const matches: KnowledgeTagMatch[] = [];

    // ==========
    // AUTOCUIDADO
    // ==========
    if (
      message.includes("agotada") ||
      message.includes("cansada") ||
      message.includes("sin energia") ||
      message.includes("no puedo mas") ||
      message.includes("descansar")
    ) {

      matches.push({
        name: "Autocuidado",
        confidence: 0.95,
      });

    }

    // ==========
    // ENERGÍA
    // ==========
    if (
      message.includes("energia") ||
      message.includes("agotada") ||
      message.includes("fatiga")
    ) {

      matches.push({
        name: "Energía",
        confidence: 0.90,
      });

    }

    // ==========
    // GRATITUD
    // ==========
    if (
      message.includes("gracias") ||
      message.includes("agradecida")
    ) {

      matches.push({
        name: "Gratitud",
        confidence: 0.90,
      });

    }

    return matches.sort(
      (a, b) => b.confidence - a.confidence
    );

  }

}

export default new KnowledgeTagEngine();