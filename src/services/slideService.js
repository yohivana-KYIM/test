import DataService from "./DataService";

const SlideService = {
  // Récupère tous les slides
  async getAllSlides() {
    try {
      const response = await DataService.get("/api/slides");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des slides:", error);
      throw error;
    }
  },

  // Récupère un slide par son ID
  async getSlideById(id) {
    try {
      const response = await DataService.get(`/api/slides/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération du slide avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Crée un nouveau slide
  async createSlide(formData) {
    try {
      const response = await DataService.post("/api/slides", formData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du slide:", error);
      throw error;
    }
  },

  // Met à jour un slide existant
  async updateSlide(id, formData) {
    try {
      const response = await DataService.put(`/api/slides/${id}`, formData);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour du slide avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Supprime un slide
  async deleteSlide(id) {
    try {
      const response = await DataService.delete(`/api/slides/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression du slide avec ID ${id}:`,
        error
      );
      throw error;
    }
  }
};

export default SlideService;
