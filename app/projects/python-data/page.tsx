import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, BarChart3, Code, FileText, TrendingUp } from 'lucide-react'

export default function PythonDataProject() {
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
            Traitement de Données avec Python
          </h1>
          <p className="text-muted-foreground text-xl">
            Analyse et visualisation de données de calendrier
          </p>
        </div>

        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/python-data-analysis-dashboard-with-charts--graphs.png"
            alt="Analyse de données Python"
            width={1024} // Placeholder: please adjust if actual image dimensions are different
            height={256} // Placeholder: please adjust if actual image dimensions are different
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-300 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'Pandas',
                'Matplotlib',
                'CSV',
                'Markdown',
                'HTML/CSS',
                'Jupyter',
                'NumPy',
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
              Ce projet consistait à développer un script Python sophistiqué pour analyser et
              traiter des données issues de fichiers de calendrier au format CSV. L&apos;objectif
              était de créer un outil capable d&apos;extraire, filtrer et présenter des informations
              spécifiques sur les événements et réunions.
            </p>
            <p>
              Le défi principal était de transformer des données brutes en informations
              exploitables, présentées sous forme de tableaux Markdown et de graphiques interactifs
              pour faciliter l&apos;analyse.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-500 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <FileText className="h-4 w-4" />
                  Traitement des Données
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Parsing automatique de fichiers CSV</li>
                  <li>• Filtrage intelligent par type et date</li>
                  <li>• Extraction d&apos;informations spécifiques</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <TrendingUp className="h-4 w-4" />
                  Visualisation et Export
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Génération de graphiques Matplotlib</li>
                  <li>• Tableaux Markdown formatés</li>
                  <li>• Export HTML/CSS personnalisé</li>
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
              <h4 className="mb-2 font-semibold">Analyse des Données</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Distribution temporelle des événements par jour/semaine/mois</li>
                <li>• Classification automatique des réunions par type</li>
                <li>• Statistiques de participation et durée moyenne</li>
                <li>• Identification des périodes de forte activité</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Visualisations et Rapports</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Graphiques en barres, camemberts et courbes</li>
                <li>• Interface en ligne de commande intuitive</li>
                <li>• Gestion des erreurs et validation des données</li>
                <li>• Tests unitaires pour la fiabilité du code</li>
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
                <li>• Outil d&apos;analyse de données complet et fonctionnel</li>
                <li>• Visualisations graphiques claires et informatives</li>
                <li>• Code documenté avec tests unitaires</li>
                <li>• Interface utilisateur intuitive et robuste</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Compétences Développées</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Manipulation de données avec Pandas</li>
                <li>• Visualisation avec Matplotlib</li>
                <li>• Développement Python orienté objet</li>
                <li>• Tests unitaires et documentation</li>
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
