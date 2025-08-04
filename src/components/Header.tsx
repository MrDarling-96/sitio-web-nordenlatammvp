@@ .. @@
     <header className="bg-white shadow-lg sticky top-0 z-50">
       {/* Top Bar */}
-      <div className="bg-blue-900 text-white py-2">
+      <div className="bg-gray-900 text-white py-2">
         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
@@ .. @@
           {/* Logo */}
           <div className="flex items-center space-x-2">
-            <div className="bg-blue-600 p-2 rounded-lg">
+            <div className="bg-gray-800 p-2 rounded-lg">
-              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
-                <span className="font-bold text-blue-600 text-xl">N</span>
+              <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded flex items-center justify-center">
+                <span className="font-bold text-gray-800 text-xl">N</span>
               </div>
             </div>
@@ .. @@
               <input
                 type="text"
                 placeholder="Buscar productos..."
-                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
+                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                 value={searchQuery}
@@ .. @@
             <input
               type="text"
               placeholder="Buscar productos..."
-              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
+              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
               value={searchQuery}
@@ .. @@
                 }}
                 className={`text-left py-2 md:py-0 px-4 md:px-0 rounded-md transition-colors ${
                   currentCategory === category.id
-                    ? 'text-blue-600 font-semibold bg-blue-50 md:bg-transparent'
-                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent'
+                    ? 'text-gray-900 font-semibold bg-gray-100 md:bg-transparent'
+                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                 }`}
               >