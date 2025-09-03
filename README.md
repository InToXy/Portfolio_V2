# Portfolio de Matheo Pinget

Bienvenue sur le dépôt GitHub du portfolio de Matheo Pinget, étudiant en Réseaux et Télécommunication.

Ce portfolio présente mes projets, mes compétences et mon expérience professionnelle, notamment mon alternance chez Orange.

## Table des matières

- [Description du projet](#description-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Déploiement continu avec GitHub Actions](#déploiement-continu-avec-github-actions)


- [Contact](#contact)

## Description du projet

Ce site web statique est conçu pour mettre en valeur mon parcours académique et professionnel. Il sert de vitrine pour mes réalisations techniques et mes compétences dans le domaine des réseaux et des télécommunications.

## Fonctionnalités

- **Page d'accueil interactive** : Présentation générale et navigation fluide.
- **Section Projets** : Détails de mes réalisations en Pentesting, Traitement de données, Cloud, et Infrastructure sécurisée, avec un carrousel pour une navigation facile.
- **Expérience en Alternance** : Description de mon expérience chez Orange.
- **Compétences** : Liste détaillée de mes compétences techniques.
- **CV en ligne** : Une version web de mon CV et un lien pour télécharger le format PDF.
- **Contact** : Informations pour me contacter (email, téléphone, LinkedIn).
- **Navigation "single-page"** : Expérience utilisateur optimisée avec défilement.

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

## Technologies utilisées

Le portfolio est développé en utilisant les technologies suivantes :

- **Développement Web** : HTML, CSS, JavaScript
- **Framework Frontend** : Next.js (React)
- **Styling** : Tailwind CSS (via `postcss.config.mjs`)
- **Gestion de paquets** : pnpm
- **Bibliothèques JavaScript** :
    - jQuery
    - Hammer.js
    - Magnific Popup
    - Shuffle.js
    - Owl Carousel





## Déploiement continu avec GitHub Actions

Ce projet utilise GitHub Actions pour automatiser le processus de déploiement. Chaque fois qu'une modification est poussée sur la branche `main`, un workflow est déclenché pour :

1.  **Cloner le dépôt**.
2.  **Installer les dépendances** du projet avec pnpm.
3.  **Construire l'application Next.js** pour la production.
4.  **Déployer le site statique** sur GitHub Pages.

Ce processus garantit que la version la plus récente du portfolio est toujours disponible en ligne, sans intervention manuelle.

## Contact

N'hésitez pas à me contacter pour toute question ou opportunité :

- **Email** : matheo.pinget@gmail.com
- **Téléphone** : 06.40.24.07.08
- **LinkedIn** : [Votre profil LinkedIn](https://www.linkedin.com/in/matheo-pinget-8a60252a9/)