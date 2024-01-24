import { z } from 'zod';

export const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    serviceImg: z.string().optional(),
    description: z.string(),
    devices: z.array(z.string()),
    price: z.number(),
  }),
});

export const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    serviceImg: z.string().optional(),
    description: z.string().optional(),
    devices: z.array(z.string()).optional(),
    price: z.number().optional(),
  }),
});

export const ServiceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
