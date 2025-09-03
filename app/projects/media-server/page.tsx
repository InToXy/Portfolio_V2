import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, Server, Cloud, HardDrive, Zap, Network } from "lucide-react"

export default function MediaServerProject() {
  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-700">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Link>
          </Button>
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Projet : Serveur Multimédia Personnel</h1>
          <p className="text-xl text-muted-foreground">
            Mise en place d'une solution complète de gestion et de diffusion de contenu multimédia à domicile
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="https://www.desdeelreloj.com/content/images/size/w1000/2024/05/ider-0861.jpg"
            alt="Serveur Multimédia"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Docker",
                "Docker Compose",
                "Plex Media Server",
                "Radarr",
                "Jackett",
                "Transmission",
                "FlareSolverr",
                "Linux",
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context and Objectives */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <CardHeader>
            <CardTitle>Contexte et Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Ce projet consiste en la conception et le déploiement d'un serveur multimédia personnel robuste et automatisé,
              permettant de centraliser, organiser et diffuser des films, séries et autres contenus. L'objectif était de
              créer une infrastructure flexible et facile à maintenir grâce à la conteneurisation.
            </p>
            <p>
              J'ai utilisé Docker et Docker Compose pour orchestrer plusieurs services, chacun ayant un rôle spécifique
              dans la chaîne de gestion multimédia : Plex pour la diffusion, Radarr pour la gestion des films, Jackett
              pour l'indexation, Transmission pour le téléchargement, et Flaresolverr pour contourner les protections anti-bot.
              Cette approche modulaire assure une grande scalabilité et une maintenance simplifiée.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <HardDrive className="w-4 h-4" />
                  Gestion de Contenu
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Centralisation des films et séries</li>
                  <li>• Organisation automatique des médias</li>
                  <li>• Accès et diffusion via Plex</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Automatisation
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Récupération automatisée de nouveaux contenus</li>
                  <li>• Indexation et métadonnées enrichies</li>
                  <li>• Contournement des protections anti-bot (FlareSolverr)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader>
            <CardTitle>Architecture Technique (Docker Compose)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">
              Voici un extrait simplifié de la configuration Docker Compose utilisée pour orchestrer les services :
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm overflow-x-auto">
              <code className="text-gray-800 dark:text-gray-200">
{`version: "3.8"

services:
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    environment:
      - PUID=\${PUID:-1000}
      - PGID=\${PGID:-1000}
      - TZ=\${TZ:-Europe/Paris}
      - VERSION=docker
    ports:
      - 32400:32400
    volumes:
      - ./data/plex:/config
      - /mnt/f/Films:/data/movies
    networks:
      - media_network
    restart: unless-stopped

  radarr:
    image: lscr.io/linuxserver/radarr:4.7.5
    container_name: radarr
    environment:
      - PUID=\${PUID:-1000}
      - PGID=\${PGID:-1000}
      - TZ=\${TZ:-Europe/Paris}
    ports:
      - "7878:7878"
    volumes:
      - ./data/radarr:/config
      - /mnt/f/Films:/movies
      - ./data/downloads:/downloads/temp
    networks:
      - media_network
    depends_on:
      - transmission
    restart: unless-stopped

  jackett:
    image: lscr.io/linuxserver/jackett:latest
    container_name: jackett
    environment:
      - PUID=\${PUID:-1000}
      - PGID=\${PGID:-1000}
      - TZ=\${TZ:-Europe/Paris}
    ports:
      - "9117:9117"
    volumes:
      - ./data/jackett:/config
      - ./data/downloads:/downloads
    networks:
      - media_network
    restart: unless-stopped

  transmission:
    image: lscr.io/linuxserver/transmission:latest
    container_name: transmission
    environment:
      - PUID=\${PUID:-1000}
      - PGID=\${PGID:-1000}
      - TZ=\${TZ:-Europe/Paris}
      - USER=admin
      - PASS=adminadmin
    ports:
      - "9091:9091"
      - "51413:51413"
      - "51413:51413/udp"
    volumes:
      - ./data/transmission:/config
      - ./data/downloads:/data/downloads/temp
    networks:
      - media_network
    restart: unless-stopped

  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - LOG_LEVEL=info
      - LOG_HTML=false
      - CAPTCHA_SOLVER=none
      - TZ=\${TZ:-Europe/Paris}
    dns:
      - 9.9.9.9
      - 2620:fe::9
    ports:
      - "8191:8191"
    networks:
      - media_network
    restart: unless-stopped

networks:
  media_network:
    driver: bridge`}
              </code>
            </pre>
          </CardContent>
        </Card>

        {/* Results and Learning */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-700">
          <CardHeader>
            <CardTitle>Résultats et Apprentissages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Réalisations</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Centralisation et organisation des contenus multimédias.</li>
                <li>• Automatisation du processus de récupération et de gestion des médias.</li>
                <li>• Accès distant et diffusion fluide via Plex.</li>
                <li>• Mise en place d'une architecture conteneurisée pour une meilleure portabilité et gestion.</li>
                <li>• Optimisation des ressources et stabilité du système.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Maîtrise de Docker et Docker Compose pour l'orchestration de services.</li>
                <li>• Configuration et optimisation de serveurs multimédias.</li>
                <li>• Gestion des volumes persistants et des réseaux Docker.</li>
                <li>• Dépannage et maintenance d'environnements conteneurisés.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-800">
          <Button asChild>
            <a href="https://github.com/InToXy" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}