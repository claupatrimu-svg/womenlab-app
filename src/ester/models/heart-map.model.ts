export type KnowledgeTagMatch = {
  id?: string;
  name: string;
  confidence: number;
};

export type ConceptMatch = {
  id: string;
  nombre: string;
  confidence: number;

  womenlabDefinition?: string;
  whyItMatters?: string;
  esterGuidance?: string;
  womenlabQuote?: string;
};

export type EmotionMatch = {
  name: string;
  confidence: number;
};

export type NeedMatch = {
  name: string;
  confidence: number;
};

export type ResourceMatch = {
  id: string;
  title: string;

  author?: string;
  sourceType?: string;

  reflection?: string;

  importance?: number;
};

export interface HeartMap {

  /**
   * Mensaje original escrito por la usuaria.
   */
  originalMessage: string;

  /**
   * Texto normalizado.
   */
  normalizedMessage: string;

  /**
   * Palabras detectadas.
   */
  words: string[];

  /**
   * Idioma detectado.
   */
  language: string;

  /**
   * Momento de la conversación.
   */
  createdAt: Date;

  /**
   * Estado del corazón identificado.
   */
  emotions: EmotionMatch[];

  /**
   * Necesidades detectadas.
   */
  needs: NeedMatch[];

  /**
   * Knowledge Tags encontrados.
   */
  knowledgeTags: KnowledgeTagMatch[];

  /**
   * Conceptos del WKM.
   */
  concepts: ConceptMatch[];

  /**
   * Recursos recuperados.
   */
  resources: ResourceMatch[];

  /**
   * Nivel de comprensión alcanzado
   * por Ester.
   */
  confidence: number;

  /**
   * Observaciones internas del motor.
   * Nunca se muestran a la usuaria.
   */
  internalNotes: string[];
}