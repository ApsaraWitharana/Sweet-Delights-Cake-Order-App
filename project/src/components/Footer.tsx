
import { Cake, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cake className="h-6 w-6 text-pink-500" />
              <span className="text-lg font-bold text-gray-800">Sweet Delights</span>
            </div>
            <p className="text-gray-600">
              Crafting delicious moments for your special occasions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+94 70 322 7585</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@sweetdelights.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>123 Bakery Street, Sweet City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 8am - 8pm</p>
              <p>Saturday: 9am - 6pm</p>
              <p>Sunday: 10am - 4pm</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p><a href="/about" className="text-gray-600 hover:text-pink-500">About Us</a></p>
              <p><a href="/faq" className="text-gray-600 hover:text-pink-500">FAQ</a></p>
              <p><a href="/terms" className="text-gray-600 hover:text-pink-500">Terms & Conditions</a></p>
              <p><a href="/privacy" className="text-gray-600 hover:text-pink-500">Privacy Policy</a></p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;