export function AboutUs() {
    return (
        <div>
            <div className="flex justify-center items-center flex-col gap-3 py-10">
                <h1 className="text-4xl font-rubik-mono ">SOBRE NÓS</h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-3 py-10 px-40">
                <p>Seja bem-vindo ao SmartGarden, esse projeto nasceu de um grupo de cinco programadores apaixonados pela integração de soluções tecnológicas com práticas sustentáveis. Desde o terceiro semestre de 2023, em nosso curso de Desenvolvimento de SIstemas, trabalhamos com dedicação para transformar uma ideia simples em uma ferramenta poderosa para hortas familiares.
                    <br /><br /><br />
                    Nosso objetivo é desenvolver um sistema de sensores baseado em Arduino que facilita o monitoramento de hortas domésticas. Queremos mostrar que a tecnologia pode ser um aliado essencial na jardinagem, permitindo que qualquer pessoa cuide de suas plantas com mais eficiência e conhecimento.
                    <br /><br /><br />
                    Nosso projeto visa não apenas tornar a jardinagem mais interativa e acessível, mas também promover a educação ambiental, tecnológica e a conscientização sobre práticas sustentáveis. Acreditamos que a tecnologia pode democratizar o acesso ao cultivo de plantas, ajudando a integrar a jardinagem ao cotidiano de forma prática e eficiente.
                    <br /><br /><br />
                    Estamos comprometidos em criar uma solução que seja intuitiva e fácil de usar, permitindo que todos, independentemente do nível de experiência, possam desfrutar dos benefícios de um monitoramento inteligente em suas hortas.
                    <br /><br /><br />
                    Juntos, buscamos inspirar um mundo onde a tecnologia e a natureza coexistam harmoniosamente, e onde a jardinagem se torne uma prática ainda mais gratificante e sustentável. Agradecemos por acompanhar nossa jornada e nos deixar fazer parte do seu cotidiano.
                    <br /><br /><br />
                    Se tiver qualquer dúvida ou precisar de suporte, estamos sempre aqui para ajudar. </p>
            </div>

             <div className="flex items-end justify-end px-40">
                <p>Atenciosamente, equipe</p>
                <img src="./public/logo_sg.PNG" alt="" className="max-w-28"/>
             </div>

        </div>
    )
}