
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { recipes } from '@/data/recipes';
import { Clock, Utensils, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === Number(id));
  
  useEffect(() => {
    if (!recipe) {
      navigate('/');
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [recipe, navigate]);
  
  if (!recipe) return null;
  
  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-1"
          onClick={() => navigate('/')}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to recipes
        </Button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="h-72 sm:h-96 overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{recipe.title}</h1>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Utensils className="h-5 w-5" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{recipe.content}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions?.map((instruction, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="font-bold text-primary mr-2">{index + 1}.</span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
