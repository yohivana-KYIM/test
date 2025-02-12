import DataService from "./DataService";

const DomaineService = {
  // Récupérer tous les domaines
  async getAllDomaines() {
    try {
      const response = await DataService.get("/api/domaines"); // Adaptez l'URL selon votre API
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des domaines :", error);
      throw error; // Propagez l'erreur pour que le composant puisse la gérer
    }
  },

  // Récupérer un domaine par son ID
  async getDomaineById(id) {
    try {
      const response = await DataService.get(`/api/domaines/${id}`); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération du domaine avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Créer un nouveau domaine
  async createDomaine(data) {
    try {
      const response = await DataService.post("/api/domaines", data); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du domaine :", error);
      throw error;
    }
  },

  // Mettre à jour un domaine existant
  async updateDomaine(id, data) {
    try {
      const response = await DataService.put(`/api/domaines/${id}`, data); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour du domaine avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  },

  // Supprimer un domaine
  async deleteDomaine(id) {
    try {
      const response = await DataService.delete(`/api/domaines/${id}`); // Adaptez l'URL
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression du domaine avec l'ID ${id} :`,
        error
      );
      throw error;
    }
  }
};

export default DomaineService;
