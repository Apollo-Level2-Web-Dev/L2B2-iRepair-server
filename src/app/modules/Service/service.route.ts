import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceController } from './service.controller';
import { createServiceValidationSchema, updateServiceValidationSchema } from './service.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(createServiceValidationSchema),
  ServiceController.createService,
);

router.get('/', ServiceController.getAllServices);

router.get('/:id', ServiceController.findServiceById);

router.patch(
  '/:id',
  validateRequest(updateServiceValidationSchema),
  ServiceController.updateServiceById,
);

router.delete('/:id', ServiceController.deleteServiceById);

export const ServiceRoutes = router;
