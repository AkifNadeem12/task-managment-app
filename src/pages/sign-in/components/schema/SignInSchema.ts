import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, { message: 'Password must be at least 5 characters long' }),
})

export type SignInSchema = z.infer<typeof SignInSchema>
