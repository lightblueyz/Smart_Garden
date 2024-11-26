import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs"; // Se você estiver usando bcrypt para comparar as senhas

const prisma = new PrismaClient(); // Crie uma instância do PrismaClient

interface LoginRequest {
  username: string;
  password: string;
}

export class LoginCustomerService {
  async login({ username, password }: LoginRequest) {
    try {
      // Buscando o usuário pelo username
      const user = await prisma.customer.findUnique({
        where: { username },
      });

      if (!user) {
        throw new Error("Credenciais inválidas"); // Não especificando se é o usuário ou a senha
      }

      // Verificando se a senha está correta
      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Credenciais inválidas"); // Não especificando se é o usuário ou a senha
      }

      // Retornando os dados do usuário (ou um token, conforme necessidade)
      return user;

    } catch (error: unknown) {
      if (error instanceof Error) {
        // Agora o TypeScript sabe que 'error' é do tipo 'Error'
        throw new Error(error.message || "Erro ao processar a autenticação");
      } else {
        // Caso o erro não seja uma instância de 'Error'
        throw new Error("Erro desconhecido ao processar a autenticação");
      }
    }
  }
}
