import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Shield, Lock, Zap, GitBranch } from 'lucide-react'

export default function PasswordManagementProject() {
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
            Gestion Sécurisée des Mots de Passe
          </h1>
          <p className="text-muted-foreground text-xl">
            Solution DevSecOps automatisée pour la gestion sécurisée des mots de passe
            d&apos;infrastructure chez Orange Business
          </p>
        </div>

        {/* Project Image */}
        <div className="animate-in slide-in-from-bottom-4 mb-8 delay-200 duration-700">
          <Image
            src="/Portfolio_V2/secure-password-management-system-with-vault-integ.png"
            alt="Système de gestion des mots de passe"
            width={1024} // Placeholder: please adjust if actual image dimensions are different
            height={256} // Placeholder: please adjust if actual image dimensions are different
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-300 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                'HashiCorp Vault',
                'Ansible',
                'GitLab CI/CD',
                'OpenSSL',
                'AES-256',
                'WSL',
                'DevSecOps',
                'Automation',
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context and Problem */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-400 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Contexte et Problématique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <h4 className="mb-2 font-semibold text-red-800 dark:text-red-200">Constat Initial</h4>
              <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Transmission manuelle des mots de passe (risques de sécurité)</li>
                <li>• Processus lent et source d&apos;erreurs humaines</li>
                <li>• Manque de traçabilité des opérations</li>
                <li>• Coûts opérationnels élevés</li>
              </ul>
            </div>
            <p>
              Développement d&apos;une solution automatisée et sécurisée pour gérer les mots de
              passe d&apos;infrastructure dans une démarche DevSecOps chez Orange Business.
            </p>
          </CardContent>
        </Card>

        {/* Technical Objectives */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-500 duration-700">
          <CardHeader>
            <CardTitle>Objectifs Techniques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Zap className="h-4 w-4" />
                  Automatisation
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Récupération automatisée des mots de passe</li>
                  <li>• Suppression sécurisée et contrôlée</li>
                  <li>• Intégration avec les outils existants</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 font-semibold">
                  <Shield className="h-4 w-4" />
                  Sécurité
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Chiffrement AES-256 des transferts</li>
                  <li>• Traçabilité complète (logs)</li>
                  <li>• Validation manuelle des suppressions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CI/CD Pipeline */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-600 duration-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Pipeline CI/CD Développé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="mb-1 font-semibold">Étape 1 : retrieve_password</h4>
                <p className="text-muted-foreground text-sm">
                  Récupération sécurisée des mots de passe depuis HashiCorp Vault
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="mb-1 font-semibold">Étape 2 : check_delete</h4>
                <p className="text-muted-foreground text-sm">
                  Vérification automatique avant suppression avec contrôles de sécurité
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="mb-1 font-semibold">Étape 3 : confirm_delete</h4>
                <p className="text-muted-foreground text-sm">
                  Suppression validée manuellement avec double confirmation
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="mb-1 font-semibold">Finalisation</h4>
                <p className="text-muted-foreground text-sm">
                  Génération automatique de logs et archives chiffrées
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Stack */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-700 duration-700">
          <CardHeader>
            <CardTitle>Stack Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Outils DevSecOps</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>
                  • <strong>HashiCorp Vault</strong> : Gestion centralisée des secrets
                </li>
                <li>
                  • <strong>Ansible</strong> : Automatisation et orchestration
                </li>
                <li>
                  • <strong>GitLab CI/CD</strong> : Pipeline d&apos;intégration continue
                </li>
                <li>
                  • <strong>OpenSSL</strong> : Chiffrement et sécurisation
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Environnement de Développement</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• WSL (Windows Subsystem for Linux)</li>
                <li>• Visual Studio Code avec extensions DevOps</li>
                <li>• Intégration avec l&apos;écosystème Orange Business</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="animate-in slide-in-from-bottom-4 mb-8 delay-800 duration-700">
          <CardHeader>
            <CardTitle>Résultats et Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
              <h4 className="mb-2 font-semibold text-green-800 dark:text-green-200">
                Performances Atteintes
              </h4>
              <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>
                  • <strong>100 machines</strong> traitées en moins de 5 minutes
                </li>
                <li>
                  • <strong>Automatisation complète</strong> du processus
                </li>
                <li>
                  • <strong>Réduction significative</strong> des coûts opérationnels
                </li>
                <li>
                  • <strong>Amélioration de la sécurité</strong> et satisfaction utilisateurs
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Compétences Développées</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Conception d&apos;un rôle Ansible modulaire et réutilisable</li>
                <li>• Intégration de la sécurité dans un pipeline CI/CD</li>
                <li>• Expérience concrète en DevOps/DevSecOps</li>
                <li>• Gestion d&apos;infrastructures sécurisées à grande échelle</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="animate-in slide-in-from-bottom-4 flex gap-4 delay-900 duration-700">
          <Button asChild>
            <a
              href="https://github.com/InToXy/MPI_POC_Vault_Retrieve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/Portfolio_V2/documents/password-management-rapport.pdf" download>
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
