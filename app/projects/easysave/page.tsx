import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, HardDrive, Shield, Zap, Settings } from "lucide-react"

export default function EasySaveProject() {
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
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">EasySave - Logiciel de Sauvegarde</h1>
          <p className="text-xl text-muted-foreground">
            Logiciel de sauvegarde professionnel évolutif développé en C#/.NET avec architecture MVC
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/Portfolio_V2/professional-backup-software-interface-with-progre.png"
            alt="Interface EasySave"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["C#", ".NET 8.0", "WPF", "MVC", "SHA-256", "JSON", "Doxygen", "JIRA", "Git", "Scrum"].map(
                (tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        {/* Context */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <CardHeader>
            <CardTitle>Contexte du Projet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Projet académique réalisé dans le cadre d'un éditeur logiciel fictif (ProSoft), visant à développer un
              logiciel de sauvegarde performant et évolutif destiné à des utilisateurs professionnels.
            </p>
            <p>
              L'objectif était de créer une solution fiable et simple d'utilisation, avec de fortes attentes en termes
              de performance et de maintenabilité du code.
            </p>
          </CardContent>
        </Card>

        {/* Versions Evolution */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle>Évolution par Versions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <HardDrive className="w-4 h-4" />
                  Version 1 - Base CLI
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Interface en ligne de commande (CLI)</li>
                  <li>• Création jusqu'à 5 travaux de sauvegarde</li>
                  <li>• Sauvegardes complètes ou différentielles</li>
                  <li>• Gestion des logs et états (JSON/XML)</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4" />
                  Version 2 - Interface Graphique
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Interface graphique WPF moderne</li>
                  <li>• Sauvegardes illimitées</li>
                  <li>• Chiffrement SHA-256 intégré</li>
                  <li>• Détection de logiciels métiers bloquants</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4" />
                  Version 3 - Optimisations Avancées
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sauvegardes en parallèle pour les performances</li>
                  <li>• Gestion des priorités par extensions de fichiers</li>
                  <li>• Contrôles avancés : pause/relance/arrêt</li>
                  <li>• Console déportée avec communication par sockets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader>
            <CardTitle>Architecture Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Architecture MVC</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Séparation claire Modèle / Vue / Contrôleur</li>
                <li>• Modularité et maintenabilité du code</li>
                <li>• Évolutivité assurée pour les versions futures</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technologies Core</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• C# / .NET 8.0 pour les performances</li>
                <li>• System.IO pour la gestion avancée des fichiers</li>
                <li>• Persistance des données en JSON</li>
                <li>• Chiffrement sécurisé SHA-256</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Project Management */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-700">
          <CardHeader>
            <CardTitle>Gestion de Projet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Méthodologie Agile</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Méthodologie Scrum avec sprints définis</li>
                <li>• Gestion des tickets et backlogs via JIRA</li>
                <li>• Rétrospectives et amélioration continue</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Versioning et Documentation</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GitHub avec workflow Git complet</li>
                <li>• Branches organisées : feature, dev, release, main</li>
                <li>• Documentation générée avec Doxygen + PDF</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-800">
          <CardHeader>
            <CardTitle>Résultats et Apprentissages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Réalisations</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Logiciel modulaire et maintenable livré</li>
                <li>• Évolutivité prouvée sur 3 versions majeures</li>
                <li>• Interface utilisateur intuitive et professionnelle</li>
                <li>• Performance optimisée avec sauvegardes parallèles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Développement C#/.NET avancé</li>
                <li>• Architecture logicielle MVC</li>
                <li>• Gestion de projet agile (Scrum)</li>
                <li>• Versioning Git et workflow collaboratif</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-900">
          <Button asChild>
            <a href="https://github.com/InToXy/EasySave" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/documents/easysave-rapport.pdf" download>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger Rapport
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/documents/easysave-diapo.pdf" download>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger Diapo
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
