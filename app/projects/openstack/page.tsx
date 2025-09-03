import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, Cloud, Server, Network, Monitor } from "lucide-react"

export default function OpenStackProject() {
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
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Infrastructure Cloud avec OpenStack</h1>
          <p className="text-xl text-muted-foreground">
            Construction d'un réseau informatique complet pour une petite structure
          </p>
        </div>

        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/Portfolio_V2/openstack-cloud-infrastructure-dashboard-with-virt.png"
            alt="Infrastructure OpenStack"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

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
                "OpenStack",
                "CentOS 8",
                "Windows 10",
                "DNS",
                "Apache",
                "MySQL",
                "Nextcloud",
                "Prometheus",
                "Grafana",
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
              Ce projet consistait à créer une infrastructure cloud complète pour une petite structure en utilisant
              OpenStack. L'objectif était de démontrer la capacité à concevoir, déployer et gérer un environnement
              virtualisé professionnel.
            </p>
            <p>
              L'infrastructure incluait la mise en place de serveurs virtuels sous différents systèmes d'exploitation,
              la configuration d'un réseau privé sécurisé, et l'implémentation de services essentiels.
            </p>
          </CardContent>
        </Card>

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
                  <Network className="w-4 h-4" />
                  Infrastructure Réseau
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Réseau privé avec DHCP/DNS</li>
                  <li>• Routage inter-réseaux sécurisé</li>
                  <li>• Gestion des utilisateurs et accès</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Services et Monitoring
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Serveur web Apache + MySQL</li>
                  <li>• Nextcloud pour stockage collaboratif</li>
                  <li>• Prometheus + Grafana monitoring</li>
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
              <h4 className="font-semibold mb-2">Infrastructure OpenStack</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Déploiement multi-nœuds avec Nova, Neutron, Cinder</li>
                <li>• Machines virtuelles CentOS 8 et Windows 10</li>
                <li>• Gestion des volumes et snapshots</li>
                <li>• Configuration des flavors et images</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services et Applications</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Stack LAMP (Linux, Apache, MySQL, PHP)</li>
                <li>• Nextcloud pour collaboration et stockage</li>
                <li>• Prometheus pour métriques système</li>
                <li>• Grafana pour visualisation et alertes</li>
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
                <li>• Infrastructure cloud complète et fonctionnelle</li>
                <li>• Réseau privé sécurisé avec services intégrés</li>
                <li>• Monitoring complet avec alertes automatisées</li>
                <li>• Documentation technique détaillée</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Administration OpenStack et virtualisation</li>
                <li>• Configuration réseau avancée</li>
                <li>• Déploiement et gestion de services</li>
                <li>• Monitoring et observabilité</li>
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
