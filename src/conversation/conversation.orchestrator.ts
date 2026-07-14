import ListenerEngine from "@/ester/engines/listener.engine";
import KnowledgeTagEngine from "@/ester/engines/knowledge-tag.engine";
import KnowledgeRepository from "@/ester/repositories/knowledge.repository";
import ReasoningEngine from "../ester/engines/reasoning.engine";
import MessageBuilder from "@/ester/builders/message.builder";

class ConversationOrchestrator {
    

  async send(message: string): Promise<string> {

    await KnowledgeRepository.debugKnowledgeTag("Autocuidado");

    // 1. Escuchar
    const listened = ListenerEngine.listen(message);

    // 2. Detectar Knowledge Tags
    const tags = KnowledgeTagEngine.detect(
      listened.normalizedText
    );

    if (tags.length === 0) {
      return `
Gracias por confiar en mí.

Todavía estoy aprendiendo a comprender mejor algunas situaciones.

¿Podrías contarme un poco más sobre lo que estás viviendo?
`;
    }

    // 3. Tomamos el Knowledge Tag principal
    const mainTag = tags[0];

    // 4. Buscar recursos relacionados
    const resources =
      await KnowledgeRepository.findResourcesByKnowledgeTag(
        mainTag.name
      );

    if (resources.length === 0) {

      return `
Encontré el tema "${mainTag.name}", pero todavía no tengo recursos asociados para acompañarte.
`;

    }

    // 5. Primer recurso encontrado
   const resource = resources[0];

    // 6. Obtener conceptos del recurso
    const concepts =
      await KnowledgeRepository.getConceptsByResource(
        resource.id
      );

    if (concepts.length === 0) {

      return `
Encontré el recurso "${resource.title}", pero todavía no tiene conceptos asociados.
`;

    }

    // 7. Elegir el concepto más importante
    const bestConcept =
      ReasoningEngine.chooseBestConcept(concepts);

    if (!bestConcept) {

      return `
Todavía estoy organizando este conocimiento para poder acompañarte mejor.
`;

    }

    // 8. Construir la respuesta
    return MessageBuilder.build(
      bestConcept,
      resource
    );

  }

}

export default new ConversationOrchestrator();