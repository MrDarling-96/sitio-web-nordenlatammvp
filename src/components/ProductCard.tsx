@@ .. @@
         {/* Badge */}
         {product.badge && (
-          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
+          <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-xs font-medium">
             {product.badge}
@@ .. @@
       <div className="p-6">
         <div className="mb-2">
-          <span className="text-xs text-blue-500 font-medium uppercase tracking-wider">
+          <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">
             {product.category}
@@ .. @@
         
-        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
+        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
           {product.name}
@@ .. @@
         {/* View Details Link */}
         <div className="flex items-center justify-between">
           <span className="text-sm text-gray-500">Ver detalles</span>
-          <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
+          <ArrowRight className="w-4 h-4 text-gray-700 group-hover:translate-x-1 transition-transform" />
         </div>