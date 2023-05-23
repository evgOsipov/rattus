import express from 'express';
import documentController from '../controller/document.controller';

const router = express.Router();

router.post('/documents', documentController.saveFullDocument);
router.get('/documents', documentController.getDocuments);
router.get('/documents/:id', documentController.getDocument);
router.put('/documents', documentController.updateDocument);
router.delete('/documents/:id', documentController.deleteDocument);

export default router;
