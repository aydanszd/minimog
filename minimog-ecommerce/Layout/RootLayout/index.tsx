"use client"
import React from "react"
import Header from "@/Layout/RootLayout/Header"
import Footer from "@/Layout/RootLayout/Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}