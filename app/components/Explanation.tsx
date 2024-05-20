"use client"

// components/Explanation.tsx
import { useState } from 'react';
import axios from 'axios';

interface ExplanationProps {
  content: string;
  onExplain: (explainedContent: string) => void;
}

const Explanation: React.FC<ExplanationProps> = ({ content, onExplain }) => {
  const [error, setError] = useState<string | null>(null);

  const handleExplain = async () => {
    try {
      const response = await axios.post('/api/explain', { content });
      onExplain(response.data.explanation);
      setError(null);
    } catch (err) {
      setError('Failed to generate explanation.');
    }
  };

  return (
    <div>
      <button onClick={handleExplain} className="bg-green-500 text-white py-2 px-4 rounded">
        Explain PDF
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Explanation;
