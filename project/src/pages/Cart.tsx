import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import type { RootState } from '../store/store';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Proceeding to checkout with items:', items);
    alert('Redirecting to checkout...');
  };

  if (items.length === 0) {
    return (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
        </div>
    );
  }

  return (
      <div className="space-y-8 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold pt-4">Shopping Cart</h1>
        <div className="space-y-4">
          {items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6 mx-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600 mt-1">
                    {item.selectedSize} - {item.selectedFlavor}
                  </p>
                  <p className="text-pink-500 font-bold text-lg mt-2">${item.price}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg">
                    <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-1 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                      onClick={() => handleRemove(item.id)}
                      className="ml-4 text-red-500 hover:text-red-600 font-medium px-4 py-2 rounded-md hover:bg-red-50 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mx-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold text-pink-500">${total.toFixed(2)}</span>
          </div>
          <button
              onClick={handleCheckout}
              className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors font-semibold text-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
  );
};

export default Cart;