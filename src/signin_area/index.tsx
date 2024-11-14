import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function SingIn() {
  const navigate = useNavigate();

  function goToCreate(event: FormEvent) {
    event.preventDefault();
    navigate("/signup");
  }

  function goToProfile(event: FormEvent) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <form onSubmit={goToProfile}>
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="py-14">
          <img
            src="./public/logo_sg.PNG"
            alt="logo"
            className="max-w-[375px] h-auto object-contain"
          />
        </div>
        <div className=""></div>
        <div className="flex text-xl w-1/3 px-4">
          <p className="w-full">
            <strong>EMAIL</strong>
          </p>
        </div>
        <div className="h-8 border-2 border-black px-4 rounded-full flex items-center gap-3 w-1/3">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="email"
              className="bg-transparent text-lg placerholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className="py-2" />
        <div className="flex text-lg w-1/3 px-4">
          <p className="w-full">
            <strong>SENHA</strong>
          </p>
        </div>
        <div className="h-8 border-2 border-black px-4 rounded-full flex items-center gap-3 w-1/3">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="password"
              className="bg-transparent text-lg placerholder-zinc-400 outline-none flex-1"
            />
          </div>
        </div>
        <div className="flex text-3x1 w-1/3 px-4">
          <p className="w-full underline">
            <strong>Esqueceu a senha?</strong>
          </p>
        </div>
        <div className="py-2" />
        <button
          type="submit"
          className="bg-cyan-600 h-8 border-2 border-black px-4 rounded-full gap-3 w-1/4 text-zinc-50 text-xl"
        >
          <strong>ENTRAR</strong>
        </button>
        <div className="flex text-3x1">
          <p className="w-full underline cursor-pointer" onClick={goToCreate}>
            <strong>Cadastrar-se</strong>
          </p>
        </div>
      </div>
    </form>
  );
}
