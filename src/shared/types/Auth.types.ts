import validator from 'validator'
import { z } from 'zod'
export type IInputLogin = z.infer<typeof loginSchema>
const phoneRegex = new RegExp(
   /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
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
   phone: z.string().regex(phoneRegex, 'не корректный номер телефона'),
   password: z
      .string()
      .min(6, 'не корректный пароль, должно быть минимум 6 символов'),
   email: z.string().email('не корректный email').max(100),
   title: z.string().max(100, 'слишком длинное имя, максимум 100 символов')
})
