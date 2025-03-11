
import { Link } from 'react-router-dom';
import { Cake, Star, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80"
          alt="Delicious cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-5xl font-bold">Sweet Delights Bakery</h1>
            <p className="text-xl">Handcrafted cakes for your special moments</p>
            <Link 
              to="/cakes"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Cake className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">Custom Designs</h3>
          <p className="text-gray-600">Personalized cakes crafted to your specifications</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Star className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">Premium Quality</h3>
          <p className="text-gray-600">Made with the finest ingredients for perfect taste</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Truck className="h-12 w-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-600">Quick and safe delivery to your doorstep</p>
        </div>
      </div>

      {/* Featured Cakes */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Featured Cakes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
              name: "Chocolate Dream",
              price: "$35"
            },
            {
              image: "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&w=800&q=80",
              name: "Strawberry Delight",
              price: "$40"
            },
            {
              image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=800&q=80",
              name: "Vanilla Paradise",
              price: "$30"
            }
          ].map((cake, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cake.name}</h3>
                <p className="text-pink-500 font-bold">{cake.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;