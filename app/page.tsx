"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Cloud,
  GitBranch,
  Monitor,
  Shield,
  Database,
  ExternalLink,
  Calendar,
  Phone,
  MapPin,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MouseFollower } from "@/components/mouse-follower"
import { WeatherWidget } from "@/components/weather-widget"
import { AnimatedBackground } from "@/components/animated-background"
import { TypingAnimation } from "@/components/typing-animation"
import { PhotoGallery } from "@/components/photo-gallery"

export default function DevOpsPortfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedPassion, setSelectedPassion] = useState<{
    title: string
    photos: { src: string; alt: string }[]
  } | null>(null)

  const passionPhotos = {
    hiking: [
      {
        src: "/abstract-geometric-shapes.png?key=hiking1&height=600&width=800&query=mountain summit sunrise with hiker silhouette, alpine peaks, golden hour lighting",
        alt: "Sommet de montagne au lever du soleil",
      },
      {
        src: "/abstract-geometric-shapes.png?key=hiking2&height=600&width=800&query=forest hiking trail with tall trees, dappled sunlight, backpack and hiking boots",
        alt: "Sentier forestier en randonnée",
      },
      {
        src: "/abstract-geometric-shapes.png?key=hiking3&height=600&width=800&query=mountain lake reflection with hiking gear, peaceful alpine scenery, clear blue water",
        alt: "Lac de montagne et équipement de randonnée",
      },
      {
        src: "/abstract-geometric-shapes.png?key=hiking4&height=600&width=800&query=rocky mountain path with hiking poles, dramatic cliff views, adventure landscape",
        alt: "Chemin rocheux en montagne",
      },
    ],
    motorcycle: [
      {
        src: "/abstract-geometric-shapes.png?key=moto1&height=600&width=800&query=motorcycle on scenic mountain road, winding curves, beautiful landscape view",
        alt: "Moto sur route de montagne",
      },
      {
        src: "/abstract-geometric-shapes.png?key=moto2&height=600&width=800&query=motorcycle engine close-up with tools, mechanical parts, garage workshop setting",
        alt: "Moteur de moto et outils mécaniques",
      },
      {
        src: "/abstract-geometric-shapes.png?key=moto3&height=600&width=800&query=motorcycle helmet and gloves on bike seat, safety gear, riding equipment",
        alt: "Équipement de moto et casque",
      },
      {
        src: "/abstract-geometric-shapes.png?key=moto4&height=600&width=800&query=motorcycle parked at scenic overlook, sunset view, touring adventure",
        alt: "Moto garée avec vue panoramique",
      },
    ],
    travel: [
      {
        src: "/abstract-geometric-shapes.png?key=travel1&height=600&width=800&query=passport with travel stamps, world map, airplane ticket, adventure planning",
        alt: "Passeport et planification de voyage",
      },
      {
        src: "/abstract-geometric-shapes.png?key=travel2&height=600&width=800&query=famous landmark with tourist, cultural discovery, architectural monument",
        alt: "Découverte de monument culturel",
      },
      {
        src: "/abstract-geometric-shapes.png?key=travel3&height=600&width=800&query=local market with colorful foods, cultural immersion, traditional crafts",
        alt: "Marché local et immersion culturelle",
      },
      {
        src: "/abstract-geometric-shapes.png?key=travel4&height=600&width=800&query=backpack and camera at scenic destination, travel photography, exploration",
        alt: "Sac à dos et photographie de voyage",
      },
    ],
  }

  const openGallery = (passionType: "hiking" | "motorcycle" | "travel", title: string) => {
    setSelectedPassion({
      title,
      photos: passionPhotos[passionType],
    })
    setGalleryOpen(true)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <MouseFollower />
      <ThemeToggle />
      {/* Weather Widget */}
      <WeatherWidget />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-card to-background z-10 animate-in fade-in duration-1000">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Animated Profile Image */}
            <img
              src="/profile-5.png"
              alt="Mathéo Pinget - Photo professionnelle"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/10 animate-in zoom-in duration-1000 delay-300 hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
          <h1 className="font-heading font-black text-4xl md:text-6xl text-primary mb-6 text-balance animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            <TypingAnimation text="Je suis Mathéo Pinget, Ingénieur DevOps Cloud" className="inline-block" speed={80} />
          </h1>
          {/* Animated Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-in slide-in-from-bottom-8 duration-1000 delay-700">
            Je construis des solutions performantes et sécurisées avec Terraform, Ansible, Docker et GitLab CI.
          </p>
          {/* Animated Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-in slide-in-from-bottom-8 duration-1000 delay-900">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="mailto:matheo.pinget@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Me Contacter
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://github.com/InToXy" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/matheo-pinget-8a60252a9/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://cal.com/matheo-pinget-xadubu" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Prendre RDV
              </a>
            </Button>
          </div>
          {/* Animated Contact Information */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-1100">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              06.40.24.07.08
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              Evian-les-Bains, France
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/30 relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Section Title */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8 animate-in slide-in-from-left-8 duration-1000">
            À Propos
          </h2>
          {/* Animated Paragraph */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-in slide-in-from-right-8 duration-1000 delay-300">
            Ingénieur DevOps en alternance, spécialisé en automatisation d'infrastructures et CI/CD. Maîtrise de
            Terraform, Ansible, Docker, GitLab CI. Expérience en réseaux, cybersécurité et supervision (Prometheus,
            Grafana, Zabbix). Motivé et rigoureux, je souhaite contribuer à des projets cloud performants et sécurisés.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-primary mb-12 animate-in zoom-in duration-1000">
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "DevOps & Cloud",
                skills: ["Docker", "Terraform", "Ansible", "Azure", "AWS", "VCD", "Traefik Proxy"],
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "CI/CD & Automatisation",
                skills: ["GitLab CI", "Bash", "PowerShell", "Git", "GitHub"],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Réseaux & Cybersécurité",
                skills: ["Cisco", "pfSense", "WatchGuard", "Firewall", "Hardening", "Audit de sécurité"],
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Programmation & Monitoring",
                skills: ["Python", "Node.js", "Prometheus", "Grafana", "Zabbix", "API REST", "Centreon", "PRTG"],
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Administration Système",
                skills: ["Linux", "Windows Server", "Active Directory", "Bind", "Debian", "Ubuntu", "CentOS"],
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Gestion de Projet & Méthodologies",
                skills: ["Méthodes agiles", "Scrum", "Gestion de projet", "SQL", "HTML", "CSS", "JWT"],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-in fade-in-50 duration-700 group"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {/* Animated Icons */}
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-card/50 relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-primary mb-12 animate-in zoom-in duration-1000">
            Projets & Réalisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Breezy - Réseau Social Léger",
                description:
                  "Développement d'un réseau social réactif inspiré de Twitter/X, optimisé pour les environnements à faibles ressources. Architecture microservices avec Docker, authentification JWT, et interface React/Next.js responsive.",
                tech: [
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "Docker",
                  "Traefik",
                  "JWT",
                  "Microservices",
                ],
                image:
                  "sleek mobile social media app interface with dark blue theme, floating message bubbles, user avatars, and modern UI components",
                link: "/projects/breezy",
              },
              {
                title: "EasySave - Logiciel de Sauvegarde",
                description:
                  "Logiciel de sauvegarde professionnel évolutif en C#/.NET avec architecture MVC. Interface CLI et graphique WPF, chiffrement SHA-256, sauvegardes parallèles et gestion des priorités. Méthodologie Scrum avec Git workflow complet.",
                tech: ["C#", ".NET 8.0", "WPF", "MVC", "SHA-256", "JSON", "Doxygen", "JIRA", "Git", "Scrum"],
                image:
                  "modern Windows desktop application with file backup progress, folder synchronization icons, and professional blue interface",
                link: "/projects/easysave",
              },
              {
                title: "Gestion Sécurisée des Mots de Passe",
                description:
                  "Solution DevSecOps automatisée pour la gestion sécurisée des mots de passe d'infrastructure chez Orange Business. Pipeline CI/CD avec HashiCorp Vault, chiffrement AES-256, et traçabilité complète des opérations.",
                tech: [
                  "HashiCorp Vault",
                  "Ansible",
                  "GitLab CI/CD",
                  "OpenSSL",
                  "AES-256",
                  "WSL",
                  "DevSecOps",
                  "Automation",
                ],
                image:
                  "cybersecurity vault interface with encrypted password manager, digital locks, security shields, and green authentication indicators",
                link: "/projects/password-management",
              },
              {
                title: "Optimisation de Tournées - ADEME",
                description:
                  "Projet de recherche opérationnelle pour l'ADEME visant à réduire les émissions CO₂ des transports. Implémentation d'algorithmes d'optimisation (recuit simulé, génétique, colonie de fourmis) pour résoudre le problème du voyageur de commerce.",
                tech: [
                  "Python",
                  "PLNE",
                  "Algorithmes Génétiques",
                  "Recuit Simulé",
                  "Colonie de Fourmis",
                  "Optimisation",
                  "Recherche Opérationnelle",
                ],
                image:
                  "interactive map with optimized delivery routes, green eco-friendly paths, algorithm visualization, and CO2 reduction metrics",
                link: "/projects/route-optimization",
              },
              {
                title: "Création d'une infrastructure Cloud avec OpenStack",
                description:
                  "Construction d'un réseau informatique pour une petite structure à l'aide d'OpenStack. Le projet impliquait la mise en place de serveurs virtuels (CentOS, Windows 10), la configuration d'un réseau privé, la gestion des adresses IP et la configuration des routages pour assurer la communication entre les machines.",
                tech: [
                  "OpenStack",
                  "CentOS 8",
                  "Windows 10",
                  "DNS",
                  "Apache",
                  "MySQL",
                  "Nextcloud",
                  "Prometheus",
                  "Grafana",
                ],
                image:
                  "futuristic cloud datacenter with server racks, virtual machine instances, network topology diagram, and blue holographic displays",
                link: "/projects/openstack",
              },
              {
                title: "Sécurisation d'un Système d'Information",
                description:
                  "Conception d'une infrastructure d'entreprise complète de A à Z en suivant les recommandations de l'ANSSI. Le projet incluait la création d'une DMZ, la configuration d'un SI interne, et la mise en place de multiples couches de sécurité et de supervision.",
                tech: [
                  "ESXI 6.7",
                  "Cisco",
                  "WatchGuard",
                  "StormShield",
                  "Veeam",
                  "PRTG",
                  "Splunk",
                  "Active Directory",
                  "BIND",
                  "Apache",
                ],
                image:
                  "digital fortress with multiple security layers, firewall barriers, network monitoring screens, and red security alerts",
                link: "/projects/security",
              },
              {
                title: "Découverte du Pentesting",
                description:
                  "Projet en autonomie pour approfondir les techniques de Pentesting. Il a fallu répondre à un questionnaire technique en utilisant divers outils sur des machines virtuelles (Kali Linux, Windows, CentOS) pour identifier des vulnérabilités.",
                tech: ["Kali Linux", "Metasploit", "Nmap", "Hydra", "SQLmap"],
                image:
                  "dark hacker terminal with green matrix code, vulnerability scan results, penetration testing tools, and ethical hacking interface",
                link: "/projects/pentesting",
              },
              {
                title: "Traitement de données avec Python",
                description:
                  "Développement d'un script Python pour filtrer et analyser des données issues de fichiers de calendrier (.csv). L'objectif était d'extraire des informations spécifiques (événements, réunions) et de les présenter de manière claire sous forme de tableau (Markdown) et de graphiques.",
                tech: ["Python", "CSV", "Markdown", "HTML/CSS"],
                image:
                  "colorful data visualization dashboard with Python charts, CSV spreadsheets, calendar events, and interactive graphs",
                link: "/projects/python-data",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group animate-in fade-in-50 duration-700 hover:rotate-1"
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  {/* Animated Project Images */}
                  <img
                    src={`/abstract-geometric-shapes.png?key=d2xj8&height=200&width=400&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href={project.link}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-primary mb-12 animate-in zoom-in duration-1000">
            Expérience Professionnelle
          </h2>
          <div className="space-y-8">
            {[
              {
                role: "Ingénieur DevOps",
                company: "Orange Business",
                period: "2024 - 2027 (en alternance)",
                achievements: [
                  "Automatisation du déploiement d'infrastructures avec Terraform et Ansible",
                  "Gestion de pipelines CI/CD avec GitLab CI et Docker",
                  "Supervision des infrastructures avec Prometheus, Grafana",
                  "Développement d'un projet Git pour automatiser la récupération sécurisée de mots de passe dans HashiVault",
                ],
              },
              {
                role: "Technicien Réseau",
                company: "Orange",
                period: "2022 - 2024 (en alternance)",
                achievements: [
                  "Installation et configuration de routeurs, switches et firewalls",
                  "Développement d'un outil Python pour détecter des problèmes sur la fibre optique",
                  "Travail en équipe et communication avec les clients pour résoudre des problèmes techniques",
                ],
              },
            ].map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-left-8 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-accent">{exp.company}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 hover:text-primary transition-colors">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-card/30 relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-primary mb-12 animate-in zoom-in duration-1000">
            Formation
          </h2>
          <div className="space-y-6">
            {[
              {
                degree: "Ingénierie Informatique",
                school: "CESI École d'Ingénieurs",
                period: "2024 - 2027",
              },
              {
                degree: "Licence en Réseaux et Télécommunications",
                school: "IUT1 Grenoble",
                period: "2021 - 2024",
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-right-8 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-accent">{edu.school}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="py-20 px-4 relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-850">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-primary mb-12 animate-in zoom-in duration-1000">
            Passions & Loisirs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Randonnée & Nature",
                description:
                  "Exploration des sentiers de montagne et découverte de paysages naturels pour me ressourcer et maintenir un équilibre vie pro/perso.",
                image:
                  "mountain hiking trail with backpack, scenic alpine landscape, sunrise over peaks, and outdoor adventure gear",
                icon: "🥾",
                type: "hiking" as const,
              },
              {
                title: "Moto & Mécanique",
                description:
                  "Passion pour les deux-roues, entretien mécanique et balades sur routes sinueuses. Appréciation de la précision technique et de la liberté.",
                image:
                  "sleek motorcycle on winding mountain road, mechanical tools, engine details, and scenic riding landscape",
                icon: "🏍️",
                type: "motorcycle" as const,
              },
              {
                title: "Voyage & Découverte",
                description:
                  "Exploration de nouvelles cultures et destinations, ouverture d'esprit à travers les rencontres et découverte de traditions locales.",
                image:
                  "world map with travel destinations, passport stamps, airplane, cultural landmarks, and adventure backpack",
                icon: "✈️",
                type: "travel" as const,
              },
            ].map((passion, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group animate-in fade-in-50 duration-700"
                style={{ animationDelay: `${600 + index * 100}ms` }}
                onClick={() => openGallery(passion.type, passion.title)}
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?key=passion${index}&height=200&width=400&query=${passion.image}`}
                    alt={passion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{passion.icon}</span>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {passion.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-pretty leading-relaxed">
                    {passion.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative z-10 animate-in slide-in-from-bottom-8 duration-1000 delay-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-in zoom-in duration-1000">
            Prêt à Collaborer ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto text-pretty animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            Je suis toujours intéressé par de nouveaux défis techniques et des opportunités de collaboration. Discutons
            de votre prochain projet !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300" asChild>
              <a href="mailto:matheo.pinget@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                matheo.pinget@gmail.com
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/matheo-pinget-8a60252a9/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {selectedPassion && (
        <PhotoGallery
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          title={selectedPassion.title}
          photos={selectedPassion.photos}
        />
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t relative z-10 animate-in fade-in duration-1000 delay-1000">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            © 2024 Mathéo Pinget - Portfolio DevOps. Conçu avec passion pour l'excellence technique.
          </p>
        </div>
      </footer>
    </div>
  )
}
