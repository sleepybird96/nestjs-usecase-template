## Description

Template created because it is cumbersome to initialize each new project

## Installation

```bash
$ npm install
```

## Running the app

```bash

# watch mode
$ npm run start:dev

```

## Running the app with Docker
```bash
$ docker build -t my-project-tag-name:version .
$ docker run my-project-tag-name:version \
    -e YOUR_ENVIRONMENT_VALUE_1=foo \
    -e YOUR_ENVIRONMENT_VALUE_2=bar
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).  
And This template is [MIT licensed](LICENSE) too.