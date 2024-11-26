import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

// Tipo para o corpo da requisição
interface CreateCustomerBody {
    username: string;
    name: string;
    email: string;
    cep: string;
    password: string;
    phone: string;
    city: string;
    state: string;
    country: string;
}

class CreateCustomerController {
    async handle(
        request: FastifyRequest<{ Body: CreateCustomerBody }>, // Declaração do tipo do corpo da requisição
        reply: FastifyReply
    ) {
        try {
            const { username, name, email, cep, password, phone, city, state, country } = request.body;

            console.log("Dados recebidos no controller:", {
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

            const customerService = new CreateCustomerService();

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

            return reply.status(201).send(customer);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Erro no controlador:", error.message);
                return reply.status(500).send({ error: error.message });
            }

            console.error("Erro desconhecido:", error);
            return reply.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export { CreateCustomerController };
