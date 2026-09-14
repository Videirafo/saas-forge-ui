import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { navigation } from "../lib/navigation";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
    else setQuery("");
  }, [open]);

  const results = useMemo(
    () => navigation.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <>
      <button type="button" className="command-trigger" onClick={() => setOpen(true)}>
        <MagnifyingGlass size={17} />
        <span>Search anything</span>
        <kbd>⌘K</kbd>
      </button>
      {open && (
        <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="command-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-input-row">
              <MagnifyingGlass size={20} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search navigation and actions"
                aria-label="Search commands"
              />
              <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close">
                <X size={17} />
              </button>
            </div>
            <div className="command-results">
              <p className="eyebrow">Navigate</p>
              {results.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.label} type="button" className="command-result" onClick={() => setOpen(false)}>
                    <Icon size={18} />
                    <span>{item.label}</span>
                    <span className="shortcut">↵</span>
                  </button>
                );
              })}
              {results.length === 0 && <p className="empty-command">No matching commands.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
