"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface FileUploadProps {
  onUpload: (content: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPdfUrl(fileUrl);
    }
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const content = response.data.content;
      onUpload(content);
  
      const explanationResponse = await axios.post('/api/explain', { content });
      setExplanation(explanationResponse.data.explanation);
    } catch (err) {
      setError('Failed to upload the PDF.');
    }
  };
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4 text-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 mb-2"
          accept="application/pdf"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Upload PDF
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
      {pdfUrl && (
        <div className="border mt-4 p-2">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
      {explanation && (
        <div className="border mt-4 p-2">
          <h2 className="text-lg font-medium text-purple-400">Summary</h2>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
