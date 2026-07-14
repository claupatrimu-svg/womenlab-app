import { supabase } from "@/lib/supabase";

class KnowledgeRepository {

  /**
   * Busca recursos relacionados con un Knowledge Tag.
   */
  async findResourcesByKnowledgeTag(tagName: string) {

    // 1. Buscar el Knowledge Tag
    const { data: tags, error: tagError } = await supabase
  .from("knowledge_tags")
  .select("id")
  .eq("name", tagName);

if (tagError) {
  console.error(tagError);
  return [];
}

if (!tags || tags.length === 0) {
  return [];
}

const tag = tags[0];

    if (tagError || !tag) {
      console.log("TAG ERROR:", JSON.stringify(tagError, null, 2));
      return [];
    }

    // 2. Buscar relaciones recurso-tag
    const { data: relations, error: relationError } = await supabase
      .from("resource_knowledge_tags")
      .select("resource_id")
      .eq("knowledge_tag_id", tag.id);

    if (relationError || !relations) {
      console.log("RELATION ERROR:", JSON.stringify(relationError, null, 2));
      return [];
    }

    const ids = relations.map(r => r.resource_id);

    if (ids.length === 0) {
      return [];
    }

    // 3. Traer los recursos
    const { data: resources, error: resourceError } = await supabase
      .from("resources")
      .select(`
        id,
        title,
        summary,
        reflection_question,
        featured
      `)
      .in("id", ids);

    if (resourceError) {
      console.log("RESOURCE ERROR:", JSON.stringify(resourceError, null, 2));
      return [];
    }

    return resources ?? [];
  }

  /**
   * Conceptos asociados a un recurso.
   */
  async getConceptsByResource(resourceId: string) {

    const { data, error } = await supabase

      .from("resource_concepts")

      .select(`
        conceptos(
          id,
          nombre,
          importance_level,
          womenlab_definition,
          why_it_matters,
          ester_guidance,
          womenlab_quote
        )
      `)

      .eq("resource_id", resourceId);

    if (error) {
      console.error(error);
      return [];
    }

    return data
      .map((item: any) => item.conceptos)
      .filter(Boolean);

  }
async debugKnowledgeTag(tagName: string) {

  console.log("========== WKM DEBUG ==========");

  const resources =
    await this.findResourcesByKnowledgeTag(tagName);

  console.log("RESOURCES:", resources);

  if (resources.length === 0) {
    return;
  }

  const concepts =
    await this.getConceptsByResource(resources[0].id);

  console.log("CONCEPTS:", concepts);

}
}

export default new KnowledgeRepository();