<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  <i>Backend de l'application Todo List réalisée avec NestJS, Prisma et MySQL</i>
</p>

---

##  Description

Ce dépôt contient l’API backend pour une application de gestion de tâches (Todo List).  
L’application est développée en **NestJS**, connectée à une base de données **MySQL** via **Prisma**.

---

##  Choix techniques

- **NestJS** : Framework Node.js orienté architecture modulaire, facilitant la maintenabilité et la séparation des responsabilités via des modules, services et contrôleurs.
- **Prisma** : ORM moderne, typé, rapide à mettre en place et bien intégré à TypeScript. Il facilite les migrations et les requêtes.
- **MySQL** : Base de données relationnelle robuste et facilement intégrable avec Prisma.

---

##  Difficultés rencontrées

   - **Compréhension de la structure existante** : le projet étant déjà structuré, une première étape a consisté à analyser l'architecture (Controllers, UseCase, Repositories, etc.) pour intégrer les nouvelles fonctionnalités sans casser la logique existante.

  - **Problèmes de dépendances** : des erreurs lors de l’installation de certains packages ont nécessité un nettoyage des modules et des ajustements (versions Prisma, conflits).

  - **Connexion à la base de données** : le paramétrage de l’image Docker MySQL a demandé quelques essais pour faire correspondre les variables .env et l’environnement de développement.



## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Delphine-Toviegbe/todolist-backend.git
cd todolist-backend
```
2. Installer les dépendances
```bash
  yarn install
  # ou
  npm install
```

3. Créer la base de données MySQL

Utilisez l'image Docker fournie ici : https://github.com/hdmnetwork/mysql5.7
  Suivez les étapes du fichier install.md.

Vérifiez que la variable DATABASE_URL dans le fichier .env pointe vers la bonne base :

DATABASE_URL="mysql://root:root@localhost:3306/todo"

4. Appliquer les migrations Prisma
```bash
  yarn prisma migrate dev
  # ou
  npx prisma migrate dev
```

5. Lancer le serveur NestJS

```bash
  yarn start:dev
  # ou
  npm run start:dev
```

API disponible
Méthode	Endpoint	Description
GET	/tasks	Récupère toutes les tâches
POST	/tasks	Crée une nouvelle tâche
PUT	/tasks/:id	Modifie une tâche existante
DELETE	/tasks/:id	Supprime une tâche


Structure du projet
```
  src/
  ├── Controllers/
  │   └── TaskController.ts       # Gère les routes HTTP
  ├── Repositories/
  │   └── TaskRepository.ts       # Abstraction base de données
  ├── UseCase/                    # Logique métier
  │   ├── DeleteTask/
  │   ├── GetAllTasks/
  │   └── SaveTask/
  ├── AppModule.ts                # Module principal
  ├── PrismaService.ts            # Configuration de Prisma
  └── main.ts                     # Entrée de l’application
```
🧪 Tests

```bash
  # unit tests
  yarn test


  # e2e tests
  yarn test:e2e

  # couverture
  yarn test:cov
```

Fonctionnalités implémentées

    Récupération des tâches (GET /tasks)

    Création de tâche (POST /tasks)

    Mise à jour d’une tâche (PUT /tasks/:id)

    Suppression d’une tâche (DELETE /tasks/:id)

Remarques

    Vous pouvez insérer des tâches manuellement dans la base avant de lancer le frontend : elles seront affichées automatiquement grâce au fetch implémenté.

    Le backend expose des endpoints REST simples, à consommer avec un client HTTP ou depuis le frontend React.

