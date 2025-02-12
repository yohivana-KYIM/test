// Service CommunicationService


import DataService from "./DataService";

const CommunicationService = {
  async getAllCommunications() {
    return (await DataService.get("/api/communications")).data;
  },
  async getCommunicationById(id) {
    return (await DataService.get(`/api/communications/${id}`)).data;
  },
  async createCommunication(formData) {
    return (await DataService.post("/api/communications", formData)).data;
  },
  async updateCommunication(id, formData) {
    return (await DataService.put(`/api/communications/${id}`, formData)).data;
  },
  async deleteCommunication(id) {
    return (await DataService.delete(`/api/communications/${id}`)).data;
  }
};

export default CommunicationService;
