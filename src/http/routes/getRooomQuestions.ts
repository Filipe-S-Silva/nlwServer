import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { db } from "../../db/conection.ts"
import { z } from "zod/v4"
import { schema } from "../../db/schema/index.ts"
import { desc, eq } from "drizzle-orm"

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) =>{
    app.get('/rooms/:roomId/questions', {
        schema: {
            params: z.object({
                roomId: z.string(),
            })
        }
    }, async (request) => {
        const { roomId } = request.params

        const result = await db.select(
            {
                id: schema.questions.id,
                question: schema.questions.question,
                answer: schema.questions.answer,
                icreatedAtd: schema.questions.createdAt,
            }
        ).from(schema.questions).where(eq(schema.questions.roomId, roomId)).orderBy(desc(schema.questions.createdAt))

        return result
    })
}