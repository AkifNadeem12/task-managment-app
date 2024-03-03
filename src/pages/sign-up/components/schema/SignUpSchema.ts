import { z } from 'zod'

export const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
})

export type SignUpSchema = z.infer<typeof SignUpSchema>
