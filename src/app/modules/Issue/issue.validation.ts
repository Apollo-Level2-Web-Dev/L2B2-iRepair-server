import { z } from 'zod';

export const createIssueValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    device: z.string(),
    status: z
      .enum([
        'pending',
        'received',
        'in-progress',
        'resolved',
        'failed',
        'delivered',
      ])
      .optional(),
    userId: z.string(),
    serviceId: z.string(),
  }),
});

export const updateIssueValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    device: z.string().optional(),
    status: z
      .enum([
        'pending',
        'received',
        'in-progress',
        'resolved',
        'failed',
        'delivered',
      ])
      .optional(),
    userId: z.string().optional(),
    serviceId: z.string().optional(),
  }),
});

export const IssueValidations = {
  createIssueValidationSchema,
  updateIssueValidationSchema,
};
