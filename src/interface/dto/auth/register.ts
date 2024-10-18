import { z } from 'zod'

export const RegisterDTO = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
});

export type RegisterDTOType = z.infer<typeof RegisterDTO>;