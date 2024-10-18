import { z } from 'zod'
import validator from 'validator'
export type IInputLogin = z.infer<typeof loginSchema>

export const loginSchema = z.object({
   email: z
      .string()
      .email('не корректный email')
      .min(6, 'не корректный email, должно быть минимум 6 символов')
      .max(255),
   password: z
      .string()
      .min(6, 'не корректный пароль, должно быть минимум 6 символов')
})

export type IInputRegister = z.infer<typeof registerSchema>

export const registerSchema = z.object({
   phone: z.string().refine(validator.isMobilePhone),
   password: z
      .string()
      .min(6, 'не корректный пароль, должно быть минимум 6 символов'),
   email: z.string().email('не корректный email').max(255),
   title: z.string().max(255)
})
