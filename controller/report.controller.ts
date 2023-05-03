import db from '../db';

class ReportController {
    async createReport(req, res) {
        const { title } = req.body;
        const data = Date.now();
        const newReport = await db.query(`INSERT INTO reports (title, date) values ($1, $2) RETURNING *`, [title, data]);
        res.json(newReport.rows[0]);
    }
    async getReports(req, res) {
        const reports = await db.query('SELECT * FROM reports');
        res.json(reports.rows);
    }
    async getReportsByDocument(req, res) {
        const id = req.query.id;
        const reports = await db.query('SELECT * FROM reports WHERE document_id = $1', [id]);
        res.json(reports.rows);
    }
    async getReport(req, res) {
        const id = req.params.id;
        const reports = await db.query('SELECT * FROM reports WHERE id = $1', [id]);
        res.json(reports.rows[0]);
    }
    async updateReport(req, res) {
        const { id, title } = req.body;
        const reports = await db.query('UPDATE reports SET title = $1 WHERE id = $2 RETURNING *', [title, id]);
        res.json(reports.rows[0]);
    }
    async deleteReport(req, res) {
        const id = req.params.id;
        const reports = await db.query('DELETE FROM reports WHERE id = $1', [id]);
        res.json(reports.rows[0]);
    }
}

export default new ReportController();
