import DataService from "./DataService";

const StatService = {
  // Récupérer toutes les statistiques
  async getAllStats() {
    try {
      const response = await DataService.get("/api/stats"); 
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des stats :", error);
      throw error; 
    }
  },

  // Récupérer une stat par son ID
  async getStatById(id) {
    try {
      const response = await DataService.get(`/api/stats/${id}`); 
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de la stat avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Créer une nouvelle stat
  async createStat(data) {
    try {
      const response = await DataService.post("/api/stats", data); 
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la stat :", error);
      throw error;
    }
  },

  // Mettre à jour une stat existante
  async updateStat(id, data) {
    try {
      const response = await DataService.put(`/api/stats/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de la stat avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Supprimer une stat
  async deleteStat(id) {
    try {
      const response = await DataService.delete(`/api/stats/${id}`); 
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de la stat avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  }
};

export default StatService;