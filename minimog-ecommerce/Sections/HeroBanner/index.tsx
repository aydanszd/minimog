"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, Info, ShoppingBag } from 'lucide-react';

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Responsible Denim Lab",
            subtitle: "New Arrivals",
            buttonText: "Shop Now",
            buttonLink: "#",
            image: "https://www.myroohfashions.com/cdn/shop/files/slideshow-2.jpg?v=1747132121&width=3840",
            footerText: "The ReCotton Tee",
            footerLink: "#"
        },
        {
            title: "Ultimate Winter Warmer",
            subtitle: "New Collection",
            buttonText: "Shop Now",
            buttonLink: "#",
            image: "https://www.myroohfashions.com/cdn/shop/files/slideshow-1.jpg?v=1747132121&width=3840",
            footerText: "Winter Collection",
            footerLink: "#"
        },
        {
            title: "Spring Fashion",
            subtitle: "Latest Trends",
            buttonText: "Discover More",
            buttonLink: "#",
            image: "https://www.myroohfashions.com/cdn/shop/files/slideshow-3.jpg?v=1747132121&width=3840",
            footerText: "Spring Collection",
            footerLink: "#"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full h-screen min-h-125 max-h-225 bg-gray-100 overflow-hidden">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-white/30 to-transparent"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative h-full">
                            <div className="h-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                                <div className="flex items-center h-full">
                                    <div className="w-full md:w-auto max-w-xl">
                                        <p className="text-base md:text-lg lg:text-xl font-medium text-black mb-3 tracking-wider">
                                            {slide.subtitle}
                                        </p>
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black mb-6 lg:mb-8 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <button 
                                            suppressHydrationWarning 
                                            className="px-8 py-3 rounded-lg border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                                        >
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Link - Hidden on Mobile */}
                            <div className="absolute bottom-8 right-8 hidden lg:block">
                                <a 
                                    href={slide.footerLink} 
                                    className="flex items-center text-gray-900 hover:text-gray-600 transition-colors"
                                >
                                    <span className="mr-2 font-medium">{slide.footerText}</span>
                                    <span className="font-semibold">| Shop Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} className="text-gray-900" />
            </button>
            
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-6 lg:right-8 xl:right-24 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                aria-label="Next slide"
            >
                <ChevronRight size={24} className="text-gray-900" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 z-20 flex lg:flex-col gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-gray-900 w-8 h-2 lg:w-2 lg:h-8'
                                : 'bg-gray-400 hover:bg-gray-600 w-2 h-2'
                        }`}
                        suppressHydrationWarning
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Side Action Buttons - Desktop Only */}
            <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 flex-col">
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-4 transition-colors"
                    aria-label="Add to cart"
                >
                    <Plus size={20} />
                </button>
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-4 transition-colors border-t border-orange-600"
                    aria-label="Product information"
                >
                    <Info size={20} />
                </button>
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-4 transition-colors border-t border-orange-600"
                    aria-label="Shopping bag"
                >
                    <ShoppingBag size={20} />
                </button>
            </div>

            {/* Mobile Action Buttons */}
            <div className="xl:hidden absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Add to cart"
                >
                    <Plus size={20} />
                </button>
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Product information"
                >
                    <Info size={20} />
                </button>
                <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Shopping bag"
                >
                    <ShoppingBag size={20} />
                </button>
            </div>
        </section>
    );
}