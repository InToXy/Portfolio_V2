import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Database, BarChart, Layers } from 'lucide-react'

export default function BigDataProject() {
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
            Plateforme Big Data pour le Secteur de la Santé
          </h1>
          <p className="text-muted-foreground text-xl">
            Construction d&apos;un data warehouse pour un groupe hospitalier afin d&apos;analyser et
            visualiser les données médicales.
          </p>
        </div>

        {/* Project Image */}
        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/big_data.jpg"
            alt="Dashboard d'analyse de données"
            width={1024}
            height={256}
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-300 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                'Apache Airflow',
                'Apache Spark (PySpark)',
                'MinIO',
                'Apache Hive',
                'Trino',
                'Apache Superset',
                'Docker',
                'Docker Compose',
                'Python',
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
              Le projet visait à mettre en place une plateforme Big Data complète pour un groupe
              hospitalier (CHU) afin de créer un data warehouse. L&apos;objectif était
              d&apos;intégrer, stocker, analyser et visualiser des données hétérogènes, telles que
              les dossiers médicaux et les flux de patients, pour en extraire des informations
              stratégiques.
            </p>
            <p>
              L&apos;architecture Data Lakehouse a été choisie pour traiter les données à travers
              différentes couches de qualité : Bronze (données brutes), Silver (nettoyées) et Gold
              (agrégées), prêtes pour la business intelligence.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-500 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Pipeline de Données
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Layers className="h-4 w-4" />
                  Architecture Lakehouse
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Intégration de données brutes (Bronze)</li>
                  <li>• Nettoyage et transformation (Silver)</li>
                  <li>• Agrégation pour l&apos;analyse (Gold)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <BarChart className="h-4 w-4" />
                  Analyse et Visualisation
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Orchestration des tâches avec Airflow</li>
                  <li>• Traitement distribué avec Spark</li>
                  <li>• Visualisation interactive avec Superset</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="animate-in slide-in-from-bottom-4 flex gap-4 delay-800 duration-700">
          <Button asChild>
            <a href="https://github.com/InToXy/BigData" target="_blank" rel="noopener noreferrer">
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
