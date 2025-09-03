import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, BarChart3, Zap, Leaf, Brain } from "lucide-react"

export default function RouteOptimizationProject() {
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
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Optimisation de Tournées - ADEME</h1>
          <p className="text-xl text-muted-foreground">
            Projet de recherche opérationnelle pour réduire les émissions CO₂ des transports de livraison
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/Portfolio_V2/route-optimization-algorithms-with-genetic-and-ant.png"
            alt="Algorithmes d'optimisation de tournées"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Technologies et Méthodes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "PLNE",
                "Algorithmes Génétiques",
                "Recuit Simulé",
                "Colonie de Fourmis",
                "Optimisation",
                "Recherche Opérationnelle",
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context and Objectives */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Contexte et Objectifs Environnementaux
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Mission ADEME</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Répondre à un appel à projet pour réduire la consommation énergétique et les émissions de CO₂ liées aux
                transports de marchandises.
              </p>
            </div>
            <p>
              Projet universitaire en collaboration avec l'ADEME (Agence de l'Environnement et de la Maîtrise de
              l'Énergie) pour étudier l'optimisation des tournées de livraison, une variante complexe du célèbre
              problème du Voyageur de Commerce (TSP).
            </p>
          </CardContent>
        </Card>

        {/* Mathematical Modeling */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Modélisation Mathématique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Représentation en Graphe</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>G = (S, A)</strong> où S = ensemble des villes, A = ensemble des routes
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contraintes Complexes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • <strong>Routes impraticables</strong> : travaux, restrictions de circulation
                </li>
                <li>
                  • <strong>Dépendances temporelles</strong> : collecte obligatoire avant livraison
                </li>
                <li>
                  • <strong>Retour au dépôt</strong> : contrainte de circuit fermé
                </li>
                <li>
                  • <strong>Fonction objectif</strong> : minimiser le coût total (distance/temps)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Algorithms */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader>
            <CardTitle>Méthodes d'Optimisation Implémentées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold mb-2">Méthode Exacte - PLNE</h4>
              <p className="text-sm text-muted-foreground">
                Programmation Linéaire en Nombres Entiers pour obtenir la solution optimale garantie, mais avec une
                complexité exponentielle limitant son usage aux petites instances.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Métaheuristiques Avancées</h4>

              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="font-medium mb-1">Recuit Simulé</h5>
                <p className="text-sm text-muted-foreground">
                  Optimisation inspirée du refroidissement des métaux, permettant d'échapper aux optimums locaux grâce à
                  un processus de refroidissement contrôlé.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-medium mb-1">Algorithme Génétique</h5>
                <p className="text-sm text-muted-foreground">
                  Évolution d'une population de solutions par sélection, mutation et croisement, mimant les processus de
                  sélection naturelle.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-medium mb-1">Colonie de Fourmis</h5>
                <p className="text-sm text-muted-foreground">
                  Optimisation par phéromones virtuelles, où les "fourmis" renforcent les bonnes routes par dépôt de
                  traces attractives.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation and Results */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Implémentation et Résultats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Environnement de Test</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Génération de matrices aléatoires (100 villes)</li>
                <li>• Coûts de transport maximum : 200 unités</li>
                <li>• Comparaison systématique des performances</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Conclusions Principales</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Les heuristiques donnent des résultats proches de l'optimum</li>
                <li>• Temps de calcul drastiquement réduit vs méthode exacte</li>
                <li>• Colonie de fourmis particulièrement efficace sur les grandes instances</li>
                <li>• Algorithme génétique excellent pour l'exploration de l'espace des solutions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Future Perspectives */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-800">
          <CardHeader>
            <CardTitle>Perspectives d'Amélioration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Extensions Possibles</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Intégration de contraintes de capacité des véhicules</li>
                <li>• Gestion multi-camions avec optimisation globale</li>
                <li>• Fenêtres de temps pour les livraisons</li>
                <li>• Prise en compte du trafic en temps réel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Algorithmes Additionnels</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GRASP (Greedy Randomized Adaptive Search)</li>
                <li>• Recherche Tabou pour éviter les cycles</li>
                <li>• Hybridation des métaheuristiques</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Learning Outcomes */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-900">
          <CardHeader>
            <CardTitle>Apprentissages et Compétences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Compétences Techniques</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Modélisation mathématique de problèmes NP-difficiles</li>
                <li>• Implémentation d'algorithmes d'optimisation complexes</li>
                <li>• Analyse comparative de performances algorithmiques</li>
                <li>• Programmation Python scientifique avancée</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Impact Environnemental</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Application concrète à un enjeu environnemental majeur</li>
                <li>• Compréhension des défis logistiques durables</li>
                <li>• Collaboration avec un organisme public (ADEME)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-1000">
          <Button asChild>
            <a href="https://github.com/InToXy/Recherche-Operationnelle" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/Portfolio_V2/documents/route-optimization-diapo.pdf" download>
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
