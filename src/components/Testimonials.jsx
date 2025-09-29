import React, { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Kartahan',
      rating: 5,
      text: 'Best shop in the area! I get all my daily needs here - from milk to groceries. The owners are very friendly and helpful.',
      avatar: 'RK'
    },
    {
      name: 'Priya Singh',
      location: 'Vaishali',
      rating: 5,
      text: 'Excellent hardware section! Found all the paint and tools I needed for my home renovation. Quality products at fair prices.',
      avatar: 'PS'
    },
    {
      name: 'Amit Sharma',
      location: 'Kartahan',
      rating: 5,
      text: 'A trusted family business. They have everything - from chocolates for kids to hand pump parts. Very convenient!',
      avatar: 'AS'
    },
    {
      name: 'Sunita Devi',
      location: 'Vaishali',
      rating: 5,
      text: 'I love shopping here! Fresh milk products every day and great stationery selection for my children. Highly recommended!',
      avatar: 'SD'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle mt-4">
            Trusted by the Kartahan community
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary-200 mb-6" />
              
              <div className="mb-6">
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Want to share your experience?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
