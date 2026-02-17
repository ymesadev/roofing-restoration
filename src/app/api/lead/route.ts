import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const crmUrl = process.env.CRM_WEBHOOK_URL;
    const apiKey = process.env.CRM_API_KEY;
    if (crmUrl) {
      const name = body.name || [body.firstName, body.lastName].filter(Boolean).join(' ') || '';

      await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey && { 'X-API-Key': apiKey }),
        },
        body: JSON.stringify({
          name,
          phone: body.phone || '',
          email: body.email || '',
          service_type: body.service || '',
          zipcode: body.zip || '',
          source: 'website_form',
          message: body.message || '',
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}
