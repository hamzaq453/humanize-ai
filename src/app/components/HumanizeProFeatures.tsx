const HumanizeProFeatures = () => {
    const features = [
      {
        title: 'Content Shaping',
        description:
          'Whether you need to shorten, expand, simplify, or refine your writing, HumanizePro offers targeted transformations to meet your specific goals. Tailor your content to fit the precise tone, length, and complexity you desire.',
        icon: '📐',
      },
      {
        title: 'Multilingual Mastery',
        description:
          'With support for multiple languages, HumanizePro breaks down linguistic barriers. Perfect for global reach, it ensures your content resonates with audiences no matter their language.',
        icon: '🌐', 
      },
      {
        title: 'Readability Boost',
        description:
          'Enhance the readability of your content for a wider audience. Our tool simplifies complex ideas, making your writing more accessible and engaging.',
        icon: '🔍',
      },
      {
        title: 'Writing Assistant',
        description:
          'Beyond just spell-checking, HumanizePro polishes your content for grammar, syntax, and style. It’s like having a personal editor ensuring your writing is of the highest quality.',
        icon: '📝',
      },
      {
        title: 'Human Score',
        description:
          'Get real-time feedback on how human-like your content is. This unique feature helps you understand and improve the human feel of your writing, ensuring it connects better with your readers.',
        icon: '⭐',
      },
      {
        title: 'Flexible Export',
        description:
          'With HumanizePro, export your content in various formats to suit your needs. Whether it’s a PDF for a report, a Word document for further editing, or plain text for online publishing, we’ve got you covered.',
        icon: '📤',
      },
    ];
  
    return (
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Humanize Pro Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#161b22] p-6 rounded-lg shadow-lg border border-gray-700 text-white"
            >
              <div className="flex justify-center items-center mb-4">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HumanizeProFeatures;
  