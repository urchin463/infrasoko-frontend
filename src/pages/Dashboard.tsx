import React from 'react';
import { BarChart3, Users, Briefcase, ShoppingCart, Wrench, DollarSign, FileText, PieChart } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { title: 'Active Projects', value: '12', icon: Briefcase, color: 'bg-blue-500' },
    { title: 'Team Members', value: '24', icon: Users, color: 'bg-green-500' },
    { title: 'Pending Tasks', value: '38', icon: BarChart3, color: 'bg-purple-500' },
    { title: 'Procurement Requests', value: '7', icon: ShoppingCart, color: 'bg-yellow-500' },
    { title: 'Maintenance Tasks', value: '15', icon: Wrench, color: 'bg-red-500' },
    { title: 'Active Contracts', value: '9', icon: FileText, color: 'bg-indigo-500' },
    { title: 'Monthly Budget', value: '$125K', icon: DollarSign, color: 'bg-pink-500' },
    { title: 'Reports Generated', value: '45', icon: PieChart, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}