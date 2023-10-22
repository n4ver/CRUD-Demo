class complaintService {
    /**
     * Creats an instance of complaintService
     * @param {object} app fastify app
     * @memberof complaintService
     */

    constructor (app) {
        if (!app.ready) throw new error(`can't get .ready from fastify app.`);
        this.app = app;
        
    }
}