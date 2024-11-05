'use client'

import React from 'react';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from './NavBar';


const ACCESS_KEY = "6W2_c7RIZS3RYRigOwN3Fqlp9qV5O99-PvJpoSIJzVU";

interface UnsplashImage {
  id: string;
  urls: {
    full: string;
  };
  alt_description: string;
}


const LandingSection = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=galaxy&orientation=landscape&client_id=${ACCESS_KEY}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images from Unsplash", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds
      return () => clearInterval(interval);
    }
  }, [images]);



  return (
    <>
    <div>
        <NavBar />
    </div>
    <div className="relative h-screen w-full flex items-center justify-center">
      {images.length > 0 && (
        <Image
          src={images[currentImageIndex].urls.full}
          alt={images[currentImageIndex].alt_description || "Interior Design"}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-left p-4 hover:text-opacity-100 text-opacity-50 transition duration-300 ease-in-out ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl text-center">
        <blockquote className="mt-6 border-l-2 pl-6 italic ">
              A company dedicate to crafting your digital dreams
        </blockquote>
        </h1>
      </div>
    </div>
    </>
  );
};

export default LandingSection;