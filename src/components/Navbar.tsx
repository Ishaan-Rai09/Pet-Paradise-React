import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, Search, PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <PawPrint className="h-8 w-8 text-indigo-600" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-gray-900">Pet Paradise</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${
                  isActive('/') 
                    ? 'text-gray-900 border-indigo-500'
                    : 'text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                to="/dogs"
                className={`${
                  isActive('/dogs')
                    ? 'text-gray-900 border-indigo-500'
                    : 'text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                Dogs
              </Link>
              <Link
                to="/cats"
                className={`${
                  isActive('/cats')
                    ? 'text-gray-900 border-indigo-500'
                    : 'text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                Cats
              </Link>
              <Link
                to="/birds"
                className={`${
                  isActive('/birds')
                    ? 'text-gray-900 border-indigo-500'
                    : 'text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                Birds
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link to="/search">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                <Search className="h-6 w-6" />
              </motion.button>
            </Link>
            <Link to="/wishlist">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                <Heart className="h-6 w-6" />
              </motion.button>
            </Link>
            <Link to="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                <ShoppingCart className="h-6 w-6" />
              </motion.button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="sm:hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`${
                isActive('/')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/dogs"
              className={`${
                isActive('/dogs')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
            >
              Dogs
            </Link>
            <Link
              to="/cats"
              className={`${
                isActive('/cats')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
            >
              Cats
            </Link>
            <Link
              to="/birds"
              className={`${
                isActive('/birds')
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
            >
              Birds
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}