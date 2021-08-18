# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

TLDR; More Details:

1. Generate a ssh key
   run `ssh-keygen -t rsa -b 4096 -C "{email}"`, leave the password empty as you want the deploy process keyboard-less.after the generation, file `id_rsa` and `id_rsa.pub` can be found under `.ssh` folder.
2. add ssh key to repo's "Deploy keys" setting
   `cat .ssh/id_rsa.pub`
   Copy Paste to **Settings -> Deploy Keys**
   *Dont forget to checklist Write Access
3. Setup the git ssh key on the client machine
   Git normally use the ssh key found in `.ssh/id_rsa` under user's home folder, so first you need to find out the home directory of the user. 
   Copy Paste to **Settings -> Secret**
4. Finish
