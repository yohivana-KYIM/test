import DataService from "./DataService";

const PublicationService = {
  // Récupère toutes les publications
  async getAllPublications() {
    try {
      const response = await DataService.get("/api/publications");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des publications:", error);
      throw error;
    }
  },

  // Récupère une publication par son ID
  async getPublicationById(id) {
    try {
      const response = await DataService.get(`/api/publications/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de la publication avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Crée une nouvelle publication
  async createPublication(formData) {
    try {
      const response = await DataService.post("/api/publications", formData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la publication:", error);
      throw error;
    }
  },

  // Met à jour une publication existante
  async updatePublication(id, formData) {
    try {
      const response = await DataService.put(
        `/api/publications/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de la publication avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Supprime une publication
  async deletePublication(id) {
    try {
      const response = await DataService.delete(`/api/publications/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de la publication avec ID ${id}:`,
        error
      );
      throw error;
    }
  }
};

export default PublicationService;
