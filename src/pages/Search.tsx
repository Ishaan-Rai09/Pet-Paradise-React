import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Search as SearchIcon, Filter } from 'lucide-react';

const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish'];
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export default function Search() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Relevance');

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Search Pets</h1>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Filter className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for pets..."
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-500 text-sm">No results found. Try adjusting your search.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}