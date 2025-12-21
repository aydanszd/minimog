"use client";
import React, { useState } from "react";
import { ArrowRight, ShoppingCart, MessageCircle, MapPin } from "lucide-react";

export default function HotThisWeekSection() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

    const categories = [
        {
            id: 1,
            number: "01",
            title: "Sweaters & Cardigans",
            description:
                "This snuggly soft Cloud Relaxed Cardigan serves a relaxed fit, with saddle shoulders—where the armhole seams curve towards the neckline so that the sleeve seamlessly hugs your shoulder",
        },
        {
            id: 2,
            number: "02",
            title: "The Bomber Jackets",
            description:
                "Classic bomber styles with modern updates. Perfect for transitional weather and effortless style.",
        },
        {
            id: 3,
            number: "03",
            title: "Corduroy Shirts",
            description:
                "Textured corduroy shirts perfect for layering. Vintage-inspired with contemporary fits.",
        },
    ];

    const pressLogos = [
        { name: "InStyle", image: "https://fashion.minimog.co/cdn/shop/files/logo-1.webp?v=1708485695&width=165" },
        { name: "Bustle", image: "https://fashion.minimog.co/cdn/shop/files/logo-2.webp?v=1708485695&width=165" },
        { name: "Refinery29", image: "https://fashion.minimog.co/cdn/shop/files/logo-3.webp?v=1708485694&width=165" },
        { name: "Libreria", image: "https://fashion.minimog.co/cdn/shop/files/logo-4.webp?v=1708485695&width=165" },
        { name: "Elle", image: "https://fashion.minimog.co/cdn/shop/files/logo-5.webp?v=1708485695&width=165" },
        { name: "Marie Claire", image: "https://fashion.minimog.co/cdn/shop/files/logo-6.webp?v=1708485695&width=165" },
    ];

    return (
        <div className="relative bg-white py-20 px-4">

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <p className="text-sm font-medium tracking-widest uppercase text-gray-600">
                                Hot This Week
                            </p>
                            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
                                Beautifully functional
                                <br />
                                consciously crafted
                            </h2>
                        </div>

                        <div>
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="border-b border-gray-200"
                                    onMouseEnter={() => setHoveredCategory(category.id)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    <div className="group flex items-center justify-between py-6 cursor-pointer">
                                        <div className="flex items-center gap-6">
                                            <span className="text-gray-400 text-sm">{category.number}</span>
                                            <span className="text-lg font-light">{category.title}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-out pl-14 pr-12
                                ${hoveredCategory === category.id
                                                ? "max-h-40 opacity-100 translate-y-0 pb-6"
                                                : "max-h-0 opacity-0 -translate-y-2 pb-0"
                                            }`}
                                    >
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://fashion.minimog.co/cdn/shop/files/collap-tab-min.jpg?v=1709267338&width=720"
                            alt="Fashion model"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <p className="text-center text-sm font-medium tracking-wider uppercase text-black mb-10">
                        Featured in Press
                    </p>

                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 justify-items-center">
                        {pressLogos.map((logo, index) => (
                            <div
                                key={index}
                                className=" grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all"
                            >
                                <img src={logo.image} alt={logo.name} className=" h-18 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
