"use client"

import { useState } from 'react';
import Link from 'next/link';
import FileUpload from './components/FileUpload';
import Explanation from './components/Explanation';
import Button from './components/ui/button'; // Import Button as default
import {
  FileIcon,
  UploadIcon,
  DownloadIcon,
  CloudUploadIcon,
  TimerIcon,
  LayersIcon,
  AccessibilityIcon,
  BriefcaseIcon,
  LightbulbIcon,
} from './components/icons';

export default function Home() {
  const [content, setContent] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleUpload = (uploadedContent: string) => {
    setContent(uploadedContent);
    setExplanation(''); // Clear explanation when new content is uploaded
  };

  const handleExplain = (explainedContent: string) => {
    setExplanation(explainedContent);
  };

  return (
    <>
      <header className="bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <FileIcon className="h-6 w-6 mr-2" />
          <h1 className="text-2xl font-bold">PDF Summarizer</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-gray-300" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-5xl px-6 py-12 sm:px-8 md:px-10 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-400">
            Unlock the Power of PDF Summarization
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">
            Quickly grasp the key points of any document with our AI-powered PDF summarization tool.
          </p>
          <div className="grid grid-cols-2 gap-6 h-[90vh] max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <h2 className="text-lg font-medium text-green-400">Upload PDF</h2>
                <Button className="bg-green-500 hover:bg-green-600 text-white" size="sm" variant="primary">
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
              <div className="flex-1 flex items-center justify-center p-8">
                <FileUpload onUpload={handleUpload} />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <h2 className="text-lg font-medium text-purple-400">Summary</h2>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white" size="sm" variant="primary">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex-1 p-8 overflow-auto">
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-red-400">Key Highlights</h3>
                  <Explanation content={content} onExplain={handleExplain} />
                  {explanation && (
                    <div>
                      <p>{explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-800 py-12 px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-400">Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg p-6">
              <TimerIcon className="h-8 w-8 mb-4 text-green-400" />
              <h3 className="text-lg font-medium mb-2 text-green-400">Fast Summarization</h3>
              <p className="text-gray-400">Our AI-powered algorithm generates summaries in seconds, saving you time.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <LayersIcon className="h-8 w-8 mb-4 text-purple-400" />
              <h3 className="text-lg font-medium mb-2 text-purple-400">Comprehensive Summaries</h3>
              <p className="text-gray-400">Our summaries capture the key points and highlights of any document.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <AccessibilityIcon className="h-8 w-8 mb-4 text-orange-400" />
              <h3 className="text-lg font-medium mb-2 text-orange-400">Easy to Use</h3>
              <p className="text-gray-400">Our intuitive interface makes it simple to upload and summarize documents.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <DownloadIcon className="h-8 w-8 mb-4 text-red-400" />
              <h3 className="text-lg font-medium mb-2 text-red-400">Download Summaries</h3>
              <p className="text-gray-400">Save your summaries for later reference or share them with others.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <BriefcaseIcon className="h-8 w-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-medium mb-2 text-blue-400">Business Solutions</h3>
              <p className="text-gray-400">Our enterprise-grade features make it easy to integrate into your workflow.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <LightbulbIcon className="h-8 w-8 mb-4 text-brown-400" />
              <h3 className="text-lg font-medium mb-2 text-brown-400">Innovative Technology</h3>
              <p className="text-gray-400">Our cutting-edge AI technology is constantly being improved to provide better results.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-12 px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-400">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-blue-900 py-4 px-6 text-white">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-gray-400">Get started for free</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-400">
                  <li>Up to 5 PDF summaries per month</li>
                  <li>Basic summarization features</li>
                  <li>No download option</li>
                </ul>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-6" variant="primary">
                  Sign Up for Free
                </Button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-green-900 py-4 px-6 text-white">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-gray-400">For individual users</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-400">
                  <li>Unlimited PDF summaries</li>
                  <li>Advanced summarization features</li>
                  <li>Download summaries</li>
                  <li>Priority support</li>
                </ul>
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full mt-6" variant="primary">
                  Get Pro
                </Button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-purple-900 py-4 px-6 text-white">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-gray-400">For businesses and teams</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-400">
                  <li>Unlimited PDF summaries</li>
                  <li>Advanced summarization features</li>
                  <li>Download summaries</li>
                  <li>Dedicated support</li>
                  <li>Custom branding and integrations</li>
                </ul>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full mt-6" variant="primary">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-6 px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <FileIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">PDF Summarizer</span>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
