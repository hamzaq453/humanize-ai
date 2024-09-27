export function AIDetectorsSection() {
    const detectors = ["OpenAI", "GPTZero", "CrossPlag", "ContentAtScale", "Sapling", "CopyLeaks", "ZeroGPT", "Turnitin"]
    
    return (
      <section className="mt-24 py-12 text-center">
        <h2 className="text-3xl font-semibold">Bypass all popular AI detectors</h2>
        <div className="flex justify-center mt-6 space-x-4 flex-wrap">
          {detectors.map(detector => (
            <span key={detector} className="inline-block bg-transparent border rounded-full text-white px-4 py-2  text-sm shadow-lg">
              {detector}
            </span>
          ))}
        </div>
      </section>
    )
  }
  