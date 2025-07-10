import fastify from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./http/routes/getRooms.ts";
const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: "localhost:5173",
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', ()=>{
    return "OK"
})

app.register(getRoomsRoute)

app.listen({ port: env.PORT})

// app.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333}).then(()=>{
//     console.log("HTTP server running")
// })