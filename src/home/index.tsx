export function Lobby() {
    return (
        <div className="h-screen bg-pattern bg-no-repeat bg-center py-5">

            <div className="flex justify-between py-6">
                <div className="flex-grow basis-1/2 px-20">
                    <img
                        src="https://i.imgur.com/i2jm8dd.png"
                        alt="logo"
                        className="max-w-[250px] h-auto object-contain"
                    />
                </div>
                <div className="flex gap-6 py-3 basis-1/3">
                    <p>Home</p>
                    <p>Sobre</p>
                    <p>Agrofloresta</p>
                    <p>Compre seu sensor</p>
                    <p>Suporte</p>
                </div>

                <div className="px-20 flex ">
                    <img
                        src="https://i.imgur.com/sCgFWLB.png"
                        alt="profile"
                        className="max-w-[50px] h-auto object-contain"
                    />
                </div>
            </div>
            <div className="py-5">
                <img
                    src="https://i.imgur.com/5GoGhti.png"
                    alt="banner"
                    className="w-full max-w-[1200x] mx-auto h-auto object-contain"
                />
            </div>

            <div className="flex flex-col justify-center items-center py-10">
                <p className="text-2xl font-rubik-mono text-center">missões e valores</p>
                <p className="mt-2 text-center text-lg">NOSSOS PRINCIPAIS PILARES</p>

            </div>
            <div className="flex flex-col items-center text-center mx-auto">
                NOSSO PROPÓSITO É PROMOVER A JARDINAGEM SUSTENTÁVEL E CONSCIENTE POR MEIO DA INTEGRAÇÃO DE PRINCÍPIOS
                AGROFLORESTAIS E TECNOLOGIA AVANÇADA. UTILIZAMOS SENSORES<br />
                PARA MONITORAR E OTIMIZAR AS CONDIÇÕES DO SOLO, EDUCANDO FAMÍLIAS E COMUNIDADES SOBRE PRÁTICAS QUE RESPEITAM
                E IMITAM OS PROCESSOS NATURAIS DOS ECOSSISTEMAS.<br />
                BUSCAMOS CULTIVAR UM FUTURO MAIS VERDE, CONECTANDO PESSOAS AO MEIO AMBIENTE E À SABEDORIA AGROFLORESTAL.
            </div>
            <div className="flex justify-center gap-44 py-24">
                <img src="https://i.imgur.com/hsPVCeW.png" alt="img1" />
                <img src="https://i.imgur.com/LHCYxJY.png" alt="img2" />
                <img src="https://i.imgur.com/9uwws9p.png" alt="img3" />
                <img src="https://i.imgur.com/X3WyL1J.png" alt="img4" />
                <img src="https://i.imgur.com/0VFRapD.png" alt="img5" />
            </div>




        </div>


    )
}
