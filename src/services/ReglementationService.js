import DataService from "./DataService"; 

const ReglementationService = {
  // Récupère toutes les réglementations
  async getAllReglementations() {
    try {
      const response = await DataService.get("/api/reglementations");
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des réglementations:",
        error
      );
      throw error;
    }
  },

  // Récupère une réglementation par son ID
  async getReglementationById(id) {
    try {
      const response = await DataService.get(`/api/reglementations/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de la réglementation avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Crée une nouvelle réglementation
  async createReglementation(formData) {
    try {
      const response = await DataService.post("/api/reglementations", formData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la réglementation:", error);
      throw error;
    }
  },

  // Met à jour une réglementation existante
  async updateReglementation(id, formData) {
    try {
      const response = await DataService.put(
        `/api/reglementations/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de la réglementation avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Supprime une réglementation
  async deleteReglementation(id) {
    try {
      const response = await DataService.delete(`/api/reglementations/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de la réglementation avec ID ${id}:`,
        error
      );
      throw error;
    }
  }
};

export default ReglementationService;
