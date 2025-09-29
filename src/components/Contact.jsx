import React from 'react'
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Kartahan, Vaishali, Bihar',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 6209545540',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: '7:00 AM - 9:00 PM (Daily)',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'sangampanpalace@gmail.com',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mt-4">
            Visit us or get in touch - we're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="card p-6 flex items-start gap-4">
                  <div className={`${info.bg} p-3 rounded-lg`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:+916209545540"
                  className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-700">Call Us Now</span>
                </a>
                <a
                  href="https://wa.me/916209545540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-medium text-gray-700">WhatsApp Us</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/CQHgrw4dno7kqNDY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Navigation className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700">Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="space-y-6">
            <div className="card overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.645268426178!2d85.2053529!3d25.815274499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed43813efa232f%3A0xf21c0d2b9da7bd7!2sSangam%20pan%20palace!5e0!3m2!1sen!2sin!4v1759178363938!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sangam Pan Palace & Hardware Location"
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.645268426178!2d85.2053529!3d25.815274499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed43813efa232f%3A0xf21c0d2b9da7bd7!2sSangam%20pan%20palace!5e0!3m2!1sen!2sin!4v1759178363938!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Visit Us Today!
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Experience our wide range of products and friendly service. 
              We're conveniently located in Kartahan, Vaishali, and open daily from 7 AM to 9 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+916209545540"
                className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Kartahan,Vaishali,Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
