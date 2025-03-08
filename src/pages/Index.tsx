
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import { Cake } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Bake-O-Confetti</h1>
          <div className="flex justify-center mb-4">
            <Cake className="h-12 w-12 text-primary animate-float" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to our colorful baking blog! Discover delicious recipes that bring joy to your kitchen,
            from simple treats to impressive showstoppers.
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
