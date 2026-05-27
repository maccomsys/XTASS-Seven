import { Phone, Mail, MessageCircle, MessageSquare, ExternalLink, HelpCircle, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function HelpSupport() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header Area */}
      <div className="bg-brand-maroon py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">Help & Support</h1>
          <p className="text-gray-200 font-medium text-lg">We're available 24 hours a day, 7 days a week, 365 days a year.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 -mt-8 relative z-20">
        
        {/* Contact Options Grid */}
        <section className="mb-12">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="tel:+233123456789" className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 group flex items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-maroon/5 transition-colors">
                <Phone className="w-6 h-6 text-gray-500 group-hover:text-brand-maroon" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg uppercase tracking-wider mb-1">Call Us</h3>
                <p className="font-mono text-gray-600 text-lg tracking-widest">+233 123 456 789</p>
              </div>
            </a>

            <a href="mailto:support@xtass.com" className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 group flex items-start">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0 group-hover:bg-brand-maroon/5 transition-colors">
                <Mail className="w-6 h-6 text-gray-500 group-hover:text-brand-maroon" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg uppercase tracking-wider mb-1">Email Us</h3>
                <p className="text-gray-600 font-bold">support@xtass.com</p>
              </div>
            </a>

            <a href="https://wa.me/233123456789?text=Hello%20XTASS%20Support," target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 group flex items-start">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg uppercase tracking-wider mb-1">WhatsApp</h3>
                <p className="text-gray-600 font-medium">Text us anytime</p>
              </div>
            </a>

            <button onClick={() => navigate('/report-issue')} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 group flex items-start text-left w-full">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                <MessageSquare className="w-6 h-6 text-brand-yellow drop-shadow-sm" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg uppercase tracking-wider mb-1">Live Chat</h3>
                <p className="text-gray-600 font-medium">Connect with an agent in-app</p>
              </div>
            </button>

          </div>
        </section>

        {/* Shortcuts */}
        <section className="mb-12">
           <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Self Service</h2>
           <div className="flex flex-col space-y-4">
             <Link to="/faq" className="bg-white border-2 border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-brand-maroon transition-colors group">
                <div className="flex items-center mb-4 md:mb-0">
                  <HelpCircle className="w-8 h-8 text-brand-maroon mr-4" />
                  <div>
                    <h3 className="font-black text-gray-900 text-lg uppercase tracking-wider mb-1">Browse Frequently Asked Questions</h3>
                    <p className="text-gray-500 font-medium text-sm">Find answers to common questions about rides, rentals, and payments.</p>
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-900 font-bold px-6 py-3 uppercase tracking-wider text-sm whitespace-nowrap group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                  View FAQ
                </div>
             </Link>

             <button onClick={() => navigate('/report-issue')} className="bg-white border-2 border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-gray-900 transition-colors group text-left w-full">
                <div className="flex items-center mb-4 md:mb-0">
                  <FileText className="w-8 h-8 text-gray-900 mr-4" />
                  <div>
                    <h3 className="font-black text-gray-900 text-lg uppercase tracking-wider mb-1">Report an Issue</h3>
                    <p className="text-gray-500 font-medium text-sm">Let us know if something went wrong with your trip or account.</p>
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-900 font-bold px-6 py-3 uppercase tracking-wider text-sm whitespace-nowrap group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  Report Issue
                </div>
             </button>
           </div>
        </section>

      </div>
    </main>
  );
}
