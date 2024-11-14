import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/deleteCustomerService";


class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const customersService = new DeleteCustomerService();

        const customer = await customersService.execute({ id })

        reply.send(customer);
    }
}

export { DeleteCustomerController }