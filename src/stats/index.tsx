import { AlignJustify, ChartNoAxesCombined, CircleUserRound } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// Registra os componentes necessários para o Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export function Stats() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sensorData, setSensorData] = useState<any[]>([]); // Estado para armazenar os dados

  // Função para buscar os dados mais recentes
  const fetchSensorData = () => {
    fetch("http://localhost:3000/list")
      .then((res) => res.json())
      .then((data) => {
        const latestData = data
          .sort((a: any, b: any) => a.id - b.id) // Ordena os dados por ID crescente para pegar os mais antigos
          .slice(-100); // Pega os últimos 100 dados
        setSensorData(latestData); // Armazena os dados no estado
      })
      .catch((error) => {
        console.error("There was a problem fetching sensor data:", error);
      });
  };

  // Atualiza os dados a cada 10 segundos
  useEffect(() => {
    fetchSensorData(); // Inicializa a busca dos dados

    const interval = setInterval(fetchSensorData, 10000); // Atualiza a cada 10 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  function goToProfile(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();
    navigate(`/profile${id}`);
  }

  // Gerando dados falsos para Temperatura e Luminosidade
  const generateFakeTemperatureData = () => {
    return Array.from({ length: 100 }, (_, i) => ({
      timestamp: Date.now() - (100 - i) * 1000, // Subtrai para simular a ordem cronológica
      temperatura: Math.random() * (25 - 20) + 20, // Gera valores aleatórios entre 20 e 25
    }));
  };

  const generateFakeLuminosityData = () => {
    return Array.from({ length: 100 }, (_, i) => ({
      timestamp: Date.now() - (100 - i) * 1000, // Subtrai para simular a ordem cronológica
      luminosidade: Math.random() * (7500 - 5000) + 5000, // Gera valores aleatórios entre 5000 e 7500
    }));
  };

  // Dados para o gráfico de Temperatura (com dados falsos)
  const temperatureData = {
    labels: generateFakeTemperatureData().map((data) => new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: generateFakeTemperatureData().map((data) => data.temperatura),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Dados para o gráfico de Luminosidade (com dados falsos)
  const luminosityData = {
    labels: generateFakeLuminosityData().map((data) => new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
    datasets: [
      {
        label: "Luminosidade",
        data: generateFakeLuminosityData().map((data) => data.luminosidade),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Dados para o gráfico de Umidade (com os últimos 100 dados reais do backend)
  const humidityData = {
    labels: sensorData.map((data) => new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
    datasets: [
      {
        label: "Umidade (%)",
        data: sensorData.map((data) => data.umidade),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

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
        <h1 className="text-xl md:text-2xl font-rubik-mono py-6">Relatórios e Estatísticas</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-40 gap-2 md:gap-4 mt-6 text-center md:text-left">
        <h1 className="text-lg md:text-xl">
          <strong>HISTÓRICO DE MEDIÇÕES:</strong>
        </h1>
        <h1 className="text-base md:text-lg">ÚLTIMOS 50 MONITORAMENTOS</h1>
      </div>

      {/* Gráfico de Temperatura (dados falsos) */}
      <div className="px-6 md:px-40 py-6">
        <h2 className="text-lg font-bold">Temperatura (°C)</h2>
        <Line
          data={temperatureData}
          options={{
            responsive: true,
            scales: {
              y: {
                min: 0, // Base 0
                max: 100, // Máximo 100
              },
            },
          }}
          height={150} // Reduz a altura do gráfico
          width={300} // Reduz a largura do gráfico
        />
      </div>

      {/* Gráfico de Luminosidade (dados falsos) */}
      <div className="px-6 md:px-40 py-6">
        <h2 className="text-lg font-bold">Luminosidade</h2>
        <Line
          data={luminosityData}
          options={{
            responsive: true,
            scales: {
              y: {
                min: 0,
                max: 10000, // Ajuste para o gráfico de luminosidade
              },
            },
          }}
          height={150} // Reduz a altura do gráfico
          width={300} // Reduz a largura do gráfico
        />
      </div>

      {/* Gráfico de Umidade (últimos 100 dados reais do backend) */}
      <div className="px-6 md:px-40 py-6">
        <h2 className="text-lg font-bold">Umidade (%)</h2>
        <Line
          data={humidityData}
          options={{
            responsive: true,
            scales: {
              y: {
                min: 0,
                max: 100,
              },
            },
          }}
          height={150} // Reduz a altura do gráfico
          width={300} // Reduz a largura do gráfico
        />
      </div>
    </div>
  );
}
