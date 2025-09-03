import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, Users, MessageCircle, Heart, Share2 } from "lucide-react"

export default function BotTradingProject() {
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
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Bot Trading - Bot de Trading Automatisé</h1>
          <p className="text-xl text-muted-foreground">
            Développement d'un bot de trading automatisé pour la cryptomonnaie
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/Portfolio_V2/Cover-16-1.png"
            alt="Interface Bot Trading"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Binance API",
                "Pandas",
                "NumPy",
                "TensorFlow",
                "Docker",
                "PostgreSQL",
                "Grafana",
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
            <CardTitle>Contexte et Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Création d'un bot de trading automatisé utilisant l'API Binance pour exécuter des stratégies de trading sur les cryptomonnaies. L'objectif était de développer un système robuste capable d'analyser les données du marché en temps réel et de prendre des décisions d'achat ou de vente basées sur des indicateurs techniques.
            </p>
            <p>
              Le projet visait également à mettre en place un système de backtesting pour évaluer l'efficacité des stratégies sur des données historiques, ainsi qu'un dashboard de suivi des performances en temps réel.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Stratégies de Trading
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Implémentation de plusieurs stratégies (ex: MACD, RSI)</li>
                  <li>• Backtesting sur données historiques</li>
                  <li>• Optimisation des paramètres de stratégies</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Gestion des Risques
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Stop-loss et take-profit automatiques</li>
                  <li>• Gestion de la taille des positions</li>
                  <li>• Suivi du drawdown du portefeuille</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader>
            <CardTitle>Architecture Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Architecture du Bot</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Collecte de données en temps réel via l'API Binance</li>
                <li>• Analyse technique avec Pandas et NumPy</li>
                <li>• Modèles de prédiction avec TensorFlow (optionnel)</li>
                <li>• Exécution des ordres via l'API Binance</li>
                <li>• Stockage des données de trading dans PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Visualisation & Monitoring</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Dashboard Grafana pour le suivi des performances</li>
                <li>• Alertes en temps réel (ex: via Telegram)</li>
                <li>• Journalisation des trades et des erreurs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results and Learning */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-700">
          <CardHeader>
            <CardTitle>Résultats et Apprentissages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Réalisations</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Développement d'un bot de trading fonctionnel</li>
                <li>• Intégration réussie avec l'API de Binance</li>
                <li>• Création d'un système de backtesting</li>
                <li>• Déploiement d'un dashboard de monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Analyse de données financières avec Python</li>
                <li>• Intégration d'APIs tierces</li>
                <li>• Backtesting de stratégies de trading</li>
                <li>• Visualisation de données avec Grafana</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-800">
          <Button asChild>
            <a href="https://github.com/InToXy/Bot_Trading.git" target="_blank" rel="noopener noreferrer">
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