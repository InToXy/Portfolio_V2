# Portfolio de Matheo Pinget

![CI/CD](https://github.com/InToXy/Portfolio_V2/actions/workflows/nextjs.yml/badge.svg)
[![codecov](https://codecov.io/gh/InToXy/Portfolio_V2/branch/main/graph/badge.svg)](https://codecov.io/gh/InToXy/Portfolio_V2)

Bienvenue sur le dépôt GitHub du portfolio de Matheo Pinget, étudiant en Réseaux et Télécommunication.

Ce portfolio présente mes projets, mes compétences et mon expérience professionnelle, notamment mon alternance chez Orange.

## Table des matières

- [Description du projet](#description-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Déploiement continu avec GitHub Actions](#déploiement-continu-avec-github-actions)

- [Contact](#contact)

## Description du Projet

Ce portfolio interactif présente mon parcours académique et professionnel en tant qu&apos;ingénieur DevOps et Cloud. Il met en lumière mes compétences techniques, mes projets significatifs et mon expérience en alternance, offrant une vitrine complète de mes réalisations dans les domaines des réseaux, de la cybersécurité, de l&apos;automatisation et du cloud.

## Fonctionnalités Clés

- **Présentation Dynamique**: Page d&apos;accueil interactive avec animations et effets visuels.
- **Détails des Projets**: Sections dédiées pour chaque projet (Pentesting, Traitement de données, Cloud, Infra sécurisée, etc.) avec descriptions techniques et visuels.
- **Expérience Professionnelle**: Mise en avant de mon alternance chez Orange, détaillant les missions et les acquis.
- **Compétences Techniques**: Une vue d&apos;ensemble structurée de mes expertises (DevOps, Cloud, Réseaux, Cybersécurité, Programmation).
- **CV Intégré**: Accès direct à une version web de mon CV et option de téléchargement au format PDF.
- **Contact Facilité**: Informations de contact claires et liens vers mes profils professionnels (LinkedIn, GitHub).
- **Navigation Intuitive**: Expérience utilisateur fluide et réactive, optimisée pour tous les appareils.

## Structure du projet

Le projet est organisé de la manière suivante :

```
/
├── app/                  # Contient les pages principales (accueil, projets, etc.)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/         # Détails de chaque projet
│       ├── bot-trading/
│       ├── breezy/
│       ├── easysave/
│       ├── openstack/
│       ├── password-management/
│       ├── pentesting/
│       ├── python-data/
│       ├── route-optimization/
│       └── security/
├── components/           # Composants réutilisables de l'interface utilisateur
├── lib/                  # Utilitaires et fonctions diverses
├── public/               # Assets statiques (images, documents, etc.)
│   ├── documents/        # Rapports et présentations de projets
│   ├── moto/
│   ├── rando/
│   └── voyage/
├── styles/               # Fichiers de style globaux
├── .github/              # Configuration GitHub Actions pour le déploiement
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md             # Ce fichier
├── tsconfig.json
└── ...
```

## Technologies Utilisées

Ce portfolio est développé en utilisant les technologies et outils suivants :

- **Framework Frontend**: Next.js (React)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Gestion de paquets**: pnpm
- **Formatage de code**: Prettier
- **Analyse de code statique**: ESLint, CodeQL
- **Déploiement**: GitHub Actions (pour GitHub Pages)

## Mise en place et Utilisation

Suivez ces étapes pour configurer et exécuter le projet en local :

### Prérequis

Assurez-vous d&apos;avoir installé :

- Node.js (version 20 ou supérieure)
- pnpm (gestionnaire de paquets)

### Installation

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/InToXy/Portfolio_V2.git
    cd Portfolio_V2
    ```
2.  Installez les dépendances :
    ```bash
    pnpm install
    ```

### Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `pnpm dev` : Lance l&apos;application en mode développement. Ouvrez [http://localhost:3000](http://localhost:3000) pour la visualiser.
- `pnpm build` : Construit l&apos;application pour la production.
- `pnpm start` : Lance l&apos;application construite en production.
- `pnpm lint` : Exécute ESLint pour vérifier les erreurs de code et les problèmes de style.
- `pnpm format` : Formate le code source avec Prettier.
- `pnpm tsc` : Exécute le vérificateur de types TypeScript.

## Déploiement Continu et Qualité du Code avec GitHub Actions

Ce projet utilise GitHub Actions pour automatiser plusieurs aspects du développement et du déploiement :

### Workflows de Qualité du Code

- **Analyse Statique (CodeQL)**: Un workflow dédié (`codeql.yml`) analyse le code pour détecter les vulnérabilités de sécurité et les erreurs potentielles. Il est déclenché sur les `push` et `pull_request` vers `main`, ainsi que de manière hebdomadaire.
- **Linting et Type Checking**: Avant chaque déploiement, le code est vérifié avec ESLint (`pnpm lint`) pour le style et les bonnes pratiques, et avec TypeScript (`pnpm tsc`) pour la cohérence des types.

### Workflow de Déploiement

Le workflow de déploiement (`nextjs.yml`) est déclenché sur chaque `push` vers la branche `main` et manuellement via `workflow_dispatch`. Il effectue les étapes suivantes :

1.  **Clonage du dépôt**.
2.  **Configuration de pnpm et Node.js**.
3.  **Restauration du cache** pour optimiser les temps de build.
4.  **Installation des dépendances** avec pnpm.
5.  **Exécution du Linter** (`pnpm lint`).
6.  **Vérification des Types** (`pnpm tsc`).
7.  **Construction de l&apos;application Next.js** pour la production (`pnpm next build`).
8.  **Téléchargement des artefacts** de build.
9.  **Déploiement du site statique** sur GitHub Pages.

Ce processus garantit non seulement que la version la plus récente du portfolio est toujours disponible en ligne, mais aussi qu&apos;elle respecte des standards élevés de qualité et de sécurité.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Changelog

Consultez le fichier [CHANGELOG.md](CHANGELOG.md) pour un historique complet des modifications.

## Contact

N&apos;hésitez pas à me contacter pour toute question ou opportunité :

- **Email** : matheo.pinget@gmail.com
- **Téléphone** : 06.40.24.07.08
- **LinkedIn** : [Matheo Pinget](https://www.linkedin.com/in/matheo-pinget-8a60252a9/)
- **GitHub** : [InToXy](https://github.com/InToXy)
