import { DotsThree, MagnifyingGlass } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

const customers = [
  { name: "Maya Bennett", email: "maya@northwind.dev", plan: "Scale", mrr: 489, status: "Healthy", usage: "82%" },
  { name: "Jonas Fischer", email: "jonas@arcfield.io", plan: "Growth", mrr: 249, status: "Healthy", usage: "68%" },
  { name: "Nadia Costa", email: "nadia@vectorlane.co", plan: "Scale", mrr: 489, status: "Review", usage: "94%" },
  { name: "Theo Martin", email: "theo@brightside.studio", plan: "Starter", mrr: 89, status: "Healthy", usage: "41%" },
  { name: "Aisha Rahman", email: "aisha@relayworks.ai", plan: "Growth", mrr: 249, status: "Review", usage: "91%" },
];

export function DataTable() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(
    () => customers.filter((customer) => `${customer.name} ${customer.email} ${customer.plan}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const toggle = (email: string) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(email)) next.delete(email);
      else next.add(email);
      return next;
    });
  };

  return (
    <section className="table-panel" aria-labelledby="customers-heading">
      <div className="section-header table-header">
        <div>
          <p className="eyebrow">Customer health</p>
          <h2 id="customers-heading">Accounts requiring attention</h2>
        </div>
        <label className="table-search">
          <MagnifyingGlass size={17} />
          <span className="sr-only">Search customers</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search customers" />
        </label>
      </div>
      {selected.size > 0 && (
        <div className="selection-bar" role="status">
          <strong>{selected.size}</strong> selected
          <button type="button" onClick={() => setSelected(new Set())}>Clear</button>
        </div>
      )}
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th className="select-column"><span className="sr-only">Select</span></th>
              <th>Customer</th>
              <th>Plan</th>
              <th>MRR</th>
              <th>Usage</th>
              <th>Status</th>
              <th><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((customer) => (
              <tr key={customer.email}>
                <td><input type="checkbox" checked={selected.has(customer.email)} onChange={() => toggle(customer.email)} aria-label={`Select ${customer.name}`} /></td>
                <td>
                  <span className="customer-cell">
                    <span className="customer-avatar">{customer.name.split(" ").map((part) => part[0]).join("")}</span>
                    <span><strong>{customer.name}</strong><small>{customer.email}</small></span>
                  </span>
                </td>
                <td>{customer.plan}</td>
                <td className="number">${customer.mrr}</td>
                <td className="number">{customer.usage}</td>
                <td><span className={`health ${customer.status.toLowerCase()}`}>{customer.status}</span></td>
                <td><button type="button" className="icon-button" aria-label={`Actions for ${customer.name}`}><DotsThree size={20} weight="bold" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && <div className="table-empty">No customers match “{query}”.</div>}
    </section>
  );
}
