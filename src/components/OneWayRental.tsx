import { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OneWayRental() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(139, 19, 49, 0.9) 0%, rgba(139, 19, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const handleRouteClick = (from: string, to: string) => {
    setPickup(from);
    setDropoff(to);
  };

  return (
    <main className="flex-grow">
      {/* Service Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden" style={heroStyle}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 text-white">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2 opacity-90">XTASS Services</p>
            <h1 
              className="text-5xl md:text-6xl font-black italic mb-6 leading-tight uppercase bg-white/20 inline-block px-2 text-transparent bg-clip-text" 
              style={{ color: 'rgba(255,255,255,0.9)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              One-Way Rental —<br />
              <span className="text-white">Pick Up Here, Drop Off There</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-medium">
              No return obligation. Collect your vehicle at one location and leave it at another.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-8">Start Your One-Way Rental</h2>
          <div className="bg-white rounded-none shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Accra" 
                      className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Drop-Off Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      placeholder="e.g. Kumasi" 
                      className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Date</label>
                  <input 
                    type="date" 
                    defaultValue="2025-06-01"
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border input-date" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Time</label>
                  <input 
                    type="time" 
                    defaultValue="09:00"
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Drop-Off Date</label>
                  <input 
                    type="date" 
                    defaultValue="2025-06-03"
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border input-date" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Drop-Off Time</label>
                  <input 
                    type="time" 
                    defaultValue="14:00"
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 font-bold text-lg py-4 transition-colors shadow-sm"
              >
                Search Rental Vehicles
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-10">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-center min-h-[12rem]">
              <h3 className="text-xl font-bold text-brand-maroon mb-3">No Repositioning Fee</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                There's no extra charge for dropping the vehicle at a different location from pickup.
              </p>
            </div>
            
            <div className="bg-brand-maroon-dark text-white p-8 shadow-sm flex flex-col justify-center min-h-[12rem] border border-brand-maroon-dark">
              <h3 className="text-xl font-bold text-brand-yellow mb-3">Flexible Drop-Off</h3>
              <p className="text-white/90 font-medium leading-relaxed">
                Drop off at a different city, town, or airport — your choice, your schedule.
              </p>
            </div>

            <div className="bg-brand-maroon text-white p-8 shadow-sm flex flex-col justify-center min-h-[12rem]">
              <h3 className="text-xl font-bold text-brand-yellow mb-3">All 6 Airports Covered</h3>
              <p className="text-white/90 font-medium leading-relaxed">
                One-way to and from all six Ghana airports is fully supported.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-center min-h-[12rem]">
              <h3 className="text-xl font-bold text-brand-maroon mb-3">Upfront Fixed Pricing</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Your fare is set at the time of booking. No surprises at drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-4">Popular Routes</h2>
          <p className="text-gray-600 font-medium mb-10">Tap a route chip to pre-fill the pickup and return locations above.</p>
          
          <div className="flex flex-wrap gap-4">
            {[
              { from: 'Accra', to: 'Kumasi' },
              { from: 'Accra', to: 'Tamale' },
              { from: 'Accra', to: 'Takoradi' },
              { from: 'Kumasi', to: 'Accra' },
              { from: 'Tamale', to: 'Accra' },
              { from: 'Accra', to: 'Cape Coast' }
            ].map((route, idx) => (
              <button 
                key={idx}
                onClick={() => handleRouteClick(route.from, route.to)}
                type="button"
                className="px-6 py-3 border-2 border-brand-maroon text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition-colors"
              >
                {route.from} &rarr; {route.to}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
