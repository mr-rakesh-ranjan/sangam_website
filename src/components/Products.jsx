import React, { useState } from 'react'
import { 
  Milk, Coffee, Candy, Cookie, Droplet, BookOpen, 
  Sparkles, Scissors, Wrench, Paintbrush, Droplets, 
  Hammer, Gauge, Package, Zap, Settings
} from 'lucide-react'

const Products = () => {
  const [activeTab, setActiveTab] = useState('essentials')

  const essentialsProducts = [
    { icon: Milk, name: 'Milk Products', items: 'Milk, Curd, Lassi, Butter', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Candy, name: 'Chocolates', items: 'Dairy Milk, KitKat, Munch', color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: Cookie, name: 'Biscuits & Snacks', items: 'Parle-G, Good Day, Kurkure', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: Droplet, name: 'Cold Drinks', items: 'Coca-Cola, Pepsi, Sprite, Frooti', color: 'text-red-500', bg: 'bg-red-50' },
    { icon: Coffee, name: 'Beverages', items: 'Tea, Coffee, Energy Drinks', color: 'text-brown-500', bg: 'bg-amber-50' },
    { icon: BookOpen, name: 'Stationery', items: 'Notebooks, Pens, Pencils', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { icon: Sparkles, name: 'Personal Care', items: 'Shampoo, Soap, Toothpaste', color: 'text-pink-500', bg: 'bg-pink-50' },
    { icon: Package, name: 'Household Goods', items: 'Detergent, Cleaners, Utensils', color: 'text-green-500', bg: 'bg-green-50' },
  ]

  const hardwareProducts = [
    { icon: Paintbrush, name: 'Paints & Colors', items: 'Asian Paints, Thinners, Brushes', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Scissors, name: 'Ropes & Plastics', items: 'Nylon Rope, Plastic Sheets', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { icon: Gauge, name: 'Hand Pump Parts', items: 'Pipes, Washers, Seals', color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { icon: Hammer, name: 'Tools', items: 'Hammers, Screwdrivers, Pliers', color: 'text-gray-600', bg: 'bg-gray-50' },
    { icon: Droplets, name: 'Cleaning Products', items: 'Phenyl, Acid, Floor Cleaners', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: Zap, name: 'Petrol & Fuel', items: 'Petrol for Small Engines', color: 'text-red-600', bg: 'bg-red-50' },
    { icon: Settings, name: 'Hardware Items', items: 'Nuts, Bolts, Nails, Screws', color: 'text-slate-600', bg: 'bg-slate-50' },
    { icon: Wrench, name: 'Repair Tools', items: 'Wrenches, Spanners, Cutters', color: 'text-orange-600', bg: 'bg-orange-50' },
  ]

  const products = activeTab === 'essentials' ? essentialsProducts : hardwareProducts

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle mt-4">
            Quality products for your everyday needs
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1 shadow-inner">
            <button
              onClick={() => setActiveTab('essentials')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'essentials'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Daily Essentials & Pan Palace
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'hardware'
                  ? 'bg-secondary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hardware Store
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card p-6 space-y-4 hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 ${product.bg} rounded-lg flex items-center justify-center`}>
                <product.icon className={`w-8 h-8 ${product.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.items}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Visit our store or give us a call. We'll help you find exactly what you need!
            </p>
            <a href="#contact" className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
