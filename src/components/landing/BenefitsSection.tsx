import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  Shield 
} from 'lucide-react';
import { Button } from '../ui/button';

const benefits = [
  {
    icon: Clock,
    title: 'Time Optimization',
    description: 'Reduce project delays by up to 35%',
    metric: '35%',
    metricLabel: 'Faster Delivery'
  },
  {
    icon: Users,
    title: 'Team Efficiency',
    description: 'Improve team productivity by 45%',
    metric: '45%',
    metricLabel: 'More Productive'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Cut administrative costs by 25%',
    metric: '25%',
    metricLabel: 'Cost Savings'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with instant insights',
    metric: '100%',
    metricLabel: 'Visibility'
  },
  {
    icon: MessageSquare,
    title: 'Enhanced Communication',
    description: 'Streamline stakeholder collaboration',
    metric: '60%',
    metricLabel: 'Better Engagement'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security for your data',
    metric: '99.9%',
    metricLabel: 'Uptime'
  }
];

export function BenefitsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-blue-600">
              Why Choose InfraSoko
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform your infrastructure{' '}
            <span className="text-blue-600">management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of modern project management with features designed to streamline your operations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Benefit Icon */}
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>

                {/* Metric */}
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="font-semibold">{benefit.metric}</span>
                  </div>
                  <span className="text-gray-500">{benefit.metricLabel}</span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-lg"
            onClick={() => navigate('/register')}
          >
            Start Transforming Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Join thousands of companies already using InfraSoko
          </p>
        </div>
      </div>
    </section>
  );
}