import { Car, CheckCircle, ChevronDown, CalendarCheck, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const [rideType, setRideType] = useState('Instant Pickup');
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  return (
    <div className="relative z-10 max-w-[64rem] mx-auto px-4 -mt-24 mb-16">
      <form onSubmit={handleBookingSubmit} className="bg-white p-8 shadow-2xl border border-gray-100">
        
        <div className="mb-6">
          <label className="text-sm font-bold text-gray-900 mb-2 block">Type of Ride</label>
          <div className="relative">
            <select 
              value={rideType}
              onChange={(e) => setRideType(e.target.value)}
              className="w-full border border-gray-200 p-3 pr-10 text-sm appearance-none focus:outline-none focus:border-brand-yellow font-medium select-none"
            >
              <option value="Instant Pickup">Instant Pickup</option>
              <option value="Scheduled Pickup">Scheduled Pickup</option>
              <option value="Airport Transfers">Airport Transfers</option>
              <option value="One-Way Rental">One-Way Rental</option>
              <option value="Long-Term Rental">Long-Term Rental</option>
              <option value="Weekend Rental">Weekend Rental</option>
              <option value="Group Transportation">Group Transportation</option>
              <option value="Accessibility Transport">Accessibility Transport</option>
            </select>
            <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Custom Fields per Ride Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rideType === 'Instant Pickup' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Location</label>
                <input type="text" defaultValue="East Legon, Accra" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop Off Location</label>
                <input type="text" defaultValue="Kotoka International Airport" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Service Class</label>
                 <select defaultValue="Premium" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="Premium">Premium</option>
                   <option value="Business">Business</option>
                   <option value="Economy">Economy</option>
                   <option value="Basic">Basic</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Passengers</label>
                 <select defaultValue="1" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="1">1 Passenger</option>
                   <option value="2">2 Passengers</option>
                   <option value="3">3 Passengers</option>
                   <option value="4+">4+ Passengers</option>
                 </select>
              </div>
            </>
          )}

          {rideType === 'Scheduled Pickup' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Date</label>
                <input type="date" defaultValue="2025-06-15" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Time</label>
                <input type="time" defaultValue="14:30" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Location</label>
                <input type="text" defaultValue="Kempinski Hotel Gold Coast City" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop Off Location</label>
                <input type="text" defaultValue="Accra International Conference Centre" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Service Class</label>
                 <select defaultValue="Business" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="Premium">Premium</option>
                   <option value="Business">Business</option>
                   <option value="Economy">Economy</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Passengers</label>
                 <select defaultValue="2" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="1">1 Passenger</option>
                   <option value="2">2 Passengers</option>
                   <option value="3">3 Passengers</option>
                   <option value="4+">4+ Passengers</option>
                 </select>
              </div>
            </>
          )}

          {rideType === 'Airport Transfers' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Direction</label>
                 <select defaultValue="From Airport" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="To Airport">To Airport</option>
                   <option value="From Airport">From Airport</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Airport</label>
                 <select defaultValue="Kotoka Int'l Airport" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                  <option value="Kotoka Int'l Airport">Kotoka Int'l Airport</option>
                  <option value="Kumasi Airport">Kumasi Airport</option>
                  <option value="Tamale Airport">Tamale Airport</option>
                  <option value="Takoradi Airport">Takoradi Airport</option>
                  <option value="Wa Airport">Wa Airport</option>
                  <option value="Sunyani Airport">Sunyani Airport</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Address / Hotel</label>
                <input type="text" defaultValue="Labadi Beach Hotel" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Flight Number</label>
                <input type="text" defaultValue="BA081" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Date</label>
                <input type="date" defaultValue="2025-06-20" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Time (Arrival/Departure)</label>
                <input type="time" defaultValue="10:00" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Passengers</label>
                 <select defaultValue="2 Passengers" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="1 Passenger">1 Passenger</option>
                   <option value="2 Passengers">2 Passengers</option>
                   <option value="3-4 Passengers">3-4 Passengers</option>
                   <option value="5+ Passengers">5+ Passengers</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Luggage</label>
                 <select defaultValue="2 Large, 1 Small" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="Carry-on Only">Carry-on Only</option>
                   <option value="1-2 Large Bags">1-2 Large Bags</option>
                   <option value="2 Large, 1 Small">2 Large, 1 Small</option>
                   <option value="Lots of Luggage">Lots of Luggage</option>
                 </select>
              </div>
            </>
          )}

          {rideType === 'One-Way Rental' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pickup Location</label>
                <input type="text" defaultValue="Accra" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop-Off Location</label>
                <input type="text" defaultValue="Kumasi" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pickup Date</label>
                <input type="date" defaultValue="2025-06-01" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pickup Time</label>
                <input type="time" defaultValue="09:00" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop-Off Date</label>
                <input type="date" defaultValue="2025-06-03" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop-Off Time</label>
                <input type="time" defaultValue="14:00" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
            </>
          )}

          {rideType === 'Long-Term Rental' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Location</label>
                <input type="text" defaultValue="Accra Main Branch" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Rental Type</label>
                 <select defaultValue="Monthly (30+ Days)" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="Monthly (30+ Days)">Monthly (30+ Days)</option>
                   <option value="Weekly (7-28 Days)">Weekly (7-28 Days)</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Start Date</label>
                <input type="date" defaultValue="2025-07-01" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Duration</label>
                 <select defaultValue="1 Month" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="1 Week">1 Week</option>
                   <option value="2 Weeks">2 Weeks</option>
                   <option value="1 Month">1 Month</option>
                   <option value="2 Months">2 Months</option>
                   <option value="3+ Months">3+ Months</option>
                 </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-gray-900 mb-2">Vehicle Preference</label>
                 <select defaultValue="Executive Sedan" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="Executive Sedan">Executive Sedan</option>
                   <option value="Luxury SUV">Luxury SUV</option>
                   <option value="Corporate Minivan">Corporate Minivan</option>
                   <option value="Compact Economy">Compact Economy</option>
                 </select>
              </div>
            </>
          )}

          {rideType === 'Weekend Rental' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pickup Location</label>
                <input type="text" defaultValue="Accra Mall" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop-Off Location</label>
                <input type="text" defaultValue="Kotoka Int'l Airport" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pickup Date</label>
                <input type="date" defaultValue="2025-06-06" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pickup Time</label>
                <input type="time" defaultValue="17:00" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Return Date</label>
                <input type="date" defaultValue="2025-06-08" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Return Time</label>
                <input type="time" defaultValue="18:00" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
            </>
          )}

          {rideType === 'Group Transportation' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Event / Pickup Location</label>
                <input type="text" defaultValue="Accra International Conference Centre" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Destination Location</label>
                <input type="text" defaultValue="Peduase Lodge" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Passengers</label>
                 <select defaultValue="10-20 Passengers" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="5-9 Passengers">5-9 Passengers</option>
                   <option value="10-20 Passengers">10-20 Passengers</option>
                   <option value="20-50 Passengers">20-50 Passengers</option>
                   <option value="50+ Passengers">50+ Passengers</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Event Type</label>
                 <select defaultValue="Conference / Corporate" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                   <option value="Conference / Corporate">Conference / Corporate</option>
                   <option value="Wedding / Celebration">Wedding / Celebration</option>
                   <option value="Tour / Sightseeing">Tour / Sightseeing</option>
                   <option value="Airport Group Transfer">Airport Group Transfer</option>
                 </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Start Date</label>
                <input type="date" defaultValue="2025-08-10" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">End Date (Optional)</label>
                <input type="date" defaultValue="2025-08-12" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
            </>
          )}

          {rideType === 'Accessibility Transport' && (
            <>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Location</label>
                <input type="text" defaultValue="Korle Bu Teaching Hospital" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Drop Off Location</label>
                <input type="text" defaultValue="Cantonments" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Date</label>
                <input type="date" defaultValue="2025-06-12" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Pick Up Time</label>
                <input type="time" defaultValue="10:30" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow" />
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
            </>
          )}
        </div>

        <div className="mt-8">
          <button type="submit" className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-maroon font-bold text-lg py-3.5 transition-colors uppercase tracking-wide">
            Book {rideType}
          </button>
        </div>

      </form>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white min-h-[500px] flex flex-col items-center justify-center pt-16 pb-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-85" 
        style={{ backgroundImage: "url('https://i.ibb.co/svMbtFfn/XTASS-Hero-Banner-2.jpg')" }}
      />
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-[0.12em] mb-4">
          Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight leading-none mb-6 text-white drop-shadow-md">
          Xcellent Transport &<br />Shuttle Services
        </h1>
        <p className="text-lg md:text-xl font-bold text-brand-yellow tracking-wide mt-2">
          Trusted Transport Services for Every Traveler
        </p>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "Can I book rides in both my departure and arrival cities?", a: "Yes. When you book with XTASS, you can schedule all four legs of your trip with rides to and from the airport in both your home city and your destination. One booking takes care of it all." },
    { q: "What happens if my flight is delayed or cancelled?", a: "We track your flight status to adjust pickup times accordingly. If your flight is cancelled, please contact our support to reschedule or cancel your ride." },
    { q: "How do I know if you operate at my airport?", a: "We operate at all major airports across Ghana. You can check the \"Where We Go\" section on our homepage or enter your airport in the booking form to confirm." },
    { q: "What kind of vehicles do you use for airport transportation?", a: "We offer a wide range of vehicles to suit your needs, including sedans, SUVs, and vans for larger groups. All vehicles are clean, modern, and regularly inspected for safety." }
  ];

  return (
    <section className="py-20 bg-brand-maroon-dark">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/20 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between text-left text-lg font-bold text-white py-2 focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="pt-2 text-white/90 text-base leading-relaxed pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MainContent() {
  const navigate = useNavigate();

  return (
    <main>
      <HeroSection />
      <BookingForm />

      {/* Airport Transportation Split */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center relative">
            <div className="w-full md:w-[60%] flex-shrink-0 z-0 shadow-2xl">
              <img src="https://i.ibb.co/S7HBYCvk/Airport-Transportation.jpg" alt="Airport Van" className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto" />
            </div>
            <div className="w-full md:w-[50%] bg-white p-10 md:p-14 shadow-2xl relative z-10 md:-ml-24 mt-[-2rem] md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight text-gray-900">Airport Transportation</h2>
              <div className="w-20 h-1 bg-gray-900 my-6" />
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                Reserve shared ride or private airport transportation in your departure and destination city. Vans, sedans, or SUVs.
              </p>
              <button 
                onClick={() => navigate('/airport-transfers')}
                className="bg-brand-maroon-dark text-white font-bold py-3 px-10 text-sm hover:bg-brand-maroon transition-colors tracking-wide"
              >
                AIRPORT RIDES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Car Split */}
      <section className="py-16 md:py-24 bg-brand-maroon-dark text-white">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center relative">
            <div className="w-full md:w-[60%] flex-shrink-0 z-0 shadow-2xl bg-black/20">
              <img src="https://i.ibb.co/99HNcLqx/Private-Car-Service.png" alt="Private Car" className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto mix-blend-lighten opacity-80" />
            </div>
            <div className="w-full md:w-[50%] bg-brand-maroon p-10 md:p-14 shadow-2xl relative z-10 md:-mr-24 mt-[-2rem] md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight text-white">Private Car Service</h2>
              <div className="w-20 h-1 bg-white my-6" />
              <p className="text-white/90 leading-relaxed mb-8 text-base md:text-lg">
                Travel on your schedule with a private driver. Book by the hour or choose point-to-point transfers.
              </p>
              <button 
                onClick={() => navigate('/start-reservation')}
                className="bg-white text-brand-maroon-dark font-bold py-3 px-10 text-sm hover:bg-gray-100 transition-colors tracking-wide"
              >
                PRIVATE CAR SERVICE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#EEE3E9]">
        <div className="max-w-[80rem] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-brand-maroon mb-6">Door-to-Door Airport Transportation</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                XTASS has been providing affordable, convenient, and safe shared ride and private airport transfers. We pioneered the shared ride concept with specialization in grouping and routing passengers traveling in the same direction together in an airport shuttle.
              </p>
              <p>
                Booking with XTASS means choosing an organization that values safety, affordability, and convenience. With transparent fares, and the assurance of reliable transport, we'll not only meet your travel demands, but exceed them.
              </p>
              <p className="font-bold text-gray-900 pt-4">Book your ride with us today!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-brand-maroon p-8">
              <h4 className="font-bold text-xl text-brand-maroon mb-3">Upfront Pricing</h4>
              <p className="text-brand-maroon text-sm leading-relaxed">All inclusive fares with no hidden fees or additional charges for reserving in advance.</p>
            </div>
            <div className="bg-brand-maroon-dark p-8">
              <h4 className="font-bold text-xl text-white mb-3">Departure & Destination</h4>
              <p className="text-white/90 text-sm leading-relaxed">Book transportation for all four legs of your journey in your departure and destination cities.</p>
            </div>
            <div className="bg-brand-maroon-dark p-8">
              <h4 className="font-bold text-xl text-white mb-3">Available 24/7</h4>
              <p className="text-white/90 text-sm leading-relaxed">Book airport rides, around town transportation, or tours and attractions securely anytime.</p>
            </div>
            <div className="bg-white border border-brand-maroon p-8">
              <h4 className="font-bold text-xl text-brand-maroon mb-3">Safety First</h4>
              <p className="text-brand-maroon text-sm leading-relaxed">From background and safety checks to deep cleaning standards, we're doing our part.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/wFXkyNhy/How-it-works-background-section-image.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-brand-maroon/80" />
        <div className="relative z-10 max-w-[80rem] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-2 border-brand-yellow text-brand-yellow flex items-center justify-center mb-6">
                 <Search className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold uppercase mb-2">1. Search</h4>
               <p className="text-white/90">Tell us where you're going.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-2 border-brand-yellow text-brand-yellow flex items-center justify-center mb-6">
                 <CheckCircle className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold uppercase mb-2">2. Select</h4>
               <p className="text-white/90">Choose your ride type.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-2 border-brand-yellow text-brand-yellow flex items-center justify-center mb-6">
                 <CalendarCheck className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold uppercase mb-2">3. Book</h4>
               <p className="text-white/90">Confirm your ride.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-2 border-brand-yellow text-brand-yellow flex items-center justify-center mb-6">
                 <Car className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold uppercase mb-2">4. GO</h4>
               <p className="text-white/90">Your driver meets you curbside.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Where We Go */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-maroon italic mb-4">Where We Go</h2>
          <p className="text-gray-500 mb-12 text-lg">Connecting you to major airports across Ghana. Your journey, our priority.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
            {["Kotoka Int'l Airport", "Tamale Airport", "Takoradi Airport", "Kumasi Airport", "Wa Airport", "Sunyani Airport"].map((airport) => (
              <button 
                key={airport}
                onClick={() => navigate('/airport-transfers')}
                className="bg-brand-maroon-dark hover:bg-brand-maroon-hover text-white font-bold py-4 px-2 text-sm md:text-base transition-colors shadow-sm"
              >
                {airport}
              </button>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />
    </main>
  );
}
