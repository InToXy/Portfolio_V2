'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Home,
  Briefcase,
  GraduationCap,
  Wrench,
  Languages,
  Star,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { AnimatedBackground } from '@/components/animated-background'
import { MouseFollower } from '@/components/mouse-follower'

export default function CVPage() {
  const cvData = {
    name: 'Mathéo Pinget',
    title: 'Ingénieur DevOps & Cloud',
    contact: {
      email: 'matheo.pinget@gmail.com',
      phone: '06.40.24.07.08',
      location: 'Evian-les-Bains, France',
      linkedin: 'https://www.linkedin.com/in/matheo-pinget-8a60252a9/',
      github: 'https://github.com/InToXy',
    },
    summary:
      "Ingénieur DevOps en alternance, spécialisé en automatisation d'infrastructures et CI/CD. Maîtrise de Terraform, Ansible, Docker, GitLab CI. Expérience en réseaux, cybersécurité et supervision. Motivé et rigoureux, je souhaite contribuer à des projets cloud performants et sécurisés.",
    experience: [
      {
        role: 'Ingénieur DevOps',
        company: 'Orange Business',
        period: '2024 - 2027 (Alternance)',
        tasks: [
          "Automatisation du déploiement d'infrastructures avec Terraform et Ansible.",
          'Gestion de pipelines CI/CD avec GitLab CI et Docker.',
          'Supervision des infrastructures avec Prometheus, Grafana.',
          "Développement d'un projet Git pour automatiser la récupération sécurisée de mots de passe dans HashiVault.",
        ],
      },
      {
        role: 'Technicien Réseau',
        company: 'Orange',
        period: '2022 - 2024 (Alternance)',
        tasks: [
          'Installation et configuration de routeurs, switches et firewalls.',
          "Développement d'un outil Python pour détecter des problèmes sur la fibre optique.",
          'Travail en équipe et communication avec les clients pour résoudre des problèmes techniques.',
        ],
      },
    ],
    education: [
      {
        degree: 'Cycle Ingénieur en Informatique',
        school: "CESI École d'Ingénieurs, Lyon",
        period: '2024 - 2027',
      },
      {
        degree: 'BUT Réseaux et Télécommunications',
        school: 'IUT1, Grenoble',
        period: '2021 - 2024',
      },
      {
        degree: 'Baccalauréat Professionnel Systèmes Numériques RISC',
        school: 'Lycée Saint Vincent de Paul, Collonges-sous-Salève',
        period: '2018 - 2021',
      },
    ],
    skills: {
      'DevOps & Cloud': ['Docker', 'Terraform', 'Ansible', 'Azure', 'AWS', 'VCD', 'Traefik Proxy'],
      'CI/CD & Automatisation': ['GitLab CI', 'Bash', 'PowerShell', 'Git', 'GitHub'],
      'Réseaux & Cybersécurité': [
        'Cisco',
        'pfSense',
        'WatchGuard',
        'Firewall',
        'Hardening',
        'Audit de sécurité',
      ],
      'Programmation & Monitoring': [
        'Python',
        'Node.js',
        'Prometheus',
        'Grafana',
        'Zabbix',
        'API REST',
        'SQL',
        'Next.js',
      ],
      'Administration Système': [
        'Linux (Debian, Ubuntu, CentOS)',
        'Windows Server',
        'Active Directory',
      ],
    },
    languages: ['Français (Natif)', 'Anglais (Technique, B2)'],
    interests: ['Randonnée', 'Moto', 'Voyages'],
  }

  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <MouseFollower />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl p-4 font-sans sm:p-6 md:p-8">
        {/* Header */}
        <header className="animate-in fade-in mb-12 flex flex-col items-center justify-between duration-1000 sm:flex-row">
          <div className="text-center sm:text-left">
            <h1 className="font-heading text-primary text-4xl font-black md:text-5xl">
              {cvData.name}
            </h1>
            <h2 className="text-muted-foreground text-xl md:text-2xl">{cvData.title}</h2>
          </div>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <Button asChild>
              <a href="/Portfolio_V2/documents/CV_Matheo_Pinget.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Télécharger le PDF
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        {/* Contact and Summary */}
        <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="animate-in slide-in-from-left-8 duration-1000 md:col-span-1">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <a
                href={`mailto:${cvData.contact.email}`}
                className="hover:text-primary flex items-center gap-3"
              >
                <Mail className="h-4 w-4 flex-shrink-0" /> <span>{cvData.contact.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" /> <span>{cvData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" /> <span>{cvData.contact.location}</span>
              </div>
              <a
                href={cvData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary flex items-center gap-3"
              >
                <Linkedin className="h-4 w-4 flex-shrink-0" /> <span>LinkedIn</span>
              </a>
              <a
                href={cvData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary flex items-center gap-3"
              >
                <Github className="h-4 w-4 flex-shrink-0" /> <span>GitHub</span>
              </a>
            </CardContent>
          </Card>
          <Card className="animate-in slide-in-from-right-8 duration-1000 md:col-span-2">
            <CardHeader>
              <CardTitle>Profil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{cvData.summary}</p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Experience & Education */}
          <div className="space-y-8 lg:col-span-2">
            {/* Experience */}
            <section className="animate-in slide-in-from-bottom-8 delay-200 duration-1000">
              <h3 className="font-heading text-primary mb-6 flex items-center gap-3 text-2xl font-bold">
                <Briefcase /> Expérience Professionnelle
              </h3>
              <div className="border-primary/20 space-y-6 border-l-2 pl-6">
                {cvData.experience.map((exp, index) => (
                  <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <span>{exp.company}</span>
                        <Badge variant="outline">{exp.period}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                        {exp.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="animate-in slide-in-from-bottom-8 delay-300 duration-1000">
              <h3 className="font-heading text-primary mb-6 flex items-center gap-3 text-2xl font-bold">
                <GraduationCap /> Formation
              </h3>
              <div className="border-primary/20 space-y-4 border-l-2 pl-6">
                {cvData.education.map((edu, index) => (
                  <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <span>{edu.school}</span>
                        <Badge variant="outline">{edu.period}</Badge>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Skills, Languages, Interests */}
          <div className="space-y-8">
            {/* Skills */}
            <section className="animate-in slide-in-from-bottom-8 delay-400 duration-1000">
              <h3 className="font-heading text-primary mb-6 flex items-center gap-3 text-2xl font-bold">
                <Wrench /> Compétences
              </h3>
              <Card>
                <CardContent className="pt-6">
                  {Object.entries(cvData.skills).map(([category, skills], index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h4 className="text-accent mb-2 font-semibold">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Languages */}
            <section className="animate-in slide-in-from-bottom-8 delay-500 duration-1000">
              <h3 className="font-heading text-primary mb-6 flex items-center gap-3 text-2xl font-bold">
                <Languages /> Langues
              </h3>
              <Card>
                <CardContent className="flex flex-wrap gap-2 pt-6">
                  {cvData.languages.map((lang, i) => (
                    <Badge key={i}>{lang}</Badge>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Interests */}
            <section className="animate-in slide-in-from-bottom-8 delay-600 duration-1000">
              <h3 className="font-heading text-primary mb-6 flex items-center gap-3 text-2xl font-bold">
                <Star /> Centres d&apos;Intérêt
              </h3>
              <Card>
                <CardContent className="flex flex-wrap gap-2 pt-6">
                  {cvData.interests.map((interest, i) => (
                    <Badge key={i} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t py-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mathéo Pinget -{' '}
            <Link href="/" className="text-primary hover:underline">
              Retour à l&apos;accueil
            </Link>
          </p>
        </footer>
      </main>
    </div>
  )
}
