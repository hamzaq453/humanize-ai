export function HowItWorksSection() {
    const steps = [
      { title: "Step 1", description: "Upload your AI-generated text or type directly into the Humanize interface." },
      { title: "Step 2", description: "Customize the settings to match your desired writing style and tone." },
      { title: "Step 3", description: "Initiate the humanization process and let our advanced algorithms do all the magic." }
    ]
    
    return (
      <section className="mt-12 text-center py-10">
        <h2 className="text-3xl font-semibold">How it works</h2>
        <div className="flex justify-center mt-10 space-x-12">
          <div className="text-left space-y-6">
            {steps.map((step, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  