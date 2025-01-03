import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustomersController } from "./controllers/listCustomersController";
import { DeleteCustomerController } from "./controllers/deleteCustomerController";
import { LoginCustomerController } from "./controllers/loginCustomerController";
import { GetCustomerController } from "./controllers/getCustomerController";
import { PutCustomerController } from "./controllers/putCustomerController";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  });

  fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(request, reply);
  });

  fastify.get("/customers/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetCustomerController().handle(request, reply);
  });

  // Nova rota para retornar a senha
  fastify.get("/customers/:id/password", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const customerId = parseInt(id, 10);

    if (isNaN(customerId)) {
      return reply.status(400).send({ error: "ID inválido" });
    }

    try {
      const customer = await prisma.customer.findUnique({
        where: { id: customerId },
        select: { password: true }
      });

      if (!customer) {
        return reply.status(404).send({ error: "Cliente não encontrado" });
      }

      return reply.send({ password: customer.password });
    } catch (error) {
      return reply.status(500).send({ error: "Erro ao buscar senha do cliente" });
    }
  });

  
  fastify.delete("/customerdel", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });

  fastify.post("/signin", async (request: FastifyRequest, reply: FastifyReply) => {
    return new LoginCustomerController().handle(request, reply);
  });

  fastify.put("/customers/:id", async (request, reply) => {
    return new PutCustomerController().handle(request, reply);
  });
}
