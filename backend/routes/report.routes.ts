import express from 'express';
import reportController from '../controller/report.controller';

const router = express.Router();

router.post('/reports', reportController.createReport);
router.get('/reports', reportController.getReportsByDocument);
router.get('/reports/:id', reportController.getReport);
router.get('/reports', reportController.getReports);
router.put('/reports', reportController.updateReport);
router.delete('/reports/:id', reportController.deleteReport);

export default router;