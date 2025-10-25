'use client';

import { useState } from 'react';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-800 rounded-lg">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleCopy}
          className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className={`language-${language} p-4 overflow-x-auto`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
