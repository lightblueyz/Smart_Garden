import { ArrowLeft, CircleUserRound, LogOut, Pencil } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";

interface CustomerProps {
  id: string;
  username: string;
  name: string;
  email: string;
  created_at: string;
  password: string;
  phone: string;
  cep: string;
  city: string;
  state: string;
  country: string;
}

export function Profile() {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<CustomerProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCustomer();
  }, [id]);

  async function loadCustomer() {
    try {
      const response = await api.get(`/customers/${id}`);
      const customerData = response.data;
      setCustomer(customerData);
    } catch (error) {
      console.error("Erro ao carregar cliente:", error);
    }
  }

  function leave(event: FormEvent) {
    event.preventDefault();
    navigate("/signin");
  }

  if (!customer) return <p>Carregando...</p>;

  return (
    <form action="">
      <div className="flex justify-between py-8 px-4 sm:px-14 h-28">
        <div>
          <ArrowLeft className="size-10" onClick={() => navigate(`/home/${id}`)} />
        </div>
        <div className="flex justify-center gap-2 cursor-pointer" onClick={() => navigate(`/changeprofile/${id}`)}>
          <strong>
            <p className="py-1 text-xl transition-transform hover:scale-10">Editar</p>
          </strong>
          <Pencil className="size-7" />
        </div>
      </div>
      <div className="min-h-screen flex flex-col sm:flex-row">
        <div className="flex justify-center sm:w-1/3 bg-white p-4 sm:p-14">
          <CircleUserRound className="size-60" />
        </div>
        <div className="flex flex-col justify-start items-start py-8 px-6 sm:px-14 sm:w-2/3 bg-white text-xl sm:text-2xl">
          <div className="text-3xl sm:text-4xl">
            <strong>{customer.name}</strong>
          </div>
          <div className="py-4">
            <div className="px-4 bg-zinc-400 flex-col rounded-lg">
              <div className="flex py-4 gap-2">
                <h1 className="font-rubik-mono text-center text-lg">DADOS PESSOAIS</h1>
              </div>
              <div className="flex py-4 px-6 gap-6 sm:gap-28">
                <h1 className="font-poppins text-center text-xl">
                  <strong>Usuário:</strong> {customer.username}
                </h1>
                <h1 className="font-poppins text-center text-xl">
                  <strong>Data de Cadastro:</strong>{" "}
                  {new Date(customer.created_at).toLocaleDateString()}
                </h1>
              </div>
              <div className="flex py-4 px-6 gap-6 sm:gap-32">
                <h1 className="font-poppins text-center text-xl">
                  <strong>Email:</strong> {customer.email}
                </h1>
                <h1 className="font-poppins text-center text-xl">
                  <strong>Telefone:</strong> {customer.phone}
                </h1>
              </div>
            </div>
            <div className="py-4"></div>
            <div className="px-4 bg-zinc-400 flex-col rounded-lg">
              <div className="flex py-4 px-6 gap-6 sm:gap-32">
                <h1 className="font-poppins text-center text-xl">
                  <strong>Senha:</strong> **********
                </h1>
              </div>
            </div>
            <div className="py-4"></div>
            <div className="px-4 bg-zinc-400 flex-col rounded-lg">
              <div className="flex py-4 gap-2">
                <h1 className="font-rubik-mono text-center text-lg">LOCALIZAÇÃO</h1>
              </div>
              <div className="flex py-4 px-6 gap-6 sm:gap-28">
                <h1 className="font-poppins text-center text-xl">
                  <strong>Cidade:</strong> {customer.city}
                </h1>
                <h1 className="font-poppins text-center text-xl">
                  <strong>UF:</strong> {customer.state}
                </h1>
                <h1 className="font-poppins text-center text-xl">
                  <strong>País:</strong> {customer.country}
                </h1>
              </div>
            </div>
            <div className="py-4"></div>
            <div className="flex justify-end items-center py-4 px-6 cursor-pointer" onClick={leave}>
              <LogOut />
              <h1 className="font-poppins text-center text-xl transition-transform hover:scale-10">
                <strong>Sair</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
