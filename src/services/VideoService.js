import DataService from "./DataService";

const VideoService = {
  // Récupère toutes les vidéos
  async getAllVideos() {
    try {
      const response = await DataService.get("/api/videos");
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos:", error);
      throw error;
    }
  },

  // Récupère une vidéo par son ID
  async getVideoById(id) {
    try {
      const response = await DataService.get(`/api/videos/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération de la vidéo avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Crée une nouvelle vidéo
  async createVideo(videoData) {
    try {
      const response = await DataService.post("/api/videos", videoData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la vidéo:", error);
      throw error;
    }
  },

  // Met à jour une vidéo existante
  async updateVideo(id, videoData) {
    try {
      const response = await DataService.put(`/api/videos/${id}`, videoData);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de la vidéo avec ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // Supprime une vidéo
  async deleteVideo(id) {
    try {
      const response = await DataService.delete(`/api/videos/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de la vidéo avec ID ${id}:`,
        error
      );
      throw error;
    }
  }
};

export default VideoService;
