# 部署

以下指南基于一些共识：

- 你将文档放在项目的目录`docs`中。
- 你使用的是默认构建输出位置 (`.vitepress/dist`)。
- VitePress 作为本地依赖项安装在项目中，并且你已在 `package.json`中设置了以下脚本：

  ```json
  {
    "scripts": {
      "docs:build": "vitepress build docs",
      "docs:preview": "vitepress preview docs"
    }
  }
  ```

::: tip 提示

如果要在子目录 （`https://example.com/subdir/`） 中提供站点，则必须在 (`docs/.vitepress/config.js`)中, 将[`base`](../config/app-configs#base)设置为 `'/subdir/'`。

**例:** 如果你使用的是 Github（或 GitLab）页面并部署到 `user.github.io/repo/`，请将你的 `base` 设置为 `/repo/`.

:::

## 本地构建与测试

- 你可以运行以下命令来构建文档：

  ```sh
  yarn docs:build
  ```

- 构建文档后，可以通过运行以下命令在本地测试它们：

  ```sh
  yarn docs:preview
  ```

  `preview` 命令将启动一个本地静态 Web 服务器`http://localhost:4173`，该服务器以 `.vitepress/dist` 作为源文件。这是检查生产版本在本地环境中是否正常的一种简单方法。

- 你可以通过传递`--port`作为参数来配置服务器的端口。

  ```json
  {
    "scripts": {
      "docs:preview": "vitepress preview docs --port 8080"
    }
  }
  ```

  现在`docs:preview`方法将在`http://localhost:8080`启动服务器。

## Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render

设置一个新项目并使用 dashboard 更改这些设置：

- **构建命令：** `yarn docs:build`
- **输出目录：** `docs/.vitepress/dist`
- **Node 版本：** `14` (或者更高，默认情况下，它通常是14或16, 但是在Cloudflare Pages Node版本还处在12，所以你可能要[更改它](https://developers.cloudflare.com/pages/platform/build-configuration/))

::: warning 警告
不要为 HTML 代码启用 Auto Minify 等选项。它将从输出中删除对 Vue 有意义的注释。如果移除它们，你可能会收到 hydration mismatch 错误。
:::

## GitHub Pages

### 使用 GitHub Actions

1. 在你的主题配置文件中, `docs/.vitepress/config.js`, 设置 `base` 为GitHub仓库的名称。如果你打算把站点部署到 `https://foo.github.io/bar/`，那你就需要把 `base` 设置为 `'/bar/'`。它始终以 `/` 开头结尾。

2. 在项目目录 `.github/workflows` 下创建一个名为 `deploy.yml` 的文件，包含以下内容：

   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
           with:
             fetch-depth: 0
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: yarn
         - run: yarn install --frozen-lockfile

         - name: Build
           run: yarn docs:build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: docs/.vitepress/dist
             # cname: example.com # if wanna deploy to custom domain
   ```

   ::: tip 提示
   请替换相应的分支名称。比如你要建的分支是 `master` ，那么你要把上面文件中的 `main` 换成 `master`。
   :::

3. 现在提交你的代码并将其推送到 `main` 分支。

4. 等待 Actions 完成。

5. 在页面菜单项下的仓库设置中，选择 `gh-pages` 分支作为 GitHub 页面源。现在，你的文档将在你每次推送时自动部署。

## GitLab Pages

### Using GitLab CI

1. 将 `docs/.vitepress/config.js` 中的 `outDir` 设置为 `../public`。

2. 使用以下内容在项目的根目录中创建一个名为 `.gitlab-ci.yml` 的文件。每当你更改内容时，这将构建和部署你的站点：

   ```yaml
   image: node:16
   pages:
     cache:
       paths:
         - node_modules/
     script:
       - yarn install
       - yarn docs:build
     artifacts:
       paths:
         - public
     only:
       - main
   ```

## Azure Static Web Apps

1. 遵循[官方文档](https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration)。

2. 在配置文件中设置这些值（并删除不需要的值，如 `api_location`）：

   - **`app_location`**: `/`
   - **`output_location`**: `docs/.vitepress/dist`
   - **`app_build_command`**: `yarn docs:build`

## Firebase

1. 在项目的根目录下创建 `firebase.json` 和 `.firebaserc`：

   `firebase.json`:

   ```json
   {
     "hosting": {
       "public": "docs/.vitepress/dist",
       "ignore": []
     }
   }
   ```

   `.firebaserc`:

   ```json
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

2. 运行 `yarn docs:build` 后，运行此命令进行部署：

   ```sh
   firebase deploy
   ```

## Surge

1. 运行 `yarn docs:build` 后，运行此命令进行部署：

   ```sh
   npx surge docs/.vitepress/dist
   ```

## Heroku

1. 遵循 [`heroku-buildpack-static`](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static) 中给出的文档和指南。

2. 使用以下内容在项目的根目录中创建一个名为 `static.json` 的文件：

   ```json
   {
     "root": "docs/.vitepress/dist"
   }
   ```

## Layer0

请参阅[使用 Layer0 创建和部署 VitePress 应用程序](https://docs.layer0.co/guides/vitepress)。
