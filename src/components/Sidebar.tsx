import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  CheckSquare,
  ShoppingCart,
  Wrench,
  DollarSign,
  FileText,
  PieChart,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Projects', to: '/projects', icon: Briefcase },
  { name: 'Tasks', to: '/tasks', icon: CheckSquare },
  { name: 'Procurement', to: '/procurement', icon: ShoppingCart },
  { name: 'Maintenance', to: '/maintenance', icon: Wrench },
  { name: 'Finance', to: '/finance', icon: DollarSign },
  { name: 'Contracts', to: '/contracts', icon: FileText },
  { name: 'Reports', to: '/reports', icon: PieChart },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-background">
      <div className="h-full py-6">
        <nav className="space-y-1 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary hover:bg-primary/20'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`
                }
              >
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}