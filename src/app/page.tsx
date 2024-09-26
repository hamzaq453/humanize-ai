'use client'

import { SetStateAction, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { signIn, signOut, useSession } from 'next-auth/react'
import { GoogleGenerativeAI } from "@google/generative-ai"

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
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#0d1117', color: '#ffffff' }}>
      {/* Header with Login/Logout */}
      <header className="py-12 text-center">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-bold">Humanize AI Text</h1>
          {/* Login/Logout Button */}
          {session ? (
            <div className="flex items-center space-x-4">
              <p className="text-lg">Welcome, {session.user?.name}</p>
              <Button onClick={() => signOut()} className="bg-red-600 hover:bg-red-700">Logout</Button>
            </div>
          ) : (
            <Button onClick={() => signIn('google')} className="bg-blue-600 hover:bg-blue-700">Login with Google</Button>
          )}
        </div>
        <p className="mt-4 text-lg">Transform AI-generated text into authentic, human-readable content.</p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10">
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
      </main>

      <footer className="py-8 text-center bg-[#161b22] w-full">
        <p className="text-sm text-white">© 2024 Humanize AI Text. All rights reserved.</p>
      </footer>
    </div>
  )
}
