// pages/api/explain.ts
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method === 'POST') {
        const content = "hello"
        if (!content) {
            return NextResponse.json({ error: 'Content is required' });
            // res.status(400).json({ error: 'Content is required' });
        }

        try {
            const response = await openai.completions.create({
                model: 'davinci-002',
                prompt: `Explain the following content: ${content}`,
                max_tokens: 100,
            });

            const explanation = response.choices[0].text.trim();
            // return res.status(200).json({ explanation });
            return NextResponse.json({ explanation });
        } catch (error) {
            return NextResponse.json(error);
            // res.status(500).json({ error: error.message });
        }
    // } else {
    //     res.setHeader('Allow', ['POST']);
    //     return res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}
