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
  location: string
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=demo_key&units=metric&lang=fr`,
        )

        if (!response.ok) {
          throw new Error("Weather API not available")
        }

        const data = await response.json()

        setWeather({
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
          visibility: Math.round(data.visibility / 1000), // Convert m to km
          location: `${data.name}, ${data.sys.country}`,
          icon: data.weather[0].icon,
        })
        setLoading(false)
      } catch (err) {
        console.log("[v0] Weather API error, using fallback data:", err)
        // Fallback to simulated data if geolocation or API fails
        setWeather({
          temperature: 18,
          condition: "Partly Cloudy",
          humidity: 65,
          windSpeed: 12,
          visibility: 10,
          location: "Evian-les-Bains, France",
          icon: "02d",
        })
        setError("Utilisation de données simulées")
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

  const getWeatherIcon = (condition: string, iconCode?: string) => {
    if (iconCode) {
      // Use OpenWeatherMap icon codes for more accurate icons
      if (iconCode.includes("01")) return <Sun className="w-6 h-6 text-yellow-500" />
      if (iconCode.includes("02") || iconCode.includes("03") || iconCode.includes("04"))
        return <Cloud className="w-6 h-6 text-gray-500" />
      if (iconCode.includes("09") || iconCode.includes("10")) return <CloudRain className="w-6 h-6 text-blue-500" />
      if (iconCode.includes("13")) return <CloudSnow className="w-6 h-6 text-blue-200" />
    }

    // Fallback to condition-based icons
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return <Sun className="w-6 h-6 text-yellow-500" />
      case "rainy":
      case "rain":
        return <CloudRain className="w-6 h-6 text-blue-500" />
      case "snowy":
      case "snow":
        return <CloudSnow className="w-6 h-6 text-blue-200" />
      default:
        return <Cloud className="w-6 h-6 text-gray-500" />
    }
  }

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

  if (loading) {
    return (
      <Card className="fixed top-4 right-20 z-50 bg-background/80 backdrop-blur-md border-primary/20 animate-in slide-in-from-top-4 duration-1000 delay-500">
        <CardContent className="p-4">
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-primary animate-pulse">{formatTime(currentTime)}</div>
            <div className="text-xs text-muted-foreground">{formatDate(currentTime)}</div>
            <div className="mt-2 text-xs text-muted-foreground">Chargement météo...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!weather) return null

  return (
    <Card className="fixed top-4 right-20 z-50 bg-background/80 backdrop-blur-md border-primary/20 animate-in slide-in-from-top-4 duration-1000 delay-500">
      <CardContent className="p-4 space-y-3">
        {/* Date and Time */}
        <div className="text-center">
          <div className="text-2xl font-mono font-bold text-primary animate-pulse">{formatTime(currentTime)}</div>
          <div className="text-xs text-muted-foreground">{formatDate(currentTime)}</div>
        </div>

        {/* Weather */}
        <div className="border-t pt-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getWeatherIcon(weather.condition, weather.icon)}
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

          <div className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            {weather.location}
          </div>

          {error && <div className="text-xs text-center text-yellow-600">{error}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
