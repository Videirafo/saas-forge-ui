import {
  Bell,
  CaretDoubleLeft,
  CaretDoubleRight,
  List,
  X,
} from "@phosphor-icons/react";
import { type PropsWithChildren, useEffect, useState } from "react";
import { navigation } from "../lib/navigation";
import { cn } from "../lib/cn";
import { CommandPalette } from "./command-palette";
import { ThemeToggle } from "./theme-toggle";

const collapseKey = "saas-forge-sidebar";

export function AppShell({ children }: PropsWithChildren) {
  const [active, setActive] = useState("Overview");
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(collapseKey) === "collapsed");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => localStorage.setItem(collapseKey, collapsed ? "collapsed" : "expanded"), [collapsed]);

  const sidebar = (
    <>
      <div className="brand-row">
        <a href="#main" className="brand" aria-label="SaaS Forge UI home">
          <span className="brand-mark" aria-hidden="true">SF</span>
          <span className="brand-copy">
            <strong>SaaS Forge</strong>
            <small>UI systems</small>
          </span>
        </a>
        <button type="button" className="sidebar-close mobile-only" onClick={() => setMobileOpen(false)} aria-label="Close navigation">
          <X size={20} />
        </button>
      </div>

      <div className="workspace-card">
        <span className="workspace-logo">N</span>
        <span className="workspace-copy">
          <strong>Northstar Labs</strong>
          <small>Production</small>
        </span>
        <span className="status-dot" aria-label="Healthy" />
      </div>

      <nav className="primary-nav" aria-label="Primary navigation">
        <p className="nav-label">Workspace</p>
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              type="button"
              className={cn("nav-item", isActive && "active")}
              onClick={() => {
                setActive(item.label);
                setMobileOpen(false);
              }}
              aria-current={isActive ? "page" : undefined}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={20} weight={isActive ? "fill" : "regular"} />
              <span className="nav-copy">{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="profile-card">
          <span className="avatar">FV</span>
          <span className="profile-copy">
            <strong>Fernando Videira</strong>
            <small>Workspace owner</small>
          </span>
          <span className="presence" />
        </div>
        <button type="button" className="collapse-control desktop-only" onClick={() => setCollapsed((value) => !value)}>
          {collapsed ? <CaretDoubleRight size={18} /> : <CaretDoubleLeft size={18} />}
          <span className="nav-copy">{collapsed ? "Expand" : "Collapse"}</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="app-root">
      <a className="skip-link" href="#main">Skip to content</a>
      <aside className={cn("sidebar desktop-sidebar", collapsed && "collapsed")}>{sidebar}</aside>
      {mobileOpen && <div className="mobile-backdrop" onMouseDown={() => setMobileOpen(false)} />}
      <aside className={cn("sidebar mobile-sidebar", mobileOpen && "open")} aria-hidden={!mobileOpen}>{sidebar}</aside>

      <div className={cn("app-frame", collapsed && "sidebar-collapsed")}>
        <header className="topbar">
          <button type="button" className="icon-button mobile-only" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
            <List size={20} />
          </button>
          <div className="breadcrumbs">
            <span>Northstar Labs</span>
            <span>/</span>
            <strong>{active}</strong>
          </div>
          <div className="topbar-actions">
            <CommandPalette />
            <ThemeToggle />
            <button type="button" className="icon-button notification-button" aria-label="Notifications">
              <Bell size={18} weight="bold" />
              <span className="notification-dot" />
            </button>
          </div>
        </header>
        <main id="main" tabIndex={-1}>{children}</main>
      </div>
    </div>
  );
}
