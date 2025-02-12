import DataService from "./DataService"; // Assuming DataService is in the same directory

const PresentationService = {
    // Récupère toutes les presentations
    // async getAllPresentations() {
    //     try {
    //         const response = await DataService.get("/api/presentations");
    //         return response.data;
    //     } catch (error) {
    //         console.error("Erreur lors de la récupération des presentations:", error);
    //         throw error;
    //     }
    // },

    async getAllPresentations() {
    try {
        const response = await DataService.get("/api/presentations");
        console.log("Réponse API presentations:", response.data); // Vérifie ici !
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des presentations:", error);
        throw error;
    }
}
,

    // Récupère une presentation par son ID
    async getPresentationById(id) {
        try {
            const response = await DataService.get(`/api/presentations/${id}`);
            return response.data;
        } catch (error) {
            console.error(
                `Erreur lors de la récupération de la presentation avec ID ${id}:`,
                error
            );
            throw error;
        }
    },

    // Crée une nouvelle presentation
    async createPresentation(presentationData) {
        try {
            const response = await DataService.post("/api/presentations", presentationData);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la création de la presentation:", error);
            throw error;
        }
    },

    // Met à jour une presentation existante
    async updatePresentation(id, presentationData) {
        try {
            const response = await DataService.put(
                `/api/presentations/${id}`,
                presentationData
            );
            return response.data;
        } catch (error) {
            console.error(
                `Erreur lors de la mise à jour de la presentation avec ID ${id}:`,
                error
            );
            throw error;
        }
    },

    // Supprime une presentation
    async deletePresentation(id) {
        try {
            const response = await DataService.delete(`/api/presentations/${id}`);
             return response.data;
        } catch (error) {
            console.error(
                `Erreur lors de la suppression de la presentation avec ID ${id}:`,
                error
            );
            throw error;
        }
    },
};

export default PresentationService;