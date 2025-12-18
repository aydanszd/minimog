"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        title: 'Knit Wears',
        itemCount: 19,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-shirt-long.webp?v=1709121151&width=720'
    },
    {
        id: 2,
        title: 'Summer Bags',
        itemCount: 32,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-list-9.webp?v=1708672955&width=720'
    },
    {
        id: 3,
        title: 'Sneakers',
        itemCount: 6,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-list-10.webp?v=1708672954&width=720'
    },
    {
        id: 4,
        title: 'Accessories',
        itemCount: 8,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-list-11.webp?v=1708672955&width=720'
    },
    {
        id: 5,
        title: 'Dresses',
        itemCount: 24,
        image: 'https://fashion.minimog.co/cdn/shop/files/Bitmap.webp?v=1709121151&width=533'
    },
    {
        id: 6,
        title: 'Shirts',
        itemCount: 15,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-shirt-long.webp?v=1709121151&width=720'
    },
    {
        id: 7,
        title: 'Bags & Purses',
        itemCount: 28,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-list-9.webp?v=1708672955&width=720'
    },
    {
        id: 8,
        title: 'Footwear',
        itemCount: 12,
        image: 'https://fashion.minimog.co/cdn/shop/files/collection-list-10.webp?v=1708672954&width=720'
    }
];

export default function ShopCategories() {
    type Product = {
        id: string
        name: string
        image?: string
        createdAt?: string
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let mounted = true
        async function load() {
            setLoading(true)
            try {
                const res = await fetch('/api/items')
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()
                console.log('ShopByCategories products:', data)
                if (mounted) setProducts(data)
            } catch (err: any) {
                console.error('ShopByCategories fetch error:', err)
                if (mounted) setError(err?.message ?? String(err))
            } finally {
                if (mounted) setLoading(false)
            }
        }
        load()
        return () => { mounted = false }
    }, [])
    const itemsPerPage = 4;
    const dataSource = products && products.length > 0 ? products.map((p, idx) => ({ id: p.id, title: p.name, itemCount: 0, image: p.image })) : categories
    const totalPages = Math.ceil(dataSource.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCategories = dataSource.slice(startIndex, endIndex);

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl sm:text-4xl font-normal text-gray-800">
                        Shop by Categories
                    </h2>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                            className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        <span className="text-sm text-gray-600 min-w-10 text-center">
                            {currentPage}/{totalPages}
                        </span>

                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Next page"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative bg-gray-50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="aspect-3/4 overflow-hidden bg-gray-100">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                                <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-0.5">
                                                {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                                {category.itemCount ?? 0} Artikel
                                        </p>
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-gray-900 transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}