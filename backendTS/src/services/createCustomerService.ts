import prismaClient from "../prisma";
import bcrypt from "bcryptjs"; // Biblioteca para criptografar a senha

interface CreateCustomerProps {
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

class CreateCustomerService {
    async execute({ username, name, email, cep, password, phone, city, state, country }: CreateCustomerProps) {
        console.log("Dados recebidos no serviço:", {
            username,
            name,
            email,
            cep,
            phone,
            city,
            state,
            country,
        });

        // Verificação de campos obrigatórios
        if (!username || !name || !email || !cep || !password || !phone || !city || !state || !country) {
            console.error("Erro: Campos faltando.");
            throw new Error("Preencha todos os campos");
        }

        // Verificação de senha mínima
        if (password.length < 6) {
            console.error("Erro: A senha deve ter pelo menos 6 caracteres.");
            throw new Error("A senha deve ter pelo menos 6 caracteres");
        }

        // Verificando se o usuário ou email já existem no banco
        const customerExists = await prismaClient.customer.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email },
                ]
            }
        });

        if (customerExists) {
            console.error("Erro: Username ou email já existe.");
            throw new Error("Username ou email já existe");
        }

        // Criptografando a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criando o novo usuário no banco de dados
        const customer = await prismaClient.customer.create({
            data: {
                username,
                name,
                email,
                cep,
                password: hashedPassword,
                phone,
                city,
                state,
                country,
                status: true, // Definindo como 'ativo' por padrão
            }
        });

        console.log("Cliente criado com sucesso:", customer);

        return customer;
    }
}

export { CreateCustomerService };
