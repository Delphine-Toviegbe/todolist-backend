<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Description

Todolist - Backend

Backend de l'application Todo List réalisée en **NestJS**, connectée à une base de données **MySQL** via **Prisma**.

Choix technique

- **NestJS** : Framework Node.js pour structurer proprement les modules, contrôleurs, services, etc.
- **Prisma** : ORM pour interagir efficacement avec la base de données MySQL.
- **MySQL** : SGBD relationnel utilisé pour stocker les tâches.


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

# 1. Cloner le projet :
   ```bash
   git clone https://github.com/Delphine-Toviegbe/todolist-backend.git
   cd todolist-backend
  ```
# 2.Installer les dépendances :

```bash
  yarn install
  # ou
  npm install  
```

# 3.Créer la base de données MySQL (si non existante).

  Utilisez l'image Docker MySQL fournie ici : https://github.com/hdmnetwork/mysql5.7
    Suivez les instructions dans le fichier install.md du dépôt.

  Une fois le conteneur lancé, assurez-vous que la variable DATABASE_URL dans .env est correctement définie

# 4. Appliquer les migrations Prisma :

  yarn prisma migrate dev
  # ou
  npx prisma migrate dev

# 5. Lancer le serveur NestJS :

  yarn start:dev
  # ou
  npm run start:dev

## Running the app

```bash
  # development
  $ yarn run start

  # watch mode
  $ yarn run start:dev

  # production mode
  $ yarn run start:prod
```

## Test

```bash
  # unit tests
  $ yarn run test

  # e2e tests
  $ yarn run test:e2e

  # test coverage
  $ yarn run test:cov
```

Fonctionnalités

    Récupération de toutes les tâches (GET /tasks)

    Création d'une tâche (POST /tasks)

    Suppression d'une tâche (DELETE /tasks/:id)

    Mise à jour d'une tâche (PUT /tasks/:id)

## Structure du projet

  src/
  ├── Controllers/
  │   └── TaskController.ts
  ├── Repositories/
  │   └── TaskRepository.ts
  ├── UseCase/
  │   ├── DeleteTask/
  │   ├── GetAllTasks/
  │   └── SaveTask/
  ├── AppModule.ts
  ├── PrismaService.ts
  └── main.ts

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
