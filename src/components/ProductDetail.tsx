@@ .. @@
               {product.badge && (
-                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
+                <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-black text-white px-3 py-1 rounded-full text-sm font-medium">
                   {product.badge}
@@ .. @@
             <div className="space-y-6">
               <div>
-                <span className="text-sm text-blue-500 font-medium uppercase tracking-wider">
+                <span className="text-sm text-gray-600 font-medium uppercase tracking-wider">
                   {getCategoryName(product.category)}
@@ .. @@
               <div className="pt-4">
                 <button
                   onClick={handleDownloadPDF}
-                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold shadow-lg hover:shadow-xl"
+                  className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 px-6 rounded-xl hover:from-gray-900 hover:to-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold shadow-lg hover:shadow-xl"
                 >
                   <Download className="w-5 h-5" />
                   <span>Descargar Especificaciones PDF</span>