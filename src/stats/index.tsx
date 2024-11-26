import { AlignJustify, ChartNoAxesCombined, CircleUserRound } from "lucide-react";
import { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Stats() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  function goToProfile(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();
    navigate(`/profile${id}`);
  }

  return (
    <div className="min-h-screen bg-pattern bg-no-repeat bg-center">
      <div className="flex justify-between items-center py-6 px-4 md:px-14 h-20 md:h-28">
        <div>
          <AlignJustify className="size-8 md:size-10" />
        </div>
        <div onClick={goToProfile}>
          <CircleUserRound className="size-8 md:size-12" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-40 gap-6 md:gap-10 text-center md:text-left">
        <ChartNoAxesCombined className="size-12 md:size-20" />
        <h1 className="text-xl md:text-2xl font-rubik-mono py-10">
          Relatórios e Estatísticas
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-40 gap-2 md:gap-4 mt-6 text-center md:text-left">
        <h1 className="text-lg md:text-xl">
          <strong>HISTÓRICO DE MEDIÇÕES:</strong>
        </h1>
        <h1 className="text-base md:text-lg">ÚLTIMOS 20 MONITORAMENTOS</h1>
      </div>
    </div>
  );
}
