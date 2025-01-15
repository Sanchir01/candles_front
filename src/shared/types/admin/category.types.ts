import { z } from 'zod'

export type createCategorySchemaType = z.infer<typeof createCategorySchema>
export type createColorSchemaType = z.infer<typeof createColorSchema>

export const createCategorySchema = z.object({
   title: z.string().min(1).max(255)
})

export const createColorSchema = z.object({
   title: z.string().min(1).max(255)
})
