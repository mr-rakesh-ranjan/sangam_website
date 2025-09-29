import React from 'react'
import { ShoppingBag, Store, Users, Package, Wrench, Heart } from 'lucide-react'

const Gallery = () => {
  const galleryItems = [
    {
      icon: Store,
      title: 'Our Store Front',
      description: 'Welcome to Sangam Pan Palace & Hardware',
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-100'
    },
    {
      icon: ShoppingBag,
      title: 'Daily Essentials',
      description: 'Fresh groceries and daily needs',
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-100'
    },
    {
      icon: Wrench,
      title: 'Hardware Section',
      description: 'Quality tools and hardware items',
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-100'
    },
    {
      icon: Package,
      title: 'Product Range',
      description: 'Wide variety of products',
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-100'
    },
    {
      icon: Users,
      title: 'Happy Customers',
      description: 'Serving the community with pride',
      color: 'from-pink-500 to-pink-600',
      iconColor: 'text-pink-100'
    },
    {
      icon: Heart,
      title: 'Quality Service',
      description: 'Customer satisfaction is our priority',
      color: 'from-red-500 to-red-600',
      iconColor: 'text-red-100'
    }
  ]

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle mt-4">
            A glimpse into our stores and the products we offer
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-20 h-20 ${item.iconColor} mb-4`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-50 border-2 border-primary-200 rounded-xl p-6 max-w-2xl">
            <p className="text-gray-700">
              <span className="font-semibold text-primary-600">Visit us in person</span> to see our complete range of products 
              and experience the warm, friendly service that makes us a trusted name in Kartahan!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
