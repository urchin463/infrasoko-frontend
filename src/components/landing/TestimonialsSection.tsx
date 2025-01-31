import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "InfraSoko has transformed how we manage our infrastructure projects. The platform's intuitive interface and comprehensive features have significantly improved our efficiency.",
    author: "Sarah Johnson",
    position: "Project Director",
    company: "Global Construction Corp",
  },
  {
    quote: "The real-time analytics and collaboration tools have made it incredibly easy to keep all stakeholders aligned and informed throughout project lifecycles.",
    author: "Michael Chen",
    position: "Infrastructure Manager",
    company: "Urban Development Partners",
  },
  {
    quote: "Since implementing InfraSoko, we've seen a dramatic reduction in project delays and improved our resource allocation significantly.",
    author: "David Martinez",
    position: "Operations Director",
    company: "Metropolitan Builders",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by industry leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our clients say about InfraSoko
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.position}
                </div>
                <div className="text-blue-600 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}