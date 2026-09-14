# Component Catalog

The public demo at <https://videirafo.github.io/saas-forge-ui/> is the canonical visual catalog for SaaS Forge UI.

## Ready surfaces

| Component | Category | Source |
| --- | --- | --- |
| AppShell | Navigation | `src/components/app-shell.tsx` |
| Command Palette | Navigation | `src/components/command-palette.tsx` |
| Data Table | Data | `src/components/data-table.tsx` |
| Theme Toggle | System | `src/components/theme-toggle.tsx` |
| Async States | System | `src/components/state-showcase.tsx` |

Each catalog card includes a preview, a minimal copyable usage example and a direct source link.

## Registry metadata

A machine-readable registry foundation is published with the demo:

```text
/registry/index.json
/registry/schema.json
```

Public endpoint:

<https://videirafo.github.io/saas-forge-ui/registry/index.json>

This registry is intentionally **metadata-first** in `v0.1`. It describes available patterns, source files and dependencies without pretending that a CLI installer or npm package already exists.

## Adoption model

1. inspect the live preview and source;
2. copy the component and its declared local dependencies;
3. map styles to the consuming product's design tokens;
4. replace demonstration data with real product state;
5. preserve keyboard, focus, responsive and reduced-motion behavior;
6. run the consuming application's tests and accessibility checks.

## Future CLI contract

The registry shape is designed to support a later command such as:

```bash
npx saas-forge-ui add app-shell
```

That command is **not shipped yet**. CLI work should land only after registry validation, file manifests, dependency handling, conflict behavior and tests are defined.

See [ROADMAP.md](../ROADMAP.md) for the distribution plan.
