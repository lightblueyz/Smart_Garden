import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/deleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
       
        const userId = request.userId;

        
        if (!userId) {
            return reply.status(400).send({ error: "Usuário não autenticado" });
        }

        
        const customersService = new DeleteCustomerService();

        try {
            
            const customer = await customersService.execute(userId);
            return reply.send(customer); 
        } catch (error: unknown) {
            if (error instanceof Error) {
                return reply.status(500).send({ error: error.message });
            }
           
            return reply.status(500).send({ error: "Erro desconhecido" });
        }
    }
}

export { DeleteCustomerController };
