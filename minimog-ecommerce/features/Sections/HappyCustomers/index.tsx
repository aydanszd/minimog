"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HappyCustomers() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Jared S.",
            rating: 5,
            title: "Love it so much",
            review: "Was I in Hawaii?! No. Did I feel like I was in Hawaii?! No, because it's snowing outside. But, would I wear this in Hawaii. ❤️",
            image: "https://fashion.minimog.co/cdn/shop/files/img-test-timonial-03.webp?v=1709127619&width=165",
            productImage: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=80&h=80&fit=crop",
            productName: "Denim Jacket"
        },
        {
            id: 2,
            name: "Alyssa A.",
            rating: 5,
            title: "Love it so much",
            review: "Always getting compliments from family, friends, and strangers. 👍 🙌",
            image: "https://fashion.minimog.co/cdn/shop/files/img-test-timonial-01.webp?v=1709127619",
            productImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=80&h=80&fit=crop",
            productName: "Long Sleeve Shirt"
        },
        {
            id: 3,
            name: "Ben B.",
            rating: 5,
            title: "Love it so much",
            review: "Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool and is somewhat water resistant.",
            image: "https://fashion.minimog.co/cdn/shop/files/img-testimonial-02_a64ec697-0467-4648-84cc-9ebe5c6150bb.webp?v=1709127960",
            productImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=80&h=80&fit=crop",
            productName: "The Cocoa Shirt"
        },
        {
            id: 4,
            name: "Sarah M.",
            rating: 5,
            title: "Perfect fit",
            review: "The quality is outstanding and the fit is exactly what I was looking for. Highly recommend!",
            image: "https://fashion.minimog.co/cdn/shop/files/ins-main-4.jpg?v=1739162905&width=533",
            productImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=80&h=80&fit=crop",
            productName: "Classic Tee"
        },
        {
            id: 5,
            name: "Michael R.",
            rating: 5,
            title: "Exceeded expectations",
            review: "I've bought several items from this store and each one has been better than the last. Great quality!",
            image: "https://img.repeatcashmere.com/dw/image/v2/BJDJ_PRD/on/demandware.static/-/Sites-repeat-master-catalog/default/dwbc07d9a3/600710-8429-1-s25.jpg",
            productImage: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=80&h=80&fit=crop",
            productName: "Summer Polo"
        },
        {
            id: 6,
            name: "Emma L.",
            rating: 5,
            title: "Absolutely love it",
            review: "The attention to detail is amazing. This has become my go-to outfit for special occasions.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqFBMvI_5vA0A4Hgune1i75GIJDyykMrF26dRCDg6HGUo6Wq1",
            productImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=80&h=80&fit=crop",
            productName: "Evening Dress"
        }
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleTestimonials = testimonials.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                        key={i}
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill={i < rating ? 'currentColor' : 'none'}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };
    return (
        <div className="bg-gray-100 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-medium text-gray-900">
                        Happy Customers
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            {currentIndex + 1}/{totalPages}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-6 mb-6">
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900 mb-2">
                                        {testimonial.name}
                                    </h3>
                                    {renderStars(testimonial.rating)}
                                    <h4 className="font-medium text-gray-900 mt-3 mb-2">
                                        {testimonial.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {testimonial.review}
                                    </p>
                                </div>
                                <div className="shrink-0">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-32 object-cover rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <img
                                    src={testimonial.productImage}
                                    alt={testimonial.productName}
                                    className="w-12 h-12 object-cover rounded"
                                />
                                <span className="text-sm text-gray-700">
                                    {testimonial.productName}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}