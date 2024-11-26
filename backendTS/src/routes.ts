import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustomersController } from "./controllers/listCustomersController";
import { DeleteCustomerController } from "./controllers/deleteCustomerController";
import { LoginCustomerController } from "./controllers/loginCustomerController";
import { GetCustomerController } from "./controllers/getCustomerController";

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

  // Deletar cliente
  fastify.delete("/customerdel", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });


  fastify.post("/signin", async (request: FastifyRequest, reply: FastifyReply) => {
    return new LoginCustomerController().handle(request, reply);
  });
}
