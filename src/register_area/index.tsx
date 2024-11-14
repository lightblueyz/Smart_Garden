import { FormEvent, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Register() {
  const navigate = useNavigate();

  function returnSignIn() {
    navigate("/signin");
  }

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

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passRef.current?.value,
      phone: phonRef.current?.value,
      city: cityRef.current?.value,
      state: stateRef.current?.value,
      country: contRef.current?.value,
      cep: cepRef.current?.value,
    });

    navigate("/home");
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex">
      <div className="flex flex-col justify-center items-center w-1/2 bg-white px-8">
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
        <div className="w-full max-w-sm">
          <div className="text-sm">
            <p>
              <strong>NOME COMPLETO</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="text"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={nameRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>EMAIL</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="email"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={emailRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>CEP</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="number"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={cepRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>SENHA</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="password"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={passRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>CONFIRME SUA SENHA</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="password"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>TELEFONE</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="number"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={phonRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>CIDADE</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="text"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={cityRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>ESTADO</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="text"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={stateRef}
              />
            </div>
          </div>
          <div className="py-3"></div>
          <div className="text-sm">
            <p>
              <strong>PAÍS</strong>
            </p>
            <div className="h-7 border-2 border-black px-4 rounded-full flex items-center gap-3 w-full">
              <input
                type="text"
                className="bg-transparent text-base placeholder-zinc-400 outline-none flex-1"
                ref={contRef}
              />
            </div>
          </div>
          <div className="py-5"></div>
          <button
            type="submit"
            className="bg-cyan-600 h-10 border-2 border-black px-4 rounded-full text-zinc-50 text-xl w-full"
          >
            <strong>ENTRAR</strong>
          </button>
          <div className="text-center py-5">
            <p className="underline cursor-pointer" onClick={returnSignIn}>
              <strong>JÁ POSSUI CONTA?</strong>
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./public/banner_right.png')" }}
      ></div>
    </form>
  );
}
