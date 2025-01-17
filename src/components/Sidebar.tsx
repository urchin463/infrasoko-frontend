import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LayoutDashboard,
  Briefcase,
  CheckSquare,
  ShoppingCart,
  Wrench,
  DollarSign,
  FileText,
  PieChart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import type { UserRole } from '../types';

const getNavigationItems = (role: UserRole) => {
  const items = [
    {
      name: 'Dashboard',
      to: '/',
      icon: LayoutDashboard,
      roles: ['admin', 'client', 'contractor', 'consultant'],
    },
    {
      name: 'Projects',
      to: '/projects',
      icon: Briefcase,
      roles: ['admin', 'client', 'contractor', 'consultant'],
    },
    {
      name: 'Tasks',
      to: '/tasks',
      icon: CheckSquare,
      roles: ['admin', 'contractor', 'consultant'],
    },
    {
      name: 'Procurement',
      to: '/procurement',
      icon: ShoppingCart,
      roles: ['admin', 'contractor'],
    },
    {
      name: 'Maintenance',
      to: '/maintenance',
      icon: Wrench,
      roles: ['admin', 'contractor'],
    },
    {
      name: 'Finance',
      to: '/finance',
      icon: DollarSign,
      roles: ['admin'],
    },
    {
      name: 'Contracts',
      to: '/contracts',
      icon: FileText,
      roles: ['admin', 'client', 'contractor'],
    },
    {
      name: 'Reports',
      to: '/reports',
      icon: PieChart,
      roles: ['admin', 'client', 'consultant'],
    },
  ];

  return items.filter((item) => item.roles.includes(role));
};

export function Sidebar() {
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigation = getNavigationItems(user?.role || 'client');

  return (
    <div className={cn(
      "border-r bg-background flex flex-col h-[calc(100vh-64px)] transition-all duration-300",
      isCollapsed ? "w-16" : "w-72"
    )}>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "group relative flex items-center gap-x-3 rounded-md px-3 py-3 text-sm font-medium transition-all hover:bg-accent",
                    isActive
                      ? "bg-primary/10 text-primary hover:bg-primary/20"
                      : "text-muted-foreground hover:text-foreground",
                    isCollapsed && "justify-center px-2"
                  )
                }
                title={isCollapsed ? item.name : undefined}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={cn(
                        "h-5 w-5 flex-shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground/70"
                      )}
                    />
                    {!isCollapsed && (
                      <span className="font-medium truncate">{item.name}</span>
                    )}
                    {isActive && (
                      <span className="absolute inset-y-0 left-0 w-1 rounded-r-md bg-primary" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t p-2">
        {!isCollapsed && (
          <div className="mb-2 px-2 py-3 rounded-md bg-accent/50">
            <p className="font-medium text-sm text-foreground">
              {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)} Account
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              {user?.email}
            </p>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="w-fit justify-center self-right"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}