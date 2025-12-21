"use client"
import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, MapPin } from 'lucide-react';

export default function CoastalEditionSection() {
    const [currentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://fashion.minimog.co/cdn/shop/files/lookbook-1-min_42fd8f57-f056-4b9b-8d30-613a9bcab508.jpg?v=1709538652&width=1500"
        },
        {
            id: 2,
            image: "https://fashion.minimog.co/cdn/shop/files/lookbook-2-min_4706a63c-4510-4b71-bf8a-d00ee9f7a0e8.jpg?v=1709538693&width=1500"
        }
    ];

    return (
        <div className="relative bg-white py-20 px-4 -mt-15">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 space-y-6">
                    <h2 className="text-5xl lg:text-5xl font-medium">The Coastal Edition</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our new cozy collection is made with environmentally friendly materials and<br />
                        simple to care for so you can stay cozy wherever.
                    </p>
                    <button className="px-6 py-2 border border-black hover:bg-black rounded-md hover:text-white transition-colors font-medium">
                        Shop Now
                    </button>
                </div>
                <div className="relative max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-0">
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="relative aspect-3/4 bg-gray-100">
                                <img
                                    src={slide.image}
                                    alt={`Coastal Edition ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}