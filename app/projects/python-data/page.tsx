import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, BarChart3, Code, FileText, TrendingUp } from "lucide-react"

export default function PythonDataProject() {
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
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Traitement de Données avec Python</h1>
          <p className="text-xl text-muted-foreground">Analyse et visualisation de données de calendrier</p>
        </div>

        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/python-data-analysis-dashboard-with-charts--graphs.png"
            alt="Analyse de données Python"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Python", "Pandas", "Matplotlib", "CSV", "Markdown", "HTML/CSS", "Jupyter", "NumPy"].map(
                (tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <CardHeader>
            <CardTitle>Contexte et Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Ce projet consistait à développer un script Python sophistiqué pour analyser et traiter des données issues
              de fichiers de calendrier au format CSV. L'objectif était de créer un outil capable d'extraire, filtrer et
              présenter des informations spécifiques sur les événements et réunions.
            </p>
            <p>
              Le défi principal était de transformer des données brutes en informations exploitables, présentées sous
              forme de tableaux Markdown et de graphiques interactifs pour faciliter l'analyse.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Traitement des Données
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Parsing automatique de fichiers CSV</li>
                  <li>• Filtrage intelligent par type et date</li>
                  <li>• Extraction d'informations spécifiques</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Visualisation et Export
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Génération de graphiques Matplotlib</li>
                  <li>• Tableaux Markdown formatés</li>
                  <li>• Export HTML/CSS personnalisé</li>
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
              <h4 className="font-semibold mb-2">Analyse des Données</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Distribution temporelle des événements par jour/semaine/mois</li>
                <li>• Classification automatique des réunions par type</li>
                <li>• Statistiques de participation et durée moyenne</li>
                <li>• Identification des périodes de forte activité</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Visualisations et Rapports</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Graphiques en barres, camemberts et courbes</li>
                <li>• Interface en ligne de commande intuitive</li>
                <li>• Gestion des erreurs et validation des données</li>
                <li>• Tests unitaires pour la fiabilité du code</li>
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
                <li>• Outil d'analyse de données complet et fonctionnel</li>
                <li>• Visualisations graphiques claires et informatives</li>
                <li>• Code documenté avec tests unitaires</li>
                <li>• Interface utilisateur intuitive et robuste</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Manipulation de données avec Pandas</li>
                <li>• Visualisation avec Matplotlib</li>
                <li>• Développement Python orienté objet</li>
                <li>• Tests unitaires et documentation</li>
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
