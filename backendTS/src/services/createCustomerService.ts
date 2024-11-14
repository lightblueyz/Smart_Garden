import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string;
    email: string;
    cep: string;
    password: string
    phone: string;
    city: string; 
    state: string;
    country: string
    
}
class CreateCustomerService {
    async execute({ name, email, cep, password, phone, city, state, country }: CreateCustomerProps) {

        if (!name || !email || !cep || !password || !phone || !city || !state || !country ) {
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                cep,
                password,
                phone, 
                city,
                state,
                country,
                status: true
            }
        })

        return customer;
    }
}

export { CreateCustomerService }