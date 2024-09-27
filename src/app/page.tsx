'use client'

import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { BoostConversionSection } from './components/BoostConversionSection'
import { Footer } from './components/Footer'
import HumanizeProFeatures from './components/HumanizeProFeatures'
import { AIDetectorsSection } from './components/AiDetectorSection'
import { HowItWorksSection } from './components/HowitWorks'
import { OutputComponent } from './components/OutputComponent'
import { TextareaComponent } from './components/Textarea'

export default function Page() {
  const [input, setInput] = useState('')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#070b15', color: '#ffffff' }}>
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-20 mt-10">
        <div className="max-w-3xl mx-auto bg-[#161b22] p-8 rounded-lg shadow-lg">
          <TextareaComponent input={input} setInput={setInput} />
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
