import db from '../db'

class DocumentController {
    async createDocument(req, res) {
        const { title } = req.body;
        const data = Date.now()
        const newPerson = await db.query(`INSERT INTO documents (title, date) values ($1, $2) RETURNING *`, [title, data])
        console.log(title, data)
        res.json(newPerson);
    }
    async getDocuments(req, res) {

    }
    async getDocument(req, res) {

    }
    async updateDocument(req, res) {

    }
    async deleteDocument(req, res) {

    }
}

export default new DocumentController();
