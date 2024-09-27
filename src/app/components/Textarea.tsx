import { Textarea } from "@/components/ui/textarea"
import { SetStateAction, useState } from 'react'

export function TextareaComponent({ input, setInput }: { input: string, setInput: (value: SetStateAction<string>) => void }) {
  const [wordCount, setWordCount] = useState(0);
  const wordLimit = 300;

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;

    // Use regex to match words properly, even with newlines, tabs, etc.
    const words = value.match(/\b\w+\b/g) || []; // Matches words in the input

    let wordCount = words.length;
    if (wordCount > wordLimit) {
      wordCount = wordLimit;
    }

    // Join only the first 'wordLimit' words and form the new text
    const limitedWords = words.slice(0, wordLimit).join(" ");

    // Update the input field and word count
    setInput(limitedWords);
    setWordCount(wordCount);
  };

  return (
    <div>
      <Textarea
        placeholder="Paste or type your AI-generated text here (Max 500 words)..."
        value={input}
        onChange={handleInputChange}
        className="w-full h-48 p-4 text-gray-200 bg-[#0d1117] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ color: '#ffffff', backgroundColor: '#0d1117' }}
      />
      <div className="text-right mt-2 text-sm text-gray-400">
        {wordCount}/{wordLimit} words
      </div>
    </div>
  )
}
