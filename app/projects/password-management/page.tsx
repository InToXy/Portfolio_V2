import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Github, Shield, Lock, Zap, GitBranch } from "lucide-react"

export default function PasswordManagementProject() {
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
          <h1 className="font-heading font-bold text-4xl text-primary mb-4">Gestion Sécurisée des Mots de Passe</h1>
          <p className="text-xl text-muted-foreground">
            Solution DevSecOps automatisée pour la gestion sécurisée des mots de passe d'infrastructure chez Orange
            Business
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <img
            src="/Portfolio_V2/secure-password-management-system-with-vault-integ.png"
            alt="Système de gestion des mots de passe"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Technologies */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Technologies Utilisées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "HashiCorp Vault",
                "Ansible",
                "GitLab CI/CD",
                "OpenSSL",
                "AES-256",
                "WSL",
                "DevSecOps",
                "Automation",
              ].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Context and Problem */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Contexte et Problématique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Constat Initial</h4>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Transmission manuelle des mots de passe (risques de sécurité)</li>
                <li>• Processus lent et source d'erreurs humaines</li>
                <li>• Manque de traçabilité des opérations</li>
                <li>• Coûts opérationnels élevés</li>
              </ul>
            </div>
            <p>
              Développement d'une solution automatisée et sécurisée pour gérer les mots de passe d'infrastructure dans
              une démarche DevSecOps chez Orange Business.
            </p>
          </CardContent>
        </Card>

        {/* Technical Objectives */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-500">
          <CardHeader>
            <CardTitle>Objectifs Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Automatisation
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Récupération automatisée des mots de passe</li>
                  <li>• Suppression sécurisée et contrôlée</li>
                  <li>• Intégration avec les outils existants</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Sécurité
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chiffrement AES-256 des transferts</li>
                  <li>• Traçabilité complète (logs)</li>
                  <li>• Validation manuelle des suppressions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CI/CD Pipeline */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="w-5 h-5" />
              Pipeline CI/CD Développé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold mb-1">Étape 1 : retrieve_password</h4>
                <p className="text-sm text-muted-foreground">
                  Récupération sécurisée des mots de passe depuis HashiCorp Vault
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold mb-1">Étape 2 : check_delete</h4>
                <p className="text-sm text-muted-foreground">
                  Vérification automatique avant suppression avec contrôles de sécurité
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold mb-1">Étape 3 : confirm_delete</h4>
                <p className="text-sm text-muted-foreground">
                  Suppression validée manuellement avec double confirmation
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-1">Finalisation</h4>
                <p className="text-sm text-muted-foreground">Génération automatique de logs et archives chiffrées</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Stack */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-700">
          <CardHeader>
            <CardTitle>Stack Technique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Outils DevSecOps</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • <strong>HashiCorp Vault</strong> : Gestion centralisée des secrets
                </li>
                <li>
                  • <strong>Ansible</strong> : Automatisation et orchestration
                </li>
                <li>
                  • <strong>GitLab CI/CD</strong> : Pipeline d'intégration continue
                </li>
                <li>
                  • <strong>OpenSSL</strong> : Chiffrement et sécurisation
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Environnement de Développement</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• WSL (Windows Subsystem for Linux)</li>
                <li>• Visual Studio Code avec extensions DevOps</li>
                <li>• Intégration avec l'écosystème Orange Business</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-800">
          <CardHeader>
            <CardTitle>Résultats et Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Performances Atteintes</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
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
              <h4 className="font-semibold mb-2">Compétences Développées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Conception d'un rôle Ansible modulaire et réutilisable</li>
                <li>• Intégration de la sécurité dans un pipeline CI/CD</li>
                <li>• Expérience concrète en DevOps/DevSecOps</li>
                <li>• Gestion d'infrastructures sécurisées à grande échelle</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-900">
          <Button asChild>
            <a href="https://github.com/InToXy/MPI_POC_Vault_Retrieve" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir sur GitHub
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/documents/password-management-rapport.pdf" download>
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
