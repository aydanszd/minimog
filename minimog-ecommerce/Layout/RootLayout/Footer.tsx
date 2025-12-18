"use client";

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full0">
            <div className="bg-gray-100 border-t border-gray-200 mt-20">
                <div className="max-w-7xl mx-auto py-16 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                Let's get in touch
                            </h2>
                            <p className="text-sm text-gray-600 mb-6">
                                Sign up for our newsletter and receive 10% off your first order
                            </p>

                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                                <button className="w-full bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                                    Subscribe now
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Quick link</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-gray-900">My account</a></li>
                                <li><a href="#" className="hover:text-gray-900">Cart</a></li>
                                <li><a href="#" className="hover:text-gray-900">Wishlist</a></li>
                                <li><a href="#" className="hover:text-gray-900">Product Compare</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-900">Delivery Information</a></li>
                                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-900">Terms & Condition</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Our store</h3>

                            <div className="flex gap-3">
                                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                                    >
                                        <Icon className="w-5 h-5 text-gray-700" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600">© MINIMOG 2024</p>
                        <div className="flex items-center gap-2">
                            {[
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
                            ].map((src, i) => (
                                <div key={i} className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center p-1">
                                    <img
                                        src={src}
                                        alt="payment"
                                        className="h-full w-full object-contain opacity-70"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="hover:text-gray-900">Terms of Service</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="hover:text-gray-900">Appointments</a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;