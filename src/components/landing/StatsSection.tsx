import React from 'react';

export function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 mt-2">Projects Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600 mt-2">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">45%</div>
            <div className="text-gray-600 mt-2">Efficiency Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600 mt-2">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}