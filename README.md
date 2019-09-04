# Metron

> We’re here for a reason. The Lord of Light is keeping Beric alive for a reason. He gave a failed drunk priest the power to bring him back for a reason. We are part of something larger than ourselves. ~ Metron

Marketing Dashboard

## Prerequisites

* [git](https://docs.docker.com/install/)
* [docker](https://docs.docker.com/install/)

## Usage

### Docker (recommended)

* `$ git clone https://github.com/littlechad/next-metron.git && cd metron`
* `$ docker-compose -f docker-compose.dev.yaml up -d`

### Locally

    git clone https://github.com/littlechad/next-metron.git
    cd metron
    yarn install

running in development

    yarn dev

running in production

    mv .env.example .env && export $(cat .env | xargs)
    yarn run build
    yarn start

## Project structure

Root

    ...
    ├── components
    ├── pages
    ├── redux
    ├── static
    ├── server.js
    ├── env.example.sh
    ├── package.json
    └── yarn.lock

Components

    ...
    ├── components
    │   └── Info
    │       └── index.js
    ...

Pages

    ...
    ├── pages
    │   ├── about
    │   │   ├── component
    │   │   │   └── index.js
    │   │   ├── container
    │   │   │   └── index.js
    │   │   └── index.js
    ...
    │   ├── index.js
        ├── _app.js
        └── _document.js

Redux

    ├── redux
    │   ├── ducks
    │   │   ├── Character
    │   │   │   ├── actions.js
    │   │   │   ├── epics.js
    │   │   │   ├── index.js
    │   │   │   └── types.js
    ...
    │   ├── index.js
    │   └── root
    │       ├── epics.js
    │       └── reducers.js


# License
This project is licensed under the MIT license, Copyright (c) 2018 Metron. For more information see LICENSE.md.

# Contributing
[TODO]

# Versioning
**Next Dashboard** is using [semantic versioning](https://semver.org/). For the versions available, see the [tags on this repository](https://github.com/littlechad/next-metron.git/metron.git/tags).

# Author
Fian Kurniawan
