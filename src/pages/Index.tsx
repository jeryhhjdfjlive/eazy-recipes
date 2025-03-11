
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
          {/* Video background */}
          <div className="w-full h-80 relative">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="https://cdn.pixabay.com/vimeo/149040583/baking-2098.mp4?width=1280&hash=4e9f27ca9ab97c410d485e9c96a9e85df0de96be" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
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
