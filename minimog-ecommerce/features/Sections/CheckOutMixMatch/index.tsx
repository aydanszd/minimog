"use client"
import { ShoppingCart, MessageCircle, MapPin } from 'lucide-react';

export default function MixMatchSection() {
    const products = [
        {
            id: 1,
            image: "https://fashion.minimog.co/cdn/shop/files/lookbook-2.webp?v=1708490777&width=1500",
            description: "Beautifully Functional. Purposefully Designed."
        },
        {
            id: 2,
            image: "https://fashion.minimog.co/cdn/shop/files/lookbook-3_bc7bcae7-cb23-4629-a100-5952dd11fec5.webp?v=1708490894&width=1500",
            description: "Beautifully Functional. Purposefully Designed."
        },
        {
            id: 3,
            image: "https://fashion.minimog.co/cdn/shop/files/lookbook-4.webp?v=1708490777&width=1500",
            description: "The t-shirt is designed with a crewneck collar."
        }
    ];

    const sliderItems = [
        { type: 'text', content: 'New Season Essential' },
        { type: 'image', src: 'https://fashion.minimog.co/cdn/shop/files/scrolling-image-3.webp?v=1708484972' },
        { type: 'text', content: 'Purposefully Designed' },
        { type: 'image', src: 'https://fashion.minimog.co/cdn/shop/files/scrolling-image-1.webp?v=1708484972' },
        { type: 'text', content: 'New Season Essential' },
        { type: 'image', src: 'https://fashion.minimog.co/cdn/shop/files/scrolling-image-3.webp?v=1708484972' },
    ];

    return (
        <div className="relative min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-4xl font-light text-center mb-10 mt-12.5">
                    Check out mix & match
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative bg-gray-100 overflow-hidden mb-4">
                                <img
                                    src={product.image}
                                    alt={product.description}
                                    className="w-full h-auto aspect-3/4 object-cover"
                                />
                                <button className="absolute bottom-4 right-4 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg opacity-0 group-hover:opacity-100 duration-300">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-[16px] text-black text-center px-4">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 overflow-hidden py-8 border border-gray-300">
                <div className="flex animate-scroll">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex items-center gap-12 px-6 shrink-0">
                            {sliderItems.map((item, idx) => (
                                item.type === 'text' ? (
                                    <span key={`${index}-${idx}`} className="text-4xl font-light whitespace-nowrap">
                                        {item.content}
                                    </span>
                                ) : (
                                    <img
                                        key={`${index}-${idx}`}
                                        src={item.src}
                                        alt="Product"
                                        className="w-24 h-24 object-cover rounded shrink-0"
                                    />
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button className="fixed bottom-8 right-8 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg z-50">
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>

            <style jsx>{`
        @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-25%);
        }
        }
        
        .animate-scroll {
        animation: scroll 40s linear infinite;
        display: flex;
        }
        
        .animate-scroll:hover {
        animation-play-state: paused;
        }
        `}</style>
        </div>
    );
}