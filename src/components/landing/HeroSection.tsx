import React from 'react';
import { ArrowRight, BarChart3, CheckCircle2, FileText, Shield, Star } from 'lucide-react';
import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-blue-600">#1 Project Management Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Seamlessly Connect{' '}
              <span className="text-blue-600">Clients, Contractors & Consultants</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your infrastructure projects with our comprehensive platform. From bidding to completion, manage everything in one secure place.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="text-lg bg-blue-600 hover:bg-blue-700"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg"
              >
                Sign Up Free
              </Button>
            </div>

            {/* Ratings */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  4.9/5 from 1000+ reviews
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=40&fit=crop&auto=format"
                  alt="Capterra"
                  className="h-10 object-contain"
                />
                <img
                  src="https://images.unsplash.com/photo-1611162616677-5b3bd60c6f7f?w=100&h=40&fit=crop&auto=format"
                  alt="G2"
                  className="h-10 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - UI Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Live Project Dashboard
              </div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Platform interface"
                className="rounded-lg shadow-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Budget Tracking</span>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Milestones</span>
                  </div>
                  <div className="h-2 bg-green-100 rounded-full">
                    <div className="h-2 bg-green-600 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-8 top-1/4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Secure Bidding</span>
              </div>
            </div>
            <div className="absolute -left-8 bottom-1/4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Document Sharing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}