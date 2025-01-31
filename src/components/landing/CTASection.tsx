import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export function CTASection() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance'
    },
    {
      icon: CheckCircle2,
      title: '99.9% Uptime',
      description: 'Reliable infrastructure'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-800/50 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-blue-200">
                Limited Time Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Start transforming your{' '}
              <span className="text-blue-200">project management</span> today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join over 10,000+ companies that trust InfraSoko to streamline their infrastructure projects
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-blue-100">
                <span className="font-semibold">4.9/5</span> from 1000+ reviews
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => navigate('/register')}
              >
                Start 14-day free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-white text-white hover:bg-white/10"
                onClick={() => {/* Add contact sales action */}}
              >
                Schedule demo
              </Button>
            </div>

            {/* Trial Info */}
            <p className="mt-4 text-sm text-blue-200">
              No credit card required · Cancel anytime · Free onboarding support
            </p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
              {/* Benefits Grid */}
              <div className="grid gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Icon className="h-6 w-6 text-blue-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {benefit.title}
                        </h3>
                        <p className="text-blue-200">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enterprise Badge */}
              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-400/20 backdrop-blur-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-blue-200" />
                    <div>
                      <h4 className="font-semibold">Enterprise Ready</h4>
                      <p className="text-sm text-blue-200">
                        Advanced features for large teams
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-200 hover:text-white hover:bg-white/10"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
  );
}