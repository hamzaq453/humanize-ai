import React from 'react';

const PricingSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Elevate AI Text to Human-Level Writing Effortlessly</h2>
        <p className="text-gray-400 mb-8">Flexible plans designed to help you seamlessly humanize AI-generated content as you grow.</p>

        {/* Plan switcher for monthly/annual */}
        <div className="mb-8">
          <div className="inline-flex border rounded-lg">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg">Monthly</button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Free Plan */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">FREE</h3>
            <p className="text-3xl font-bold mb-4">$0.00</p>
            <p className="text-sm text-gray-100 mb-6">Free Forever</p>
            <ul className="text-left text-sm text-gray-100 space-y-2">
              <li>✓ 500 Free Words upon sign up</li>
              <li>✓ 200 Free Words daily</li>
              <li>✓ Basic Humanization Features</li>
              <li>✓ No advanced features</li>
              <li>✓ Email Support</li>
              <li>✓ Access to Standard Engine</li>
              <li>✓ Basic AI Detector Evasion</li>
            </ul>
            <button className="mt-6 w-full bg-gray-700 text-white py-2 rounded-lg">Get Started For Free</button>
          </div>

          {/* Grow Plan */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">GROW</h3>
            <p className="text-3xl font-bold mb-4">$1.00</p>
            <p className="text-sm text-gray-400 mb-6">3 days free trial</p>
            <p className="text-sm text-gray-400 mb-6">then only $15/month billed annually</p>
            <ul className="text-left text-sm text-gray-100 space-y-2">
              <li>✓ 50,000 words/month</li>
              <li>✓ Undetectable Content Generator</li>
              <li>✓ Advanced Humanization Features</li>
              <li>✓ Early Access to Advanced Features</li>
              <li>✓ Priority Email Support</li>
              <li>✓ Improved AI Detector Evasion</li>
              <li>✓ Content Style Diversity Options</li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Start Free Trial</button>
          </div>

          {/* Scale Plan */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3 relative">
            <span className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 rounded-bl-lg text-xs">Popular</span>
            <h3 className="text-xl font-semibold mb-4">SCALE</h3>
            <p className="text-3xl font-bold mb-4">$1.00</p>
            <p className="text-sm text-gray-400 mb-6">3 days free trial</p>
            <p className="text-sm text-gray-400 mb-6">then only $29/month billed annually</p>
            <ul className="text-left text-sm text-gray-100 space-y-2">
              <li>✓ Unlimited words/month</li>
              <li>✓ Undetectable Content Generator</li>
              <li>✓ All Advanced Features</li>
              <li>✓ 28 Language Support (soon)</li>
              <li>✓ Priority Phone and Email Support</li>
              <li>✓ Access to Premium Engine</li>
              <li>✓ Advanced AI Detector</li>
              <li>✓ Real-Time Human Score Analysis</li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Start Free Trial</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
