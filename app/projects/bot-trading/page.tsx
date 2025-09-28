import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Users, MessageCircle, Heart, Share2 } from 'lucide-react'

export default function BotTradingProject() {
  return (
    <div className="bg-background animate-in fade-in min-h-screen duration-1000">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="animate-in slide-in-from-top-4 mb-8 duration-700">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au portfolio
            </Link>
          </Button>
          <h1 className="font-heading text-primary mb-4 text-4xl font-bold">
            Bot Trading - Bot de Trading Automatisé
          </h1>
          <p className="text-muted-foreground text-xl">
            Développement d&apos;un bot de trading automatisé pour la cryptomonnaie
          </p>
        </div>

        {/* Project Image */}
        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/Cover-16-1.png"
            alt="Interface Bot Trading"
            width={1024} // Placeholder: please adjust if actual image dimensions are different
            height={256} // Placeholder: please adjust if actual image dimensions are different
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-300 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'Binance API',
                'Pandas',
                'NumPy',
                'TensorFlow',
                'Docker',
                'PostgreSQL',
                'Grafana',
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context and Objectives */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-400 duration-700">
          <CardHeader>
            <CardTitle>Contexte et Objectifs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Création d&apos;un bot de trading automatisé utilisant l&apos;API Binance pour
              exécuter des stratégies de trading sur les cryptomonnaies. L&apos;objectif était de
              développer un système robuste capable d&apos;analyser les données du marché en temps
              réel et de prendre des décisions d&apos;achat ou de vente basées sur des indicateurs
              techniques.
            </p>
            <p>
              Le projet visait également à mettre en place un système de backtesting pour évaluer
              l&apos;efficacité des stratégies sur des données historiques, ainsi qu&apos;un
              dashboard de suivi des performances en temps réel.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-500 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Fonctionnalités Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <MessageCircle className="h-4 w-4" />
                  Stratégies de Trading
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Implémentation de plusieurs stratégies (ex: MACD, RSI)</li>
                  <li>• Backtesting sur données historiques</li>
                  <li>• Optimisation des paramètres de stratégies</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Heart className="h-4 w-4" />
                  Gestion des Risques
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Stop-loss et take-profit automatiques</li>
                  <li>• Gestion de la taille des positions</li>
                  <li>• Suivi du drawdown du portefeuille</li>
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
              <h4 className="mb-2 font-semibold">Architecture du Bot</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Collecte de données en temps réel via l&apos;API Binance</li>
                <li>• Analyse technique avec Pandas et NumPy</li>
                <li>• Modèles de prédiction avec TensorFlow (optionnel)</li>
                <li>• Exécution des ordres via l&apos;API Binance</li>
                <li>• Stockage des données de trading dans PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Visualisation & Monitoring</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Dashboard Grafana pour le suivi des performances</li>
                <li>• Alertes en temps réel (ex: via Telegram)</li>
                <li>• Journalisation des trades et des erreurs</li>
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
                <li>• Développement d&apos;un bot de trading fonctionnel</li>
                <li>• Intégration réussie avec l&apos;API de Binance</li>
                <li>• Création d&apos;un système de backtesting</li>
                <li>• Déploiement d&apos;un dashboard de monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Compétences Développées</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Analyse de données financières avec Python</li>
                <li>• Intégration d&apos;APIs tierces</li>
                <li>• Backtesting de stratégies de trading</li>
                <li>• Visualisation de données avec Grafana</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="animate-in slide-in-from-bottom-4 flex gap-4 delay-800 duration-700">
          <Button asChild>
            <a
              href="https://github.com/InToXy/Bot_Trading.git"
              target="_blank"
              rel="noopener noreferrer"
            >
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
