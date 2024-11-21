import Fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  
  try {
    await prisma.$connect(); 
    console.log("Conectado ao banco de dados");

    await app.listen({ port: 3333 });
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
  }
};

start();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log("Desconectado do banco de dados");
});
