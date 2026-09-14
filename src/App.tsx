import { ArrowUpRight, Pulse, Sparkle } from "@phosphor-icons/react";
import { AppShell } from "./components/app-shell";
import { ComponentCatalog } from "./components/component-catalog";
import { DataTable } from "./components/data-table";
import { StateShowcase } from "./components/state-showcase";

const metrics = [
  { label: "Monthly recurring revenue", value: "$84,720", change: "+12.6%", detail: "vs. previous 30 days" },
  { label: "Active accounts", value: "1,842", change: "+8.1%", detail: "92 added this month" },
  { label: "Automation success", value: "98.4%", change: "+0.7%", detail: "16,904 runs" },
];

function App() {
  return (
    <AppShell>
      <div className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="release-pill"><Sparkle size={14} weight="fill" /> Component catalog · v0.1</span>
            <h1>Interfaces for SaaS products that have to work after the screenshot.</h1>
            <p>SaaS Forge UI is a production-minded React pattern library: responsive navigation, meaningful states, accessible interactions and data-dense surfaces without generic dashboard chrome.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#components">Explore components <ArrowUpRight size={16} /></a>
              <a className="secondary-button" href="https://github.com/Videirafo/saas-forge-ui" target="_blank" rel="noreferrer">View repository</a>
            </div>
          </div>
          <div className="hero-signal" aria-label="System health preview">
            <div className="signal-topline"><span><Pulse size={17} weight="bold" /> Runtime health</span><strong>Stable</strong></div>
            <div className="signal-chart">
              {[28, 34, 30, 42, 38, 54, 49, 66, 61, 76, 73, 88].map((height, index) => <span key={index} style={{ "--bar": `${height}%` } as React.CSSProperties} />)}
            </div>
            <div className="signal-footer"><span>Last 24 hours</span><span>p95 · 186ms</span></div>
          </div>
        </section>

        <section className="metrics-grid" aria-label="Key metrics">
          {metrics.map((metric) => (
            <article className="metric" key={metric.label}>
              <span>{metric.label}</span>
              <div><strong>{metric.value}</strong><em>{metric.change}</em></div>
              <small>{metric.detail}</small>
            </article>
          ))}
        </section>

        <ComponentCatalog />
        <DataTable />
        <StateShowcase />

        <section className="principles" id="principles">
          <p className="eyebrow">Principles</p>
          <h2>Less demo code. More product behavior.</h2>
          <div className="principle-list">
            <article><span>01</span><div><h3>Responsive by intent</h3><p>Desktop, tablet and mobile navigation are designed as distinct interaction modes, not squeezed versions of the same layout.</p></div></article>
            <article><span>02</span><div><h3>Accessibility is architecture</h3><p>Keyboard navigation, focus visibility, semantic structure, motion preferences and clear state semantics are built in.</p></div></article>
            <article><span>03</span><div><h3>State-complete patterns</h3><p>Loading, empty, error, disabled and success states belong to the component contract instead of arriving as cleanup work.</p></div></article>
            <article><span>04</span><div><h3>Copy-paste without lock-in</h3><p>Components stay understandable and local. Product teams can reshape them without fighting an opaque abstraction layer.</p></div></article>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export default App;
