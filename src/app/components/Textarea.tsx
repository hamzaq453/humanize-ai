import { Textarea } from "@/components/ui/textarea";
import { SetStateAction, useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function TextareaComponent({ input, setInput }: { input: string, setInput: (value: SetStateAction<string>) => void }) {
  const [wordCount, setWordCount] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const { data: session } = useSession(); // Get session data
  const [remainingWords, setRemainingWords] = useState(300); // Default to 300 for non-logged-in users

  const MAX_WORDS_FREE = 300;
  const MAX_WORDS_LOGGED_IN = 500;
  const DAILY_WORDS_FOR_LOGGED_IN = 200;

  useEffect(() => {
    if (session) {
      // Handle word tracking for logged-in users
      const today = new Date().toLocaleDateString();
      const lastUsageDate = localStorage.getItem("lastUsageDate");
      
      if (today !== lastUsageDate) {
        // Reset word count if it's a new day
        localStorage.setItem("wordUsage", "0");
        localStorage.setItem("lastUsageDate", today);
      }

      const wordUsage = parseInt(localStorage.getItem("wordUsage") || "0", 10);
      setRemainingWords(MAX_WORDS_LOGGED_IN - wordUsage);
    } else {
      setRemainingWords(MAX_WORDS_FREE); // Free users have 300 words
    }
  }, [session]);

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    
    // Using regex to split input into words, counting only valid word tokens
    const words = value.trim().match(/\b\w+\b/g) || [];
    const newWordCount = words.length;
    
    // If word count exceeds the remaining words, block further input and show modal if necessary
    if (newWordCount > remainingWords) {
      if (!session) {
        // Show modal for free users if they exceed the limit
        setShowModal(true);
      }
      return; // Stop further input if limit exceeded
    }
  
    // Update the input field and word count
    setInput(value);
    setWordCount(newWordCount);
  
    if (session) {
      // Only update word usage for logged-in users if the input is modified
      const today = new Date().toLocaleDateString();
      const lastUsageDate = localStorage.getItem("lastUsageDate") || today;
  
      if (today !== lastUsageDate) {
        // If a new day, reset usage count
        localStorage.setItem("wordUsage", "0");
        localStorage.setItem("lastUsageDate", today);
      }
  
      const wordUsage = parseInt(localStorage.getItem("wordUsage") || "0", 10);
      const newTotalWordUsage = newWordCount; // Use the new word count directly
  
      // Store the updated word usage
      localStorage.setItem("wordUsage", newTotalWordUsage.toString());
      
      // Update remaining words
      setRemainingWords(MAX_WORDS_LOGGED_IN - newTotalWordUsage);
    }
  };
  
  return (
    <div>
      <Textarea
        placeholder={`Paste or type your AI-generated text here (Max ${remainingWords} words)...`}
        value={input}
        onChange={handleInputChange}
        className="w-full h-48 p-4 text-gray-200 bg-[#0d1117] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ color: "#ffffff", backgroundColor: "#0d1117" }}
      />
      <div className="text-right mt-2 text-sm text-gray-400">
        {wordCount}/{remainingWords} words
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sign Up For Free to Increase Your Word Limit</h2>
            <p className="mb-4">You have reached the 300-word limit. Sign up for free to increase your limit to 500 words.</p>
            <Button
              onClick={() => {
                signIn("google"); // Trigger Google sign-in process
                setShowModal(false); // Close the modal
              }}
              className="bg-blue-600 hover:bg-blue-700 w-full"
            >
              Sign Up for Free
            </Button>
            <Button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-gray-500 hover:bg-gray-600 w-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
