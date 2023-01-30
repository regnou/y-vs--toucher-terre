# Use this starter

Build by Miguel Monwoo, copyright Monwoo 2023, tout droits réservé.

```bash
# Miguel Monwoo way to get it from the source code :
git clone git@github.com:mickael-moreau/monwoo-web-starters.git
git checkout wp-display
cd svelte-frontend

# Public repo for free usage of wp-display (relase updates only)
# TODO : send first version to public repo... (wp-display public repo ?)
```

```bash
# install
npm install

# Configure your environnement with targeded MWS starter :
cp .env.mws.core .env

# geneerate smui styles (do it on each theme swicth)
npm run prepare

# test in dev
npm run dev

# build for production

# Remove dev version of generated foler ? :
rm .svelte-kit
# Ensure all dev server on the same folder are closed ?
# other wise, the .svelte-kit might contain dev stuff
# then run the production build command :
npm run build

# comming soon : deploy to wa-config with node js script
# cf : https://github.com/mickael-moreau/WebAgencyCertificate/blob/main/e-commerce/wp-content/plugins/wa-config-0.0.3/tools/wa-deploy.cjs
```

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

# merging branch dependencies

```bash
git checkout Svelte-JWT-auth
git merge main
git push
git merge web-wp-plugin
git status # resolve conflict by editing file, then commit to resolve :
git add -A && git commit -m "[Svelte-JWT-auth] merge upgrades from [main] and [web-wp-plugin]"
git push
git merge
git add -A && git commit -m "[Svelte-JWT-auth] merging [Svelte-WP-display] dependency"
git push

```

## Dev logs

```bash

npm i -D @sveltejs/adapter-static@next

npm install --save-dev rxjs
npm install --save-dev @smui/button
npm install --save-dev @smui/card
npm install --save-dev @smui/top-app-bar
npm install --save-dev @smui/chips

npx smui-theme template src/theme

npm install --save-dev @smui-extra/bottom-app-bar @smui/fab \
@smui/menu-surface @smui/list @smui/textfield

npm install --save-dev @smui/checkbox @smui/form-field

npm install --save-dev datatables.net    # Core library
npm install --save-dev datatables.net-dt # Styling

npm install --save-dev @smui/tooltip


npm run build
# Try build from php static builtin server (need to use '.html',
#  TODO : use SF on or custom rewrite proxy ?)
php -S localhost:8001 -t ./build &

open http://localhost:8001/projets.html

# Keep some working key point history inside external branch
git switch -c Svelte-WP-display-beta-feature
# or with checkout :
git checkout -b Svelte-WP-display-beta-feature
# then add your human service to add codes
git add -A && git commit -m "[Svelte-WP-display][beta-feature] beta in progress"
git push --set-upstream origin Svelte-WP-display-beta-feature

# when ready to integrate, create pull request or directly merge :
git checkout Svelte-WP-display
git merge Svelte-WP-display-beta-feature
git push --set-upstream Svelte-WP-display

# // TIPS : path alias not working from tsconfig, need to be configured from svelte.config.js....
# // https://youtrack.jetbrains.com/issue/WEB-55303/Path-aliases-dont-work-in-basic-svelte-kit-app
# // "paths": {
# // 	"@app": ["src"] // this mapping is relative to "baseUrl" ? => needed to VSCode Intellisense
# // }
# // this mapping is relative to "baseUrl" ? => needed to VSCode Intellisense
# // Path aliases are handled by https://kit.svelte.dev/docs/configuration#alias
# //
# // If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
# // from the referenced tsconfig.json - TypeScript does not merge them in

git pull # Even if working locally, with 2 repo each need to re-sync and use git pull to enable merge switchs
git merge Svelte-core

# or if your local branch is not in sync with remote one
# sync merge from remote branch indide target branch :
# So bellow command inside another branche will merge it :
git pull origin Svelte-core

# When having hard time with other's code mergings on pull :
# always commit your changes BEFORE pull :
git checkout HEAD --force

# Send our merge to some branche
git checkout -b monwoo-web-starter
git push --set-upstream origin monwoo-web-starter
git push

# and let other do the merge by showying them my source branche
# giving them the merge pull tips :
git pull origin monwoo-web-starter

# using SMUI select box
npm i -D @smui/select

# re-generate themes file when changing SMUI stuff :
npm run prepare

# add dotenv to load .env inside sveltkit js config :
npm i -D dotenv

npm install --save-dev @beyonk/svelte-mapbox
npm i -D svelte-typeahead
npm i -D svelte-content-loader
npm i -D svelte-frappe-charts
# npm i -D svelte-material-icons
# npm r -D svelte-material-icons # nop, not soo good
npm i -D daisyui
npm i -D tw-elements

# https://www.npmjs.com/package/postcss-load-config
# npm i -D postcss-load-config
# npm r -D postcss-load-config


```
