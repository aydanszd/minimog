export const runtime = 'nodejs'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
	try {
		const items = await prisma.product.findMany({
			select: {
				id: true,
				name: true,
				image: true,
				createdAt: true,
			},
		})

		return NextResponse.json(items, { status: 200 })
	} catch (error) {
		console.error('API ERROR:', error)
		const message = error instanceof Error ? error.message : String(error)
		return NextResponse.json({ error: `Failed to fetch items: ${message}` }, { status: 500 })
	}
}
