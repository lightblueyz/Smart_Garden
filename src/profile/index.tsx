import { AlignJustify, CircleUserRound, LogOut, Pencil } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface customersProps {
  id: string;
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
  const [customers, setCustomers] = useState<customersProps[]>([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  const navigate = useNavigate();

  function leave(event: FormEvent) {
    event.preventDefault();
    navigate("/signin");
  }

  return (
    <form action="">
      <div className="flex justify-between py-8 px-14 h-28">
        <div>
          <AlignJustify className="size-10" />
        </div>
        <div className="flex justify-items-center gap-2">
          <strong>
            <p className="py-1 text-xl">Editar</p>
          </strong>
          <Pencil className="size-7"></Pencil>
        </div>
      </div>
      <div className="min-h-screen flex">
        <div className="flex flex-col w-1/3 bg-white ">
          <div className="flex justify-end items-end py-14">
            <CircleUserRound className="size-60" />
          </div>
        </div>

        {customers.map((customer) => (
          <article>
            <div className="flex flex-col justify-start items-start py-14 px-28 w-2/3 bg-white text-2xl">
              <div className="text-4xl">
                <strong>
                  <p>{customer.name}</p>
                </strong>
              </div>
              <div className="py-4">
                <div className="h-auto w-auto px-4 bg-zinc-400  flex-col">
                  <div className="flex py-4 gap-2">
                    <h1 className="font-rubik-mono text-center text-lg">
                      DADOS PESSOAIS
                    </h1>
                  </div>
                  <div className="flex py-4 px-6 gap-28 flex-grow">
                    <h1 className="font-poppins text-center text-xl">
                      <strong>Usuário:</strong> {customer.id}
                    </h1>
                    <h1 className="font-poppins text-center text-xl">
                      <strong>Data de Cadastro:</strong> {customer.created_at}
                    </h1>
                  </div>
                  <div className="flex py-4 px-6 gap-32 flex-grow">
                    <h1 className="font-poppins text-center text-xl">
                      <strong>Email:</strong> {customer.email}
                    </h1>
                    <h1 className="font-poppins text-center text-xl">
                      <strong>Telefone:</strong> {customer.phone}
                    </h1>
                  </div>
                </div>
                <div className="py-4"></div>
                <div className="h-auto w-auto px-4  bg-zinc-400 flex-col">
                  <div className="flex py-4 px-6 gap-28 flex-grow">
                    <h1 className="font-poppins text-center text-xl">
                      <strong>Senha:</strong> {customer.password}
                    </h1>
                  </div>
                </div>
                <div className="py-4"></div>
                <div className="h-auto w-auto px-4 bg-zinc-400  flex-col">
                  <div className="flex py-4 gap-2">
                    <h1 className="font-rubik-mono text-center text-lg">
                      LOCALIZAÇÃO
                    </h1>
                  </div>
                  <div className="flex py-4 px-6 gap-28 flex-grow">
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

                <div className="py-2"></div>
                <div className="h-auto w-auto px-4  flex-col">
                  <div
                    className="flex py-4 px-6 gap-2 justify-end items-end flex-grow "
                    onClick={leave}
                  >
                    <LogOut />
                    <h1 className="font-poppins text-center text-xl">
                      <strong>Sair</strong>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </form>
  );
}
