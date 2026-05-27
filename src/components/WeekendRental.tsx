import React from "react";
import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WeekendRental() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    // Calculate days until next Friday
    let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    if (daysUntilFriday === 0 && today.getHours() > 18) {
      // If it's late Friday, maybe look to next Friday
      daysUntilFriday = 7;
    }
    
    const nextFriday = new Date(today);
    nextFriday.setDate(today.getDate() + daysUntilFriday);
    
    const followingSunday = new Date(nextFriday);
    followingSunday.setDate(nextFriday.getDate() + 2);

    const formatDate = (date: Date) => {
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    };

    setPickupDate(formatDate(nextFriday));
    setReturnDate(formatDate(followingSunday));
  }, []);

  const heroStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(139, 19, 49, 0.9) 0%, rgba(139, 19, 49, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url("https://i.ibb.co/sv5GZPW4/Airport-Pickup-4.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const handleDestinationClick = (destination: string) => {
    setPickupLocation('Accra'); 
    setDropoffLocation(destination);
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
              Your Weekend,<br />
              <span className="text-white">Your Way</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-medium">
              Explore the city or escape it. Enjoy special off-peak rates and flexible returns for weekend rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-8">Start Your Weekend Getaway</h2>
          <div className="bg-white rounded-none shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="e.g. Accra Mall" 
                      className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Return Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      placeholder="e.g. Kotoka Int'l Airport" 
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
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border input-date" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Time</label>
                  <input 
                    type="time" 
                    defaultValue="17:00" 
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Return Date</label>
                  <input 
                    type="date" 
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border input-date" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Return Time</label>
                  <input 
                    type="time" 
                    defaultValue="18:00" 
                    className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 border" 
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 font-bold text-lg py-4 transition-colors shadow-sm"
              >
                Find Vehicles
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-brand-maroon mb-10 text-center">Weekend Rental Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-maroon-dark text-brand-yellow flex items-center justify-center rounded-full mb-6 relative">
                 <span className="font-bold text-xl">%</span>
              </div>
              <h3 className="text-xl font-bold text-brand-maroon mb-3">Off-Peak Rates</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Enjoy significantly lower pricing for rentals starting Friday afternoon and concluding by Sunday evening compared to weekday business rates.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-brand-maroon-dark text-white p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-yellow text-brand-maroon-dark flex items-center justify-center rounded-full mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-yellow mb-3">No Return Pressure</h3>
              <p className="text-white/90 font-medium leading-relaxed">
                We offer flexible Sunday return windows. Sleep in, take your time, and drop off the vehicle whenever you're ready before the rental office closes.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-brand-maroon text-white p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white/20 text-white flex items-center justify-center rounded-full mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-yellow mb-3">City Exploration</h3>
              <p className="text-white/90 font-medium leading-relaxed">
                The perfect way to discover Ghana’s vibrant cities, hidden coastal spots, and exciting local attractions at your own unique pace.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-brand-maroon mb-4">Popular Weekend Destinations</h2>
          <p className="text-gray-600 font-medium mb-10">Tap a destination to pre-fill your trip starting from Accra.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              'Labadi Beach',
              'Kokrobite',
              'Mole National Park',
              'Kakum National Park',
              'Aburi Botanical Gardens',
              'Cape Coast Castle'
            ].map((destination, idx) => (
              <button 
                key={idx}
                onClick={() => handleDestinationClick(destination)}
                type="button"
                className="px-6 py-3 border-2 border-brand-maroon text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition-colors"
              >
                {destination}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
