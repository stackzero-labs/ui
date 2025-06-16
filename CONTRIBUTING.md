# Contributing to stackzero/commerce-ui

Welcome!
Thank you for your interest in contributing to **stackzero/commerce-ui**! 🎉

This guide will walk you through the structure of the project and provide clear, step-by-step instructions to help you contribute to the library.

You can contribute in different ways, such as:

- Adding a new component
- Adding a new block
- Updating an existing component or block
- Improving documentation
- Fix bugs
- Enhancing the design

All blocks and components should be related to e-commerce or commerce-related projects including e-commerce, marketplaces, storefronts, b2b commerce, sales funnels, single-product stores, and more.

If you have any questions or need assistance, don't hesitate to reach out.

---

## About the Repository

This repository is powered by:

- [Next.js](https://nextjs.org/) - A React framework for building server-rendered applications.
- [Shadcn/ui](https://ui.shadcn.com/) - A set of components built with Radix UI and Tailwind CSS.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [pnpm](https://pnpm.io/) - A fast, disk space-efficient package manager.

We use a **registry system** for organizing and exporting components. The registry is at `/registry/`.

## Repository Structure

The most important folders in the repository are:

| Path                 | Description                                |
| -------------------- | ------------------------------------------ |
| `/components`        | The React components                       |
| `/components/blocks` | The React blocks                           |
| `/content/docs`      | Documentation files in MDX format.         |
| `/registry`          | Registry files for component organization. |

## Development

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/stackzero-labs/ui/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/ui.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd ui
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm install
   ```

6. **Run the project**

   ```bash
   pnpm run dev
   ```

## Components or Blocks?

Before you start, it's important to understand the difference between components and blocks:

- **Components** are reusable UI elements that can be used in various parts of the application. They are typically smaller and more focused on a specific functionality or design.
- **Blocks** are larger, more complex UI structures that can consist of multiple components. They are often used to create specific sections of a page or layout.

When adding a new feature, consider whether it should be a component or a block. If it's a standalone UI element, create a component. If it's a larger structure that combines multiple components, create a block.

Read more: [Project Structure](https://ui.stackzero.co/docs#project-structures)

Examples of components include buttons, input fields, and modals.
Examples of blocks include a product card, a checkout section, or a navigation bar.

## What about larger pieces of UI? Like pages or templates

At the moment, we are not adding pages or templates to the library. The focus is on creating reusable components and blocks that can be combined to build larger UIs.

We are planning to add these sections in the future though, so stay tuned!

## Adding a New Component

> For adding new blocks read [Adding a New Block](#adding-a-new-block)

### 1. Create the component

Create your component in `components/commerce-ui/your-category/your-component/your-component.tsx`

```tsx
import { Button } from "@/components/shadcn-ui";
import type { JSX } from "react";

export default function YourComponent(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <Button size="sm">Small Button</Button>
      <Button>Default Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}
```

### 2. Create a component example(s)

This will be used in the documentation to showcase the component. All components needs to have at least an example.

In the same folder as your component, create a new file called `your-component-ex-01.tsx`

Create your component in `components/commerce-ui/your-category/your-component/your-component.tsx`

```tsx
"use client";

import YourComponent from "@/components/commerce-ui/your-category/your-component/your-component";
import { useState } from "react";

export default function YourComponent_Ex_01() {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <h1 className="text-2xl font-bold">Your Component Example</h1>
      <YourComponent />
    </div>
  );
}
```

If needed, you can create multiple examples by creating additional files like `your-component-ex-02.tsx`, `your-component-ex-03.tsx`, etc.
This allows you to showcase different variations or use cases of the same component.

### 2. Update Registry

Add your component to the registry in `registry-components.ts`

```ts
{
  name: "your-component",
  type: "registry:component",
  dependencies: ["lucide-react"], // Add any dependencies your component requires
  registryDependencies: ["button"], // Add any shadcn components you're using
  files: [
    {
      path: "@/components/commerce-ui/your-category/your-component/your-component.tsx",
      type: "registry:component",
    },
  ],
  component: React.lazy(
    () => import("../components/commerce-ui/your-category/your-component/your-component")
  ),
},
```

You will also need to add the example(s) you have created to the registry in `registry-examples.ts`

```ts
 {
    name: "your-component-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/your-component.json", // Make sure to add this as the registry for this example will need the component's code
    ],
    files: [
      {
        path: "@/components/commerce-ui/your-component-category/your-component/your-component-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/your-component-category/your-component/your-component-ex-01"
        )
    ),
  },

```

### 3. Update the Documentation

Create an MDX file for documenting your component in `content/docs/components/your-category/your-component.mdx`

```mdx
---
title: Your Component
description: A description of your component and its usage
---

# Your Component

<ComponentPreview
  name="your-component-ex-01"
  classNameComponentContainer="min-h-[200px]"
/>

## Install

<ComponentInstall
  name="your-component"     
  classNameComponentContainer='min-h-[200px]' 
>
<CLIInstall name="your-component" />

<ManualInstall>
{/* Add installation instructions */}
</ManualInstall>
</ComponentInstall>
```

That's it! You have successfully added a new component and at least one example to the library.

## Adding a New Block

### 1. Create the block

Create your block in `components/commerce-ui/blocks/your-block/your-block-01.tsx`

```tsx
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

function YourBlock_01() {
  return (
    <div className="flex flex-col gap-4">
      <Star className="h-4 w-4" />
      {/* Rest of your code... */}
    </div>
  );
}
```

When naming blocks, use the format `your-block-01.tsx`, `your-block-02.tsx`, etc. This allows for multiple variations of the same block.
For example, if you have a block called `product-card`, you can create multiple variations like `product-card-01.tsx`, `product-card-02.tsx`, etc.
This way, you can have different styles or layouts for the same block, and it will be easier to manage them in the future.

### 2. Update Registry

Add your component to the registry in `registry-blocks.ts`

```ts
 {
    name: "your-block-01-block",
    type: "registry:block",
    dependencies: ["lucide-react"], // Add any npm dependencies your component requires
    registryDependencies: [
      "button", // Add any shadcn components you're using
      "https://ui.stackzero.co/r/star-rating-fractions.json", // Add any external dependencies that support registry architectures such as commerce-ui components
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/your-blocks/your-block-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/your-blocks/your-block-01"
        )
    ),
  },
```

### 3. Update the Documentation

Create an MDX file for documenting your block in `content/docs/blocks/your-block.mdx`

```mdx
---
title: Your Block
description: A description of your block and its usage
---

### Your Block - 01

<ComponentPreview name="your-block-01-block" />
```

That's it! You have successfully added a new block to the library.

## Commit Convention

We now use Conventional Commits to maintain a clear and consistent commit history. Read more about it [here](https://www.conventionalcommits.org).

A pre-commit hook (via `husky` and `commitlint`) is set up to enforce this convention, so you will be prompted to follow it when committing your changes.

When making changes, please follow the commit message format:

`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes (or additions) concerning the continuous integration configuration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

Thank you for contributing to stackzero/commerce-ui and helping us create amazing components!
