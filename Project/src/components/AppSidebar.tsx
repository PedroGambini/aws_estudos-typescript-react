import { Link, useLocation } from "react-router-dom";
import { Library, GraduationCap, Settings, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Meus Decks", url: "/decks", icon: Library },
  { title: "Simulados AWS", url: "/simulados", icon: GraduationCap },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-secondary text-secondary-foreground"
      >
        {collapsed ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-secondary text-secondary-foreground transition-transform duration-200 
          ${collapsed ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:w-64 w-64`}
      >
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="font-semibold text-sm tracking-tight">AWS CertPrep</h1>
              <p className="text-xs opacity-60">Flashcards</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={item.title}
                to={item.url}
                onClick={() => setCollapsed(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                  ${isActive
                    ? "bg-sidebar-accent border-l-[3px] border-primary font-medium"
                    : "hover:bg-sidebar-accent/50 opacity-70 hover:opacity-100"
                  }`}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs opacity-40">© 2026 AWS CertPrep</p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {collapsed && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 lg:hidden"
          onClick={() => setCollapsed(false)}
        />
      )}
    </>
  );
}
