'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MouseFollower } from '@/components/mouse-follower'
import { AnimatedBackground } from '@/components/animated-background'
import { PhotoGallery } from '@/components/photo-gallery'
import { RotatingTextAnimation } from '@/components/rotating-text-animation'

export default function DevOpsPortfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedPassion, setSelectedPassion] = useState<{
    title: string
    photos: { src: string; alt: string }[]
  } | null>(null)

  const passionPhotos = {
    rando: [
      { src: '/Portfolio_V2/rando/1.jpg', alt: 'Image de randonnée 1' },
      { src: '/Portfolio_V2/rando/2.jpg', alt: 'Image de randonnée 2' },
      { src: '/Portfolio_V2/rando/3.jpg', alt: 'Image de randonnée 3' },
      { src: '/Portfolio_V2/rando/4.jpg', alt: 'Image de randonnée 4' },
      { src: '/Portfolio_V2/rando/5.jpg', alt: 'Image de randonnée 5' },
    ],
    moto: [
      { src: '/Portfolio_V2/moto/1.jpg', alt: 'Image de moto 1' },
      { src: '/Portfolio_V2/moto/2.jpg', alt: 'Image de moto 2' },
      { src: '/Portfolio_V2/moto/3.jpg', alt: 'Image de moto 3' },
      { src: '/Portfolio_V2/moto/4.jpg', alt: 'Image de moto 4' },
    ],
    voyage: [
      { src: '/Portfolio_V2/voyage/1.jpg', alt: 'Image de voyage 1' },
      { src: '/Portfolio_V2/voyage/10.jpg', alt: 'Image de voyage 10' },
      { src: '/Portfolio_V2/voyage/11.jpg', alt: 'Image de voyage 11' },
      { src: '/Portfolio_V2/voyage/2.jpg', alt: 'Image de voyage 2' },
      { src: '/Portfolio_V2/voyage/3.jpg', alt: 'Image de voyage 3' },
      { src: '/Portfolio_V2/voyage/4.jpg', alt: 'Image de voyage 4' },
      { src: '/Portfolio_V2/voyage/5.jpg', alt: 'Image de voyage 5' },
      { src: '/Portfolio_V2/voyage/6.jpg', alt: 'Image de voyage 6' },
      { src: '/Portfolio_V2/voyage/7.jpg', alt: 'Image de voyage 7' },
      { src: '/Portfolio_V2/voyage/8.jpg', alt: 'Image de voyage 8' },
      { src: '/Portfolio_V2/voyage/9.jpg', alt: 'Image de voyage 9' },
    ],
  }

  const openGallery = (passionType: 'rando' | 'moto' | 'voyage', title: string) => {
    setSelectedPassion({
      title,
      photos: passionPhotos[passionType],
    })
    setGalleryOpen(true)
  }

  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <MouseFollower />
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="animate-in fade-in relative z-10 px-4 py-20 text-center duration-500">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-primary animate-in fade-in mb-2 text-4xl font-black text-balance duration-500 md:text-6xl">
            Je suis Mathéo Pinget
          </h1>
          {/* Animated Description */}
          <p className="text-muted-foreground animate-in fade-in mx-auto mb-2 max-w-2xl text-3xl font-bold text-pretty duration-500">
            <RotatingTextAnimation
              words={['Ingénieur DevOps Cloud', 'Randonneur', 'Motard', 'Voyageur']}
            />
          </p>
          <p
            className="text-muted-foreground animate-in fade-in mx-auto mb-8 max-w-2xl text-xl text-pretty duration-500"
            style={{ animationDelay: '200ms' }}
          >
            Je construis des solutions performantes et sécurisées avec Terraform, Ansible, Docker et
            GitLab CI.
          </p>
          {/* Animated Buttons */}
          <div className="animate-in fade-in flex flex-wrap justify-center gap-4 duration-500">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:matheo.pinget@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Me Contacter
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/InToXy" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/matheo-pinget-8a60252a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://cal.com/matheo-pinget-xadubu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Prendre RDV
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/cv">
                <ExternalLink className="mr-2 h-4 w-4" />
                Mon CV
              </Link>
            </Button>
          </div>
          {/* Animated Contact Information */}
          <div className="text-muted-foreground animate-in fade-in mt-8 flex flex-wrap justify-center gap-6 text-sm duration-500">
            <div className="hover:text-primary flex cursor-pointer items-center gap-2 transition-colors">
              <Phone className="h-4 w-4" />
              06.40.24.07.08
            </div>
            <div className="hover:text-primary flex cursor-pointer items-center gap-2 transition-colors">
              <MapPin className="h-4 w-4" />
              Evian-les-Bains, France
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated Section Title */}
          <h2 className="font-heading text-primary animate-in fade-in mb-8 text-3xl font-bold duration-500 md:text-4xl">
            À Propos
          </h2>
          {/* Animated Paragraph */}
          <p className="text-muted-foreground animate-in fade-in mx-auto max-w-3xl text-lg leading-relaxed text-pretty duration-500">
            Ingénieur DevOps en alternance, spécialisé en automatisation d&apos;infrastructures et
            CI/CD. Maîtrise de Terraform, Ansible, Docker, GitLab CI. Expérience en réseaux,
            cybersécurité et supervision (Prometheus, Grafana, Zabbix). Motivé et rigoureux, je
            souhaite contribuer à des projets cloud performants et sécurisés.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-primary animate-in fade-in mb-12 text-center text-3xl font-bold duration-500 md:text-4xl">
            Compétences Techniques
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Cloud className="h-8 w-8" />,
                title: 'DevOps & Cloud',
                skills: ['Docker', 'Terraform', 'Ansible', 'Azure', 'AWS', 'VCD', 'Traefik Proxy'],
              },
              {
                icon: <GitBranch className="h-8 w-8" />,
                title: 'CI/CD & Automatisation',
                skills: ['GitLab CI', 'Bash', 'PowerShell', 'Git', 'GitHub'],
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Réseaux & Cybersécurité',
                skills: [
                  'Cisco',
                  'pfSense',
                  'WatchGuard',
                  'Firewall',
                  'Hardening',
                  'Audit de sécurité',
                ],
              },
              {
                icon: <Monitor className="h-8 w-8" />,
                title: 'Programmation & Monitoring',
                skills: [
                  'Python',
                  'Node.js',
                  'Prometheus',
                  'Grafana',
                  'Zabbix',
                  'API REST',
                  'Centreon',
                  'PRTG',
                  'JWT',
                  'SQL',
                  'HTML',
                  'CSS',
                  'Next',
                ],
              },
              {
                icon: <Server className="h-8 w-8" />,
                title: 'Administration Système',
                skills: [
                  'Linux',
                  'Windows Server',
                  'Active Directory',
                  'Bind',
                  'Debian',
                  'Ubuntu',
                  'CentOS',
                ],
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: 'Gestion de Projet & Méthodologies',
                skills: ['Méthodes agiles', 'Scrum', 'Gestion de projet'],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="animate-in fade-in group transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {/* Animated Icons */}
                    <div className="text-accent transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary text-lg transition-colors duration-300">
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
                        className="hover:bg-primary hover:text-primary-foreground cursor-pointer text-xs transition-colors"
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
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-primary animate-in fade-in mb-12 text-center text-3xl font-bold duration-500 md:text-4xl">
            Projets & Réalisations
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: 'Plateforme Big Data pour la Santé',
                description: "Construction d'un data warehouse pour un groupe hospitalier afin d'analyser et visualiser les données médicales. Architecture Data Lakehouse avec Spark et Airflow.",
                tech: ['Apache Airflow', 'Apache Spark', 'MinIO', 'Hive', 'Trino', 'Superset', 'Docker', 'Python'],
                image: '/Portfolio_V2/big_data.jpg',
                link: '/projects/big-data',
              },
              {
                title: "JACK.CREATIVE.LAB - Création d'entreprise",
                description:
                  "Création d'une micro-entreprise spécialisée dans la refonte de sites web pour les PME. L'objectif est de transformer la présence numérique des entreprises avec des designs modernes, élégants et performants. Le site vitrine a été développé pour présenter les services, les projets et attirer des clients.",
                tech: [
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'CI/CD',
                  'GitHub Pages',
                  'SEO',
                  'GDPR',
                ],
                image: '/Portfolio_V2/jack_bg.png',
                link: '/projects/jack-creative-lab',
              },
              {
                title: 'Serveur Multimédia Personnel',
                description:
                  "Mise en place d'une solution complète de gestion et de diffusion de contenu multimédia à domicile avec Docker et Docker Compose (Plex, Radarr, Jackett, Transmission, Flaresolverr).",
                tech: [
                  'Docker',
                  'Docker Compose',
                  'Plex',
                  'Radarr',
                  'Jackett',
                  'Transmission',
                  'FlareSolverr',
                ],
                image:
                  'https://www.desdeelreloj.com/content/images/size/w1000/2024/05/ider-0861.jpg', // You can replace this with a relevant image
                link: '/projects/media-server',
              },
              {
                title: 'Bot Trading - Bot de Trading Automatisé',
                description:
                  "Développement d'un bot de trading automatisé utilisant l'API Binance pour exécuter des stratégies de trading sur les cryptomonnaies. L'objectif était de développer un système robuste capable d'analyser les données du marché en temps réel et de prendre des décisions d'achat ou de vente basées sur des indicateurs techniques.",
                tech: [
                  'Python',
                  'Binance API',
                  'Pandas',
                  'NumPy',
                  'TensorFlow',
                  'Docker',
                  'PostgreSQL',
                  'Grafana',
                ],
                image:
                  'https://www.ccn.com/wp-content/uploads/2023/07/Best-10-Crypto-Trading-Bots-For-2023-768x432.webp',
                link: '/projects/bot-trading',
              },
              {
                title: 'Breezy - Réseau Social Léger',
                description:
                  "Développement d'un réseau social réactif inspiré de Twitter/X, optimisé pour les environnements à faibles ressources. Architecture microservices avec Docker, authentification JWT, et interface React/Next.js responsive.",
                tech: [
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'React',
                  'Next.js',
                  'TailwindCSS',
                  'Docker',
                  'Traefik',
                  'JWT',
                  'Microservices',
                ],
                image: '/Portfolio_V2/breezy.png',
                link: '/projects/breezy',
              },
              {
                title: 'EasySave - Logiciel de Sauvegarde',
                description:
                  'Logiciel de sauvegarde professionnel évolutif en C#/.NET avec architecture MVC. Interface CLI et graphique WPF, chiffrement SHA-256, sauvegardes parallèles et gestion des priorités. Méthodologie Scrum avec Git workflow complet.',
                tech: [
                  'C#',
                  '.NET 8.0',
                  'WPF',
                  'MVC',
                  'SHA-256',
                  'JSON',
                  'Doxygen',
                  'JIRA',
                  'Git',
                  'Scrum',
                ],
                image: '/Portfolio_V2/easysave.jpg',
                link: '/projects/easysave',
              },
              {
                title: 'Vault Manager - Gestion des Mots de Passe',
                description:
                  "Solution DevSecOps automatisée pour la gestion sécurisée des mots de passe d'infrastructure chez Orange Business. Pipeline CI/CD avec HashiCorp Vault, chiffrement AES-256, et traçabilité complète des opérations.",
                tech: [
                  'HashiCorp Vault',
                  'Ansible',
                  'GitLab CI/CD',
                  'OpenSSL',
                  'AES-256',
                  'WSL',
                  'DevSecOps',
                  'Automation',
                ],
                image: '/Portfolio_V2/password_vault.png',
                link: '/projects/password-management',
              },
              {
                title: 'ADEME - Recherche Opérationnelle',
                description:
                  "Projet de recherche opérationnelle pour l'ADEME visant à réduire les émissions CO₂ des transports. Implémentation d'algorithmes d'optimisation (recuit simulé, génétique, colonie de fourmis) pour résoudre le problème du voyageur de commerce.",
                tech: [
                  'Python',
                  'PLNE',
                  'Algorithmes Génétiques',
                  'Recuit Simulé',
                  'Colonie de Fourmis',
                  'Optimisation',
                  'Recherche Opérationnelle',
                ],
                image:
                  'https://medias.pourlascience.fr/api/v1/images/view/5a82b1128fe56f7c282a7d9c/wide_1000-webp/image.jpg',
                link: '/projects/route-optimization',
              },
              {
                title: "Création d'une infrastructure Cloud avec OpenStack",
                description:
                  "Construction d'un réseau informatique pour une petite structure à l'aide d'OpenStack. Le projet impliquait la mise en place de serveurs virtuels (CentOS, Windows 10), la configuration d'un réseau privé, la gestion des adresses IP et la configuration des routages pour assurer la communication entre les machines.",
                tech: [
                  'OpenStack',
                  'CentOS 8',
                  'Windows 10',
                  'DNS',
                  'Apache',
                  'MySQL',
                  'Nextcloud',
                  'Prometheus',
                  'Grafana',
                ],
                image: '/Portfolio_V2/openstack-cloud-infrastructure-dashboard-with-virt.png',
                link: '/projects/openstack',
              },
              {
                title: "Sécurisation d'un Système d'Information",
                description:
                  "Conception d'une infrastructure d'entreprise complète de A à Z en suivant les recommandations de l'ANSSI. Le projet incluait la création d'une DMZ, la configuration d'un SI interne, et la mise en place de multiples couches de sécurité et de supervision.",
                tech: [
                  'ESXI 6.7',
                  'Cisco',
                  'WatchGuard',
                  'StormShield',
                  'Veeam',
                  'PRTG',
                  'Splunk',
                  'Active Directory',
                  'BIND',
                  'Apache',
                ],
                image: '/Portfolio_V2/network-security-audit-dashboard-with-vulnerabilit.png',
                link: '/projects/security',
              },
              {
                title: 'Découverte du Pentesting',
                description:
                  'Projet en autonomie pour approfondir les techniques de Pentesting. Il a fallu répondre à un questionnaire technique en utilisant divers outils sur des machines virtuelles (Kali Linux, Windows, CentOS) pour identifier des vulnérabilités.',
                tech: ['Kali Linux', 'Metasploit', 'Nmap', 'Hydra', 'SQLmap'],
                image: '/Portfolio_V2/web-application-penetration-testing-with-burp-suit.png',
                link: '/projects/pentesting',
              },
              {
                title: 'Traitement de données avec Python',
                description:
                  "Développement d'un script Python pour filtrer et analyser des données issues de fichiers de calendrier (.csv). L'objectif était d'extraire des informations spécifiques (événements, réunions) et de les présenter de manière claire sous forme de tableau (Markdown) et de graphiques.",
                tech: ['Python', 'CSV', 'Markdown', 'HTML/CSS'],
                image: '/Portfolio_V2/python-data-analysis-dashboard-with-charts--graphs.png',
                link: '/projects/python-data',
                objectPosition: 'top', // New property
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group animate-in fade-in cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-xl"
              >
                <div className="bg-muted relative aspect-video overflow-hidden rounded-t-lg">
                  {/* Animated Project Images */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill // Use fill for responsive images within a container
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    style={project.objectPosition ? { objectPosition: project.objectPosition } : {}}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary text-lg transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-pretty">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground text-xs transition-all duration-300 hover:scale-110"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground w-full bg-transparent transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href={project.link}>
                      <ExternalLink className="mr-2 h-4 w-4" />
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
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-primary animate-in fade-in mb-12 text-center text-3xl font-bold duration-500 md:text-4xl">
            Expérience Professionnelle
          </h2>
          <div className="space-y-8">
            {[
              {
                role: 'Ingénieur DevOps',
                company: 'Orange Business',
                period: '2024 - 2027 (en alternance)',
                achievements: [
                  "Automatisation du déploiement d'infrastructures avec Terraform et Ansible",
                  'Gestion de pipelines CI/CD avec GitLab CI et Docker',
                  'Supervision des infrastructures avec Prometheus, Grafana',
                  "Développement d'un projet Git pour automatiser la récupération sécurisée de mots de passe dans HashiVault",
                ],
              },
              {
                role: 'Technicien Réseau',
                company: 'Orange',
                period: '2022 - 2024 (en alternance)',
                achievements: [
                  'Installation et configuration de routeurs, switches et firewalls',
                  "Développement d'un outil Python pour détecter des problèmes sur la fibre optique",
                  'Travail en équipe et communication avec les clients pour résoudre des problèmes techniques',
                ],
              },
            ].map((exp, index) => (
              <Card
                key={index}
                className="animate-in fade-in transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-accent text-lg font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground w-fit transition-colors"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="hover:text-primary flex items-start gap-2 transition-colors"
                      >
                        <div className="bg-accent mt-2 h-2 w-2 flex-shrink-0 animate-pulse rounded-full" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
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
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-primary animate-in fade-in mb-12 text-center text-3xl font-bold duration-500 md:text-4xl">
            Formation
          </h2>
          <div className="space-y-6">
            {[
              {
                degree: 'Ingénierie Informatique',
                school: "CESI École d'Ingénieurs, Lyon",
                period: '2024 - 2027',
              },
              {
                degree: 'Licence en Réseaux et Télécommunications',
                school: 'IUT1, Grenoble',
                period: '2021 - 2024',
              },
              {
                degree: 'Baccalauréat Professionnel Systèmes Numériques RISC',
                school: 'Lycée Saint Vincent de Paul, Collonges-sous-Salève',
                period: '2018 - 2021',
              },
            ].map((edu, index) => (
              <Card
                key={index}
                className="animate-in fade-in transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-accent text-lg font-medium">
                        {edu.school}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground w-fit transition-colors"
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
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-primary animate-in fade-in mb-12 text-center text-3xl font-bold duration-500 md:text-4xl">
            Passions & Loisirs
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Randonnée & Nature',
                description:
                  'Exploration des sentiers de montagne et découverte de paysages naturels pour me ressourcer et maintenir un équilibre vie pro/perso.',
                image:
                  'mountain hiking trail with backpack, scenic alpine alpine landscape, sunrise over peaks, and outdoor adventure gear',
                icon: '🥾',
                type: 'rando' as const,
              },
              {
                title: 'Moto & Mécanique',
                description:
                  'Passion pour les deux-roues, entretien mécanique et balades sur routes sinueuses. Appréciation de la précision technique et de la liberté.',
                image:
                  'sleek motorcycle on winding mountain road, mechanical tools, engine details, and scenic riding landscape',
                icon: '🏍️',
                type: 'moto' as const,
              },
              {
                title: 'Voyage & Découverte',
                description:
                  'Exploration de nouvelles cultures et destinations, ouverture d&apos;esprit à travers les rencontres et découverte de traditions locales.',
                image:
                  'world map with travel destinations, passport stamps, airplane, cultural landmarks, and adventure backpack',
                icon: '✈️',
                type: 'voyage' as const,
              },
            ].map((passion, index) => (
              <Card
                key={index}
                className="group animate-in fade-in cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
                onClick={() => openGallery(passion.type, passion.title)}
              >
                <div className="bg-muted relative aspect-video overflow-hidden rounded-t-lg">
                  {/* Animated Project Images */}
                  <Image
                    src={passionPhotos[passion.type][0].src} // Use the first image from passionPhotos
                    alt={passionPhotos[passion.type][0].alt}
                    fill // Use fill for responsive images within a container
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{passion.icon}</span>
                    <CardTitle className="group-hover:text-primary text-lg transition-colors duration-300">
                      {passion.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-pretty">
                    {passion.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="animate-in fade-in relative z-10 px-4 py-20 duration-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-primary animate-in fade-in mb-6 text-3xl font-bold duration-500 md:text-4xl">
            Prêt à Collaborer ?
          </h2>
          <p className="text-muted-foreground animate-in fade-in mx-auto mb-8 max-w-2xl text-xl text-pretty duration-500">
            Je suis toujours intéressé par de nouveaux défis techniques et des opportunités de
            collaboration. Discutons de votre prochain projet !
          </p>
          <div className="animate-in fade-in flex flex-col justify-center gap-4 duration-500 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:matheo.pinget@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                matheo.pinget@gmail.com
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/matheo-pinget-8a60252a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
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
      <footer className="bg-card animate-in fade-in relative z-10 border-t px-4 py-8 duration-500">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
            © 2024 Mathéo Pinget - Portfolio DevOps. Conçu avec passion pour l&apos;excellence
            technique.
          </p>
        </div>
      </footer>
    </div>
  )
}
