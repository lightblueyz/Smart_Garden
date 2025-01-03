import { FastifyRequest, FastifyReply } from "fastify";
import { PutCustomerService } from "../services/putCustomerService";

export class PutCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { name, phone, cep, city, state, country } = request.body as {
      name: string;
      phone: string;
      cep: string;
      city: string;
      state: string;
      country: string;
    };

    const putCustomerService = new PutCustomerService();

    try {
      const updatedCustomer = await putCustomerService.execute({
        id,
        name,
        phone,
        cep,
        city,
        state,
        country,
      });

      return reply.status(200).send(updatedCustomer);
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      return reply.status(400).send({ error: error.message });
    }
  }
}
