# Architecture

SaaS Forge UI is intentionally small. The demo is not the package boundary; each component is meant to remain understandable when copied into a product repository.

## Layers

```text
Product app
  └─ AppShell
      ├─ Navigation configuration
      ├─ Command palette
      ├─ Theme preference
      └─ Content surfaces
          ├─ Data table
          └─ Async state patterns
```

## Rules

- Product state stays close to the component that owns it.
- Navigation data is separate from navigation rendering.
- Theme and collapse preferences persist locally but do not imply user-account persistence.
- Components use semantic HTML before ARIA patches.
- Motion is transform/opacity based and is disabled through `prefers-reduced-motion`.
- Mobile navigation is a distinct composition rather than a squeezed desktop sidebar.

## What this repository deliberately does not do

It does not provide authentication, backend authorization, multitenancy, billing, analytics or persistence APIs. Those concerns belong to the consuming product and should not be simulated in a UI library.
