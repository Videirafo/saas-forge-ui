# Contributing

SaaS Forge UI values small, reviewable changes that improve real product behavior.

## Local setup

```bash
git clone https://github.com/Videirafo/saas-forge-ui.git
cd saas-forge-ui
npm install
npm run dev
```

## Before opening a PR

- Run `npm run typecheck` and `npm run build`.
- Test keyboard navigation and a narrow mobile viewport.
- Respect `prefers-reduced-motion`.
- Include loading, empty and error states when the component owns async behavior.
- Keep examples realistic; avoid fake round numbers and placeholder copy.
- Do not add a dependency when a few lines of platform code are sufficient.

## Pull requests

Explain the product problem first, then the implementation. Screenshots or short recordings are welcome for visual changes.
