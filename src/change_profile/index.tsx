import { FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface CustomerProps {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  cep: string;
  city: string;
  state: string;
  country: string;
}

export function ChangeProfile() {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<CustomerProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCustomer();
  }, [id]);

  // Carrega os dados do cliente
  async function loadCustomer() {
    try {
      const response = await api.get(`/customers/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.error("Erro ao carregar cliente:", error);
      alert("Erro ao carregar os dados. Tente novamente.");
    }
  }

  // Envia os dados atualizados
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!customer) return;

    try {
      const updatedCustomer = {
        name: customer.name,
        phone: customer.phone,
        cep: customer.cep,
        city: customer.city,
        state: customer.state,
        country: customer.country,
      };

      await api.put(`/customers/${id}`, updatedCustomer);
      alert("Dados atualizados com sucesso!");
      navigate(`/profile/${id}`);
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      alert("Erro ao atualizar os dados.");
    }
  }

  // Exibe mensagem enquanto os dados são carregados
  if (!customer) return <p>Carregando...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>

      <div className="mb-4">
        <label className="block font-medium">Usuário</label>
        <input
          type="text"
          value={customer.username}
          disabled
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          value={customer.email}
          disabled
          className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Nome</label>
        <input
          type="text"
          value={customer.name}
          onChange={(e) =>
            setCustomer({ ...customer, name: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Telefone</label>
        <input
          type="text"
          value={customer.phone}
          onChange={(e) =>
            setCustomer({ ...customer, phone: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">CEP</label>
        <input
          type="text"
          value={customer.cep}
          onChange={(e) =>
            setCustomer({ ...customer, cep: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Cidade</label>
        <input
          type="text"
          value={customer.city}
          onChange={(e) =>
            setCustomer({ ...customer, city: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Estado</label>
        <input
          type="text"
          value={customer.state}
          onChange={(e) =>
            setCustomer({ ...customer, state: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">País</label>
        <input
          type="text"
          value={customer.country}
          onChange={(e) =>
            setCustomer({ ...customer, country: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Salvar
      </button>
    </form>
  );
}
