import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
      <div className="space-y-12 px-6 md:px-12 lg:px-24 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or special request? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Contact Information */}
          <div className="space-y-8 ml-20 mr-10">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-pink-500" />
                <span className="text-gray-700 text-lg">+94 70 322 7585</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-pink-500" />
                <span className="text-gray-700 text-lg">info@sweetdelights.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-pink-500" />
                <span className="text-gray-700 text-lg">123 Bakery Street, Sweet City</span>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-pink-500" />
                <div className="text-gray-700 text-lg">
                  <p>Mon-Fri: 8am - 8pm</p>
                  <p>Sat: 9am - 6pm</p>
                  <p>Sun: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mr-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">
                  Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-2 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
                    placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                  Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
                    placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-800">
                  Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="mt-2 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
                    placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 transition-all duration-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
