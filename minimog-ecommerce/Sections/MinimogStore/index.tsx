"use client"
import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, MapPin, Pause, Play } from 'lucide-react';

export default function LivingOutSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    function handleMouseMove(e: { currentTarget: any; clientX: number; }) {
        if (!isDragging) return;

        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    }

    const handleTouchMove = (e: { currentTarget: any; touches: { clientX: number; }[]; }) => {
        if (!isDragging) return;

        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const categories = [
        { id: 1, name: "Top", count: "11", image: "https://fashion.minimog.co/cdn/shop/files/collection-list-1.webp?v=1708672623&width=165" },
        { id: 2, name: "Shirts", count: "11", image: "https://fashion.minimog.co/cdn/shop/files/collection-list-2.webp?v=1708672623&width=165" },
        { id: 3, name: "Sunglasses", count: "4", image: "https://fashion.minimog.co/cdn/shop/files/collection-list-3.webp?v=1708672623&width=165" },
        { id: 4, name: "Shorts", count: "8", image: "https://fashion.minimog.co/cdn/shop/files/collection-list-4.webp?v=1708672623&width=165" },
        { id: 5, name: "Leather Bags", count: "5", image: "https://fashion.minimog.co/cdn/shop/files/collection-list-5.webp?v=1708672624&width=165" },
        { id: 6, name: "Sandals", count: "4", image: "https://fashion.minimog.co/cdn/shop/files/collection-list-6.webp?v=1708672623&width=165" }
    ];

    return (
        <div className="relative bg-white py-20 px-4 -mt-25">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-6">
                    <p className="text-sm font-medium tracking-wider uppercase text-gray-600">
                        Minimog Store
                    </p>
                    <h2 className="text-4xl lg:text-4xl font-medium leading-tight max-w-3xl mx-auto">
                        Living out every single day and<br />
                        be brave to show off your own true colors
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                        Our new cozy collection is made with environmentally friendly materials and<br />
                        simple to care for so you can stay cozy wherever.
                    </p>
                    <button className="text-sm font-medium border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                        Shop Collection
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {categories.map((category) => (
                        <div key={category.id} className="group text-center cursor-pointer">
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-gray-100 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <p className="text-sm font-medium">
                                {category.name} <sup className="text-xs text-gray-500">{category.count}</sup>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative">
                        <div
                            className="relative aspect-3/3 overflow-hidden cursor-ew-resize select-none"
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleMouseDown}
                            onTouchEnd={handleMouseUp}
                        >
                            <div className="absolute inset-0 bg-gray-100 ">
                                <img
                                    src="https://images.only.com/15287536/4162528/003/only-onlellyl-sbuttonblazertlr-black.jpg?v=c1611e48ea545ca9da93b62cb7695158&format=webp&width=1280&quality=90&key=25-0-3&bg-color=%23f5f5f5"
                                    alt="Before style"
                                    className="w-full h-full object-cover"
                                    draggable="false"
                                />
                                <div className="absolute top-4 left-4 bg-white px-4 py-2 text-sm font-medium rounded">
                                    Before
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 bg-gray-100"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <img
                                    src="https://i.blogs.es/e00cbe/blazer-entretiempo-primavera-2023-01/650_1200.jpeg"
                                    alt="After style"
                                    className="w-full h-full object-cover"
                                    draggable="false"
                                />
                                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm font-medium rounded">
                                    After
                                </div>
                            </div>
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                                    <div className="flex gap-1">
                                        <div className="w-0.5 h-4 bg-gray-400"></div>
                                        <div className="w-0.5 h-4 bg-gray-400"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 text-center">
                        <p className="text-[16px] font-semibold tracking-widest text-gray-700">
                            Mix & Match
                        </p>
                        <h3 className="text-5xl lg:text-6xl font-normal leading-tight text-gray-900 mt-[-20px]">
                            Layer up with<br />
                            pieces designed
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Here is your chance to upgrade your wardrobe<br />
                            with a variation of styles and fits that are both.
                        </p>
                        <div>
                            <button className="px-8 py-3 rounded-xl border border-black hover:bg-black hover:text-white transition-all duration-300 font-medium text-sm tracking-wide mt-2">
                                Shop Mix & Match
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}