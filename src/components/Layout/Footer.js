// src/components/Layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Restaurant Review Portal • All rights reserved
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Privacy Policy</span>
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Terms of Service</span>
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Contact</span>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
