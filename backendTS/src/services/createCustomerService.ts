import prismaClient from "../prisma";
import bcrypt from "bcryptjs";  // Biblioteca para criptografar a senha

interface CreateCustomerProps {
    username: string;  // Campo username adicionado
    name: string;
    email: string;
    cep: string;
    password: string;
    phone: string;
    city: string;
    state: string;
    country: string;
}

class CreateCustomerService {
    async execute({ username, name, email, cep, password, phone, city, state, country }: CreateCustomerProps) {
        // Verificar se todos os campos estão preenchidos
        if (!username || !name || !email || !cep || !password || !phone || !city || !state || !country) {
            throw new Error("Preencha todos os campos");
        }

        // Verificar se o username ou o email já existem no banco
        const customerExists = await prismaClient.customer.findFirst({
            where: {
                OR: [
                    { username: username },  // Verificar se o username já existe
                    { email: email }         // Verificar se o email já existe
                ]
            }
        });

        if (customerExists) {
            throw new Error("Username ou email já existe");
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);  // 10 é o número de saltos para o bcrypt

        // Criar o cliente no banco de dados
        const customer = await prismaClient.customer.create({
            data: {
                username,  // Agora o username é parte dos dados
                name,
                email,
                cep,
                password: hashedPassword,  // Armazenando a senha criptografada
                phone,
                city,
                state,
                country,
                status: true
            }
        });

        return customer;
    }
}

export { CreateCustomerService };
