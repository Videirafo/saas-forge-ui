<div align="center">

<img src="docs/assets/hero.svg" alt="SaaS Forge UI — production-grade React components and UX patterns for SaaS dashboards" width="100%" />

<br />

# SaaS Forge UI

**Production-grade React components and UX patterns for serious SaaS dashboards.**

Built for the moments most UI galleries skip: mobile navigation, keyboard flow, loading, empty and error states, dense data, persistent preferences, reduced motion and real product behavior.

<br />

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open-111827?style=for-the-badge&logo=githubpages&logoColor=white)](https://videirafo.github.io/saas-forge-ui/)
[![Release](https://img.shields.io/github/v/release/Videirafo/saas-forge-ui?style=for-the-badge&label=Release)](https://github.com/Videirafo/saas-forge-ui/releases)
[![CI](https://img.shields.io/github/actions/workflow/status/Videirafo/saas-forge-ui/ci.yml?branch=main&style=for-the-badge&label=CI)](https://github.com/Videirafo/saas-forge-ui/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/Videirafo/saas-forge-ui?style=for-the-badge)](LICENSE)

[![Stars](https://img.shields.io/github/stars/Videirafo/saas-forge-ui?style=flat-square)](https://github.com/Videirafo/saas-forge-ui/stargazers)
[![Forks](https://img.shields.io/github/forks/Videirafo/saas-forge-ui?style=flat-square)](https://github.com/Videirafo/saas-forge-ui/forks)
[![Issues](https://img.shields.io/github/issues/Videirafo/saas-forge-ui?style=flat-square)](https://github.com/Videirafo/saas-forge-ui/issues)
[![Last commit](https://img.shields.io/github/last-commit/Videirafo/saas-forge-ui?style=flat-square)](https://github.com/Videirafo/saas-forge-ui/commits/main)

<br />

[**Live catalog**](https://videirafo.github.io/saas-forge-ui/#components) · [**Components**](#component-status) · [**Registry JSON**](https://videirafo.github.io/saas-forge-ui/registry/index.json) · [**Quick start**](#quick-start) · [**Architecture**](#architecture) · [**Roadmap**](#roadmap) · [**Contributing**](#contributing)

</div>

---

## Why SaaS Forge UI exists

A component can look excellent in a screenshot and still fail inside a real product.

What happens when:

- the sidebar needs a compact mode?
- a user opens the product on a phone?
- the API returns no records?
- the network fails?
- a table becomes wider than the viewport?
- the user navigates only with a keyboard?
- the operating system requests reduced motion?
- theme and layout preferences need to survive a refresh?

**SaaS Forge UI starts where the screenshot stops.**

The project focuses on reusable interface patterns that behave like product surfaces, not isolated visual demos. The goal is not to become a giant dependency. The goal is to provide code that teams can understand, copy, adapt and own.

> **Current distribution model:** source-first and copy-paste. A machine-readable registry metadata foundation is published today; an installable registry and CLI are planned for the distribution phase.

---

## Highlights

| Principle | What it means here |
| --- | --- |
| **Production-minded** | Components include behavior, states and responsive rules rather than only happy-path visuals. |
| **Mobile by intent** | Mobile navigation is composed separately instead of shrinking a desktop sidebar. |
| **Accessible by default** | Semantic HTML, keyboard interaction, visible focus and reduced-motion support are part of the baseline. |
| **State-complete** | Loading, empty, error, disabled and success states are treated as product requirements. |
| **Data-friendly** | Tables and numeric surfaces are designed for scanning, overflow and dense operational information. |
| **Easy to own** | Small dependency surface, readable TypeScript and no hidden backend assumptions. |
| **Open-source first** | Public roadmap, contribution guide, security policy, CI and issue templates ship with the project. |

---

## Component status

### Available in `v0.1`

| Surface | Status | Included behavior |
| --- | :---: | --- |
| **AppShell** | ✅ Ready | Desktop sidebar, compact mode, responsive layout and mobile drawer |
| **Command Palette** | ✅ Ready | `Ctrl/⌘ + K`, searchable navigation and keyboard-safe interaction |
| **Theme Toggle** | ✅ Ready | Light/dark preference with system fallback and local persistence |
| **Data Table** | ✅ Ready | Search, selection, status semantics and responsive overflow |
| **Async State Patterns** | ✅ Ready | Loading, empty and error examples |
| **Visual Component Catalog** | ✅ Ready | Filterable previews, copyable examples and direct source links |
| **Registry Metadata** | ✅ Ready | Public JSON index and schema for future distribution tooling |
| **Accessibility Baseline** | ✅ Ready | Skip link, visible focus, semantic structure and reduced motion |

Explore the live catalog at **https://videirafo.github.io/saas-forge-ui/#components** or read [docs/CATALOG.md](docs/CATALOG.md).

### Coming next

| Surface | Target |
| --- | --- |
| Filterable data grid | `v0.2` |
| Drawer and side-panel patterns | `v0.2` |
| Accessible form field system | `v0.2` |
| Toast and activity feed | `v0.2` |
| Billing and plan-management patterns | `v0.2` |
| Installable component registry and CLI | `v0.3` |
| Dedicated component documentation routes | `v0.3` |
| Visual regression tests | `v0.3` |
| Automated accessibility checks in CI | `v0.3` |

See the full [ROADMAP.md](ROADMAP.md).

---

## Live demo and catalog

The current foundation is deployed with GitHub Pages:

**https://videirafo.github.io/saas-forge-ui/**

The demo includes the AppShell, command palette, persistent theme, data table, asynchronous state patterns and a visual component catalog. Catalog cards provide previews, current source paths, direct source links and copyable minimal usage examples.

The registry metadata is published alongside the demo:

- **Index:** https://videirafo.github.io/saas-forge-ui/registry/index.json
- **Schema:** https://videirafo.github.io/saas-forge-ui/registry/schema.json

This registry is metadata-first in `v0.1`; it does not claim that an installer or npm package already exists.

---

## Stack

<div align="center">

| Technology | Role |
| --- | --- |
| **React 19** | Component runtime |
| **TypeScript 5.9** | Type-safe implementation |
| **Vite 7** | Development and production build |
| **Tailwind CSS 4** | Styling and responsive composition |
| **Phosphor Icons** | Interface iconography |
| **GitHub Actions** | Continuous integration and Pages deployment |

</div>

The demo has **no backend requirement**. Authentication, authorization, multitenancy, billing, analytics and persistence APIs deliberately remain responsibilities of the consuming product.

---

## Quick start

### Requirements

- Node.js 20 or newer recommended
- npm
- Git

### Clone and run

```bash
git clone https://github.com/Videirafo/saas-forge-ui.git
cd saas-forge-ui
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Production build

```bash
npm run typecheck
npm run build
npm run preview
```

---

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run typecheck` | Run the TypeScript project build without emitting application assets |
| `npm run build` | Type-check and create the production bundle |
| `npm run preview` | Serve the production build locally |

The same type-check and production build gates run in GitHub Actions.

---

## Repository structure

```text
saas-forge-ui/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── pages.yml
│   ├── dependabot.yml
│   └── pull_request_template.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CATALOG.md
│   └── assets/
│       └── hero.svg
├── public/
│   └── registry/
│       ├── index.json
│       └── schema.json
├── src/
│   ├── components/
│   │   ├── app-shell.tsx
│   │   ├── command-palette.tsx
│   │   ├── component-catalog.tsx
│   │   ├── data-table.tsx
│   │   ├── state-showcase.tsx
│   │   └── theme-toggle.tsx
│   ├── lib/
│   │   ├── cn.ts
│   │   └── navigation.tsx
│   ├── App.tsx
│   ├── catalog.css
│   ├── index.css
│   └── main.tsx
├── CHANGELOG.md
├── CONTRIBUTING.md
├── ROADMAP.md
├── SECURITY.md
├── LICENSE
└── package.json
```

---

## Architecture

SaaS Forge UI keeps the demo application intentionally small so the component boundaries remain obvious.

```text
Product app
  └─ AppShell
      ├─ Navigation configuration
      ├─ Command palette
      ├─ Theme preference
      └─ Content surfaces
          ├─ Component catalog
          ├─ Data table
          └─ Async state patterns

Public distribution metadata
  └─ /registry
      ├─ index.json
      └─ schema.json
```

### Architectural rules

1. **Product state stays close to its owner.** Avoid global state when local state is enough.
2. **Navigation data is separated from rendering.** Product permissions and routing can replace the demo configuration without rewriting the shell.
3. **Preferences are explicit.** Theme and shell collapse preferences persist locally but do not pretend to be account-level persistence.
4. **Semantic HTML comes before ARIA repair.** ARIA complements structure; it does not replace it.
5. **Motion must be cheap and optional.** Prefer transform/opacity and respect `prefers-reduced-motion`.
6. **Mobile is a separate composition.** The phone experience should not be a squeezed desktop interface.
7. **Distribution metadata must stay truthful.** Registry entries describe what is ready without implying an installer exists before it is implemented and tested.

More detail: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/CATALOG.md](docs/CATALOG.md).

---

## Design principles

### 1. Responsive by intent

Breakpoints should represent interaction changes, not just width changes. Desktop sidebar patterns can become drawers, bottom navigation or focused task flows on smaller screens.

### 2. Accessibility is architecture

Keyboard order, focus visibility, semantics and motion preferences affect component structure. They are not polish added at the end.

### 3. Every feature has more than one state

Success-only components are incomplete. Product interfaces need explicit behavior for loading, no data, errors, disabled actions and recovery.

### 4. Operational data must scan quickly

Status, numbers, identifiers and table columns need hierarchy. Numeric surfaces use tabular treatment where it improves comparison.

### 5. Dependencies must earn their place

Use platform primitives when they are enough. Add packages when they materially improve reliability, accessibility or maintainability.

### 6. Copy-paste should not create lock-in

The implementation should remain understandable after it leaves this repository. Consumers should be able to rename, restyle and integrate the pattern into their own product architecture.

---

## Accessibility baseline

Current patterns intentionally include:

- semantic landmarks and structure
- skip-to-content navigation
- keyboard-operable controls
- visible focus indication
- useful `aria-*` state where native semantics are insufficient
- `prefers-reduced-motion` support
- distinct mobile interaction patterns
- status meaning that is not dependent on animation alone
- filter state exposed through `aria-pressed`

Automated accessibility checks are planned for `v0.3`; until then, accessibility changes should include manual keyboard verification as part of review.

---

## Quality gates

Every pull request should keep the repository green:

```bash
npm run typecheck
npm run build
```

The project currently uses:

- GitHub Actions CI
- GitHub Pages deployment workflow
- Dependabot
- pull request template
- structured issue template
- security policy
- public changelog and roadmap

CI status is visible at the top of this README.

---

## How to use the patterns in another project

SaaS Forge UI is currently **source-first** rather than an npm component package.

A safe adoption flow is:

1. inspect the component in the live catalog and open its source;
2. review the machine-readable registry entry when useful;
3. copy the component and its local dependencies into your own component boundary;
4. replace demo navigation/data with your product state;
5. map styles to your existing design tokens;
6. preserve keyboard, focus, responsive and reduced-motion behavior;
7. run your own application tests and accessibility checks.

Do not copy demo data or assume this repository provides backend authorization. Permissions and tenant isolation must be enforced by the consuming application.

---

## Registry foundation

`v0.1` publishes registry metadata so the distribution contract can evolve in public before a CLI starts writing files into consuming repositories.

Current endpoints:

```text
/registry/index.json
/registry/schema.json
```

The index describes ready components, their source files, category and external dependencies. The schema provides a stable validation target for future tooling.

A future command may look like:

```bash
npx saas-forge-ui add app-shell
```

That command is **not shipped yet**. It belongs to `v0.3` after file manifests, dependency installation, collision handling, validation and tests are defined.

---

## What this repository deliberately does not provide

To keep boundaries clear, SaaS Forge UI does **not** pretend to provide:

- authentication
- backend authorization
- row-level security
- multitenancy
- billing providers
- analytics infrastructure
- database persistence
- API clients

Those are product and backend concerns. The components are interface patterns that should integrate with the systems your application already trusts.

---

## Roadmap

### `v0.1` — Foundation ✅

- responsive SaaS shell
- persisted light/dark theme
- command palette
- data table pattern
- loading / empty / error states
- public GitHub Pages demo
- visual component catalog
- machine-readable registry metadata and schema

### `v0.2` — Product surfaces

- filterable data grid
- drawer and side-panel patterns
- form field system with validation states
- toast and activity feed
- billing and plan-management patterns

### `v0.3` — Distribution and quality

- installable copy-paste component registry and CLI
- dedicated component documentation routes
- visual regression tests
- accessibility checks in CI
- release automation and generated changelog support

Track progress in [ROADMAP.md](ROADMAP.md) and [GitHub Issues](https://github.com/Videirafo/saas-forge-ui/issues).

---

## Contributing

Contributions are welcome, especially when they start with a real product problem rather than a purely decorative component idea.

A strong proposal should explain:

- the user or product problem being solved;
- expected desktop and mobile behavior;
- keyboard interaction;
- loading, empty, error and disabled states when relevant;
- whether a new dependency is truly necessary;
- how the change can remain understandable when copied into another project.

### Contribution flow

```text
Issue / proposal
      ↓
Feature branch
      ↓
Implementation + verification
      ↓
Pull request
      ↓
CI + review
      ↓
Merge
```

Start with [CONTRIBUTING.md](CONTRIBUTING.md) and check issues labeled [`good first issue`](https://github.com/Videirafo/saas-forge-ui/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

---

## Security

Please do not disclose security problems through a public issue.

Read [SECURITY.md](SECURITY.md) for the project's reporting guidance.

Because this repository is a UI reference project, consuming applications remain responsible for authorization, secrets, server-side validation and data isolation.

---

## Releases and changelog

- Releases: [github.com/Videirafo/saas-forge-ui/releases](https://github.com/Videirafo/saas-forge-ui/releases)
- Changelog: [CHANGELOG.md](CHANGELOG.md)

The first public foundation is available as **`v0.1.0`**.

---

## FAQ

<details>
<summary><strong>Is this a replacement for shadcn/ui, Radix or a full design system?</strong></summary>
<br />
No. SaaS Forge UI focuses on product-level compositions and operational UX patterns. It can coexist with primitives or design systems already used by an application.
</details>

<details>
<summary><strong>Can I use the components in a commercial project?</strong></summary>
<br />
Yes. The repository is released under the MIT License. Review the license file for the exact terms.
</details>

<details>
<summary><strong>Is there an npm package or CLI?</strong></summary>
<br />
Not yet. The current model is source-first/copy-paste. Public registry metadata exists now, while an installable registry and CLI are planned for the distribution phase.
</details>

<details>
<summary><strong>Does the demo include a real backend?</strong></summary>
<br />
No. The demo intentionally focuses on UI architecture and behavior without pretending to implement authentication, billing, multitenancy or authorization.
</details>

<details>
<summary><strong>Why not add dozens of components immediately?</strong></summary>
<br />
The project prioritizes depth over catalog size. A smaller set of patterns with responsive, state and accessibility behavior is more useful than a large collection of screenshot-only components.
</details>

---

## License

SaaS Forge UI is released under the [MIT License](LICENSE).

---

<div align="center">

### Build interfaces that still work after the happy path ends.

If the project is useful, consider giving it a ⭐, opening an issue with a real SaaS UI problem, or contributing a production-minded pattern.

[**View catalog**](https://videirafo.github.io/saas-forge-ui/#components) · [**Inspect registry**](https://videirafo.github.io/saas-forge-ui/registry/index.json) · [**Open an issue**](https://github.com/Videirafo/saas-forge-ui/issues/new/choose) · [**Read the roadmap**](ROADMAP.md)

<br />

Maintained by [**Videirafo**](https://github.com/Videirafo).

</div>
