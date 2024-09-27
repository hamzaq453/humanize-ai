'use client'

import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { BoostConversionSection } from './components/BoostConversionSection'
import { Footer } from './components/Footer'
import HumanizeProFeatures from './components/HumanizeProFeatures'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { AIDetectorsSection } from './components/AiDetectorSection'
import { ConvertButton } from './components/ConvertButton'
import { HowItWorksSection } from './components/HowitWorks'
import { OutputComponent } from './components/OutputComponent'
import { TextareaComponent } from './components/Textarea'

export default function GPTToHumanConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleConvert = async () => {
    if (!input.trim()) return;

    setIsLoading(true)

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCelrz5PfpRBkl9tGcFBubu26vXfRCeUpU");
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
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-20 mt-10">
        <div className="max-w-3xl mx-auto bg-[#161b22] p-8 rounded-lg shadow-lg">
          <TextareaComponent input={input} setInput={setInput} />
          <ConvertButton isLoading={isLoading} input={input} handleConvert={handleConvert} />
          <OutputComponent output={output} />
        </div>

        <AIDetectorsSection />
        <HowItWorksSection />
        <BoostConversionSection />
        <HumanizeProFeatures />
      </main>

      <Footer />
    </div>
  )
}
