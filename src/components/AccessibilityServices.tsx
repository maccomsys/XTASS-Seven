import { HeartHandshake, Phone, Mail, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AccessibilityServices() {
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-90 text-brand-yellow">XTASS Services</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Accessibility Transport</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium mb-8">
            Inclusive mobility for everyone. Safe, comfortable, and reliable transport for passengers with special needs.
          </p>
          <button 
            onClick={() => document.getElementById('accessibility-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-8 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
          >
            Request Accessible Ride
          </button>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="accessibility-form" className="relative z-10 max-w-[64rem] mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white p-8 shadow-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Accessible Transport</h2>
          <form onSubmit={handleBookingSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Location</label>
                <input 
                  type="text" 
                  defaultValue="Korle Bu Teaching Hospital"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>
               <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop Off Location</label>
                <input 
                  type="text" 
                  defaultValue="Cantonments"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Date</label>
                <input 
                  type="date" 
                  defaultValue="2025-06-12"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Time</label>
                <input 
                  type="time" 
                  defaultValue="10:30"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-gray-900 mb-2">Special Requirements</label>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <select defaultValue="Wheelchair Accessible Van" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                     <option value="Wheelchair Accessible Van">Wheelchair Accessible Van (Ramp Equipped)</option>
                     <option value="Transfer Assistance to Sedan">Transfer Assistance to Premium Sedan</option>
                     <option value="Child Safety Seat">Child Safety Seat Required</option>
                   </select>
                   <select defaultValue="No additional mobility aides" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                     <option value="No additional mobility aides">No additional mobility aides</option>
                     <option value="Traveling with Service Animal">Traveling with Service Animal</option>
                     <option value="Walker / Crutches Support">Walker / Crutches Storage</option>
                     <option value="Vision/Hearing Impaired Assistance">Vision/Hearing Impaired Assistance</option>
                   </select>
                 </div>
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold text-lg py-4 transition-colors uppercase tracking-wide">
                Submit Request
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">For immediate or highly specific medical transport needs, please contact support directly.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-10">
            <HeartHandshake className="w-10 h-10 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Commitment to Accessibility</h2>
          </div>
          
          <div className="prose max-w-none text-gray-600 font-medium text-lg mb-12">
            <p className="mb-6">
              At XTASS, we believe that premium mobility should be accessible to all. We are committed to providing seamless transportation experiences for passengers requiring wheelchair-accessible vehicles, child safety seats, or additional physical assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border border-gray-200 rounded">
              <Car className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wheelchair Accessible Fleet</h3>
              <p className="text-gray-600 font-medium">
                A dedicated portion of our Van/Minivan fleet is equipped with modern ramps and secure locking mechanisms to ensure a safe, comfortable ride without the need to transfer from your wheelchair.
              </p>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200 rounded">
              <CheckCircle2 className="w-8 h-8 text-brand-yellow mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Driver Awareness &amp; Training</h3>
              <p className="text-gray-600 font-medium">
                Our drivers receive specialized training in assisting passengers with visual impairments, mobility challenges, and other special needs, ensuring respectful and professional support from door to door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guidance */}
      <section className="py-20 bg-brand-maroon text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-10 tracking-tight text-center">How to Book Accessible Transport</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-8">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold shrink-0 mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Start a Reservation</h3>
                    <p className="text-white/80 font-medium">Navigate to our main booking platform or select a specific service type like Airport Transfers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold shrink-0 mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Select Vehicle Class</h3>
                    <p className="text-white/80 font-medium">Choose 'Van / Minivan' if you require a ramp-equipped vehicle for wheelchair access.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold shrink-0 mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enable Accessibility Toggle</h3>
                    <p className="text-white/80 font-medium">Check the "Requires Wheelchair Access / Special Assistance" box in the passenger details section.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-10">
                <button 
                  onClick={() => document.getElementById('accessibility-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center text-brand-maroon-dark bg-brand-yellow px-8 py-3 font-bold uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors"
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="bg-brand-maroon-dark p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-yellow">Special Arrangements</h3>
              <p className="text-white/80 font-medium mb-8 leading-relaxed">
                If your journey requires highly personalized coordination, specialized seating, or you are traveling with a registered service animal, we highly recommend contacting our dispatch team directly before booking.
              </p>
              <div className="space-y-4">
                <a href="tel:+233000000000" className="flex items-center text-white hover:text-brand-yellow transition-colors font-bold">
                  <Phone className="w-6 h-6 mr-3" /> +233 (0) 500 000 000
                </a>
                <a href="mailto:accessibility@xtass.com" className="flex items-center text-white hover:text-brand-yellow transition-colors font-bold">
                  <Mail className="w-6 h-6 mr-3" /> accessibility@xtass.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
