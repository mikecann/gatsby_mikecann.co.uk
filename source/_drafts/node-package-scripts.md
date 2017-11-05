---
title: Node Package Scripts
categories:
  - Tooling
coverImage: ./48-2.png
coverMeta: out
tags:
  - Open Source
  - Javascript
  - Programming
  - Tests
  - Lint
date: 2017-11-05 08:37:13
---

For years I have been using scripts in my package.json file for building and other commands but in a complex project this can become quite unweildy quite quickly. For example checkout one of my other projects:

<!-- more -->

[![](./packagejson-scripts.png)](./packagejson-scripts.png)

And this is just a fairly simple example that doesnt include multiple-packages in one solution. 

Another problem is that because all the scripts are contained in a json file you are very restricted with what you can do. For example in my above screenshot, you can see that there is quite a bit of duplication, if only there was a way I could use variables and functions...

[![](./npsss1.png)](./npsss1.png)

Enter Node Package Scripts (NPS). It takes all those scripts out of package.json and puts them into javascript, but still leaves it declarative so its easy to understand whats going on. For example here are the scripts for the extension:

```javascript
const utils = require('nps-utils');
const concurrent = utils.concurrent;
const series = utils.series;
const open = utils.open;

const config = require("../../package.json");

const {local,staging,prod} = config.markd;

const setEnv = (target) => `cross-env PARSE_URL='${target.server}parse' BASE_URL='${target.web}' NODE_ENV=production`;
const setLocalEnv = () => `cross-env PARSE_URL='${local.server}parse' BASE_URL='${local.server}'`;
const getManifestVersion = () => require("./src/resources/manifest.json").version;

module.exports = {
  scripts: {
    clean: {
      dist: 'rimraf -f dist',
      built: 'rimraf -f built',
      node: 'rimraf node_modules'
    },
    build: {
      local: `${setLocalEnv()} nps build`,
      prod: `${setEnv(prod)} nps build`,
      staging: `${setEnv(staging)} nps build`,
      default: {
        script: series.nps("clean.dist", "build.scripts", "build.resources"),
        hidden: true
      },
      scripts: 'webpack --config ./webpack.config.js',
      resources: 'copyfiles -u 2 ./src/resources/**/*.* ./dist'
    },
    watch: {
      default: concurrent.nps('watch.resources', 'watch.scripts', 'test.watch'),
      scripts: 'nps "build.scripts --watch"',
      resources: series('nps build.resources', 'onchange src/resources/**/*.* -- nps build.resources')      
    },
    deploy: {
      default: "nps deploy.prod",      
      prod: series('nps build.prod', `nps wait`, `mkdirp built && cd dist && jszip . -o ../built/markd-extension-v${getManifestVersion()}.zip`),
      staging: series('nps build.staging', `nps wait`, `mkdirp built && cd dist && jszip . -o ../built/markd-extension-staging-v${getManifestVersion()}.zip`),
    },
    test: {
      default: 'jest',
      watch: "jest --watch"
    },
    wait: "await time 5",
    dev: {
      default: `${setLocalEnv()} nps watch`,
      local: `${setLocalEnv()} nps watch`,
      prod: `${setEnv(prod)} nps watch`,
      staging: `${setEnv(staging)} nps watch`,
    }
  }
};
```
