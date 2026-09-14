import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";

export function StateShowcase() {
  return (
    <section className="state-grid" aria-labelledby="states-heading">
      <div className="section-header state-heading">
        <div>
          <p className="eyebrow">Built for real software</p>
          <h2 id="states-heading">States are part of the component</h2>
        </div>
        <p>Every pattern ships with failure, waiting and first-run behavior considered from day one.</p>
      </div>
      <article className="state-card loading-card">
        <span className="state-kicker">Loading</span>
        <div className="skeleton-stack" aria-label="Loading preview">
          <span className="skeleton line-lg" />
          <span className="skeleton line-sm" />
          <span className="skeleton block" />
        </div>
      </article>
      <article className="state-card empty-card">
        <span className="state-kicker">Empty</span>
        <CheckCircle size={34} weight="duotone" />
        <h3>No automations yet</h3>
        <p>Create the first workflow from a proven template.</p>
        <button type="button" className="text-action">Browse templates <ArrowRight size={15} /></button>
      </article>
      <article className="state-card error-card">
        <span className="state-kicker">Error</span>
        <WarningCircle size={34} weight="duotone" />
        <h3>Sync paused</h3>
        <p>Reconnect the provider without losing queued events.</p>
        <button type="button" className="text-action">Open connection <ArrowRight size={15} /></button>
      </article>
    </section>
  );
}
