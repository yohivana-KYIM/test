import DataService from "./DataService";

const ActualiteService = {
  // Récupérer toutes les actualités
  async getAllActualites() {
    try {
      const response = await DataService.get("/api/actualites");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des actualités :", error);
      throw error.response?.data || error.message;
    }
  },

  // Récupérer une actualité par son slug

   
  async getActualiteBySlug(slug) {
    try {
     const response = await DataService.get(`/api/actualites/${slug}`);
      return response.data;
    } catch (error) {
       console.error(`Erreur lors de la récupération de l'actualité (${slug}) :`, error);
      throw error.response?.data || error.message;
    }
  },


  
  // Créer une nouvelle actualité
  async createActualite(formData) {
    try {
      const response = await DataService.post("/api/actualites", formData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de l'actualité :", error);
      throw error.response?.data || error.message;
    }
  },

  // Mettre à jour une actualité
  async updateActualite(id, formData) {
    try {
      const response = await DataService.put(`/api/actualites/${id}`, formData);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de l'actualité (${id}) :`,
        error
      );
      throw error.response?.data || error.message;
    }
  },

  // Supprimer une actualité
  async deleteActualite(id) {
    try {
      const response = await DataService.delete(`/api/actualites/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de l'actualité (${id}) :`,
        error
      );
      throw error.response?.data || error.message;
    }
  }
};

export default ActualiteService;
