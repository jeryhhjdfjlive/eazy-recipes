
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-sm py-6 border-t mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-bold text-primary text-lg">Bake-O-Confetti</h3>
            <p className="text-gray-600 text-sm">Bringing joy through baking since 2024</p>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>and flour</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
