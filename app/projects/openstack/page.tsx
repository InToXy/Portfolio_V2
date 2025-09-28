import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Cloud, Server, Network, Monitor } from 'lucide-react'

export default function OpenStackProject() {
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
            Infrastructure Cloud avec OpenStack
          </h1>
          <p className="text-muted-foreground text-xl">
            Construction d&apos;un réseau informatique complet pour une petite structure
          </p>
        </div>

        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/openstack-cloud-infrastructure-dashboard-with-virt.png"
            alt="Infrastructure OpenStack"
            width={1024} // Placeholder: please adjust if actual image dimensions are different
            height={256} // Placeholder: please adjust if actual image dimensions are different
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-300 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                'OpenStack',
                'CentOS 8',
                'Windows 10',
                'DNS',
                'Apache',
                'MySQL',
                'Nextcloud',
                'Prometheus',
                'Grafana',
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
              Ce projet consistait à créer une infrastructure cloud complète pour une petite
              structure en utilisant OpenStack. L&apos;objectif était de démontrer la capacité à
              concevoir, déployer et gérer un environnement virtualisé professionnel.
            </p>
            <p>
              L&apos;infrastructure incluait la mise en place de serveurs virtuels sous différents
              systèmes d&apos;exploitation, la configuration d&apos;un réseau privé sécurisé, et
              l&apos;implémentation de services essentiels.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-500 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Network className="h-4 w-4" />
                  Infrastructure Réseau
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Réseau privé avec DHCP/DNS</li>
                  <li>• Routage inter-réseaux sécurisé</li>
                  <li>• Gestion des utilisateurs et accès</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Monitor className="h-4 w-4" />
                  Services et Monitoring
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Serveur web Apache + MySQL</li>
                  <li>• Nextcloud pour stockage collaboratif</li>
                  <li>• Prometheus + Grafana monitoring</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-600 duration-700">
          <CardHeader>
            <CardTitle>Architecture Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Infrastructure OpenStack</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Déploiement multi-nœuds avec Nova, Neutron, Cinder</li>
                <li>• Machines virtuelles CentOS 8 et Windows 10</li>
                <li>• Gestion des volumes et snapshots</li>
                <li>• Configuration des flavors et images</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Services et Applications</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Stack LAMP (Linux, Apache, MySQL, PHP)</li>
                <li>• Nextcloud pour collaboration et stockage</li>
                <li>• Prometheus pour métriques système</li>
                <li>• Grafana pour visualisation et alertes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results and Learning */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-700 duration-700">
          <CardHeader>
            <CardTitle>Résultats et Apprentissages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Réalisations</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Infrastructure cloud complète et fonctionnelle</li>
                <li>• Réseau privé sécurisé avec services intégrés</li>
                <li>• Monitoring complet avec alertes automatisées</li>
                <li>• Documentation technique détaillée</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Compétences Développées</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Administration OpenStack et virtualisation</li>
                <li>• Configuration réseau avancée</li>
                <li>• Déploiement et gestion de services</li>
                <li>• Monitoring et observabilité</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
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
