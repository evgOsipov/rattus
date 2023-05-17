import db from '../db';

class SpecificationController {
    async createSpecification(req, res) {
        const { title, documentId, reportId } = req.body;
        const status = 'FAIL';
        const answer = '';
        const newSpecification = await db.query(`INSERT INTO specifications (title, status, answer, document_id, report_id) values ($1, $2, $3, $4, $5) RETURNING *`, [title, status, answer, documentId, reportId]);
        res.json(newSpecification.rows[0]);
    }
    async getSpecificationsByDocument(req, res) {
        const id = req.query.id;
        const specifications = await db.query('SELECT * FROM specifications WHERE document_id = $1', [id]);
        res.json(specifications.rows);
    }
    async getSpecificationsByReport(req, res) {
        const id = req.query.id;
        const specifications = await db.query('SELECT * FROM specifications WHERE report_id = $1', [id]);
        res.json(specifications.rows);
    }
    async getSpecification(req, res) {
        const id = req.params.id;
        const specification = await db.query('SELECT * FROM specifications WHERE id = $1', [id]);
        res.json(specification.rows[0]);
    }
    async updateSpecification(req, res) {
        const { id, title, status, answer } = req.body;
        const specification = await db.query('UPDATE specifications SET title = $1, status = $2, answer = $3 WHERE id = $4 RETURNING *', [title, id, status, answer]);
        res.json(specification.rows[0]);
    }
    async deleteSpecification(req, res) {
        const id = req.params.id;
        const specification = await db.query('DELETE FROM specifications WHERE id = $1', [id]);
        res.json(specification.rows[0]);
    }
}

export default new SpecificationController();
