import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function goToCreate(event: FormEvent) {
    event.preventDefault();
    navigate("/signup");
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const credentials = { username, password };

    try {
      const response = await fetch("http://localhost:3333/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login bem-sucedido:", data);

        localStorage.setItem("user", JSON.stringify(data));

        navigate(`/home/${data.id}`); // Redireciona para a rota com o ID
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Erro desconhecido");
      }
    } catch (error) {
      setErrorMessage("Erro ao conectar com o servidor. Tente novamente.");
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="py-14">
          <img
            src="/logo_sg.PNG"
            alt="logo"
            className="max-w-[375px] h-auto object-contain"
          />
        </div>
        <div className="flex text-xl w-1/3 px-4">
          <p className="w-full">
            <strong>Usuário</strong>
          </p>
        </div>
        <div className="h-8 border-2 border-black px-4 rounded-full flex items-center gap-3 w-1/3">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              placeholder="Digite seu usuário"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="py-2" />
        <div className="flex text-lg w-1/3 px-4">
          <p className="w-full">
            <strong>Senha</strong>
          </p>
        </div>
        <div className="h-8 border-2 border-black px-4 rounded-full flex items-center gap-3 w-1/3">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="password"
              placeholder="Digite sua senha"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="py-2" />
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-cyan-600 h-8 border-2 border-black px-4 rounded-full gap-3 w-1/4 text-zinc-50 text-xl"
        >
          <strong>ENTRAR</strong>
        </button>
        <div className="flex text-3xl">
          <p className="w-full underline cursor-pointer" onClick={goToCreate}>
            <strong>Cadastrar-se</strong>
          </p>
        </div>
      </div>
    </form>
  );
}
