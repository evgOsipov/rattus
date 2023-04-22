import { Router } from 'express';
import specificationController from '../controller/specification.controller';

const router = new Router()

router.post('/specifications', specificationController.createSpecification)
router.get('/specifications', specificationController.getSpecificationsByDocument)
router.get('/specifications/:id', specificationController.getSpecification)
router.put('/specifications', specificationController.updateSpecification)
router.delete('/specifications/:id', specificationController.deleteSpecification)

export default router;