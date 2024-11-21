import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // Desestruturando os campos da requisição, incluindo o username
        const { username, name, email, cep, password, phone, city, state, country } = request.body as {
            username: string;
            name: string;
            email: string;
            cep: string;
            password: string;
            phone: string;
            city: string;
            state: string;
            country: string;
        };

        // Instancia o serviço de criação
        const customerService = new CreateCustomerService();

        // Executa o serviço passando os dados
        const customer = await customerService.execute({
            username,
            name,
            email,
            cep,
            password,
            phone,
            city,
            state,
            country,
        });

        // Retorna o cliente criado
        return reply.send(customer);
    }
}

export { CreateCustomerController };
