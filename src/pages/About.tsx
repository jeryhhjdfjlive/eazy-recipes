
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Utensils, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen confetti-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span role="img" aria-label="chef" className="text-5xl">👨‍🍳</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">About eazyrecipes</h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Making cooking simple and accessible for everyone.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                  eazyrecipes was born from a simple desire to make cooking approachable for everyone. 
                  What started as sharing simple recipes with friends quickly turned into a passion for creating 
                  easy-to-follow instructions that anyone can use. We believe that cooking should be fun, 
                  straightforward, and most importantly, delicious!
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Every recipe on our blog has been tested multiple times to ensure success in your kitchen. 
                  We provide detailed instructions, helpful tips, and the occasional story to make your 
                  cooking experience as enjoyable as possible.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="flex justify-center mb-3">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Made with Love</h3>
                  <p className="text-gray-600 text-sm">
                    Every recipe is created with care and passion for the art of baking.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="flex justify-center mb-3">
                    <Utensils className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Tested Recipes</h3>
                  <p className="text-gray-600 text-sm">
                    All recipes are thoroughly tested to ensure they work perfectly in your kitchen.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="flex justify-center mb-3">
                    <Clock className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">For All Skill Levels</h3>
                  <p className="text-gray-600 text-sm">
                    From beginner-friendly cookies to challenging pastries, there's something for everyone.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Cooking Community</h2>
                <p className="text-gray-700 leading-relaxed">
                  We love seeing what you create with our recipes! 🍽️✨ Feel free to connect with us on social media and share your cooking triumphs (and even the occasional mishap - we've all been there! 😅). Or send us an email at julianlouis590@gmail.com 📧 to review your recipe and publish it on our site. 🌟
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Thank you for stopping by eazyrecipes. Happy cooking!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
