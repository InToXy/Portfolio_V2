import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, Shield, Lock, Monitor, Database } from "lucide-react"

export default function SecurityProject() {
  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 animate-in slide-in-from-top-4 duration-700">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Link>
          </Button>
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Sécurisation d'un Système d'Information</h1>
          <p className="text-xl text-muted-foreground">
            Infrastructure d'entreprise complète selon les recommandations ANSSI
          </p>
        </div>

        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/Portfolio_V2/network-security-audit-dashboard-with-vulnerabilit.png"
            alt="Infrastructure de sécurité"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
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
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <CardHeader>
            <CardTitle>Contexte et Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Ce projet ambitieux consistait à concevoir et déployer une infrastructure d'entreprise complète en
              respectant scrupuleusement les recommandations de l'ANSSI (Agence Nationale de la Sécurité des Systèmes
              d'Information).
            </p>
            <p>
              L'architecture incluait une DMZ (Zone Démilitarisée) pour isoler les services publics, un système
              d'information interne sécurisé, et plusieurs couches de protection avec des firewalls redondants.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Infrastructure Sécurisée
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• DMZ avec serveurs web publics</li>
                  <li>• Firewalls WatchGuard et StormShield</li>
                  <li>• Active Directory avec GPO sécurisées</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Monitoring et Sauvegarde
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• PRTG pour monitoring réseau</li>
                  <li>• Splunk pour analyse des logs</li>
                  <li>• Veeam pour sauvegarde centralisée</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader>
            <CardTitle>Architecture Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Défense en Profondeur</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Multiples couches de sécurité : firewalls, IDS/IPS, antivirus</li>
                <li>• Segmentation réseau avec VLANs sécurisés</li>
                <li>• Contrôle d'accès et chiffrement des données</li>
                <li>• Certificats SSL/TLS pour communications sécurisées</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services et Applications</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Serveurs DNS BIND avec zones sécurisées</li>
                <li>• Services web Apache avec configuration durcie</li>
                <li>• Surveillance continue avec alertes automatiques</li>
                <li>• Plan de reprise d'activité et tests réguliers</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-700">
          <CardHeader>
            <CardTitle>Résultats et Apprentissages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Réalisations</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Infrastructure conforme aux recommandations ANSSI</li>
                <li>• Sécurité multicouche avec monitoring complet</li>
                <li>• Stratégie de sauvegarde 3-2-1 opérationnelle</li>
                <li>• Documentation technique et procédures détaillées</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Architecture de sécurité d'entreprise</li>
                <li>• Configuration de firewalls et IDS/IPS</li>
                <li>• Gestion des identités et des accès</li>
                <li>• Monitoring et analyse de sécurité</li>
              </ul>
            </div>
          </CardContent>
        </Card>

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
