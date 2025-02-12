import DataService from "./DataService";

const MissionService = {
  // Récupère toutes les missions
  async getAllMissions() {
    try {
      const response = await DataService.get("/api/missions");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des missions:", error);
      throw error;
    }
  },

  // Récupère une mission par son ID
  async getMissionById(id) {
    try {
      const response = await DataService.get(`/api/missions/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de la mission avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Crée une nouvelle mission
  async createMission(missionData) {
    try {
      const response = await DataService.post("/api/missions", missionData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la mission:", error);
      throw error;
    }
  },

  // Met à jour une mission existante
  async updateMission(id, missionData) {
    try {
      const response = await DataService.put(
        `/api/missions/${id}`,
        missionData
      );
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de la mission avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Supprime une mission
  async deleteMission(id) {
    try {
      const response = await DataService.delete(`/api/missions/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de la mission avec ID ${id}:`,
        error
      );
      throw error;
    }
  }
};

export default MissionService;
