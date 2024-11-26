import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetCustomerService {
    async execute(id: number) {
        try {
            
            const customer = await prisma.customer.findUnique({
                where: { id }
            });

            if (!customer) {
                throw new Error("Cliente não encontrado");
            }

            return customer; 
        } catch (error) {
            
            throw new Error(`Erro ao carregar cliente com ID ${id}: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
        }
    }
}

export { GetCustomerService };
