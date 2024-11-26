import { FastifyRequest, FastifyReply } from "fastify";
import { GetCustomerService } from "../services/getCustomerService";

class GetCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      // Fazendo o cast do id para number
      const { id } = request.params as { id: string };

      // Convertendo o id para número, caso o tipo esperado seja number
      const customerId = parseInt(id, 10);

      if (isNaN(customerId)) {
        return reply.status(400).send({ error: "ID inválido" });
      }

      const getCustomerService = new GetCustomerService();
      const customer = await getCustomerService.execute(customerId);

      return reply.send(customer);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return reply.status(500).send({ error: error.message });
      }
      return reply.status(500).send({ error: "Erro desconhecido ao buscar o cliente" });
    }
  }
}

export { GetCustomerController };
