import React, { useState } from 'react';
import { LandingNav } from '@/components/LandingNav';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and simple projects',
      price: isAnnual ? 49 : 59,
      features: [
        'Up to 5 team members',
        '3 active projects',
        'Basic project management',
        'Email support',
        'Mobile app access',
      ],
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams with multiple projects',
      price: isAnnual ? 99 : 119,
      popular: true,
      features: [
        'Up to 20 team members',
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        'Custom reporting',
        'API access',
        'Team collaboration tools',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Advanced features for large organizations',
      price: isAnnual ? 199 : 239,
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Advanced security',
        '24/7 premium support',
        'Custom integrations',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantees',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      
      {/* Pricing Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual billing
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  plan.popular ? 'border-2 border-blue-600' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <div className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-gray-600">
                      /month {isAnnual && 'billed annually'}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full justify-center ${
                    plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''
                  }`}
                >
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a custom solution?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our sales team for a customized plan that meets your specific requirements
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}