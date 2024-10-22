import { z } from 'zod'

export const RegisterDTO = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    }).max(255, 'The name cannot be longer than 255 characters.'),
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    }).email('Email must be a valid email address'),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).min(8, 'Password must contain at least 8 characters')
});

export type RegisterDTOType = z.infer<typeof RegisterDTO>;

