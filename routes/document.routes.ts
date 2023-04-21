import { Router } from 'express';
import documentController from '../controller/document.controller';

const router = new Router()

router.post('/documents', documentController.createDocument)
router.get('/documents', documentController.getDocuments)
router.get('/documents/:id', documentController.getDocument)
router.put('/documents/:id', documentController.updateDocument)
router.delete('/documents/:id', documentController.deleteDocument)

export default router;
