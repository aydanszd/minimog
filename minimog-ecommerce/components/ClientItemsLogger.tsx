"use client"

import { useEffect, useState } from "react"

type Product = {
    id: string
    name: string
    image?: string
    createdAt?: string
}

export default function ClientItemsLogger() {
    const [items, setItems] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let mounted = true

        async function fetchItems() {
            try {
                const res = await fetch('/api/items')
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()
                console.log('Client items:', data)
                if (mounted) setItems(data)
            } catch (err: any) {
                console.error('Client fetch error:', err)
                if (mounted) setError(err?.message ?? String(err))
            } finally {
                if (mounted) setLoading(false)
            }
        }

        fetchItems()

        return () => {
            mounted = false
        }
    }, [])

    if (loading) return <div className="mt-4 text-sm text-zinc-600">Loading items…</div>
    if (error) return <div className="mt-4 text-sm text-red-600">Error: {error}</div>
    if (!items || items.length === 0) return <div className="mt-4 text-sm text-zinc-600">No items found.</div>

    return (
        <div className="w-full max-w-3xl mx-auto py-4">
            <h2 className="text-lg font-medium mb-2">Products</h2>
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {items.map((it) => (
                    <li key={it.id} className="flex flex-col items-start gap-2 p-3 border rounded">
                        {it.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={it.image} alt={it.name} className="w-full h-32 object-cover rounded" />
                        ) : (
                            <div className="w-full h-32 bg-zinc-100 rounded" />
                        )}
                        <div className="text-sm font-semibold">{it.name}</div>
                        <div className="text-xs text-zinc-500">{it.createdAt ? new Date(it.createdAt).toLocaleString() : null}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
