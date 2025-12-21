"use client"
import { ShoppingCart, MapPin, MessageCircle } from 'lucide-react';

export default function ReLeatherSection() {
    return (
        <div className="relative min-h-screen bg-white mt-20">
            <div className="grid lg:grid-cols-2 w-full">
                <div className="relative h-screen bg-gray-100">
                    <img
                        src="https://fashion.minimog.co/cdn/shop/files/image-card1_26dbdee9-e640-45db-835b-00d8c15522cc.webp?v=1709206752&width=1066"
                        alt="Person wearing ReLeather Beige Tennis Shoes"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-screen bg-white">
                    <img
                        src="https://fashion.minimog.co/cdn/shop/files/image-card2_f97f109b-bb54-42ae-80b9-c79513af1b1e.webp?v=1709206816&width=2000"
                        alt="ReLeather Beige Tennis Shoe"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
                        <div className="space-y-6 max-w-7xl">
                            <p className="-translate-y-62.5 text-sm font-medium tracking-widest uppercase text-black">
                                New collection
                            </p>
                            <h2 className="text-5xl -translate-y-62.5 lg:text-6xl font-light tracking-tight leading-tight text-gray-900">
                                The ReLeather Beige<br />Tennis Shoe
                            </h2>
                            <div className="pt-8">
                                <button className="translate-y-70 mr-150 cursor-pointer text-sm font-medium tracking-widest uppercase hover:text-gray-600 transition-colors border-b-2 border-black pb-1 hover:border-gray-600">
                                    Shop New Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}