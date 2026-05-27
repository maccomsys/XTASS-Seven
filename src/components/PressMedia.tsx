import { Download, Newspaper, Mail, Phone, Palette, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PressMedia() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Press &amp; Media</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Official announcements, brand assets, and contact information for journalists and media professionals.
          </p>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center mb-10">
          <Download className="w-10 h-10 text-brand-maroon mr-4" />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">XTASS Media Kit</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-8 shadow-sm group hover:border-brand-yellow transition-colors cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center mb-4 text-brand-maroon group-hover:bg-brand-yellow group-hover:text-brand-maroon-dark transition-colors">
               <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Logo Pack</h3>
            <p className="text-gray-600 text-sm font-medium mb-4">Includes high-resolution SVG and PNG formats for print and digital use.</p>
            <span className="text-brand-maroon font-bold text-sm uppercase tracking-wider flex items-center mt-auto">
              Download .ZIP <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 shadow-sm group hover:border-brand-yellow transition-colors cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center mb-4 text-brand-maroon group-hover:bg-brand-yellow group-hover:text-brand-maroon-dark transition-colors">
               <Palette className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Guidelines</h3>
            <p className="text-gray-600 text-sm font-medium mb-4">Typography, colour references (Maroon/Yellow), and proper usage rules.</p>
            <span className="text-brand-maroon font-bold text-sm uppercase tracking-wider flex items-center mt-auto">
              Download .PDF <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>

          <div className="bg-white border border-gray-200 p-8 shadow-sm group hover:border-brand-yellow transition-colors cursor-pointer flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center mb-4 text-brand-maroon group-hover:bg-brand-yellow group-hover:text-brand-maroon-dark transition-colors">
               <Newspaper className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Company Fact Sheet</h3>
            <p className="text-gray-600 text-sm font-medium mb-4">Key statistics, fleet details, and our operational history in Ghana.</p>
            <span className="text-brand-maroon font-bold text-sm uppercase tracking-wider flex items-center mt-auto">
              Download .PDF <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-10">
            <Newspaper className="w-10 h-10 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Latest Press Releases</h2>
          </div>

          <div className="space-y-6">
            {[
              { date: 'MAY 12, 2026', title: 'XTASS Announces Expansion into Sunyani and Wa Airports' },
              { date: 'MAR 04, 2026', title: 'New Executive Fleet Upgrades Completed for Corporate Clients' },
              { date: 'NOV 18, 2025', title: 'XTASS Recognized for Excellence in Ground Transportation Logistics' },
              { date: 'SEP 02, 2025', title: 'Partnership Announced with Major Hospitality Groups in Accra' }
            ].map((release, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-200 hover:border-brand-yellow transition-colors group bg-gray-50/50">
                <div>
                  <span className="text-brand-maroon font-bold text-xs uppercase tracking-widest mb-2 block">{release.date}</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">{release.title}</h3>
                </div>
                <button className="mt-4 md:mt-0 text-gray-500 hover:text-brand-maroon font-bold text-sm flex items-center whitespace-nowrap">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-20 bg-brand-maroon text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-black mb-6 tracking-tight uppercase">Media Enquiries</h2>
          <p className="text-xl opacity-90 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            If you are a journalist working on a story about XTASS or the ground transportation sector in West Africa, our PR team is ready to assist.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:press@xtass.com" className="flex flex-col items-center justify-center p-8 border-2 border-white/20 hover:border-brand-yellow hover:bg-brand-yellow/10 transition-all">
              <Mail className="w-8 h-8 text-brand-yellow mb-4" />
              <span className="font-bold text-lg mb-1">press@xtass.com</span>
              <span className="text-white/70 text-sm font-medium">For statements &amp; interviews</span>
            </a>
            <a href="tel:+233000000000" className="flex flex-col items-center justify-center p-8 border-2 border-white/20 hover:border-brand-yellow hover:bg-brand-yellow/10 transition-all">
              <Phone className="w-8 h-8 text-brand-yellow mb-4" />
              <span className="font-bold text-lg mb-1">+233 (0) 500 000 000</span>
              <span className="text-white/70 text-sm font-medium">Urgent press line available 24/7</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
