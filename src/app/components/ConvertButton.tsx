import { Button } from "@/components/ui/button"

export function ConvertButton({ isLoading, input, handleConvert }: { isLoading: boolean, input: string, handleConvert: () => void }) {
  return (
      <div className="flex justify-center mt-6">
        <Button
          onClick={handleConvert}
          disabled={isLoading || !input.trim()}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          {isLoading ? 'Converting...' : 'Convert'}
        </Button>
      </div>
  )
}
