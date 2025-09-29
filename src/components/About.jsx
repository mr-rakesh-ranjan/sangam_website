import React from 'react'
import { Heart, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Family-Run Business',
      description: 'A trusted family business serving the Kartahan community with dedication and care.',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: Users,
      title: 'Community Trusted',
      description: 'Built on trust and relationships with our valued customers over the years.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'We ensure only the best quality products reach our customers every day.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      icon: TrendingUp,
      title: 'Wide Selection',
      description: 'From daily essentials to hardware tools - everything you need under one roof.',
      color: 'text-green-600',
      bg: 'bg-green-50'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle mt-4">
            Serving Kartahan, Vaishali with pride and dedication
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image/Illustration */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-primary-100 via-secondary-100 to-rustic-100 p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Sangam Stores</h3>
                    <p className="text-gray-600 mt-2">Kartahan, Vaishali, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-200 rounded-full opacity-50 blur-xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Your One-Stop Shop for Everything
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to <span className="font-semibold text-primary-600">Sangam Pan Palace & Hardware</span>, 
              a trusted family-run business proudly serving the Kartahan community in Vaishali, Bihar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We provide everything from <span className="font-semibold">groceries, milk, chocolates, and stationery</span> to 
              <span className="font-semibold"> ropes, paints, and hardware tools</span> – all under one roof. 
              Our commitment is to offer quality products at fair prices while building lasting relationships with our customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need daily essentials for your home or tools for your next project, 
              we're here to serve you with a smile and the best products in town.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">
                Visit Us Today
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center space-y-4">
              <div className={`w-16 h-16 mx-auto ${feature.bg} rounded-full flex items-center justify-center`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h4 className="font-semibold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
