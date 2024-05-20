import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const resp = "hello world";
    const data = await resp;
    return NextResponse.json(data)
}