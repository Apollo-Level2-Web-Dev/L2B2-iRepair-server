import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { createUserValidationSchema, updateUserValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(createUserValidationSchema),
  UserController.createUser,
);

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.findUserById);

router.patch(
  '/:id',
  validateRequest(updateUserValidationSchema),
  UserController.updateUserById,
);

router.delete('/:id', UserController.deleteUserById);

export const UserRoutes = router;
