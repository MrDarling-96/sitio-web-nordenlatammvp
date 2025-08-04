import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  currentCategory: string;
  onViewDetails: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, currentCategory, onViewDetails }) => {
  const filteredProducts = currentCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === currentCategory);

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      'todos': 'Todos los Productos',
      'aire-acondicionado': 'Aire Acondicionado',
      'calefaccion': 'Calefacción',
      'ventilacion': 'Ventilación',
      'bombas-calor': 'Bombas de Calor',
      'accesorios': 'Accesorios'
    };
    return titles[category] || 'Productos';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          {getCategoryTitle(currentCategory)}
        </h2>
        <p className="text-gray-600 text-lg">
          Mostrando {filteredProducts.length} productos
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            No se encontraron productos
          </h3>
          <p className="text-gray-600 text-lg">
            Intenta cambiar los filtros o buscar otros términos.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;