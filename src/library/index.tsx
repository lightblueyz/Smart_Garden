import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export function Library() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <form action="">
      <div className="flex justify-between py-8 px-14 h-28">
        <div>
          <ArrowLeft className="size-10" onClick={() => navigate(`/home/${id}`)} />
        </div>
        <div className="py-3 flex-col">
          <h1 className="text-4xl font-rubik-mono">BIBLIOTECA AMBIENTAL</h1>
          <h2 className="text-xl text-center">TUDO QUE VOCÊ PRECISA SABER SOBRE JARDINAGEM</h2>
        </div>
        <div></div>
      </div>

      <div className="flex flex-wrap">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-20 gap-16 text-xl font-bold underline">
          <a href="../../pdfs/Como Criar Sua Primeira Horta Urbana Passo a Passo para Iniciantes.pdf" target="_blank" className="hover:text-blue-500">
            <p>Como Criar Sua Primeira Horta Urbana</p>
          </a>
          <a href="../../pdfs/Plantas Mais Indicadas para Hortas Urbanas Espécies e Condições.pdf" target="_blank" className="hover:text-blue-500">
            <p>Plantas Mais Indicadas para Hortas Urbanas</p>
          </a>
          <a href="../../pdfs/como-escolher-as-plantas-certas-para-sua-horta.pdf" target="_blank" className="hover:text-blue-500">
            <p>Como Escolher as Plantas Certas para Sua Horta</p>
          </a>
          <a href="../../pdfs/a-importancia-da-biodiversidade-na-sua-horta.pdf" target="_blank" className="hover:text-blue-500">
            <p>A Importância da Biodiversidade na Sua Horta</p>
          </a>
          <a href="../../pdfs/5-erros-comuns-ao-cultivar-hortas-urbanas.pdf" target="_blank" className="hover:text-blue-500">
            <p>5 Erros Comuns ao Cultivar Hortas Urbanas</p>
          </a>
          <a href="../../pdfs/a-importancia-da-educacao-ambiental-no-cultivo-urbano.pdf" target="_blank" className="hover:text-blue-500">
            <p>A Importância da Educação Ambiental no Cultivo Urbano</p>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-20 gap-16 text-xl font-bold underline">
          <a href="../../pdfs/cultivando-hortas-em-pequenos-espacos.pdf" target="_blank" className="hover:text-blue-500">
            <p>Cultivando Hortas em Pequenos Espaços</p>
          </a>
          <a href="../../pdfs/o-papel-das-arvores-em-uma-horta-agroflorestal.pdf" target="_blank" className="hover:text-blue-500">
            <p>O Papel das Árvores em uma Horta Agroflorestal</p>
          </a>
          <a href="../../pdfs/sustentabilidade-na-horta-e-no-dia-a-dia.pdf" target="_blank" className="hover:text-blue-500">
            <p>Sustentabilidade na Horta e no Dia a Dia</p>
          </a>
          <a href="../../pdfs/como-ensinar-criancas-a-cuidar-da-natureza-com-a-horta.pdf" target="_blank" className="hover:text-blue-500">
            <p>Como Ensinar Crianças a Cuidar da Natureza com a Horta</p>
          </a>
          <a href="../../pdfs/beneficios-dos-alimentos-organicos-e-frescos.pdf" target="_blank" className="hover:text-blue-500">
            <p>Benefícios dos Alimentos Orgânicos e Frescos</p>
          </a>
          <a href="../../pdfs/como-escolher-o-local-ideal-para-sua-horta.pdf" target="_blank" className="hover:text-blue-500">
            <p>Como Escolher o Local Ideal para Sua Horta</p>
          </a>
          <a href="../../pdfs/o-impacto-das-hortas-urbanas-nas-cidades.pdf" target="_blank" className="hover:text-blue-500">
            <p>O Impacto das Hortas Urbanas nas Cidades</p>
          </a>
        </div>
      </div>
    </form>
  );
}
