import React from 'react';
import { LandingNav } from '@/components/LandingNav';
import { Building2, BarChart3, Users, Clock, Shield, PenTool as Tool, FileText, PieChart as ChartPie, Smartphone, Zap, CheckCircle2, ArrowRight, Star, MessageCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Features() {
  const features = [
    {
      category: 'Project Management',
      description: 'Comprehensive tools for seamless project execution',
      items: [
        {
          icon: Building2,
          name: 'Project Planning',
          description: 'Comprehensive tools for project planning, scheduling, and resource allocation.',
          highlight: 'Reduce planning time by 40%'
        },
        {
          icon: Clock,
          name: 'Timeline Management',
          description: 'Interactive Gantt charts and timeline visualization tools.',
          highlight: 'Meet deadlines consistently'
        },
        {
          icon: Users,
          name: 'Team Collaboration',
          description: 'Real-time collaboration features for team coordination.',
          highlight: 'Improve team efficiency by 35%'
        },
      ],
    },
    {
      category: 'Analytics & Reporting',
      description: 'Data-driven insights for informed decision making',
      items: [
        {
          icon: BarChart3,
          name: 'Performance Analytics',
          description: 'Advanced analytics for project performance and team productivity.',
          highlight: 'Track KPIs in real-time'
        },
        {
          icon: ChartPie,
          name: 'Custom Reports',
          description: 'Customizable reporting tools for stakeholder communication.',
          highlight: 'Generate reports 5x faster'
        },
        {
          icon: FileText,
          name: 'Documentation',
          description: 'Centralized document management and version control.',
          highlight: 'Never lose important files'
        },
      ],
    },
    {
      category: 'Operations',
      description: 'Streamline your daily operations efficiently',
      items: [
        {
          icon: Tool,
          name: 'Maintenance',
          description: 'Preventive maintenance scheduling and tracking.',
          highlight: 'Reduce downtime by 45%'
        },
        {
          icon: Shield,
          name: 'Compliance',
          description: 'Built-in compliance tracking and reporting tools.',
          highlight: 'Stay audit-ready always'
        },
        {
          icon: Zap,
          name: 'Automation',
          description: 'Workflow automation for routine tasks and processes.',
          highlight: 'Save 20+ hours weekly'
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 mb-6">
                <span className="text-sm font-medium text-blue-600">Powerful Features</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Everything you need for{' '}
                <span className="text-blue-600">Modern Infrastructure</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover our comprehensive suite of tools designed to streamline your infrastructure projects from start to finish.
              </p>
              
              {/* Ratings */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    Rated 4.9/5 by infrastructure professionals
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                  Feature Highlights
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <div className="h-2 w-24 bg-blue-200 rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-32 bg-gray-200 rounded-full mb-2" />
                          <div className="h-2 w-48 bg-gray-200 rounded-full" />
                        </div>
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((category, index) => (
            <div key={index} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={featureIndex}
                      className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                        <CheckCircle2 className="h-4 w-4" />
                        {feature.highlight}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/50" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-800/50 px-4 py-1.5 mb-6">
                <span className="text-sm font-medium text-blue-200">
                  Get Started Today
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to transform your{' '}
                <span className="text-blue-200">project management</span>?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of companies already using InfraSoko to streamline their infrastructure projects and boost efficiency.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">45%</div>
                  <div className="text-sm text-blue-200">Faster Delivery</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">35%</div>
                  <div className="text-sm text-blue-200">Cost Savings</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-blue-200">Uptime</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg bg-white text-blue-900 hover:bg-blue-50"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-white text-white hover:bg-white/10"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Trial Info */}
              <p className="mt-4 text-sm text-blue-200">
                No credit card required · 14-day free trial · Cancel anytime
              </p>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                {/* Feature Highlights */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Shield className="h-6 w-6 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Enterprise Security</h3>
                      <p className="text-blue-200 text-sm">Bank-grade data protection</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Users className="h-6 w-6 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Team Collaboration</h3>
                      <p className="text-blue-200 text-sm">Real-time project updates</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <DollarSign className="h-6 w-6 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cost Management</h3>
                      <p className="text-blue-200 text-sm">Track and optimize budgets</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-400/20">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-blue-100 italic mb-4">
                    "InfraSoko has transformed how we manage our infrastructure projects. The ROI has been incredible."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-blue-200">Project Director, Global Construction Corp</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-400/30 rounded-full blur-xl" />
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Chat Support Icon */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}