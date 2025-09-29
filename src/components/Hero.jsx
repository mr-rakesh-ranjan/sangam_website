import React from 'react'
import { ShoppingBag, Wrench, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Since Years
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Sangam Pan Palace
              <span className="block text-primary-600">& Hardware</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Your trusted stop for daily essentials & hardware in Kartahan, Vaishali
            </p>

            {/* Location & Hours */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Kartahan, Vaishali, Bihar</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-secondary-600" />
                <span>7 AM - 9 PM Daily</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => scrollToSection('products')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Explore Daily Essentials
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Wrench className="w-5 h-5" />
                Explore Hardware
              </button>
            </div>
          </div>

          {/* Right Content - Icons Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card p-6 text-center space-y-3 bg-gradient-to-br from-green-50 to-white">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Daily Essentials</h3>
              <p className="text-sm text-gray-600">Groceries, Milk & More</p>
            </div>

            <div className="card p-6 text-center space-y-3 bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 mx-auto bg-secondary-100 rounded-full flex items-center justify-center">
                <Wrench className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Hardware Tools</h3>
              <p className="text-sm text-gray-600">Paints, Ropes & Tools</p>
            </div>

            <div className="card p-6 text-center space-y-3 bg-gradient-to-br from-yellow-50 to-white">
              <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Stationery</h3>
              <p className="text-sm text-gray-600">Books & Supplies</p>
            </div>

            <div className="card p-6 text-center space-y-3 bg-gradient-to-br from-purple-50 to-white">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Snacks & Drinks</h3>
              <p className="text-sm text-gray-600">Chocolates & Cold Drinks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
