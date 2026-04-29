import { NextRequest, NextResponse } from 'next/server'

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL!

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json()

        await fetch(slackWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: `*New Portfolio Contact!*\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
            }),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact error:', error)
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
    }
}