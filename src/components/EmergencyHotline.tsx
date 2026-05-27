import { PhoneCall, MessageCircle, AlertTriangle, ShieldCheck, LifeBuoy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmergencyHotline() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-red-700 text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-red-700 shadow-xl">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Emergency Hotline</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Immediate assistance 24/7 for active trips and urgent security matters.
          </p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 md:p-12 border-2 border-red-700 shadow-2xl text-center flex flex-col items-center">
            <PhoneCall className="w-12 h-12 text-red-700 mb-6 shrink-0 animate-pulse" />
            <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Direct Emergency Line</h2>
            <p className="text-gray-600 font-medium mb-8">Tap to connect directly to our centralized security operations center.</p>
            <a href="tel:+233000000000" className="w-full bg-red-700 hover:bg-red-800 text-white font-black text-2xl py-6 tracking-wider transition-colors shadow-lg flex items-center justify-center">
               +233 500 000 000
            </a>
          </div>

          <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl text-center flex flex-col items-center">
            <MessageCircle className="w-12 h-12 text-green-600 mb-6 shrink-0" />
            <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Emergency WhatsApp</h2>
            <p className="text-gray-600 font-medium mb-8">For silent emergencies where you cannot speak, message us immediately.</p>
            <a href="#" className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-6 tracking-wider transition-colors shadow-lg flex items-center justify-center">
               Message +233 500 000 000
            </a>
          </div>

        </div>
      </section>

      {/* Procedure */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">In-Trip Emergency Procedure</h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6"></div>
          </div>
          
          <div className="space-y-6">
            <div className="flex bg-gray-50 p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-700 text-white font-black text-xl flex items-center justify-center shrink-0 mr-6">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Calm</h3>
                <p className="text-gray-600 font-medium">Ensure your immediate safety. Instruct the driver to pull over if necessary and safe to do so.</p>
              </div>
            </div>
            <div className="flex bg-gray-50 p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-700 text-white font-black text-xl flex items-center justify-center shrink-0 mr-6">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact XTASS Emergency Line</h3>
                <p className="text-gray-600 font-medium mb-2">Call <strong className="text-red-700 font-black">+233 500 000 000</strong>. Provide your location and booking ID if possible.</p>
              </div>
            </div>
            <div className="flex bg-gray-50 p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-700 text-white font-black text-xl flex items-center justify-center shrink-0 mr-6">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Local Emergency Services</h3>
                <p className="text-gray-600 font-medium">If there is immediate danger to life or in case of a medical emergency, dial Ghana National Services first.</p>
                <div className="flex space-x-6 mt-4">
                  <span className="bg-white px-4 py-2 border border-gray-200 font-bold text-gray-900 shadow-sm"><span className="text-red-700 mr-2">Police:</span> 191</span>
                  <span className="bg-white px-4 py-2 border border-gray-200 font-bold text-gray-900 shadow-sm"><span className="text-red-700 mr-2">Ambulance:</span> 193</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Resources */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <LifeBuoy className="w-12 h-12 text-brand-maroon mx-auto mb-6" />
          <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase mb-8">Safety Resources</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/safety-guidelines" className="bg-white p-6 border border-gray-200 shadow-sm hover:border-brand-maroon transition-colors group flex items-center">
              <ShieldCheck className="w-8 h-8 text-brand-yellow mr-4" />
              <div className="text-left mr-6">
                <span className="block font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">Our Safety Guidelines</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-maroon ml-auto" />
            </Link>
            <Link to="/contact" className="bg-white p-6 border border-gray-200 shadow-sm hover:border-brand-maroon transition-colors group flex items-center">
              <MessageCircle className="w-8 h-8 text-brand-yellow mr-4" />
              <div className="text-left mr-6">
                <span className="block font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">Report Non-Urgent Issue</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-maroon ml-auto" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
