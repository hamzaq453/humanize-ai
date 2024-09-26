'use client'

import { SetStateAction, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { signIn, signOut, useSession } from 'next-auth/react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import Image from 'next/image'
import AIimg from '../../public/AI.png'
import HumanizeProFeatures from './components/HumanizeProFeatures'

export default function GPTToHumanConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()

  const handleConvert = async () => {
    if (!input.trim()) return;

    setIsLoading(true)

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCelrz5PfpRBkl9tGcFBubu26vXfRCeUpU"); // Replace with your actual key
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Simplify the following text into more natural, human-like language while preserving the original meaning exactly: "${input}"`;

      const result = await model.generateContent(prompt);
      const generatedText = result.response.text();

      setOutput(generatedText)
    } catch (error) {
      console.error('Error calling GEMINI API:', error);
      setOutput("Error occurred during conversion. Please try again.");
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#070b15', color: '#ffffff' }}>
      {/* Navbar */}
      <nav className="w-full bg-[#161b22] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Humanize AI Text</h1>
          <div className="flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <p className="text-lg">Welcome, {session.user?.name}</p>
                <Button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700">Logout</Button>
              </div>
            ) : (
              <Button onClick={() => signIn('google')} className="bg-blue-600 hover:bg-blue-700">Login</Button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-20 mt-10">
        <div className="max-w-3xl mx-auto bg-[#161b22] p-8 rounded-lg shadow-lg">
          <Textarea
            placeholder="Paste or type your AI-generated text here..."
            value={input}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setInput(e.target.value)}
            className="w-full h-48 p-4 text-gray-200 bg-[#0d1117] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ color: '#ffffff', backgroundColor: '#0d1117' }}
          />

          <div className="flex justify-center mt-6">
            <Button
              onClick={handleConvert}
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {isLoading ? 'Converting...' : 'Convert'}
            </Button>
          </div>

          {output && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">Converted Text:</h2>
              <div className="p-4 bg-[#161b22] border border-gray-700 rounded-md">
                <p className="text-gray-300 whitespace-pre-wrap">{output}</p>
              </div>
            </div>
          )}
        </div>

        {/* New Section: Bypass All Popular AI Detectors */}
        <section className="mt-24 py-12 text-center">
          <h2 className="text-3xl font-semibold">Bypass all popular AI detectors</h2>
          <div className="flex justify-center mt-6 space-x-4 flex-wrap">
            {/* AI Detectors - badges */}
            {["OpenAI", "GPTZero", "CrossPlag", "ContentAtScale", "Sapling", "CopyLeaks", "ZeroGPT", "Turnitin"].map(detector => (
              <span key={detector} className="inline-block bg-transparent border rounded-full text-white px-4 py-2  text-sm shadow-lg">
                {detector}
              </span>
            ))}
          </div>
        </section>

        {/* New Section: How it works */}
        <section className="mt-12 text-center py-10">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <div className="flex justify-center mt-10 space-x-12">
            {/* Steps */}
            <div className="text-left space-y-6">
              <div>
                <h3 className="text-xl font-bold">Step 1</h3>
                <p>Upload your AI-generated text or type directly into the Humanize interface.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Step 2</h3>
                <p>Customize the settings to match your desired writing style and tone.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Step 3</h3>
                <p>Initiate the humanization process and let our advanced algorithms do all the magic.</p>
              </div>
            </div>
            {/* Circular Graphic - Placeholder */}
            
          </div>
        </section>

        <HumanizeProFeatures/>

        
          {/* Boost Conversation Section */}
<section className='mt-16 flex justify-center items-start py-10'>
  {/* Graphic Section (Image on the Left) */}
  <div className="w-60 h-60 mt-20 mr-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
    <div className="relative flex justify-center items-center">
      <div className="w-64 h-64 rounded-full flex items-center justify-center">
        <Image src={AIimg} alt="Humanize" className='rounded-full' />
      </div>
    </div>
  </div>

  {/* Text Section */}
  <div className="ml-8 max-w-lg text-left">
    <h2 className="text-2xl font-bold mb-4">Boost Conversions with Authentic, Reader-Centric Text</h2>
    <p className="text-sm text-gray-400 leading-6">
      Ever feel like your digital pitch falls on deaf ears? In the vast online landscape, converting clicks to customers remains a challenge. Did you know that a whopping 68% of online shoppersabandon their carts due to uninspiring or unclear content?
    </p>
    <p className="mt-4 text-sm text-gray-400 leading-6">
      The struggle is real when your audience feels detached from robotic, impersonal content. Here's where our tool steps in. Elevate your AI-generated text to resonate authentically with your audience. By embracing a reader-centric approach with high-quality content, you can turn browsing into buying.
    </p>
    <p className="mt-4 text-sm text-gray-400 leading-6">
      Break through the noise, address pain points, and guide your audience seamlessly toward conversion. In the world of e-commerce, authenticity speaks louder than algorithms. Boost conversions by making your content a genuine conversation, not just a transaction, and bypass AI detectors.
    </p>
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-[#161b22] w-full">
        <p className="text-sm text-white">© 2024 Humanize AI Text. All rights reserved.</p>
      </footer>
    </div>
  )
}
