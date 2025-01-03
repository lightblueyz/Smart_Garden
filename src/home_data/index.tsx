import {
  CircleUserRound,
  Sun,
  RefreshCcw,
  Droplet,
  Clock,
  ChartNoAxesCombined,
  LibraryBig,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

interface SensorData {
  luminosidade: number;
  temperatura: number;
  umidade: number;
}

export function HomeData() {
  const { id } = useParams<{ id: string }>();
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [showRefresh, setShowRefresh] = useState(false);
  const navigate = useNavigate();

  const apiTeste = {
    key: "ab12f455b9414021ac3736824c7e2845",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const weatherConditionsTranslation = {
    "clear sky": "céu limpo",
    "few clouds": "poucas nuvens",
    "scattered clouds": "nuvens esparsas",
    "broken clouds": "nuvens quebradas",
    "shower rain": "chuva rápida",
    rain: "chuva",
    thunderstorm: "tempestade",
    snow: "neve",
    mist: "neblina",
    haze: "neblina",
    fog: "nevoeiro",
    sand: "areia",
    dust: "poeira",
    tornado: "tornado",
    squall: "rajada",
  };

  function fetchWeather(city: string) {
    fetch(
      `${apiTeste.base}weather?q=${city}&units=metric&APPID=${apiTeste.key}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  function fetchAndSaveSensorData() {
    fetch("http://localhost:3000/fetch-and-save")
      .then((res) => res.json())
      .then(() => fetchSensorData()) // Após buscar e salvar, chama a função para buscar os dados atualizados
      .catch((error) => {
        console.error("There was a problem fetching and saving sensor data:", error);
      });
  }
  
  function fetchSensorData() {
    fetch("http://localhost:3000/list") // Obter lista de sensores
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // Ordena os dados pelo ID para pegar o último sensor inserido
          const sortedData = data.sort((a, b) => b.id - a.id); // Ordena em ordem decrescente
          const latestData = sortedData[0]; // Pega o primeiro item após ordenação (último ID inserido)
          
          setSensorData({
            luminosidade: latestData.luminosidade,
            temperatura: latestData.temperatura,
            umidade: latestData.umidade,
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem fetching sensor data:", error);
      });
  }
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.city) {
      fetchWeather(user.city); // Busca o clima para a cidade do usuário logado
    }
    fetchAndSaveSensorData(); // Busca e salva a situação atual do sensor
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowRefresh(true); // Exibe o botão de refresh após 1 minuto
    }, 60000); // Tempo ajustado para 1 minuto
  
    // Atualiza os dados a cada 10 segundos
    const dataUpdateInterval = setInterval(() => {
      fetchAndSaveSensorData(); // Atualiza os dados a cada 10 segundos
    }, 10000); // 10 segundos (10000 milissegundos)
  
    return () => {
      clearInterval(interval);
      clearInterval(dataUpdateInterval); // Limpa o intervalo de atualização de dados
    };
  }, []);
  

  return (
    <div className="h-screen bg-pattern bg-no-repeat bg-center">
      <div className="flex justify-between py-8 px-14 h-28">
        <div>
          <img
            src="../../images/Planta_sg (1).PNG"
            alt="Logo da horta"
            className="max-w-[60px] h-auto object-contain "
          />
        </div>
        <div onClick={() => navigate(`/profile/${id}`)}>
          <CircleUserRound className="size-12 transition-transform hover:scale-125 cursor-pointer" />
        </div>
      </div>
      
      <div className="flex justify-between px-40 py-8">
        <div>
          <h1 className="text-2xl font-rubik-mono text-center transition-all hover:text-blue-400">
            Olá, Jardineiro(a)
          </h1>
          <p className="px-10 text-base transition-all hover:text-gray-500">
            <strong>Vamos monitorar a nossa horta!</strong>
          </p>
        </div>
  
        <div className="h-32 bg-blue-500 px-10 rounded-xl flex transition-all hover:bg-blue-600">
          <div className="flex py-4 gap-10 flex-1 items-center">
            <h1 className="px-2 font-rubik-mono text-center text-lg">
              {weather ? weather.name : "Localização não encontrada"}
              <br />
              {weather && weather.main
                ? `${weather.main.temp.toFixed(0)}°C`
                : "Temperatura não disponível"}
              <br />
              {weather && weather.weather.length > 0
                ? weatherConditionsTranslation[weather.weather[0].description] ||
                  "Condição não disponível"
                : "Condição não disponível"}
            </h1>
            <Sun className="size-10 px transition-all hover:rotate-180" />
            {showRefresh && (
              <button
                onClick={() => {
                  fetchWeather("cidade");
                  setShowRefresh(false);
                }}
                className="ml-2 hover:scale-110 transition-transform"
              >
                <RefreshCcw className="size-6" />
              </button>
            )}
          </div>
        </div>
      </div>
  
      <div className="py-24"></div>
      <p className="px-40">
        <strong>MONITORAMENTOS ATIVOS</strong>
      </p>
  
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 py-10 text-zinc-100">
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col ">
          <div className="flex py-4 gap-2">
            <Sun className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">TEMPERATURA</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>
                21°C
              </strong>
            </h1>
          </div>
        </div>
  
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col ">
          <div className="flex py-4 gap-2">
            <Droplet className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">UMIDADE</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>
                {sensorData ? `${sensorData.umidade}%` : "Dados não disponíveis"}
              </strong>
            </h1>
          </div>
        </div>
  
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col ">
          <div className="flex py-4 gap-2">
            <Clock className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">TEMPO</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>9 dias</strong>
            </h1>
          </div>
        </div>
  
        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <ChartNoAxesCombined className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">LUMINOSIDADE</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>
                5760 Lx
              </strong>
            </h1>
          </div>
        </div>
      </div>
 

      <div className="flex justify-center py-5 gap-96 text-xl">
        <p className="flex gap-1 transition-transform hover:scale-105" onClick={() => navigate(`/stats/${id}`)}>
          <ChartNoAxesCombined />
          <strong>ESTATÍSTICAS</strong>
        </p>
        <p className="flex gap-1 transition-transform hover:scale-105" onClick={() => navigate(`/library/`)}>
          <LibraryBig />
          <strong>BIBLIOTECA</strong>
        </p>
      </div>
    </div>
  );
  }
