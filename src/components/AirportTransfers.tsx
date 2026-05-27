import { Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AirportTransfers() {
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  const airports = [
    { name: "Kotoka Int'l Airport", region: "Greater Accra" },
    { name: "Kumasi Airport", region: "Ashanti Region" },
    { name: "Tamale Airport", region: "Northern Region" },
    { name: "Takoradi Airport", region: "Western Region" },
    { name: "Wa Airport", region: "Upper West Region" },
    { name: "Sunyani Airport", region: "Bono Region" },
  ];

  const heroStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(139, 19, 49, 0.9) 0%, rgba(139, 19, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://i.ibb.co/zWN7ZHns/Airport-Pickup-1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <main className="flex-grow">
      {/* Service Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden" style={heroStyle}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 text-white">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-90">XTASS Services</p>
            <h1 
              className="text-5xl md:text-6xl font-black italic mb-6 leading-tight uppercase bg-white/20 inline-block px-2 text-transparent bg-clip-text" 
              style={{ color: 'rgba(255,255,255,0.9)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Airport Transfers —<br />
              <span className="text-white">Reliable Connections</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Any time, any airport, flight tracking included. XTASS gets you there — and back.
            </p>
            <button 
              onClick={() => document.getElementById('airport-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-8 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="airport-form" className="relative z-10 max-w-[64rem] mx-auto px-4 -mt-16 mb-16">
        <div className="bg-white p-8 shadow-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Airport Transfer</h2>
          <form onSubmit={handleBookingSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <input 
                  type="text" 
                  defaultValue="Labadi Beach Hotel"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Flight Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. BA081"
                  defaultValue="BA081"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Date</label>
                <input 
                  type="date" 
                  defaultValue="2025-06-20"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow input-date"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-900 mb-2">Time (Flight Arrival/Departure)</label>
                 <input 
                  type="time" 
                  defaultValue="10:00"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>
              
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-gray-900 mb-2">Luggage & Passengers</label>
                 <div className="grid grid-cols-2 gap-4">
                   <select defaultValue="2 Passengers" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                     <option value="1 Passenger">1 Passenger</option>
                     <option value="2 Passengers">2 Passengers</option>
                     <option value="3-4 Passengers">3-4 Passengers</option>
                     <option value="5+ Passengers">5+ Passengers</option>
                   </select>
                   <select defaultValue="2 Large, 1 Small" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-yellow">
                     <option value="Carry-on Only">Carry-on Only</option>
                     <option value="1-2 Large Bags">1-2 Large Bags</option>
                     <option value="2 Large, 1 Small">2 Large, 1 Small</option>
                     <option value="Lots of Luggage">Lots of Luggage (Van Required)</option>
                   </select>
                 </div>
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold text-lg py-4 transition-colors uppercase tracking-wide">
                Complete Booking
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">We actively track your flight to adjust pickup times in case of delays.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Airports We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Airports We Serve</h2>
            <p className="text-gray-600 text-lg">XTASS provides transfers at all six major Ghana airports — covering both arrivals and departures across the country.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airports.map((airport, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-brand-maroon text-lg mb-1">{airport.name}</h3>
                <p className="text-gray-500 text-sm">{airport.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automatic Flight Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Automatic Flight Tracking</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              XTASS connects to live flight data and automatically monitors your flight status. If your flight is early or delayed, the driver's pickup time is adjusted — no action required from you.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-maroon">
              <h3 className="text-xl font-bold text-brand-maroon mb-2">Live Flight Monitoring</h3>
              <p className="text-gray-600">We track your flight in real time so your driver is always synced with your arrival.</p>
            </div>
            <div className="bg-brand-maroon-dark text-white p-8 rounded-sm shadow-sm">
              <h3 className="text-xl font-bold text-brand-yellow mb-2">No Action Required</h3>
              <p className="text-white/90">You don't need to notify XTASS of changes. Our system handles it automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-4">End-to-End Coverage</h2>
          <p className="text-gray-600 text-lg mb-8">One booking can cover all four legs of your journey:</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Pickup at home → drop-off at your departure airport</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Pickup at your arrival airport → delivery to your destination</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Return leg booked in the same session</span>
            </li>
            <li className="flex items-start">
              <Check className="w-4 h-4 text-brand-yellow mt-1.5 mr-3 flex-shrink-0" />
              <span>Available in both your home city and your destination city</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-maroon text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Book Your Airport Transfer</h2>
          <p className="text-white/80 text-lg mb-8">Stress-free airport transport, every time.</p>
          <button 
            onClick={() => document.getElementById('airport-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-brand-yellow text-gray-900 font-bold text-sm px-10 py-3.5 hover:bg-brand-yellow-hover transition duration-300 shadow-sm"
          >
            Book Now
          </button>
        </div>
      </section>
    </main>
  );
}
