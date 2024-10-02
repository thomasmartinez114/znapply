// app/api/soap/route.js

import { NextResponse } from 'next/server';
import { generateSOAP } from '@/openai/controllers/openaiControllers';

export async function POST(request) {
  try {
    const { input } = await request.json(); // Parse JSON body
    const soapResponse = await generateSOAP(input); // Process the request with your SOAP logic

    return NextResponse.json(soapResponse); // Send back the response
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to generate SOAP notes' },
      { status: 500 }
    );
  }
}
