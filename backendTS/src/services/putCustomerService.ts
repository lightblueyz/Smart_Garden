import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateCustomerData {
  id: string; 
  name: string;
  phone: string;
  cep: string;
  city: string;
  state: string;
  country: string;
}

export class PutCustomerService {
  async execute(data: UpdateCustomerData) {
    const { id, name, phone, cep, city, state, country } = data;

    
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      throw new Error("ID inválido");
    }

   
    const customerExists = await prisma.customer.findUnique({
      where: { id: numericId }, 
    });

    if (!customerExists) {
      throw new Error("Cliente não encontrado");
    }

    
    const updatedCustomer = await prisma.customer.update({
      where: { id: numericId }, 
      data: {
        name,
        phone,
        cep,
        city,
        state,
        country,
      },
    });

    return updatedCustomer;
  }
}
