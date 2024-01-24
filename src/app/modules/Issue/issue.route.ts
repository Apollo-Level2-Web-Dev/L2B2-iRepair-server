import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { IssueController } from './issue.controller';
import { createIssueValidationSchema, updateIssueValidationSchema } from './issue.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(createIssueValidationSchema),
  IssueController.createIssue,
);

router.get('/', IssueController.getAllIssues);

router.get('/:id', IssueController.findIssueById);

router.patch(
  '/:id',
  validateRequest(updateIssueValidationSchema),
  IssueController.updateIssueById,
);

router.delete('/:id', IssueController.deleteIssueById);

export const IssueRoutes = router;
