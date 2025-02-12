import DataService from "./DataService";

const SponsorService = {
  // Récupère tous les sponsors
  async getAllSponsors() {
    try {
      const response = await DataService.get("/api/sponsors");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des sponsors:", error);
      throw error;
    }
  },

  // Récupère un sponsor par son ID
  async getSponsorById(id) {
    try {
      const response = await DataService.get(`/api/sponsors/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération du sponsor avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Crée un nouveau sponsor
  async createSponsor(formData) {
    try {
      const response = await DataService.post("/api/sponsors", formData, {
      
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du sponsor:", error);
      throw error.response?.data || error;
    }
  },
  // Met à jour un sponsor
  async updateSponsor(id, formData) {
    try {
      const response = await DataService.put(`/api/sponsors/${id}`, formData);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour du sponsor avec l'id ${id}`,
        error
      );
      throw error.response?.data || error;
    }
  },
  // Supprime un sponsor
  async deleteSponsor(id) {
    try {
      const response = await DataService.delete(`/api/sponsors/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression du sponsor avec l'id ${id}`,
        error
      );
      throw error;
    }
  }
};

export default SponsorService;
