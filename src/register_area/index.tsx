import { FormEvent, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Register() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const apiTeste = {
    key: "ab12f455b9414021ac3736824c7e2845",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  function returnSignIn() {
    navigate("/signin");
  }


  const usernameRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const phonRef = useRef<HTMLInputElement | null>(null);
  const cityRef = useRef<HTMLInputElement | null>(null);
  const stateRef = useRef<HTMLInputElement | null>(null);
  const contRef = useRef<HTMLInputElement | null>(null);
  const cepRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

   
    if (
      !usernameRef.current?.value ||
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !passRef.current?.value ||
      !phonRef.current?.value ||
      !cityRef.current?.value ||
      !stateRef.current?.value ||
      !contRef.current?.value ||
      !cepRef.current?.value
    )
      return;

    try {
      const response = await api.post("/customer", {
        username: usernameRef.current?.value,
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passRef.current?.value,
        phone: phonRef.current?.value,
        city: cityRef.current?.value,
        state: stateRef.current?.value,
        country: contRef.current?.value,
        cep: cepRef.current?.value,
      });

      if (response.status === 201) {
        fetch(
          `${apiTeste.base}weather?q=${search}&units=metric&APPID=${apiTeste.key}`
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });

        navigate("/home");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if ((error as any)?.response?.status === 409) {
          alert(
            "Usuário ou email já está em uso. Tente novamente com outros dados."
          );
        } else {
          console.error("Erro no cadastro:", error.message);
          alert("Ocorreu um erro. Tente novamente mais tarde.");
        }
      } else {
        console.error("Erro desconhecido:", error);
        alert("Erro inesperado. Por favor, tente novamente.");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex flex-col md:flex-row">
  <div className="flex flex-col justify-center items-center w-full md:w-3/5 bg-white px-8 py-5">
    <div className="py-5">
      <img
        src="./public/logo_sg.PNG"
        alt="logo"
        className="max-w-[200px] h-auto object-contain mx-auto"
      />
      <h1 className="text-center py-5 text-xl">
        <strong>CADASTRO</strong>
      </h1>
    </div>

    <div className="flex flex-col md:flex-row w-full gap-8">
      <div className="w-full md:w-1/2 space-y-4">
        <div className="text-sm">
          <p>
            <strong>USERNAME</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={usernameRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>NOME COMPLETO</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={nameRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>EMAIL</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="email"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={emailRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>CEP</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={cepRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>TELEFONE</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={phonRef}
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <div className="text-sm">
          <p>
            <strong>CIDADE</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={cityRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>SENHA</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="password"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={passRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>CONFIRME SUA SENHA</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="password"
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={stateRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>ESTADO</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={stateRef}
            />
          </div>
        </div>
        <div className="text-sm">
          <p>
            <strong>PAÍS</strong>
          </p>
          <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
            <input
              required
              type="text"
              className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              ref={contRef}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-cyan-600 h-10 border-2 border-black px-4 rounded-full text-zinc-50 text-xl w-full"
        >
          <strong>Cadastrar-se</strong>
        </button>
        <div className="text-end">
          <p className="underline cursor-pointer" onClick={returnSignIn}>
            <strong>JÁ POSSUI CONTA?</strong>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    className="w-full md:w-2/5 h-screen bg-cover bg-center hidden md:block"
    style={{ backgroundImage: "url('./public/banner_right.png')" }}
  ></div>
</form>

  );
}
