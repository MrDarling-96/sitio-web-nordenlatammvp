import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import { products, Product } from './data/products';

function App() {
  const [currentCategory, setCurrentCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header 
        onCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Soluciones HVAC Profesionales
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            Explora nuestra colección de equipos de climatización, calefacción y ventilación 
            con tecnología de vanguardia y máxima eficiencia energética
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => handleCategoryChange('aire-acondicionado')}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Aire Acondicionado
            </button>
            <button 
              onClick={() => handleCategoryChange('calefaccion')}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm"
            >
              Ver Calefacción
            </button>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white/80 backdrop-blur-sm py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Envío Gratuito</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Documentación</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Soporte 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800 text-lg">Garantía 5 Años</span>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid 
        products={products} 
        currentCategory={currentCategory}
        onViewDetails={handleViewDetails}
      />
      
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;