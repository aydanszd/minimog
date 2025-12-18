"use client"

import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<Array<{ label: string; items: string[] }>>([])

    React.useEffect(() => {
        setMenuItems([
            { label: 'Home', items: ['Home v1', 'Home v2', 'Home v3', 'Home v4'] },
            { label: 'Shops', items: ['Shop Grid', 'Shop List', 'Shop Sidebar', 'Single Product'] },
            { label: 'Products', items: ['Product Simple', 'Product Variable', 'Product Bundle', 'Product External'] },
            { label: 'Pages', items: ['About Us', 'Contact', 'FAQ', 'Blog'] },
            { label: 'FoxKit', items: ['Sales Popup', 'Size Chart', 'Bundle Products', 'Pre-Order'] },
        ])
    }, [])

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 -ml-2 rounded-md text-black hover:bg-gray-100 transition-colors"
                        suppressHydrationWarning
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {menuItems.map((item, index) => (
                            <div key={index} className="group relative">
                                <button 
                                    className="flex items-center space-x-1 text-black hover:text-gray-900 text-[15px] font-medium transition-colors outline-none py-2" 
                                    suppressHydrationWarning
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="py-1">
                                        {item.items.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logo - Centered */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="/" className="flex items-center">
                            <img
                                src="https://fashion.minimog.co/cdn/shop/files/logo_a3f90005-86fb-4996-8c21-b46c5011524e.png?v=1709089146&width=500"
                                alt="Minimog"
                                className="h-8 sm:h-9 lg:h-10 w-auto"
                            />
                        </a>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                        <button 
                            className="p-2 text-black hover:text-gray-800 transition-colors rounded-md hover:bg-gray-100" 
                            suppressHydrationWarning
                            aria-label="Search"
                        >
                            <Search size={20} className="sm:w-5 sm:h-5" />
                        </button>
                        <button 
                            className="hidden sm:block p-2 text-black hover:text-gray-800 transition-colors rounded-md hover:bg-gray-100" 
                            suppressHydrationWarning
                            aria-label="Account"
                        >
                            <User size={20} className="sm:w-5 sm:h-5" />
                        </button>
                        <button 
                            className="hidden sm:block p-2 text-black hover:text-gray-800 transition-colors relative rounded-md hover:bg-gray-100" 
                            suppressHydrationWarning
                            aria-label="Wishlist"
                        >
                            <Heart size={20} className="sm:w-5 sm:h-5" />
                        </button>
                        <button 
                            className="p-2 text-black hover:text-gray-800 transition-colors relative rounded-md hover:bg-gray-100" 
                            suppressHydrationWarning
                            aria-label="Cart"
                        >
                            <ShoppingCart size={20} className="sm:w-5 sm:h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 text-sm font-medium">
                                        <span>{item.label}</span>
                                        <ChevronDown size={16} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-full">
                                        {item.items.map((subItem, subIndex) => (
                                            <DropdownMenuItem key={subIndex}>
                                                <a href="#" className="w-full py-1">{subItem}</a>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ))}
                        
                        {/* Mobile-only Icons */}
                        <div className="flex items-center justify-around pt-4 mt-4 border-t border-gray-200 sm:hidden">
                            <button className="flex flex-col items-center space-y-1 text-gray-700 hover:text-gray-900">
                                <User size={20} />
                                <span className="text-xs">Account</span>
                            </button>
                            <button className="flex flex-col items-center space-y-1 text-gray-700 hover:text-gray-900">
                                <Heart size={20} />
                                <span className="text-xs">Wishlist</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}