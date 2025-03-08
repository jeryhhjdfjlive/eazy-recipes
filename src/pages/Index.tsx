
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">eazyrecipes</h1>
          <div className="flex justify-center mb-4">
            <span role="img" aria-label="chef" className="text-5xl animate-float">👨‍🍳</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our simple cooking blog! Discover delicious recipes that are easy to make,
            from quick meals to impressive dishes anyone can cook.
          </p>
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
