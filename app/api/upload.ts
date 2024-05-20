import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import nextConnect from 'next-connect';
import pdfParse from 'pdf-parse';

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error: any, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post(async (req: any, res: NextApiResponse) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const dataBuffer = req.file.buffer;
    const data = await pdfParse(dataBuffer);

    const content = data.text;

    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process PDF' });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
