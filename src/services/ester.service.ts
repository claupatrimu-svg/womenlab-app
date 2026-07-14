import { supabase } from "@/lib/supabase";

class EsterService {
  async testConnection() {
    const { data, error } = await supabase
      .from("categorias")
      .select("*")
      .limit(5);

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  }
}

export default new EsterService();