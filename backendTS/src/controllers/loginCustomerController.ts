import { Request, Response } from 'express';
import { LoginCustomerService } from '../services/loginCustomerService';

export class LoginCustomerController {
  async handle(request: Request, response: Response) {
    console.log("Request body recebido:", request.body);

    const { username, password } = request.body;

    const loginService = new LoginCustomerService();

    try {
      const user = await loginService.login({ username, password });
      return response.status(200).send(user);  
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).send({ error: error.message });  
      } else {
        return response.status(400).send({ error: "Erro desconhecido" });  
      }
    }
  }
}
