import db from '../db'

class DocumentController {
    async createDocument(req, res) {
        const { title } = req.body;
        const data = Date.now();
        const newDocument = await db.query(`INSERT INTO documents (title, date) values ($1, $2) RETURNING *`, [title, data]);
        res.json(newDocument.rows[0]);
    }
    async getDocuments(req, res) {
        const documents = await db.query('SELECT * FROM documents');
        res.json(documents.rows);
    }
    async getDocument(req, res) {
        const id = req.params.id;
        const document = await db.query('SELECT * FROM documents WHERE id = $1', [id]);
        res.json(document.rows[0]);
    }
    async updateDocument(req, res) {
        const { id, title } = req.body;
        const document = await db.query('UPDATE documents SET title = $1 WHERE id = $2 RETURNING *', [title, id]);
        res.json(document.rows[0]);
    }
    async deleteDocument(req, res) {
        const id = req.params.id;
        const document = await db.query('DELETE FROM documents WHERE id = $1', [id]);
        res.json(document.rows[0]);
    }
}

export default new DocumentController();
