export interface Product {
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

export const products: Product[] = [
  // Aire Acondicionado
  {
    id: 'ac001',
    name: 'Sistema Split Inverter 12000 BTU',
    category: 'aire-acondicionado',
    price: 899.99,
    originalPrice: 1299.99,
    image: 'https://images.pexels.com/photos/4041388/pexels-photo-4041388.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 234,
    badge: 'OFERTA',
    description: 'Sistema de aire acondicionado split inverter de alta eficiencia energética con tecnología avanzada de climatización. Incluye control remoto inteligente, filtros HEPA y función de auto-limpieza. Ideal para espacios de hasta 35m².'
  },
  {
    id: 'ac002',
    name: 'Aire Acondicionado Central 24000 BTU',
    category: 'aire-acondicionado',
    price: 2199.99,
    image: 'https://images.pexels.com/photos/12935031/pexels-photo-12935031.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 156,
    description: 'Sistema central de climatización para espacios grandes con control inteligente y máxima eficiencia.'
  },
  {
    id: 'ac003',
    name: 'Mini Split Multi-Zona 18000 BTU',
    category: 'aire-acondicionado',
    price: 1599.99,
    image: 'https://images.pexels.com/photos/6169031/pexels-photo-6169031.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 89,
    description: 'Sistema multi-zona que permite climatizar múltiples habitaciones de forma independiente.'
  },
  {
    id: 'ac004',
    name: 'Cassette de Techo 36000 BTU',
    category: 'aire-acondicionado',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/7005411/pexels-photo-7005411.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 67,
    badge: 'NUEVO',
    description: 'Unidad tipo cassette empotrable en techo falso, ideal para oficinas y espacios comerciales.'
  },

  // Calefacción
  {
    id: 'heat001',
    name: 'Caldera de Gas Condensación 28 kW',
    category: 'calefaccion',
    price: 1799.99,
    image: 'https://images.pexels.com/photos/6207794/pexels-photo-6207794.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 198,
    description: 'Caldera de gas de condensación de alta eficiencia para calefacción y agua caliente sanitaria.'
  },
  {
    id: 'heat002',
    name: 'Radiador Toallero Eléctrico',
    category: 'calefaccion',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/6782357/pexels-photo-6782357.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 145,
    badge: 'DESCUENTO',
    description: 'Radiador toallero eléctrico con termostato digital y función anti-heladas.'
  },
  {
    id: 'heat003',
    name: 'Estufa de Pellets 12 kW',
    category: 'calefaccion',
    price: 2299.99,
    image: 'https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 112,
    description: 'Estufa de pellets con sistema de alimentación automática y control remoto.'
  },
  {
    id: 'heat004',
    name: 'Calefactor Cerámico Industrial',
    category: 'calefaccion',
    price: 549.99,
    image: 'https://images.pexels.com/photos/6207465/pexels-photo-6207465.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.2,
    reviews: 76,
    description: 'Calefactor cerámico de alta potencia para uso industrial y comercial.'
  },

  // Ventilación
  {
    id: 'vent001',
    name: 'Extractor Baño Silencioso 120mm',
    category: 'ventilacion',
    price: 89.99,
    image: 'https://images.pexels.com/photos/6207620/pexels-photo-6207620.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.1,
    reviews: 267,
    description: 'Extractor de baño ultra silencioso con sensor de humedad y temporizador.'
  },
  {
    id: 'vent002',
    name: 'Sistema VMC Doble Flujo',
    category: 'ventilacion',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/5417665/pexels-photo-5417665.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 89,
    badge: 'EFICIENTE',
    description: 'Sistema de ventilación mecánica controlada con recuperador de calor.'
  },
  {
    id: 'vent003',
    name: 'Ventilador Industrial de Techo',
    category: 'ventilacion',
    price: 799.99,
    image: 'https://images.pexels.com/photos/6207367/pexels-photo-6207367.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 134,
    description: 'Ventilador de techo industrial con aspas de aluminio y motor de alta eficiencia.'
  },

  // Bombas de Calor
  {
    id: 'hp001',
    name: 'Bomba de Calor Aerotérmica 16 kW',
    category: 'bombas-calor',
    price: 3299.99,
    image: 'https://images.pexels.com/photos/4041388/pexels-photo-4041388.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 78,
    badge: 'ECO',
    description: 'Bomba de calor aerotérmica inverter para calefacción, refrigeración y ACS.'
  },
  {
    id: 'hp002',
    name: 'Bomba de Calor Geotérmica',
    category: 'bombas-calor',
    price: 8999.99,
    image: 'https://images.pexels.com/photos/6207794/pexels-photo-6207794.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 34,
    description: 'Sistema geotérmico de máxima eficiencia para climatización integral.'
  },

  // Accesorios
  {
    id: 'acc001',
    name: 'Termostato Digital WiFi',
    category: 'accesorios',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/6782244/pexels-photo-6782244.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 445,
    badge: 'SMART',
    description: 'Termostato inteligente con conectividad WiFi y control por aplicación móvil.'
  },
  {
    id: 'acc002',
    name: 'Filtro HEPA para Conductos',
    category: 'accesorios',
    price: 79.99,
    image: 'https://images.pexels.com/photos/4041382/pexels-photo-4041382.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 234,
    description: 'Filtro HEPA de alta eficiencia para sistemas de conductos de aire.'
  },
  {
    id: 'acc003',
    name: 'Kit de Limpieza HVAC Profesional',
    category: 'accesorios',
    price: 149.99,
    image: 'https://images.pexels.com/photos/6207620/pexels-photo-6207620.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 167,
    description: 'Kit completo de herramientas para el mantenimiento profesional de sistemas HVAC.'
  },
  {
    id: 'acc004',
    name: 'Válvula Termostática Radiador',
    category: 'accesorios',
    price: 39.99,
    image: 'https://images.pexels.com/photos/6782357/pexels-photo-6782357.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.2,
    reviews: 289,
    description: 'Válvula termostática para control individual de temperatura en radiadores.'
  }
];