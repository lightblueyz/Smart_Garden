import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;

}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error("invalid solicitation!")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não existe ou digitado de forma incorreta!")
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Cliente deletado com sucesso!" }

    }
}

export { DeleteCustomerService }