import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

const Header: React.FC<HeaderProps> = ({ onCategoryChange, currentCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos los Productos' },
    { id: 'aire-acondicionado', name: 'Aire Acondicionado' },
    { id: 'calefaccion', name: 'Calefacción' },
    { id: 'ventilacion', name: 'Ventilación' },
    { id: 'bombas-calor', name: 'Bombas de Calor' },
    { id: 'accesorios', name: 'Accesorios' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span>Envío gratuito en pedidos superiores a €500</span>
          <div className="flex items-center space-x-4">
            <span>📞 +593 99 999 9999</span>
            <span>📧 info@nordenlatam.ec</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="font-bold text-blue-600 text-xl">N</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">NORDEN</h1>
              <p className="text-sm text-gray-600">LATAM</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-gray-50 border-t ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-8 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left py-2 md:py-0 px-4 md:px-0 rounded-md transition-colors ${
                  currentCategory === category.id
                    ? 'text-blue-600 font-semibold bg-blue-50 md:bg-transparent'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;