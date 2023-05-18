# vue-components

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Verdaccio Container

- download the verdaccio docker image
```sh
pull verdaccio/verdaccio
```

- create container with verdaccio
```sh
docker create -it --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

- run verdaccio's container
```sh
docker start verdaccio
```

- create a user to access the verdaccio registry
```sh
npm adduser --registry http://localhost:4873
```

## Alter container's limit to acceppt more than 5mb of body_size

- get container_id
```sh
docker ps -a
```

- then execute it with bash
```sh
docker exec -u root -t -i container_id sh
```

- navigate to /verdaccio/conf, using as many  'cd ../' as necessary

- execute
```sh
vi config.yaml
```
- adicione max_body_size of the needed size, default is 5mb
```sh
max_body_size: 100mb
```
- restart the container with 
```sh
docker restart container_id
```

## Publish & unpublish verdaccio packages locally

- 'yarn pub:local'

- 'yarn unpub:local'


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
