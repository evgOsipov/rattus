import db from '../db';

class DocumentController {
	async createDocument(req, res) {
		const { title } = req.body;
		const date = Date.now();
		const newDocument = await db.query(`INSERT INTO documents (title, date) values ($1, $2) RETURNING *`, [title, date]);
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

	async saveFullDocument(req, res) {
			let { document, updateSpecifications, deleteSpecifications, createSpecifications } = req.body;
			if (!document || !createSpecifications) {
				return 'bad data';
			}
			const { id, title } = document;
			if (!id) {
				if (!title) {
					res.send('Bad data')
				}
				document = await db.query(`INSERT INTO documents (title, date) values ($1, $2) RETURNING *`, [title, Date.now()]);
				console.log(title);
				for (const specification of createSpecifications) {
					await db.query(`
          INSERT INTO public.specifications
          (title, status, answer, document_id)
          VALUES('', 'default', '', ${document.id});`);
				}
			} else {
				for (const specification of createSpecifications) {
					await db.query(`
          INSERT INTO public.specifications
          (title, status, answer, document_id)
          VALUES(${specification.title}, 'default', '', ${id});`);
				}
				for (const specification of deleteSpecifications) {
					await db.query(`
            DELETE FROM specifications
					  WHERE id=${specification.id};`);
				}
				for (const specification of updateSpecifications) {
					await db.query(`
            UPDATE specifications
            SET title=${specification.title}
            WHERE id=${specification.id};`);
				}
			}
		res.json(document);
	}
}

export default new DocumentController();
