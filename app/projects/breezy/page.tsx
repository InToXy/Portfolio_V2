import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Users, MessageCircle, Heart, Share2 } from 'lucide-react'

export default function BreezyProject() {
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
            Breezy - Réseau Social Léger
          </h1>
          <p className="text-muted-foreground text-xl">
            Développement d&apos;un réseau social réactif et optimisé pour les environnements à
            faibles ressources
          </p>
        </div>

        {/* Project Image */}
        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/breezy.png"
            alt="Interface Breezy"
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
                'Node.js',
                'Express',
                'MongoDB',
                'React',
                'Next.js',
                'TailwindCSS',
                'Docker',
                'Traefik',
                'JWT',
                'Microservices',
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
              Développement d&apos;un réseau social léger et réactif, inspiré de Twitter/X, conçu
              pour fonctionner efficacement dans des environnements à faibles ressources et avec une
              connectivité limitée.
            </p>
            <p>
              L&apos;objectif principal était d&apos;offrir une expérience utilisateur simple et
              fluide permettant de publier, liker, commenter, suivre et être suivi, tout en
              maintenant des performances optimales.
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
                  Gestion des Publications
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Messages courts (280 caractères)</li>
                  <li>• Fil d&apos;actualité chronologique</li>
                  <li>• Système de commentaires et réponses</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Heart className="h-4 w-4" />
                  Interactions Sociales
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Système de likes</li>
                  <li>• Suivi d&apos;utilisateurs</li>
                  <li>• Profils personnalisés avec bio</li>
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
              <h4 className="mb-2 font-semibold">Backend - Architecture Microservices</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Services indépendants : auth, users, posts, feed</li>
                <li>• Node.js + Express pour chaque microservice</li>
                <li>• MongoDB avec Mongoose pour la persistance</li>
                <li>• Authentification JWT avec refresh tokens</li>
                <li>• Traefik comme API Gateway et Load Balancer</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Frontend - Interface Moderne</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• React.js avec Next.js pour le SSR</li>
                <li>• TailwindCSS avec approche mobile-first</li>
                <li>• Axios pour la communication API</li>
                <li>• Gestion des sessions et routes protégées</li>
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
                <li>• Création d&apos;un réseau social fonctionnel et extensible</li>
                <li>• Expérience utilisateur fluide, optimisée mobile</li>
                <li>• Architecture scalable et maintenable</li>
                <li>• Pipeline CI/CD avec ESLint et Snyk pour la sécurité</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Compétences Développées</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Architecture microservices et conteneurisation</li>
                <li>• Sécurisation avec JWT et gestion des sessions</li>
                <li>• Développement full-stack moderne</li>
                <li>• Intégration continue et DevOps</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="animate-in slide-in-from-bottom-4 flex gap-4 delay-800 duration-700">
          <Button asChild>
            <a
              href="https://github.com/DAD-Equipe-5/Breezy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/Portfolio_V2/documents/breezy-rapport-soutenance.pdf" download>
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
