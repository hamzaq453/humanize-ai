import { Button } from "@/components/ui/button";

export function ConvertButton({ isLoading, input, handleConvert, remainingWords }: { isLoading: boolean, input: string, handleConvert: () => void, remainingWords: number }) {
  return (
    <div className="flex flex-col justify-center mt-6">
      {/* Show remaining words for non-logged-in users */}
      {!isLoading && (
        <div className="text-center text-gray-400 mb-2">
          {remainingWords} words remaining
        </div>
      )}
      <Button
        onClick={handleConvert}
        disabled={isLoading || !input.trim()}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        {isLoading ? 'Converting...' : 'Convert'}
      </Button>
    </div>
  );
}
