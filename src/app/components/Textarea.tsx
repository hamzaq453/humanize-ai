import { Textarea } from "@/components/ui/textarea";
import { SetStateAction, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function TextareaComponent({ input, setInput }: { input: string, setInput: (value: SetStateAction<string>) => void }) {
  const [wordCount, setWordCount] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const { data: session } = useSession(); // Get session data

  const wordLimit = session ? 500 : 300; // Set word limit based on login status

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;

    // Use regex to match words properly, even with newlines, tabs, etc.
    const words = value.trim().match(/\b\w+\b/g) || []; // Matches words in the input (ignoring spaces)

    let wordCount = words.length;

    // If word count exceeds the limit, stop updating the input field and show modal if necessary
    if (wordCount > wordLimit) {
      if (!session) {
        // If user is not logged in and exceeds the 300 word limit, show modal
        setShowModal(true);
      }
      return; // Exit early to prevent further changes
    }

    // Update the input field and word count
    setInput(value); // Allow spaces and other non-word characters
    setWordCount(wordCount); // Update the word count
  };

  return (
    <div>
      <Textarea
        placeholder={`Paste or type your AI-generated text here (Max ${wordLimit} words)...`}
        value={input}
        onChange={handleInputChange}
        className="w-full h-48 p-4 text-gray-200 bg-[#0d1117] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ color: "#ffffff", backgroundColor: "#0d1117" }}
      />
      <div className="text-right mt-2 text-sm text-gray-400">
        {wordCount}/{wordLimit} words
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
