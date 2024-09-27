import Image from 'next/image'
import AIimg from '../../../public/AI.png'

export function BoostConversionSection() {
  return (
    <section className='mt-16 flex justify-center items-start py-10'>
  {/* Graphic Section (Image on the Left) */}
  <div className="w-60 h-60 mt-20 mr-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
    <div className="relative flex justify-center items-center">
      <div className="w-64 h-64 rounded-full flex items-center justify-center">
        <Image src={AIimg} alt="Humanize" className='rounded-full' />
      </div>
    </div>
  </div>

  {/* Text Section */}
  <div className="ml-8 max-w-lg text-left">
    <h2 className="text-2xl font-bold mb-4">Boost Conversions with Authentic, Reader-Centric Text</h2>
    <p className="text-sm text-gray-400 leading-6">
      Ever feel like your digital pitch falls on deaf ears? In the vast online landscape, converting clicks to customers remains a challenge. Did you know that a whopping 68% of online shoppersabandon their carts due to uninspiring or unclear content?
    </p>
    <p className="mt-4 text-sm text-gray-400 leading-6">
      The struggle is real when your audience feels detached from robotic, impersonal content. Here's where our tool steps in. Elevate your AI-generated text to resonate authentically with your audience. By embracing a reader-centric approach with high-quality content, you can turn browsing into buying.
    </p>
    <p className="mt-4 text-sm text-gray-400 leading-6">
      Break through the noise, address pain points, and guide your audience seamlessly toward conversion. In the world of e-commerce, authenticity speaks louder than algorithms. Boost conversions by making your content a genuine conversation, not just a transaction, and bypass AI detectors.
    </p>
  </div>
</section>
  )
}
