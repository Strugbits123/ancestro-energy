export default function Footer() {
  const gradientStyle = {
    background: 'linear-gradient(129.65deg, #C4952D -68.94%, #AE7F2A -37.03%, #F5DC7B 0.2%, #AE7F2A 189.02%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-2xl mx-auto px-[55px] py-12">
        {/* Footer Top Section */}
        <div className="text-center mb-12">
          {/* Ancestro Logo */}
          <div className="inline-block mb-8">
            <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 45L22.5 30L30 45H15Z" fill="white"/>
              <text x="40" y="38" fontSize="20" fontWeight="bold" fill="white">ANCESTRO</text>
              <text x="40" y="52" fontSize="12" fill="white">ENERGY</text>
            </svg>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Solutions Column */}
          <div>
            <h3 
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Solutions (Customer-Focused)
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">$0 Down Solar Subscriptions</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Customer Support & Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Customer Portal Access</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">EV Charging & Storage Applications</a></li>
            </ul>
          </div>

          {/* Dealers Column */}
          <div>
            <h3 
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Dealers
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Join Dealer Network</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Dealer Portal Login</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Dealer Training & Tools</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Dealer Case Studies</a></li>
            </ul>
          </div>

          {/* Investors Column */}
          <div>
            <h3 
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Investors
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Why Invest With Ancestro Capital</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Investor Portal Login</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Market Reports & Projections</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">ESG / Carbon Credits</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 
              className="font-bold text-sm mb-6 tracking-wider uppercase"
              style={gradientStyle}
            >
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">About Ancestro</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Press & Media</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Careers (future)</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors tracking-wider uppercase">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Powered by Section */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold mb-6 tracking-wider uppercase text-white">
            Powered by Ancestro Ecosystem
          </p>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 p-6 bg-gradient-to-r from-white/36 to-gray-500/0 border border-white/30 backdrop-blur-sm rounded-lg mb-6">
            <div className="bg-white h-8 w-24 md:w-32 rounded"></div>
            <div className="bg-white h-8 w-20 md:w-28 rounded"></div>
            <div className="bg-white h-8 w-20 md:w-28 rounded"></div>
            <div className="bg-white h-8 w-18 md:w-24 rounded"></div>
            <div className="bg-white h-8 w-16 md:w-20 rounded"></div>
          </div>

          {/* Country Flags */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
            {Array.from({length: 14}).map((_, i) => (
              <div key={i} className="w-10 h-6 bg-gray-400 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div 
        className="py-4"
        style={{
          background: 'linear-gradient(129.65deg, #C4952D -68.94%, #AE7F2A -37.03%, #F5DC7B 0.2%, #AE7F2A 189.02%)'
        }}
      >
        <div className="container-2xl mx-auto px-[55px]">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm font-bold tracking-wider uppercase text-black">
              <span>Legal:</span>
              <a href="#" className="hover:underline">Privacy</a>
              <span className="text-black">|</span>
              <a href="#" className="hover:underline">Terms</a>
              <span className="text-black">|</span>
              <a href="#" className="hover:underline">Cookies</a>
              <span className="text-black">|</span>
              <a href="#" className="hover:underline">Compliance</a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm font-bold tracking-wider uppercase text-black">
              <a href="mailto:info@ancestroenergy.com" className="hover:underline">
                📧 info@ancestroenergy.com
              </a>
              <div className="flex space-x-4">
                <span>📞 +1 (555) 123-45675</span>
                <span>+44 20 7946 0958</span>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 bg-black rounded hover:opacity-70 transition-opacity"></a>
                <a href="#" className="w-6 h-6 bg-black rounded hover:opacity-70 transition-opacity"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
