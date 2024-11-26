import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors); // Suporte para CORS
  app.register(routes); // Registrar as rotas

  try {
    await prisma.$connect();
    console.log("Conectado ao banco de dados");

    // Iniciar o servidor
    await app.listen({ port: 3333 });
    console.log("Servidor rodando em http://localhost:3333");
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
};

start();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Desconectado do banco de dados");
});
