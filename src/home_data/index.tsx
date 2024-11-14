<<<<<<< HEAD
import { AlignJustify, CircleUserRound, Sun } from "lucide-react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function HomeData() {
  const navigate = useNavigate();

  function goToProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/profile");
  }

  return (
    <div className="h-screen bg-pattern bg-no-repeat bg-center">
      <div className="flex justify-between py-8 px-14 h-28">
        <div>
          <AlignJustify className="size-10" />
        </div>
        <div className="" onClick={goToProfile}>
          <CircleUserRound className="size-12" />
        </div>
      </div>
      <div className="flex justify-between px-40 py-8">
        <div>
          <h1 className="text-2xl font-rubik-mono text-center">
            Olá, Jardineiro(a)
          </h1>
          <p className="px-10 text-base">
            <strong>Vamos monitorar a nossa horta!</strong>
          </p>
        </div>
        <div className="h-32 bg-blue-500 px-6 rounded-xl flex ">
          <div className="flex py-4 gap-40 flex-1">
            <h1 className="px-2 font-rubik-mono text-center text-lg">
              21° C <br />
              Ensolarado
            </h1>
            <Sun className="size-10 px" />
          </div>
        </div>
      </div>
      <div className="py-24"></div>
      <p className="px-40">
        <strong>MONITORAMENTOS ATIVOS</strong>
      </p>
      <div className="flex justify-center px-20 gap-64 py-10 text-zinc-100">
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">TEMPERATURA</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>22° C</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 15°C a 25°C</h1>
          </div>
        </div>
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">UMIDADE</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>55% RH</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 40% a 70%</h1>
          </div>
        </div>

        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">Tempo</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>20 dias</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 70 a 80</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
import { AlignJustify, CircleUserRound, Sun } from "lucide-react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function HomeData() {
  const navigate = useNavigate();

  function goToProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/profile");
  }

  return (
    <div className="h-screen bg-pattern bg-no-repeat bg-center">
      <div className="flex justify-between py-8 px-14 h-28">
        <div>
          <AlignJustify className="size-10" />
        </div>
        <div className="" onClick={goToProfile}>
          <CircleUserRound className="size-12" />
        </div>
      </div>
      <div className="flex justify-between px-40 py-8">
        <div>
          <h1 className="text-2xl font-rubik-mono text-center">
            Olá, Jardineiro(a)
          </h1>
          <p className="px-10 text-base">
            <strong>Vamos monitorar a nossa horta!</strong>
          </p>
        </div>
        <div className="h-32 bg-blue-500 px-6 rounded-xl flex ">
          <div className="flex py-4 gap-40 flex-1">
            <h1 className="px-2 font-rubik-mono text-center text-lg">
              21° C <br />
              Ensolarado
            </h1>
            <Sun className="size-10 px" />
          </div>
        </div>
      </div>
      <div className="py-24"></div>
      <p className="px-40">
        <strong>MONITORAMENTOS ATIVOS</strong>
      </p>
      <div className="flex justify-center px-20 gap-64 py-10 text-zinc-100">
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">TEMPERATURA</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>22° C</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 15°C a 25°C</h1>
          </div>
        </div>
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">UMIDADE</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>55% RH</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 40% a 70%</h1>
          </div>
        </div>

        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">Tempo</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>20 dias</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 70 a 80</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> fd88f77 (commited)
