import React from 'react';
import { X, Download, Star, ArrowLeft } from 'lucide-react';

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

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const handleDownloadPDF = () => {
    // Simular descarga de PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${product.name.replace(/\s+/g, '_')}_especificaciones.pdf`;
    
    // Crear un blob simulado para la descarga
    const pdfContent = `Especificaciones técnicas de ${product.name}`;
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    link.href = url;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getCategoryName = (category: string) => {
    const categories: { [key: string]: string } = {
      'aire-acondicionado': 'Aire Acondicionado',
      'calefaccion': 'Calefacción',
      'ventilacion': 'Ventilación',
      'bombas-calor': 'Bombas de Calor',
      'accesorios': 'Accesorios'
    };
    return categories[category] || category;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-2xl">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-blue-500 font-medium uppercase tracking-wider">
                  {getCategoryName(product.category)}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Especificaciones</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Modelo:</span>
                    <span className="font-medium">{product.id.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Categoría:</span>
                    <span className="font-medium">{getCategoryName(product.category)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valoración:</span>
                    <span className="font-medium">{product.rating}/5 estrellas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reseñas:</span>
                    <span className="font-medium">{product.reviews} opiniones</span>
                  </div>
                </div>
              </div>

              {/* Download PDF Button */}
              <div className="pt-4">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Especificaciones PDF</span>
                </button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Incluye especificaciones técnicas completas y manual de instalación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;