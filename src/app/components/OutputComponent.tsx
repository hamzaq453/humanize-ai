export function OutputComponent({ output }: { output: string }) {
    return (
      output ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white">Converted Text:</h2>
          <div className="p-4 bg-[#161b22] border border-gray-700 rounded-md">
            <p className="text-gray-300 whitespace-pre-wrap">{output}</p>
          </div>
        </div>
      ) : null
    )
  }
  