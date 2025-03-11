
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';

const Index = () => {
  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-12 rounded-xl overflow-hidden shadow-xl">
          {/* Image background */}
          <div className="w-full h-96 md:h-[500px] relative">
            <img 
              className="absolute inset-0 w-full h-full object-cover"
              src="https://png.pngtree.com/thumb_back/fh260/background/20241213/pngtree-colorful-donuts-with-sprinkles-on-a-pastel-background-appealing-for-dessert-image_16783699.jpg" 
              alt="Colorful donuts with sprinkles on pastel background"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">eazyrecipes</h1>
              <div className="flex justify-center mb-4">
                <span role="img" aria-label="chef" className="text-5xl animate-float text-shadow-sm">👨‍🍳</span>
              </div>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 text-center text-shadow-sm">
                Welcome to our simple cooking blog! Discover delicious recipes that are easy to make.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
