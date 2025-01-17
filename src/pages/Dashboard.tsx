import React from 'react';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  ShoppingCart, 
  Wrench, 
  DollarSign, 
  FileText, 
  PieChart,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  Timer,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Dashboard() {
  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Briefcase,
      color: 'bg-blue-500',
      metrics: [
        { label: 'On Track', value: '8', icon: CheckCircle2, color: 'text-green-500' },
        { label: 'Delayed', value: '4', icon: AlertCircle, color: 'text-red-500' }
      ],
      progress: 75,
      timeline: 'Last 30 days',
      alert: 'Two projects need attention'
    },
    {
      title: 'Team Members',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'bg-green-500',
      metrics: [
        { label: 'Active', value: '20', icon: Activity, color: 'text-green-500' },
        { label: 'On Leave', value: '4', icon: Timer, color: 'text-orange-500' }
      ],
      progress: 90,
      timeline: 'Current month',
      alert: 'High team availability'
    },
    {
      title: 'Pending Tasks',
      value: '38',
      change: '-5',
      trend: 'down',
      icon: BarChart3,
      color: 'bg-purple-500',
      metrics: [
        { label: 'High Priority', value: '12', icon: AlertCircle, color: 'text-red-500' },
        { label: 'Due Today', value: '7', icon: Timer, color: 'text-orange-500' }
      ],
      progress: 45,
      timeline: 'This week',
      alert: '12 tasks need immediate attention'
    },
    {
      title: 'Procurement Requests',
      value: '7',
      change: '+1',
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-yellow-500',
      metrics: [
        { label: 'Pending', value: '4', icon: Timer, color: 'text-orange-500' },
        { label: 'Approved', value: '3', icon: CheckCircle2, color: 'text-green-500' }
      ],
      progress: 60,
      timeline: 'This month',
      alert: '4 requests awaiting approval'
    },
    {
      title: 'Maintenance Tasks',
      value: '15',
      change: '+2',
      trend: 'up',
      icon: Wrench,
      color: 'bg-red-500',
      metrics: [
        { label: 'Scheduled', value: '10', icon: Timer, color: 'text-blue-500' },
        { label: 'Emergency', value: '5', icon: AlertCircle, color: 'text-red-500' }
      ],
      progress: 65,
      timeline: 'Next 7 days',
      alert: '5 emergency repairs pending'
    },
    {
      title: 'Active Contracts',
      value: '9',
      change: '0',
      trend: 'neutral',
      icon: FileText,
      color: 'bg-indigo-500',
      metrics: [
        { label: 'Up for Renewal', value: '3', icon: Timer, color: 'text-orange-500' },
        { label: 'New', value: '2', icon: CheckCircle2, color: 'text-green-500' }
      ],
      progress: 80,
      timeline: 'Current quarter',
      alert: '3 contracts need renewal'
    },
    {
      title: 'Monthly Budget',
      value: '$125K',
      change: '+12%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-pink-500',
      metrics: [
        { label: 'Spent', value: '$82K', icon: Activity, color: 'text-blue-500' },
        { label: 'Remaining', value: '$43K', icon: Timer, color: 'text-green-500' }
      ],
      progress: 65,
      timeline: 'This month',
      alert: 'Under budget by 8%'
    },
    {
      title: 'Reports Generated',
      value: '45',
      change: '+5',
      trend: 'up',
      icon: PieChart,
      color: 'bg-orange-500',
      metrics: [
        { label: 'This Week', value: '12', icon: Activity, color: 'text-blue-500' },
        { label: 'Last Week', value: '8', icon: Timer, color: 'text-gray-500' }
      ],
      progress: 85,
      timeline: 'Last 7 days',
      alert: '50% increase in report generation'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back to your project overview</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`${stat.color} p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(stat.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(stat.trend)}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>

                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${stat.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.timeline}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    {stat.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="text-center group-hover:transform group-hover:scale-105 transition-transform">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <MetricIcon className={`h-4 w-4 ${metric.color}`} />
                            <p className="text-sm font-semibold text-gray-900">
                              {metric.value}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">{metric.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">{stat.alert}</p>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    variant="ghost"
                    className="w-full text-sm hover:bg-gray-50"
                    onClick={() => console.log(`View ${stat.title} details`)}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}