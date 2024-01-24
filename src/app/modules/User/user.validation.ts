import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(['admin', 'user']).optional(),
  }),
});

export const updateUserValidationSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'user']).optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
