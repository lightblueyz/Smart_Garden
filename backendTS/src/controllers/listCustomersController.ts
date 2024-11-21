import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/listCustomersService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const listCustomersService = new ListCustomersService();
            const customers = await listCustomersService.execute();
            return reply.send(customers);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return reply.status(500).send({ error: error.message });
            }
            return reply.status(500).send({ error: "Erro desconhecido ao listar os clientes" });
        }
    }
}

export { ListCustomersController };