import { useState, useEffect } from 'react';
import { Scale, FileText, ChevronRight } from 'lucide-react';

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState('usage');

  // Simple scroll spy behavior for the active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['usage', 'booking', 'payment', 'driver', 'liability'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element's top is in the top 30% of the viewport
          if (rect.top <= window.innerHeight * 0.3) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header if needed, adjust accordingly
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Scale className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Terms &amp; Conditions</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Legal terms governing the use of the XTASS platform and services.
          </p>
          <p className="text-sm opacity-70 mt-6 uppercase tracking-widest font-bold">Last Updated: May 26, 2026</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid lg:grid-cols-12 gap-12">
        
        {/* Table of Contents - Sticky Sidebar */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="bg-white p-8 border border-gray-200 shadow-sm sticky top-10">
            <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center">
              <FileText className="w-5 h-5 mr-3 text-brand-maroon" /> Contents
            </h2>
            <ul className="space-y-2">
              {[
                { id: 'usage', label: '1. Usage Terms' },
                { id: 'booking', label: '2. Booking Terms' },
                { id: 'payment', label: '3. Payment Terms' },
                { id: 'driver', label: '4. Driver Terms' },
                { id: 'liability', label: '5. Liability Disclaimer' }
              ].map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left font-bold text-sm tracking-wider uppercase py-3 border-b border-gray-100 flex items-center justify-between transition-colors
                      ${activeSection === item.id ? 'text-brand-maroon' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    {item.label}
                    {activeSection === item.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="lg:hidden col-span-12 bg-white p-6 border border-gray-200 shadow-sm mb-8">
           <h2 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-tight">Contents Menu</h2>
           <div className="flex flex-wrap gap-2">
              {[
                { id: 'usage', label: 'Usage Terms' },
                { id: 'booking', label: 'Booking Terms' },
                { id: 'payment', label: 'Payment Terms' },
                { id: 'driver', label: 'Driver Terms' },
                { id: 'liability', label: 'Liability Disclaimer' }
              ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-200"
                >
                  {item.label}
                </button>
              ))}
           </div>
        </div>

        {/* Content Blocks */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-gray-200 prose max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:uppercase prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed">
          
          <div id="usage" className="scroll-mt-32 pb-12 mb-12 border-b border-gray-100">
            <h2>1. Usage Terms</h2>
            <p>
              Welcome to the Executive Transport and Security Services (XTASS) platform. By accessing our website, mobile application, or utilizing any of our ground transportation and security logistics services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, registered users, and corporate partners ("Users") accessing the XTASS ecosystem. 
            </p>
            <p>
              Users must be at least 18 years of age to establish an account or book services directly. You agree to provide accurate, current, and complete information during the registration and booking processes. XTASS reserves the right to suspend or terminate accounts that provide fraudulent information, engage in abusive behaviour towards personnel, or attempt to utilize our fleet for illegal activities. We grant you a limited, non-exclusive, non-transferable licence to access the platform strictly for assessing and booking our transport services.
            </p>
          </div>

          <div id="booking" className="scroll-mt-32 pb-12 mb-12 border-b border-gray-100">
            <h2>2. Booking Terms</h2>
            <p>
              All reservations initiated through the XTASS platform—whether for Instant Pickup, Scheduled Pickup, Airport Transfers, or Car Rentals—are subject to fleet availability and operational confirmation. A booking is not considered legally guaranteed until you receive a final Confirmation Receipt containing a valid Booking Reference ID.
            </p>
            <p>
              <strong>Modifications and Cancellations:</strong> Customers may modify or cancel a reservation without penalty provided notice is given at least 24 hours prior to the scheduled pickup time. Modifications requested within 24 hours of the pickup time are subject to vehicle availability and may incur a surcharge. Cancellations made entirely within 24 hours of the pickup time will incur a late cancellation fee equivalent to a one-day rental rate (for rentals) or 50% of the base fare (for transfers), depending on the service selected.
            </p>
            <p>
              <strong>Refusal of Service:</strong> XTASS reserves the right to refuse service or terminate a trip in progress if a passenger exhibits violent behaviour, is highly intoxicated, refuses safety instructions (e.g., wearing seatbelts), or exceeds the legal passenger capacity of the booked vehicle.
            </p>
          </div>

          <div id="payment" className="scroll-mt-32 pb-12 mb-12 border-b border-gray-100">
            <h2>3. Payment Terms</h2>
            <p>
              XTASS operates on a strict zero-hidden-fees guarantee. Fares quoted at the time of confirmed booking are final and inclusive of standard fuel, driver compensation, and recognized tolls, unless explicitly stated otherwise (e.g., cross-border tariffs). By providing a payment method, you authorize XTASS or our third-party payment processors to charge the applicable fares, deposits, and any incurred damage fees to your account.
            </p>
            <p>
              <strong>Security Deposits:</strong> For Self-Drive Car Rentals, a security deposit hold will be placed on your credit card prior to vehicle handover. This hold is released upon the safe return of the vehicle matching the checkout condition report, minus any justifiable charges for incurred damage, severe interior soiling, or fuel replacement if not returned to the agreed level.
            </p>
          </div>

          <div id="driver" className="scroll-mt-32 pb-12 mb-12 border-b border-gray-100">
            <h2>4. Driver Terms</h2>
            <p>
              This section applies specifically to employed XTASS chauffeurs and personnel ("Drivers"). Drivers must uphold the XTASS Code of Professional Conduct at all times while logged into the platform or operating a company-registered vehicle. Drivers are subject to continuous monitoring, including GPS tracking, speed governance, and random driving record audits.
            </p>
            <p>
              Drivers must maintain pristine vehicle presentation, wear the approved corporate uniform, and adhere strictly to route safety protocols. Any deviation from the assigned route for unsanctioned personal reasons, or any violation of passenger privacy and confidentiality, constitutes a breach of contract resulting in immediate administrative review and potential termination.
            </p>
          </div>

          <div id="liability" className="scroll-mt-32 pb-12">
            <h2>5. Liability Disclaimer</h2>
            <p>
              While XTASS invests heavily in vehicle maintenance and rigorous driver vetting, our liability for delays, missed connections (e.g., flights), or trip disruptions resulting from unforeseen circumstances—including severe weather, major traffic incidents, road closures, or governmental actions (Force Majeure)—is strictly limited. We will make every reasonable operational effort to fulfill the service or provide a replacement vehicle, but we are not liable for consequential financial losses resulting from delayed transport.
            </p>
            <p>
              <strong>Luggage and Personal Items:</strong> XTASS is not financially responsible for items left in vehicles, lost, or damaged during transit. While our Lost &amp; Found department executes robust item recovery protocols, passengers are solely responsible for securing their personal belongings before exiting the vehicle. In case of a vehicular accident, XTASS maintains comprehensive commercial fleet insurance in accordance with the laws of the Republic of Ghana.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
