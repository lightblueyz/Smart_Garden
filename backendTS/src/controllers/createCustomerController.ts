import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService"

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email, cep, password, phone, city, state, country } = request.body as { name: string, email: string, cep: string, password: string, phone: string, city: string, state: string, country: string; };

        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({ name, email, cep, password, phone, city, state, country });

        reply.send(customer)

    }
}

export { CreateCustomerController }