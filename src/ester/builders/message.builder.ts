type Concept = {
  nombre: string;
  womenlab_definition?: string;
  ester_guidance?: string;
  womenlab_quote?: string;
};

type Resource = {
  title: string;
};

class MessageBuilder {

  build(
    concept: Concept,
    resource: Resource
  ): string {

    let message = "";

    message += "Gracias por confiar en mí.\n\n";

    message += `Mientras leía tus palabras pensé en un concepto que puede acompañarte hoy:\n\n`;

    message += `🌼 ${concept.nombre}\n\n`;

    if (concept.womenlab_definition) {

      message += `${concept.womenlab_definition}\n\n`;

    }

    if (concept.ester_guidance) {

      message += `${concept.ester_guidance}\n\n`;

    }

    if (concept.womenlab_quote) {

      message += `“${concept.womenlab_quote}”\n\n`;

    }

    message += `📚 Inspirado en: ${resource.title}\n\n`;

    message += "¿Qué parte de esto resuena más contigo hoy?";

    return message;

  }

}

export default new MessageBuilder();