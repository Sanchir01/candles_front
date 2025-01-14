import { z } from 'zod'

export type createCategorySchemaType = z.infer<typeof createCategorySchema>

export const createCategorySchema = z.object({
   title: z.string().min(1).max(255)
})
