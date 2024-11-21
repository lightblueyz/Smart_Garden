import prismaClient from "../prisma";

class DeleteCustomerService {
    async execute(userId: number) {
        if (!userId) {
            throw new Error("Invalid token or user ID missing!");
        }

        
        const findCustomer = await prismaClient.customer.findUnique({
            where: { id: userId },
        });

        if (!findCustomer) {
            throw new Error("User does not exist!");
        }

        // Deleta o usuário
        await prismaClient.customer.delete({
            where: { id: userId },
        });

        return { message: "Account successfully deleted!" };
    }
}

export { DeleteCustomerService };
