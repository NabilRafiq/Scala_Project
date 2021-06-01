import React, { Component } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const MediaGallery = () => {
    const images = [900, 800, 700, 600, 500].map((size) => ({
      src: `https://pixabay.com/images/search/cinema/`
    }));
  
    return (
      <Carousel images={images} />
    );
  };
export default MediaGallery;