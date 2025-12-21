"use client"
import React from 'react';
import { Truck, RefreshCw, Headphones, CreditCard } from 'lucide-react';

export default function InstagramFeaturesSection() {
    const instagramPhotos = [
        {
            id: 1,
            image: "https://fashion.minimog.co/cdn/shop/files/ins-main-1.jpg?v=1739162905&width=533",
            alt: "Black leather boots"
        },
        {
            id: 2,
            image: "https://fashion.minimog.co/cdn/shop/files/ins-main-4.jpg?v=1739162905&width=533",
            alt: "Fashion model"
        },
        {
            id: 3,
            image: "https://fashion.minimog.co/cdn/shop/files/ins-main-7.jpg?v=1739163056&width=533",
            alt: "Black leather bag"
        },
        {
            id: 4,
            image: "https://fashion.minimog.co/cdn/shop/files/ins-main-6.jpg?v=1739162905&width=533",
            alt: "Denim jeans"
        },
        {
            id: 5,
            image: "https://fashion.minimog.co/cdn/shop/files/ins-main-3.jpg?v=1739162905&width=533",
            alt: "Black leather shoes"
        }
    ];

    const features = [
        {
            id: 1,
            icon: <Truck className="w-8 h-8" />,
            title: "Free Shipping",
            description: "Free Shipping for orders over £130"
        },
        {
            id: 2,
            icon: <RefreshCw className="w-8 h-8" />,
            title: "Money Guarantee",
            description: "Within 30 days for an exchange."
        },
        {
            id: 3,
            icon: <Headphones className="w-8 h-8" />,
            title: "Online Support",
            description: "24 hours a day, 7 days a week"
        },
        {
            id: 4,
            icon: <CreditCard className="w-8 h-8" />,
            title: "Flexible Payment",
            description: "Pay with Multiple Credit Cards"
        }
    ];

    return (
        <div className="bg-white">
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-normal text-gray-900 mb-4">
                        Follow us Instagram
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Tag @minimog in your Instagram photos for a chance to be featured here.
                    </p>
                    <p className="text-gray-600 text-sm">
                        Find more inspiration on{' '}
                        <a href="#" className="underline hover:text-gray-900">
                            our Instagram.
                        </a>
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                    {instagramPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={photo.image}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-6 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex items-start gap-4 "
                            >
                                <div className="shrink-0 text-gray-900 border border-gray-200 py-4 px-4 rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}