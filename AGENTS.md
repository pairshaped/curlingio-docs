# Repository Guidelines

## Project Structure & Module Organization
This repo hosts the Curling documentation site built on Docusaurus. Source MDX lives in `docs/`; group related content under subfolders such as `docs/guides/` to keep sidebar groupings logical. Reusable React or theme overrides go in `src/`. Static assets (logos, downloads) belong in `static/`, and will be copied to the build root. `docusaurus.config.js` defines global site settings, while `sidebars.js` controls navigation order. The generated production bundle lives in `build/` and should never be versioned manually.

## Build, Test, and Development Commands
Use Yarn (v1) for all tasks. Install dependencies with `yarn install`. Run `yarn start` for hot-reloading at `http://localhost:8000`; the command sets `NODE_OPTIONS=--openssl-legacy-provider` for older OpenSSL stacks—keep that flag if scripting. Execute `yarn build` before shipping to ensure MDX compiles and links resolve. `yarn serve` previews the build output, and `yarn deploy` publishes according to the settings in `docusaurus.config.js`. For component scaffolding, `yarn swizzle <theme> <component>` copies theme components into `src/`.

## Coding Style & Naming Conventions
Write MDX with a single H1 (`#`) per page and sentence-case headings. Front matter `id` values should be kebab-case and stable. Favor relative Markdown links and include alt text on images. React components follow TypeScript-friendly patterns even though the project is plain JS—use named exports and PascalCase component names. Prettier defaults (two spaces, trailing commas) are applied by editor tooling; format before committing.

## Testing Guidelines
There is no dedicated test runner; treat `yarn build` as the regression gate. Add example commands or outputs in fenced code blocks, and validate code samples with local tooling when possible. For significant UI tweaks, take a `yarn serve` pass to confirm navigation, search, and redirects from `@docusaurus/plugin-client-redirects` behave as expected.

## Commit & Pull Request Guidelines
Follow the existing history: short, imperative commit titles under 60 characters (`Update pricing calculator rates`). Include a one-line body if context is non-obvious. Pull requests should state the documentation scope, link any tracking issue, and attach screenshots or GIFs for visual changes. Confirm you ran `yarn build`/`yarn serve` in the description before requesting review.
