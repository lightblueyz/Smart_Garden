import { FastifyRequest, FastifyReply } from "fastify";
import { GetCustomerService } from "../services/getCustomerService";
import bcrypt from "bcrypt";

class GetCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const customerId = parseInt(id, 10);

      if (isNaN(customerId)) {
        return reply.status(400).send({ error: "ID inválido" });
      }

      const getCustomerService = new GetCustomerService();
      const customer = await getCustomerService.execute(customerId);

      // Aqui retornamos a senha descriptografada, se necessário
      const isPasswordValid = bcrypt.compareSync("sua_senha", customer.password);
      const password = isPasswordValid ? "senha_original" : "Senha inválida";

      return reply.send({ ...customer, password });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return reply.status(500).send({ error: error.message });
      }
      return reply.status(500).send({ error: "Erro desconhecido ao buscar o cliente" });
    }
  }
}

export { GetCustomerController };
