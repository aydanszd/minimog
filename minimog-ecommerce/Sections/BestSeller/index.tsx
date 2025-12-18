"use client"
import { useState, useEffect } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

// Products are loaded from the API (Prisma). No static product data.

const categories = [
    { value: 'best sellers', label: 'best sellers' },
    { value: 'new arrivals', label: 'new arrivals' },
    { value: 'trending', label: 'trending' },
    { value: 'sale', label: 'sale' }
];

export default function BestSellers() {
    const [selectedCategory, setSelectedCategory] = useState('best sellers');
    const [isOpen, setIsOpen] = useState(false);
    const [fetchedProducts, setFetchedProducts] = useState<any[] | null>(null)
    const [loading, setLoading] = useState(false)

    const staticPrices = [23.0, 9.99, 12.0, 14.0, 15.0, 14.5, 19.99, 11.0, 13.5, 17.0]

    useEffect(() => {
        let mounted = true
        async function load() {
            setLoading(true)
            try {
                const res = await fetch('/api/items')
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()
                console.log('BestSellers fetched products:', data)
                const slice = Array.isArray(data) ? data.slice(8, 18) : []
                const staticColors = [
                    ['#000000', '#F5DEB3'], 
                    ['#000000', '#FFFFFF', '#F5DEB3'], 
                    ['#000000'], 
                    ['#000000', '#D3D3D3'], 
                    ['#F5DEB3'], 
                    ['#000000'], 
                    ['#F5DEB3'], 
                    ['#8B4513'], 
                    ['#87CEEB'], 
                    ['#1E3A5F', '#FFFFFF'], 
                ]
                const mapped = slice.map((p: any, i: number) => ({
                    id: p.id,
                    name: p.name ?? p.title ?? 'Unnamed',
                    price: (typeof p.price === 'number' ? p.price : staticPrices[i] ?? 0),
                    image: p.image ?? '',
                    colors: staticColors[i] ?? [],
                    isNew: false,
                }))
                if (mounted) setFetchedProducts(mapped)
            } catch (err) {
                console.error('BestSellers fetch error:', err)
            } finally {
                if (mounted) setLoading(false)
            }
        }
        load()
        return () => { mounted = false }
    }, [])

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <span className="text-gray-500 text-base">You are in</span>

                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 text-base font-normal border-b-2 border-gray-900 pb-1 pr-2 bg-transparent focus:outline-none cursor-pointer hover:border-gray-600 transition-colors"
                        >
                            {selectedCategory}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                {categories.map((category) => (
                                    <button
                                        key={category.value}
                                        onClick={() => {
                                            setSelectedCategory(category.value);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${selectedCategory === category.value ? 'bg-gray-50 font-medium' : ''
                                            }`}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {loading ? (
                        <div className="col-span-full text-center py-8">Loading best sellers…</div>
                    ) : fetchedProducts && fetchedProducts.length > 0 ? (
                        fetchedProducts.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="relative aspect-3/4 bg-gray-50 rounded-lg overflow-hidden mb-3">
                                    {product.isNew && (
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="bg-teal-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">New</span>
                                        </div>
                                    )}

                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                                        <Heart className="w-4 h-4 text-gray-700" />
                                    </button>

                                    <div className="absolute bottom-0 left-0 right-0 bg-white py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="w-full text-sm font-medium text-gray-900 hover:text-gray-600">Quick view</button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 hover:text-gray-600 cursor-pointer">{product.name}</h3>

                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-sm font-medium text-gray-900">${(product.price ?? 0).toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        {(product.colors ?? []).map((color: string, index: number) => (
                                            <button key={index} className="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-colors" style={{ backgroundColor: color }} aria-label={`Color option ${index + 1}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8 text-sm text-gray-500">No best sellers found.</div>
                    )}
                </div>
            </div>
        </section>
    );
}