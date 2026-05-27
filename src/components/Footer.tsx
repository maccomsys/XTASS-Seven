import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight, CarFront } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] border-t-4 border-brand-maroon text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png" alt="XTASS Logo" className="h-8 md:h-10 w-auto invert brightness-0" style={{ filter: 'invert(1)' }} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Professional airport and city transportation booking services. Providing reliable, safe, and comfortable rides across Ghana.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Kotoka Int'l Airport, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <span className="text-gray-300 text-sm">00233 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                <span className="text-gray-300 text-sm">support@xtass.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/vehicle-fleet" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Our Fleet</Link></li>
              <li><Link to="/service-areas" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Locations</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Careers</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Press & Media</Link></li>
              <li><Link to="/help-support" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Help Center</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
              <li><Link to="/airport-transfers" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Airport Transfers</Link></li>
              <li><Link to="/instant-pickup" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Instant Pickup</Link></li>
              <li><Link to="/scheduled-pickup" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Scheduled Pickup</Link></li>
              <li><Link to="/group-transportation" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Group Transport</Link></li>
              <li><Link to="/long-term-rental" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Long-Term Rental</Link></li>
              <li><Link to="/one-way-rental" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> One-Way Rental</Link></li>
              <li><Link to="/weekend-rental" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Weekend Rental</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              Support & Legal
            </h4>
            <ul className="space-y-3">
              <li><Link to="/rental-faqs" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Rental FAQs</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Privacy Policy</Link></li>
              <li><Link to="/safety-guidelines" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Safety Guidelines</Link></li>
              <li><Link to="/report-issue" className="text-gray-400 hover:text-brand-yellow hover:translate-x-1 inline-flex items-center transition-all text-sm group"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Report an Issue</Link></li>
              <li><Link to="/sitemap" className="text-brand-yellow hover:text-yellow-300 hover:translate-x-1 inline-flex items-center transition-all text-sm font-semibold group mt-2"><ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" /> Full Site Directory</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} XTASS Transport & Logistics. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-500">Operated out of Accra, Ghana. Proudly serving all major regions.</p>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm">
              <Facebook className="w-5 h-5 fill-current" />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-colors shadow-sm">
              <Twitter className="w-5 h-5 fill-current" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E4405F] hover:text-white transition-colors shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
