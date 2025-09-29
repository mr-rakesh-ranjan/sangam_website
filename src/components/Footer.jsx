import React from 'react'
import { Store, Facebook, Instagram, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sangam Pan Palace</h3>
                <p className="text-sm text-gray-400">& Hardware</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted stop for daily essentials & hardware in Kartahan, Vaishali, Bihar. 
              Serving the community with quality products and friendly service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block text-gray-400">Address:</span>
                <span className="text-gray-300">Bhagwati Chowk, Kartahan, Vaishali, Bihar</span>
              </li>
              <li>
                <span className="block text-gray-400">Phone:</span>
                <a href="tel:+916209545540" className="text-gray-300 hover:text-primary-400">
                  +91 62095 45540
                </a>
              </li>
              <li>
                <span className="block text-gray-400">Hours:</span>
                <span className="text-gray-300">7 AM - 9 PM Daily</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Sangam Pan Palace & Hardware. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            for the Kartahan community.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
