import { supabase } from "@/lib/supabase";

export type KnowledgeSearch = {
  categoryId?: string;
  conceptId?: string;
  heartTopicId?: string;
  limit?: number;
};

class KnowledgeEngine {

  async search(search: KnowledgeSearch) {

    let query = supabase
      .from("resources")
      .select(`
        *,
        categorias (
          nombre
        ),
        tipos_fuente (
          nombre
        )
      `);

    if (search.categoryId) {
      query = query.eq("category_id", search.categoryId);
    }

    if (search.limit) {
      query = query.limit(search.limit);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  }

}

export default new KnowledgeEngine();