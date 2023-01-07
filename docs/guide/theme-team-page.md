<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  // {
  //   avatar: 'https://github.com/yyx990803.png',
  //   name: 'Evan You',
  //   title: 'Creator',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/yyx990803' },
  //     { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
  //   ]
  // },
  // {
  //   avatar: 'https://github.com/kiaking.png',
  //   name: 'Kia King Ishii',
  //   title: 'Developer',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/kiaking' },
  //     { icon: 'twitter', link: 'https://twitter.com/KiaKing85' }
  //   ]
  // }
  {
    avatar: 'https://avatars.githubusercontent.com/u/50388827?v=4',
    name: 'VanchKong',
    title: 'Translator',
    links: [
      { icon: 'github', link: 'https://github.com/vanchKong' },
    ]
  }
]
</script>

# 团队页面 {#team-page}

如果您想介绍您的团队，您可以使用 Team components 来构建团队页面。有两种使用这些组件的方法。一种是将其嵌入文档页面，另一种是创建完整的团队页面。

## 在页面中显示团队成员 {#show-team-members-in-a-page}

您可以在任何页面上使用从 `vitepress/theme` 暴露出的公共组件 `<VPTeamMembers>` 显示团队成员。

```html
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

# 我们的团队

向我们出色的团队问好。

<VPTeamMembers size="small" :members="members" />
```

以上将在卡片外观元素中显示团队成员。它应该显示类似于下面的内容。

<VPTeamMembers size="small" :members="members" />

`<VPTeamMembers>` 组件有 2 种不同的尺寸， `small` 和 `medium`。虽然它取决于为您的偏好，但通常尺寸在文档页面中使用时 `small` 应该更适合。此外，您可以为每个成员添加更多属性，例如添加“描述”或“赞助”按钮。在  [`<VPTeamMembers>`](#vpteammembers)中了解更多信息。

在文档页面中嵌入团队成员对于小型团队来说非常有用，某种情况下，完整的贡献团队可能太大了，可以引入部分成员作为文档上下文的参考。

如果您有大量成员，或者只是想有更多空间来展示团队成员，请考虑[创建一个完整的团队页面](#create-a-full-team-page)。

## 创建一个完整的团队页面 {#create-a-full-team-page}

除了将团队成员添加到 doc 页面，您还可以创建一个完整的团队页面，类似于创建自定义[主页](./theme-home-page)的方式。

To create a team page, first, create a new md file. The file name doesn't matter, but here lets call it `team.md`. In this file, set frontmatter option `layout: page`, and then you may compose your page structure using `TeamPage` components.
要创建团队页面，首先，创建一个新的 md 文件。文件名无所谓，这里我们就叫它 `team.md` 吧。在这个文件中，在frontmatter 设置 `layout: page`，然后你可以使用 `TeamPage` 组件来组成你的页面结构。

```html
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
```

When creating a full team page, remember to wrap all components with `<VPTeamPage>` component. This component will ensure all nested team related components get the proper layout structure like spacings.

`<VPPageTitle>` component adds the page title section. The title being `<h1>` heading. Use `#title` and `#lead` slot to document about your team.

`<VPMembers>` works as same as when used in a doc page. It will display list of members.

### Add sections to divide team members

You may add "sections" to the team page. For example, you may have different types of team members such as Core Team Members and Community Partners. You can divide these members into sections to better explain the roles of each group.

To do so, add `<VPTeamPageSection>` component to the `team.md` file we created previously.

```html
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [...]
const partners = [...]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
```

The `<VPTeamPageSection>` component can have `#title` and `#lead` slot similar to `VPTeamPageTitle` component, and also `#members` slot for displaying team members.

Remember to put in `<VPTeamMembers>` component within `#members` slot.

## `<VPTeamMembers>`

The `<VPTeamMembers>` component displays a given list of members.

```html
<VPTeamMembers
  size="medium"
  :members="[
    { avatar: '...', name: '...' },
    { avatar: '...', name: '...' },
    ...
  ]"
/>
```

```ts
interface Props {
  // Size of each members. Defaults to `medium`.
  size?: 'small' | 'medium'

  // List of members to display.
  members: TeamMember[]
}

interface TeamMember {
  // Avatar image for the member.
  avatar: string

  // Name of the member.
  name: string

  // Title to be shown below member's name.
  // e.g. Developer, Software Engineer, etc.
  title?: string

  // Organization that the member belongs.
  org?: string

  // URL for the organization.
  orgLink?: string

  // Description for the member.
  desc?: string

  // Social links. e.g. GitHub, Twitter, etc. You may pass in
  // the Social Links object here.
  // See: https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
  links?: SocialLink[]

  // URL for the sponsor page for the member.
  sponsor?: string
}
```

## `<VPTeamPage>`

The root component when creating a full team page. It only accepts a single slot. It will style all passed in team related components.

## `<VPTeamPageTitle>`

Adds "title" section of the page. Best use at the very beginning under `<VPTeamPage>`. It accepts `#title` and `#lead` slot.

```html
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
</VPTeamPage>
```

## `<VPTeamPageSection>`

Creates a "section" with in team page. It accepts `#title`, `#lead`, and `#members` slot. You may add as many sections as you like inside `<VPTeamPage>`.

```html
<VPTeamPage>
  ...
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Lorem ipsum...</template>
    <template #members>
      <VPTeamMembers :members="data" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
```
