"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Eye, Droplets, MapPin } from "lucide-react"

interface WeatherData {
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  visibility: number
  icon: string
}

export function WeatherWidget() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    const fetchWeatherData = async () => {
      if (!navigator.geolocation) {
        console.log("[v0] Geolocation not supported by browser.")
        setWeather(null)
        setLoading(false)
        return
      }

      try {
        // Get user's location
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
            enableHighAccuracy: true,
          })
        })

        const { latitude, longitude } = position.coords

        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,visibility&timezone=auto&forecast_days=1`,
        )

        if (!response.ok) {
          throw new Error("Weather API not available")
        }

        const data = await response.json()

        const weatherCodeMap: { [key: number]: { condition: string; icon: string } } = {
  0: { condition: "Ciel clair", icon: "01d" }, // Clear sky
  1: { condition: "Principalement clair", icon: "01d" }, // Mainly clear
  2: { condition: "Partiellement nuageux", icon: "02d" }, // Partly cloudy
  3: { condition: "Nuageux", icon: "03d" }, // Overcast
  45: { condition: "Brouillard", icon: "50d" }, // Fog
  48: { condition: "Brouillard givrant", icon: "50d" }, // Depositing rime fog
  51: { condition: "Bruine légère", icon: "09d" }, // Drizzle light
  53: { condition: "Bruine modérée", icon: "09d" }, // Drizzle moderate
  55: { condition: "Bruine dense", icon: "09d" }, // Drizzle dense
  56: { condition: "Bruine verglaçante légère", icon: "09d" }, // Freezing Drizzle light
  57: { condition: "Bruine verglaçante dense", icon: "09d" }, // Freezing Drizzle dense
  61: { condition: "Pluie légère", icon: "10d" }, // Rain slight
  63: { condition: "Pluie modérée", icon: "10d" }, // Rain moderate
  65: { condition: "Pluie forte", icon: "10d" }, // Rain heavy
  66: { condition: "Pluie verglaçante légère", icon: "10d" }, // Freezing Rain light
  67: { condition: "Pluie verglaçante forte", icon: "10d" }, // Freezing Rain heavy
  71: { condition: "Chute de neige légère", icon: "13d" }, // Snow fall slight
  73: { condition: "Chute de neige modérée", icon: "13d" }, // Snow fall moderate
  75: { condition: "Chute de neige forte", icon: "13d" }, // Snow fall heavy
  77: { condition: "Grains de neige", icon: "13d" }, // Snow grains
  80: { condition: "Averses de pluie légères", icon: "09d" }, // Rain showers slight
  81: { condition: "Averses de pluie modérées", icon: "09d" }, // Rain showers moderate
  82: { condition: "Averses de pluie violentes", icon: "09d" }, // Rain showers violent
  85: { condition: "Averses de neige légères", icon: "13d" }, // Snow showers slight
  86: { condition: "Averses de neige fortes", icon: "13d" }, // Snow showers heavy
  95: { condition: "Orage léger ou modéré", icon: "11d" }, // Thunderstorm slight or moderate
  96: { condition: "Orage avec grêle légère", icon: "11d" }, // Thunderstorm with slight hail
  99: { condition: "Orage avec grêle forte", icon: "11d" }, // Thunderstorm with heavy hail
};

        const currentHour = new Date().getHours();
        const currentHourIndex = data.hourly.time.findIndex((time: string) => new Date(time).getHours() === currentHour);

        const weatherInfo = weatherCodeMap[data.current_weather.weathercode] || { condition: "Inconnu", icon: "04d" };

        setWeather({
          temperature: Math.round(data.current_weather.temperature),
          condition: weatherInfo.condition,
          humidity: data.hourly.relative_humidity_2m[currentHourIndex],
          windSpeed: Math.round(data.current_weather.windspeed),
          visibility: Math.round(data.hourly.visibility[currentHourIndex] / 1000), // Convert meters to km
          icon: weatherInfo.icon,
        });
        setLoading(false)
      } catch (err) {
        console.log("[v0] Failed to fetch weather data or geolocation denied:", err)
        setWeather(null) // Hide widget if geolocation or API fails
        setLoading(false)
      }
    }

    fetchWeatherData()

    // Update weather every 10 minutes
    const weatherTimer = setInterval(fetchWeatherData, 600000)

    return () => {
      clearInterval(timer)
      clearInterval(weatherTimer)
    }
  }, [])

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case "01d":
      case "01n":
        return <Sun className="w-6 h-6 text-yellow-500" />;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <Cloud className="w-6 h-6 text-gray-500" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      case "13d":
      case "13n":
        return <CloudSnow className="w-6 h-6 text-blue-200" />;
      case "50d":
      case "50n":
        return <Cloud className="w-6 h-6 text-gray-400" />; // Fog
      case "11d":
      case "11n":
        return <CloudRain className="w-6 h-6 text-gray-600" />; // Thunderstorm (using rain icon for simplicity)
      default:
        return <Cloud className="w-6 h-6 text-gray-500" />;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="fixed top-4 right-28 z-50 bg-background/80 backdrop-blur-md border-primary/20 animate-in slide-in-from-top-4 duration-1000 delay-500">
      <CardContent className="p-4 space-y-3">
        {/* Date and Time */}
        <div className="text-center">
          <div className="text-2xl font-mono font-bold text-primary animate-pulse">{formatTime(currentTime)}</div>
          <div className="text-xs text-muted-foreground">{formatDate(currentTime)}</div>
        </div>

        {/* Weather */}
        {loading ? (
          <div className="mt-2 text-xs text-muted-foreground text-center">Chargement météo...</div>
        ) : weather ? (
          <div className="border-t pt-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getWeatherIcon(weather.icon)}
                <span className="text-2xl font-bold">{weather.temperature}°C</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-1">
                <Droplets className="w-3 h-3" />
                <span>{weather.humidity}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Wind className="w-3 h-3" />
                <span>{weather.windSpeed} km/h</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{weather.visibility} km</span>
              </div>
            </div>

            

            {error && <div className="text-xs text-center text-yellow-600">{error}</div>}
          </div>
        ) : (
          <div className="mt-2 text-xs text-muted-foreground text-center">Météo non disponible</div>
        )}
      </CardContent>
    </Card>
  )
}
