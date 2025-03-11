import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import type { CartItem } from '../types';
import { ChevronDown } from 'lucide-react';

const CakeList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cakesToShow, setCakesToShow] = useState(4); // Set initial cakes to show as 4

  const cakes = [
    {
      id: '1',
      name: 'Classic Birthday Cake',
      description: 'Colorful and festive birthday cake with sprinkles',
      price: 35,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      category: 'birthday',
      flavors: ['vanilla', 'chocolate', 'strawberry'],
      sizes: ['6"', '8"', '10"']
    },
    {
      id: '2',
      name: 'Elegant Wedding Cake',
      description: 'Three-tiered white wedding cake with roses',
      price: 150,
      image: 'https://tse1.mm.bing.net/th?id=OIP.gL2XgJyap_pgd4mG7Db7jAHaLH&pid=Api&P=0&h=220',
      category: 'wedding',
      flavors: ['vanilla', 'red velvet', 'almond'],
      sizes: ['12"', '14"', '16"']
    },
    {
      id: '3',
      name: 'Party Cupcakes',
      description: 'Assorted cupcakes perfect for any celebration',
      price: 25,
      image: 'https://tse4.mm.bing.net/th?id=OIP.7Vevs1uLCTIeuQtCicWz7gHaEo&pid=Api&P=0&h=220',
      category: 'cupcakes',
      flavors: ['chocolate', 'vanilla', 'red velvet'],
      sizes: ['regular', 'mini']
    },
    {
      id: '4',
      name: 'Classic Chocolate Cake',
      description: 'Rich chocolate cake with ganache frosting',
      price: 40,
      image: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=800&q=80',
      category: 'chocolate',
      flavors: ['dark chocolate', 'milk chocolate', 'white chocolate'],
      sizes: ['6"', '8"', '10"']
    },
    {
      id: '5',
      name: 'Elegant Wedding Cake',
      description: 'Three-tiered white wedding cake with roses',
      price: 150,
      image: 'https://tse3.mm.bing.net/th?id=OIP.ahSSuMkEp_-6VPVuzjq38gHaLH&pid=Api&P=0&h=220',
      category: 'wedding',
      flavors: ['vanilla', 'red velvet', 'almond'],
      sizes: ['12"', '14"', '16"']
    },
    {
      id: '6',
      name: 'Party Cupcakes',
      description: 'Assorted cupcakes perfect for any celebration',
      price: 25,
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80',
      category: 'cupcakes',
      flavors: ['chocolate', 'vanilla', 'red velvet'],
      sizes: ['regular', 'mini']
    },
    {
      id: '7',
      name: 'Elegant Wedding Cake',
      description: 'Three-tiered white wedding cake with roses',
      price: 150,
      image: 'https://tse1.mm.bing.net/th?id=OIP.u3YdPLRXJIqujk37TN0R3wHaLH&pid=Api&P=0&h=220',
      category: 'wedding',
      flavors: ['vanilla', 'red velvet', 'almond'],
      sizes: ['12"', '14"', '16"']
    },
    {
      id: '8',
      name: 'Chocolate Ribbon Cake',
      description: 'Decadent chocolate cake with ribbon decorations',
      price: 45,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      category: 'special',
      flavors: ['dark chocolate', 'milk chocolate'],
      sizes: ['8"', '10"']
    },

    {
      id: '9',
      name: 'Classic Birthday Cake',
      description: 'Colorful and festive birthday cake with sprinkles',
      price: 35,
      image: 'https://tse2.mm.bing.net/th?id=OIP.UsTdcdwI9KQNitBaLD8rSgHaFx&pid=Api&P=0&h=220',
      category: 'birthday',
      flavors: ['vanilla', 'chocolate', 'strawberry'],
      sizes: ['6"', '8"', '10"']
    },
    {
      id: '10',
      name: 'Party Cupcakes',
      description: 'Assorted cupcakes perfect for any celebration',
      price: 25,
      image: 'https://tse1.mm.bing.net/th?id=OIP.yluHmWTsG9hzOGPKjrifpAHaHa&pid=Api&P=0&h=220',
      category: 'cupcakes',
      flavors: ['chocolate', 'vanilla', 'red velvet'],
      sizes: ['regular', 'mini']
    },
    {
      id: '11',
      name: 'Classic Birthday Cake',
      description: 'Colorful and festive birthday cake with sprinkles',
      price: 35,
      image: 'https://tse3.mm.bing.net/th?id=OIP.pUXb2SWHnxrzlJflZ0VYBgHaJX&pid=Api&P=0&h=220',
      category: 'birthday',
      flavors: ['vanilla', 'chocolate', 'strawberry'],
      sizes: ['6"', '8"', '10"']
    },
    {
      id: '12',
      name: 'Party Cupcakes',
      description: 'Assorted cupcakes perfect for any celebration',
      price: 25,
      image: 'https://tse1.mm.bing.net/th?id=OIP.qYHd90BIqzG4CZDYt_k6pgHaIM&pid=Api&P=0&h=220',
      category: 'cupcakes',
      flavors: ['chocolate', 'vanilla', 'red velvet'],
      sizes: ['regular', 'mini']
    },
  ];

  const categories = [
    { id: 'all', name: 'All Cakes' },
    { id: 'birthday', name: 'Birthday Cakes' },
    { id: 'wedding', name: 'Wedding Cakes' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'chocolate', name: 'Chocolate Cakes' },
    { id: 'special', name: 'Special Occasion' }
  ];

  const filteredCakes = selectedCategory === 'all'
      ? cakes
      : cakes.filter(cake => cake.category === selectedCategory);

  const displayedCakes = filteredCakes.slice(0, cakesToShow); // Limit cakes displayed based on cakesToShow

  const [selectedOptions, setSelectedOptions] = useState<Record<string, { flavor: string; size: string }>>(
      {}
  );

  const handleOptionChange = (cakeId: string, type: 'flavor' | 'size', value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [cakeId]: {
        ...prev[cakeId] || { flavor: cakes.find(c => c.id === cakeId)?.flavors[0] || '', size: cakes.find(c => c.id === cakeId)?.sizes[0] || '' },
        [type]: value
      }
    }));
  };

  const handleAddToCart = (cake: typeof cakes[0]) => {
    const options = selectedOptions[cake.id] || {
      flavor: cake.flavors[0],
      size: cake.sizes[0]
    };

    const cartItem: CartItem = {
      ...cake,
      quantity: 1,
      selectedFlavor: options.flavor,
      selectedSize: options.size
    };
    dispatch(addToCart(cartItem));
  };

  // Function to toggle between 4 or 10 cakes to display
  const handleShowMore = () => {
    setCakesToShow(prev => (prev === 4 ? 10 : 4)); // Toggle between 4 and 10 cakes
  };

  return (
      <div className="space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-pink-600">Our Cakes</h1>

        <div className="flex justify-center space-x-6 mb-8">
          {categories.map(category => (
              <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-lg font-medium ${
                      selectedCategory === category.id
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-all duration-300`}
              >
                {category.name}
              </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {displayedCakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-pink-700">{cake.name}</h3>
                  <p className="text-gray-600 text-sm">{cake.description}</p>
                  <p className="text-pink-500 font-bold text-lg">${cake.price}</p>

                  <div className="space-y-3">
                    <div className="relative">
                      <select
                          value={selectedOptions[cake.id]?.flavor || cake.flavors[0]}
                          onChange={(e) => handleOptionChange(cake.id, 'flavor', e.target.value)}
                          className="w-full p-2 border rounded-lg appearance-none pr-8"
                      >
                        {cake.flavors.map(flavor => (
                            <option key={flavor} value={flavor}>
                              {flavor.charAt(0).toUpperCase() + flavor.slice(1)}
                            </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>

                    <div className="relative">
                      <select
                          value={selectedOptions[cake.id]?.size || cake.sizes[0]}
                          onChange={(e) => handleOptionChange(cake.id, 'size', e.target.value)}
                          className="w-full p-2 border rounded-lg appearance-none pr-8"
                      >
                        {cake.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <button
                      onClick={() => handleAddToCart(cake)}
                      className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
              onClick={handleShowMore}
              className="px-6 py-2 text-lg font-semibold bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            {cakesToShow === 4 ? 'Show More Cakes' : 'Show Fewer Cakes'}
          </button>
        </div>
      </div>
  );
};

export default CakeList;
