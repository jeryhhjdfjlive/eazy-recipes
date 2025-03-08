
import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-sm py-6 border-t mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-bold text-primary text-lg">eazyrecipes</h3>
            <p className="text-gray-600 text-sm">Simple cooking for everyone since 2024</p>
          </div>
          
          <div className="flex gap-3 mb-4 md:mb-0 md:order-3">
            <Button variant="ghost" size="icon" aria-label="Instagram" className="rounded-full hover:bg-baking-pink">
              <Instagram className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter" className="rounded-full hover:bg-baking-blue">
              <Twitter className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Facebook" className="rounded-full hover:bg-baking-yellow">
              <Facebook className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn" className="rounded-full hover:bg-baking-purple">
              <Linkedin className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="YouTube" className="rounded-full hover:bg-baking-orange">
              <Youtube className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600 md:order-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>and good ingredients</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
