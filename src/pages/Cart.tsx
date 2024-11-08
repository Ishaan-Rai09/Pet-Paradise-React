import React from 'react';
import PageTransition from '../components/PageTransition';
import { Trash2, Plus, Minus } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: 'Premium Dog Food',
    price: 49.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Cat Toy Set',
    price: 24.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7">
            {cartItems.map((item) => (
              <div key={item.id} className="flex py-6 border-b border-gray-200">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded-md hover:bg-gray-100">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button className="p-1 rounded-md hover:bg-gray-100">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">Shipping</p>
                <p className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <p className="text-base font-medium text-gray-900">Total</p>
                <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}