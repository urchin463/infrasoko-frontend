import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LandingNav } from '@/components/LandingNav';
import { HeroSection } from '@/components/landing/HeroSection';
import { CompanyLogos } from '@/components/landing/CompanyLogos';
import { StatsSection } from '@/components/landing/StatsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

export function Landing() {
  return (
    <div className="min-h-screen">
      <LandingNav />
      <HeroSection />
      <CompanyLogos />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

      {/* Chat Support Icon */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}