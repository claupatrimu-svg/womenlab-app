export type ListenerOutput = {
  originalText: string;
  normalizedText: string;
  words: string[];
  language: string;
  createdAt: Date;
};

class ListenerEngine {

  listen(message: string): ListenerOutput {

    const normalized = message
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return {
      originalText: message,

      normalizedText: normalized,

      words: normalized
        .split(/\s+/)
        .filter(Boolean),

      language: "es",

      createdAt: new Date(),
    };
  }

}

export default new ListenerEngine();