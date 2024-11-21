import { AlignJustify, CircleUserRound, Sun, RefreshCcw, Droplet, Clock, ChartAreaIcon, ChartNoAxesCombined, CircleAlert } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
}

export function HomeData() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
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

  function goToProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/profile");
  }

  function goToStats(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/stats");
  }

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
        localStorage.setItem("selectedCity", city);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity");
    if (storedCity) {
      setSearch(storedCity);
      fetchWeather(storedCity);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRefresh(true); 
    }, 90000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-pattern bg-no-repeat bg-center">
      <div className="flex justify-between py-8 px-14 h-28">
        <div>
          <AlignJustify className="size-10" />
        </div>
        <div onClick={goToProfile}>
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
        <div className="h-32 bg-blue-500 px-10 rounded-xl flex">
          <div className="flex py-4 gap-10 flex-1 items-center">
            <h1 className="px-2 font-rubik-mono text-center text-lg">
              {weather ? weather.name : "Localização não encontrada"}
              <br />
              {weather && weather.main
                ? `${weather.main.temp.toFixed(0)}°C`
                : "Temperatura não disponível"}
              <br />
              {weather && weather.weather.length > 0
                ? weatherConditionsTranslation[
                    weather.weather[0].description
                  ] || "Condição não disponível"
                : "Condição não disponível"}
            </h1>
            <Sun className="size-10 px" />
            {showRefresh && (
              <button
                onClick={() => {
                  fetchWeather(search);
                  setShowRefresh(false);
                }}
                className="ml-2"
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
            <Droplet className="size-5" />
            <h1 className="font-rubik-mono text-center text-lg">Humidade</h1>
          </div>
          <div className="flex items-center justify-center font-poppins text-xl py-8">
            <h1>
              <strong>22%</strong>
            </h1>
          </div>
          <div className="flex items-center justify-center font-poppins py-6">
            <h1>Ideal: 20% a 40%</h1>
          </div>
        </div>

        <div className="h-52 w-64 bg-zinc-700 px-6 rounded-xl flex-col">
          <div className="flex py-4 gap-2">
            <Clock className="size-5" />
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

      <div className="py-2"></div>
      <div onClick={goToStats} className="flex px-40 gap-1">
      <ChartNoAxesCombined className="size-10 " />
      <p className="py-4">
      Estastísticas
      </p>
      </div>
    </div>
  );
}
