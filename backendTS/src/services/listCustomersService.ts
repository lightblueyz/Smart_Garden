import prismaClient from "../prisma";

class ListCustomersService {
    async execute() {
        try {
            // Buscando todos os clientes no banco de dados
            const customers = await prismaClient.customer.findMany();

            // Retorna a lista de clientes
            return customers;
        } catch (error) {
            // Captura erros e lança uma mensagem com o erro
            throw new Error(`Erro ao listar os clientes: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
        }
    }
}

export { ListCustomersService };
