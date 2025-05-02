
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  DollarSign,
  Calendar,
  BarChart3,
  Settings,
  Menu,
  LogOut,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useData } from '@/context/DataContext';

interface SidebarProps {
  children: React.ReactNode;
}

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isExpanded: boolean;
  isActive: boolean;
}

const SidebarLink = ({ to, icon: Icon, label, isExpanded, isActive }: SidebarLinkProps) => (
  <Link to={to} className="w-full">
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start gap-3 px-3 py-6',
        isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
      )}
    >
      <Icon size={20} />
      {isExpanded && <span>{label}</span>}
    </Button>
  </Link>
);

export const Sidebar = ({ children }: SidebarProps) => {
  const { tenant } = useData();
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const routes = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/members', label: 'Members', icon: Users },
    { path: '/payments', label: 'Payments', icon: DollarSign },
    { path: '/attendance', label: 'Attendance', icon: Calendar },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div 
        className={cn(
          'bg-sidebar h-screen flex flex-col border-r transition-all duration-300',
          isExpanded ? 'w-64' : 'w-16'
        )}
      >
        <div className="flex items-center justify-between p-4">
          {isExpanded && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gym-primary flex items-center justify-center text-white font-bold">
                {tenant.name.charAt(0)}
              </div>
              <span className="text-sidebar-foreground font-semibold">{tenant.name}</span>
            </div>
          )}
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu size={20} />
          </Button>
        </div>
        
        <div className="flex-1 py-6 flex flex-col gap-1">
          {routes.map((route) => (
            <SidebarLink
              key={route.path}
              to={route.path}
              icon={route.icon}
              label={route.label}
              isExpanded={isExpanded}
              isActive={location.pathname === route.path}
            />
          ))}
        </div>

        <div className="p-4 border-t">
          <Button 
            variant="ghost" 
            className={cn(
              'w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground',
              !isExpanded && 'justify-center'
            )}
          >
            <LogOut size={20} />
            {isExpanded && <span>Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};
