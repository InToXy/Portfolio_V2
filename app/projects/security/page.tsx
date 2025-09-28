import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Shield, Lock, Monitor, Database } from 'lucide-react'

export default function SecurityProject() {
  return (
    <div className="bg-background animate-in fade-in min-h-screen duration-1000">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="animate-in slide-in-from-top-4 mb-8 duration-700">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au portfolio
            </Link>
          </Button>
          <h1 className="font-heading text-primary mb-4 text-4xl font-bold">
            Sécurisation d&apos;un Système d&apos;Information
          </h1>
          <p className="text-muted-foreground text-xl">
            Infrastructure d&apos;entreprise complète selon les recommandations ANSSI
          </p>
        </div>

        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/network-security-audit-dashboard-with-vulnerabilit.png"
            alt="Infrastructure de sécurité"
            width={1024} // Placeholder: please adjust if actual image dimensions are different
            height={256} // Placeholder: please adjust if actual image dimensions are different
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-300 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
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
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-400 duration-700">
          <CardHeader>
            <CardTitle>Contexte et Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Ce projet ambitieux consistait à concevoir et déployer une infrastructure
              d&apos;entreprise complète en respectant scrupuleusement les recommandations de
              l&apos;ANSSI (Agence Nationale de la Sécurité des Systèmes d&apos;Information).
            </p>
            <p>
              L&apos;architecture incluait une DMZ (Zone Démilitarisée) pour isoler les services
              publics, un système d&apos;information interne sécurisé, et plusieurs couches de
              protection avec des firewalls redondants.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-500 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Database className="h-4 w-4" />
                  Infrastructure Sécurisée
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• DMZ avec serveurs web publics</li>
                  <li>• Firewalls WatchGuard et StormShield</li>
                  <li>• Active Directory avec GPO sécurisées</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Monitor className="h-4 w-4" />
                  Monitoring et Sauvegarde
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• PRTG pour monitoring réseau</li>
                  <li>• Splunk pour analyse des logs</li>
                  <li>• Veeam pour sauvegarde centralisée</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-600 duration-700">
          <CardHeader>
            <CardTitle>Architecture Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Défense en Profondeur</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Multiples couches de sécurité : firewalls, IDS/IPS, antivirus</li>
                <li>• Segmentation réseau avec VLANs sécurisés</li>
                <li>• Contrôle d&apos;accès et chiffrement des données</li>
                <li>• Certificats SSL/TLS pour communications sécurisées</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Services et Applications</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Serveurs DNS BIND avec zones sécurisées</li>
                <li>• Services web Apache avec configuration durcie</li>
                <li>• Surveillance continue avec alertes automatiques</li>
                <li>• Plan de reprise d&apos;activité et tests réguliers</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-700 duration-700">
          <CardHeader>
            <CardTitle>Résultats et Apprentissages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Réalisations</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Infrastructure conforme aux recommandations ANSSI</li>
                <li>• Sécurité multicouche avec monitoring complet</li>
                <li>• Stratégie de sauvegarde 3-2-1 opérationnelle</li>
                <li>• Documentation technique et procédures détaillées</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Compétences Développées</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Architecture de sécurité d&apos;entreprise</li>
                <li>• Configuration de firewalls et IDS/IPS</li>
                <li>• Gestion des identités et des accès</li>
                <li>• Monitoring et analyse de sécurité</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="animate-in slide-in-from-bottom-4 flex gap-4 delay-800 duration-700">
          <Button asChild>
            <a href="https://github.com/InToXy" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
