import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('reinwoods')
    const collection = db.collection('subscribers')

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email })
    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 200 }
      )
    }

    // Add new subscriber with timestamp
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
    })

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}