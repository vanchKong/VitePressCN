# 部署

以下指南基于一些共识：

- 你将文档放在项目的目录`docs`中。
- 你使用的是默认构建输出位置 ()`.vitepress/dist`。
- VitePress 作为本地依赖项安装在项目中，并且你已在 `package.json`构建了以下命令

  ```json
  {
    "scripts": {
      "docs:build": "vitepress build docs",
      "docs:preview": "vitepress preview docs"
    }
  }
  ```

::: tip 提示

如果要在子目录 （） 中提供站点，则必须在 (`https://example.com/subdir/`), then you have to set `'/subdir/'` as the [`base`](../config/app-configs#base) in your `docs/.vitepress/config.js`.

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

设置一个新项目并使用仪表板更改这些设置：

- **构建命令：** `yarn docs:build`
- **输出目录：** `docs/.vitepress/dist`
- **Node 版本：** `14` (或者更高，默认情况下，它通常是14或16, 但是在Cloudflare Pages Node版本还处在12，所以你可能要[更改它](https://developers.cloudflare.com/pages/platform/build-configuration/))

::: warning 警告
不要为HTML代码启用Auto Minify等选项。它将从输出中删除对Vue有意义的注释。如果移除它们，你可能会看到水合不匹配错误。
:::

## GitHub Pages

### 使用 GitHub Actions

1. 在你的主题配置文件中, `docs/.vitepress/config.js`, 设置 `base`为GitHub仓库的名称。如果你打算把站点部署到 `https://foo.github.io/bar/`，那你就需要把 `base` 设置为 `'/bar/'`。它始终以 `/` 开头结尾。

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

   ::: tip
   Please replace the corresponding branch name. For example, if the branch you want to build is `master`, then you should replace `main` with `master` in the above file.
   :::

3. Now commit your code and push it to the `main` branch.

4. Wait for actions to complete.

5. In your repository's Settings under Pages menu item, select `gh-pages` branch as GitHub Pages source. Now your docs will automatically deploy each time you push.

## GitLab Pages

### Using GitLab CI

1. Set `outDir` in `docs/.vitepress/config.js` to `../public`.

2. Create a file called `.gitlab-ci.yml` in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:

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

1. Follow the [official documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration).

2. Set these values in your configuration file (and remove the ones you don't require, like `api_location`):

   - **`app_location`**: `/`
   - **`output_location`**: `docs/.vitepress/dist`
   - **`app_build_command`**: `yarn docs:build`

## Firebase

1. Create `firebase.json` and `.firebaserc` at the root of your project:

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

2. After running `yarn docs:build`, run this command to deploy:

   ```sh
   firebase deploy
   ```

## Surge

1. After running `yarn docs:build`, run this command to deploy:

   ```sh
   npx surge docs/.vitepress/dist
   ```

## Heroku

1. Follow documentation and guide given in [`heroku-buildpack-static`](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static).

2. Create a file called `static.json` in the root of your project with the below content:

   ```json
   {
     "root": "docs/.vitepress/dist"
   }
   ```

## Layer0

Refer [Creating and Deploying a VitePress App with Layer0](https://docs.layer0.co/guides/vitepress).
