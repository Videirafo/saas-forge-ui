import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Database,
  Layout,
  MoonStars,
  Rows,
  SpinnerGap,
} from "@phosphor-icons/react";
import "../catalog.css";

type Category = "All" | "Navigation" | "Data" | "System";

type CatalogItem = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  source: string;
  code: string;
  icon: React.ComponentType<{ size?: number; weight?: "regular" | "bold" }>;
};

const items: CatalogItem[] = [
  {
    id: "app-shell",
    title: "AppShell",
    category: "Navigation",
    description: "Responsive SaaS shell with a collapsible desktop sidebar, dedicated mobile navigation and persistent layout preference.",
    source: "src/components/app-shell.tsx",
    code: `import { AppShell } from "./components/app-shell";\n\nexport function Product() {\n  return (\n    <AppShell>\n      <main>Your product surface</main>\n    </AppShell>\n  );\n}`,
    icon: Layout,
  },
  {
    id: "command-palette",
    title: "Command Palette",
    category: "Navigation",
    description: "Keyboard-first navigation surfaced through Ctrl/Cmd + K with searchable destinations and focus-safe interaction.",
    source: "src/components/command-palette.tsx",
    code: `import { CommandPalette } from "./components/command-palette";\n\n<CommandPalette\n  open={open}\n  onOpenChange={setOpen}\n/>`,
    icon: Rows,
  },
  {
    id: "data-table",
    title: "Data Table",
    category: "Data",
    description: "A practical operational table pattern with search, selection, status semantics and responsive horizontal overflow.",
    source: "src/components/data-table.tsx",
    code: `import { DataTable } from "./components/data-table";\n\nexport function CustomersPage() {\n  return <DataTable />;\n}`,
    icon: Database,
  },
  {
    id: "theme-toggle",
    title: "Theme Toggle",
    category: "System",
    description: "Light and dark theme preference with system fallback, local persistence and accessible button semantics.",
    source: "src/components/theme-toggle.tsx",
    code: `import { ThemeToggle } from "./components/theme-toggle";\n\n<header>\n  <ThemeToggle />\n</header>`,
    icon: MoonStars,
  },
  {
    id: "async-states",
    title: "Async States",
    category: "System",
    description: "Loading, empty and error patterns designed as first-class product states rather than afterthoughts.",
    source: "src/components/state-showcase.tsx",
    code: `import { StateShowcase } from "./components/state-showcase";\n\nexport function StatesDocs() {\n  return <StateShowcase />;\n}`,
    icon: SpinnerGap,
  },
];

const filters: Category[] = ["All", "Navigation", "Data", "System"];

function Preview({ id }: { id: string }) {
  if (id === "app-shell") {
    return <div className="mini-shell"><span className="mini-rail" /><div><i /><i /><i /></div></div>;
  }
  if (id === "command-palette") {
    return <div className="mini-command"><span>Search actions…</span><kbd>⌘ K</kbd><i /><i /></div>;
  }
  if (id === "data-table") {
    return <div className="mini-table"><strong /><span /><span /><span /><span /><span /><span /></div>;
  }
  if (id === "theme-toggle") {
    return <div className="mini-theme"><span>Light</span><i><b /></i><span>Dark</span></div>;
  }
  return <div className="mini-states"><span className="state-loading" /><span className="state-empty">0</span><span className="state-error">!</span></div>;
}

export function ComponentCatalog() {
  const [filter, setFilter] = useState<Category>("All");
  const [copied, setCopied] = useState<string | null>(null);

  const visibleItems = useMemo(
    () => items.filter((item) => filter === "All" || item.category === filter),
    [filter],
  );

  const copyCode = async (item: CatalogItem) => {
    await navigator.clipboard.writeText(item.code);
    setCopied(item.id);
    window.setTimeout(() => setCopied((current) => (current === item.id ? null : current)), 1600);
  };

  return (
    <section className="catalog-section" id="components" aria-labelledby="catalog-title">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow">Component catalog</p>
          <h2 id="catalog-title">Patterns you can inspect before you copy.</h2>
          <p>Every ready surface links to its source and includes a minimal integration example. The catalog stays honest about what ships today.</p>
        </div>
        <a className="catalog-registry-link" href="./registry/index.json" target="_blank" rel="noreferrer">
          Registry JSON <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="catalog-filters" aria-label="Filter components">
        {filters.map((option) => (
          <button
            key={option}
            className={filter === option ? "active" : ""}
            type="button"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          const sourceUrl = `https://github.com/Videirafo/saas-forge-ui/blob/main/${item.source}`;
          return (
            <article className="component-card" key={item.id}>
              <div className="component-preview" aria-hidden="true"><Preview id={item.id} /></div>
              <div className="component-body">
                <div className="component-meta">
                  <span className="component-icon"><Icon size={16} weight="bold" /></span>
                  <span>{item.category}</span>
                  <em><Check size={12} weight="bold" /> Ready</em>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <code>{item.source}</code>
                <div className="component-actions">
                  <button type="button" onClick={() => void copyCode(item)} aria-live="polite">
                    {copied === item.id ? <Check size={15} weight="bold" /> : <Copy size={15} />}
                    {copied === item.id ? "Copied" : "Copy example"}
                  </button>
                  <a href={sourceUrl} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="catalog-next">
        <span>Next surfaces</span>
        <p>Form fields · Drawer / side panel · Filterable data grid · Toast / activity feed · Billing patterns</p>
        <a href="https://github.com/Videirafo/saas-forge-ui/blob/main/ROADMAP.md" target="_blank" rel="noreferrer">View roadmap <ArrowUpRight size={14} /></a>
      </div>
    </section>
  );
}
