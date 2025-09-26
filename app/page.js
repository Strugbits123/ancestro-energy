import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import SunButton from '../src/components/ui/SunButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 md:py-1">
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Background Video */}
          <video
            className="w-full h-full object-cover"
            src="/assets/hero-section.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        </div>

        <div className="container-2xl mx-auto px-[55px] text-center relative z-10 py-20"

        >
          {/* Main Heading */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white mt-4 md:mt-16 mb-8 md:mb-12 leading-tight tracking-wide uppercase max-w-6xl mx-auto">
            Where Solar Power meets ancestral Wisdom
          </h1>

          {/* CTA Cards Container */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mt-8 md:mt-16 max-w-4xl mx-auto">
            {/* Left Card - Customer */}
            <div className="flex flex-col justify-between items-center h-[313px] p-6  md:p-8 gap-8 w-full max-w-sm bg-gradient-to-r from-white/30 via-white/20 to-white/10 border border-white/30 backdrop-blur-lg rounded-3xl shadow-2xl">
              {/* Features List */}
              <div className="flex flex-col items-start gap-4 w-full">
                {/* $0 Investment */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0">
                    <img src={'/icons/zero-investment.png'} className='h-full w-full' />
                  </div>
                  <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
                    $0 investment
                  </span>
                </div>

                {/* Lower Monthly Bill */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0">
                    <img src={'/icons/lower-bill.png'} className='h-full w-full' />
                  </div>
                  <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
                    Lower Monthly bill
                  </span>
                </div>

                {/* Energy Independence */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-5 h-5  rounded-sm flex-shrink-0">
                    <img src={'/icons/energy-independence.png'} className='h-full w-full' />
                  </div>
                  <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
                    Energy independence
                  </span>
                </div>

                {/* Sustainable Solution */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0">
                    <img src={'/icons/sustainable-solutions.png'} className='h-full w-full' />
                  </div>
                  <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
                    Sustainable Solution
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <SunButton redirect={"/solar"} className="w-full" textClassName='whitespace-nowrap text-sm md:text-base lg:text-lg '>I WANT SOLAR</SunButton>
            </div>

            {/* Right Card - Dealer */}
            <div className="flex flex-col justify-between items-center h-[313px] p-6 md:p-8 gap-8 w-full max-w-sm bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-3xl shadow-2xl">
              {/* Features List */}
              <div className="flex flex-col items-start gap-4 w-full">
                {/* Grow Your Business */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0">
                    <img src={'/icons/grow-your-business.png'} className='h-full w-full' />
                  </div>
                  <span className="text-left font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
                    Grow your business
                  </span>
                </div>

                {/* Join #1 Solar Network */}
                <div className="flex items-start gap-3 w-full">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0 mt-1">
                    <img src={'/icons/join-solar.png'} className='h-full w-full' />

                  </div>
                  <span className="text-left font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white leading-tight">
                    join #1 Solar network in Latin America
                  </span>
                </div>

                {/* Get Funding */}
                <div className="flex items-start gap-3 w-full">
                  <div className="w-5 h-5 rounded-sm flex-shrink-0 mt-1">
                    <img src={'/icons/get-funding.png'} className='h-full w-full' />
                  </div>
                  <span className="text-left font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white leading-tight">
                    Get funding for your projects
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <SunButton redirect={'/dealer'} className="w-full" textClassName='whitespace-nowrap text-sm md:text-base lg:text-lg '>I WANT TO BECOME A DEALER</SunButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
