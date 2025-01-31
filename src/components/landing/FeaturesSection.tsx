import React, { useState } from 'react';
import { 
  Gavel, 
  ListTodo, 
  BarChart3, 
  Users, 
  PieChart,
  Bell,
  MessageSquare,
  FileText,
  CheckCircle2,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'bidding',
    icon: Gavel,
    name: 'Project Bidding',
    title: 'Effortlessly Manage Bids and Contracts',
    description: 'Streamline your bidding process with our comprehensive bidding management system. Create, track, and evaluate bids in real-time while ensuring fair competition and transparent contract management.',
    mockup: {
      title: 'Active Bids',
      items: [
        {
          name: 'City Infrastructure Upgrade',
          amount: '$1.2M',
          status: 'Under Review',
          deadline: '2 days left',
          bidders: 5
        },
        {
          name: 'Highway Maintenance',
          amount: '$800K',
          status: 'Open',
          deadline: '5 days left',
          bidders: 3
        }
      ]
    }
  },
  {
    id: 'tasks',
    icon: ListTodo,
    name: 'Task Management',
    title: 'Organize and Track Project Tasks',
    description: 'Keep your projects on track with our intuitive task management system. Assign tasks, set deadlines, and monitor progress in real-time across all your project teams.',
    mockup: {
      title: 'Project Tasks',
      items: [
        {
          name: 'Site Survey',
          assignee: 'Sarah Johnson',
          status: 'In Progress',
          deadline: 'Today',
          priority: 'High'
        },
        {
          name: 'Material Procurement',
          assignee: 'Mike Chen',
          status: 'Pending',
          deadline: 'Tomorrow',
          priority: 'Medium'
        }
      ]
    }
  },
  {
    id: 'budget',
    icon: BarChart3,
    name: 'Budget Tracking',
    title: 'Monitor Project Finances in Real-time',
    description: 'Take control of your project finances with comprehensive budget tracking tools. Monitor expenses, forecast costs, and ensure projects stay within budget constraints.',
    mockup: {
      title: 'Budget Overview',
      items: [
        {
          category: 'Materials',
          allocated: '$500K',
          spent: '$350K',
          remaining: '$150K',
          progress: 70
        },
        {
          category: 'Labor',
          allocated: '$300K',
          spent: '$180K',
          remaining: '$120K',
          progress: 60
        }
      ]
    }
  },
  {
    id: 'resources',
    icon: Users,
    name: 'Resource Allocation',
    title: 'Optimize Team and Resource Management',
    description: 'Efficiently allocate and manage your project resources. Track team availability, equipment utilization, and ensure optimal resource distribution across projects.',
    mockup: {
      title: 'Team Allocation',
      items: [
        {
          team: 'Engineering',
          members: 8,
          utilization: '85%',
          projects: 3,
          availability: 'High'
        },
        {
          team: 'Construction',
          members: 12,
          utilization: '90%',
          projects: 2,
          availability: 'Medium'
        }
      ]
    }
  },
  {
    id: 'analytics',
    icon: PieChart,
    name: 'Reporting & Analytics',
    title: 'Data-Driven Project Insights',
    description: 'Make informed decisions with powerful analytics and reporting tools. Generate custom reports, visualize project metrics, and identify trends for better project outcomes.',
    mockup: {
      title: 'Performance Analytics',
      items: [
        {
          metric: 'Project Completion',
          value: '92%',
          trend: 'up',
          change: '+5%'
        },
        {
          metric: 'Budget Variance',
          value: '-2.5%',
          trend: 'down',
          change: 'Under budget'
        }
      ]
    }
  }
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300",
                  activeFeature.id === feature.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{feature.name}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {activeFeature.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {activeFeature.description}
            </p>
            <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
              Learn more about {activeFeature.name.toLowerCase()}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Right Column - UI Mockup */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {activeFeature.mockup.title}
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Bell className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Mockup Content */}
              <div className="space-y-4">
                {activeFeature.mockup.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900">
                        {'name' in item ? item.name : item.category}
                      </div>
                      {'status' in item && (
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          item.status === 'In Progress' ? "bg-blue-100 text-blue-800" :
                          item.status === 'Under Review' ? "bg-yellow-100 text-yellow-800" :
                          "bg-gray-100 text-gray-800"
                        )}>
                          {item.status}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      {'amount' in item && (
                        <>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            <span>{item.amount}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{item.deadline}</span>
                          </div>
                        </>
                      )}
                      {'assignee' in item && (
                        <>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{item.assignee}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>{item.priority}</span>
                          </div>
                        </>
                      )}
                      {'allocated' in item && (
                        <>
                          <div className="col-span-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{item.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {'utilization' in item && (
                        <>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{item.members} members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>{item.utilization}</span>
                          </div>
                        </>
                      )}
                      {'metric' in item && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold">{item.value}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "text-sm",
                              item.trend === 'up' ? "text-green-600" : "text-red-600"
                            )}>
                              {item.change}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl" />
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-green-100 rounded-full opacity-50 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}