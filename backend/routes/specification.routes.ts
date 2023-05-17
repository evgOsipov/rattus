import express from 'express';
import specificationController from '../controller/specification.controller';

const router = express.Router();

router.post('/specifications', specificationController.createSpecification);
router.get('/specifications/doc/', specificationController.getSpecificationsByDocument);
router.get('/specifications/rep/', specificationController.getSpecificationsByReport);
router.get('/specifications/:id', specificationController.getSpecification);
router.put('/specifications', specificationController.updateSpecification);
router.delete('/specifications/:id', specificationController.deleteSpecification);

export default router;