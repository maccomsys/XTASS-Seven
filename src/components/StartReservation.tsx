import React from "react";
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, HelpCircle, ShieldCheck, Map, ArrowRight } from 'lucide-react';

export default function StartReservation() {
  const [searchParams] = useSearchParams();
  const [rideType, setRideType] = useState('Sedan');
  const [pickup, setPickup] = useState('');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      if (type.toLowerCase() === 'sedan') setRideType('Sedan');
      if (type.toLowerCase() === 'suv') setRideType('SUV');
      if (type.toLowerCase() === 'van') setRideType('Van / Minivan');
    }
  }, [searchParams]);

  const handleDestinationClick = (dest: string) => {
    setPickup(dest);
  };

  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Reservation Form Section */}
      <section className="bg-brand-maroon pb-20 pt-16 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Reserve a Vehicle</h1>
            <Link to="/manage-reservation" className="text-brand-yellow hover:text-white transition-colors font-bold mt-4 md:mt-0 underline underline-offset-4 decoration-2">
              or View / Modify / Cancel Reservation
            </Link>
          </div>

          <div className="bg-white rounded-none shadow-2xl overflow-hidden">
            <div className="bg-brand-yellow text-brand-maroon-dark font-bold text-center py-2 text-sm uppercase tracking-wider">
              High-demand dates approaching. Reserve now.
            </div>
            <div className="p-8">
              <form onSubmit={handleSearchSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-bold text-gray-900 mb-2">Ride Type</label>
                    <select 
                      value={rideType}
                      onChange={(e) => setRideType(e.target.value)}
                      className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon pt-3 pb-3 px-3 outline-none"
                    >
                      <option value="Sedan">Executive Sedan (1-3 Pax)</option>
                      <option value="SUV">Luxury SUV (1-4 Pax)</option>
                      <option value="Van / Minivan">Corporate Minivan (5-8 Pax)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Passengers</label>
                    <div className="relative">
                      <select className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon pt-3 pb-3 pl-10 pr-3 outline-none appearance-none">
                        <option>1 Passenger</option>
                        <option>2 Passengers</option>
                        <option>3 Passengers</option>
                        <option>4+ Passengers</option>
                      </select>
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-gray-900 mb-2 opacity-0 hidden lg:block">Submit</label>
                     <button type="submit" className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 font-bold py-3 transition-colors shadow-sm whitespace-nowrap h-[48px]">
                       Find Vehicles
                     </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Location</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Address, Airport, or City" 
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon pt-3 pb-3 pl-10 pr-3 outline-none" 
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Return Location</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Same as pickup" 
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon pt-3 pb-3 pl-10 pr-3 outline-none" 
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon py-3 px-3 outline-none text-gray-600" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Time</label>
                    <div className="relative">
                      <input 
                        type="time" 
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon py-3 px-3 outline-none text-gray-600" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Return Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon py-3 px-3 outline-none text-gray-600" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Return Time</label>
                    <div className="relative">
                      <input 
                        type="time"  
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon py-3 px-3 outline-none text-gray-600" 
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Car Rental FAQs</h3>
            <p className="text-gray-600 mb-4 text-sm font-medium">Looking for answers? Find everything you need to know about our rental process and policies.</p>
            <button className="text-brand-maroon font-bold text-sm uppercase tracking-wider flex items-center hover:text-brand-maroon-hover">
              View FAQs <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Standard of Care</h3>
            <p className="text-gray-600 mb-4 text-sm font-medium">Learn about our rigorous vehicle maintenance, sanitization, and safety protocols.</p>
            <button className="text-brand-maroon font-bold text-sm uppercase tracking-wider flex items-center hover:text-brand-maroon-hover">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="bg-white border border-gray-200 shadow-lg p-6 hover:-translate-y-1 transition-transform group">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Your Trip</h3>
            <p className="text-gray-600 mb-4 text-sm font-medium">Exploring Ghana? Read our guide on the best routes to take and local driving tips.</p>
            <button className="text-brand-maroon font-bold text-sm uppercase tracking-wider flex items-center hover:text-brand-maroon-hover">
              What to Consider <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Buttons: Fleet & Service Areas */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/vehicle-fleet" className="px-8 py-4 border-2 border-brand-maroon text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition-colors uppercase tracking-wider text-sm shadow-sm">
            View All Rental Vehicles
          </Link>
          <Link to="/service-areas" className="px-8 py-4 border-2 border-brand-maroon text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition-colors uppercase tracking-wider text-sm shadow-sm">
            See All Service Areas
          </Link>
        </div>
      </section>

      {/* Popular Destinations List */}
      <section className="bg-white border-t border-b border-gray-200 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-black text-brand-maroon mb-10 text-center uppercase tracking-tight">Select a Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand-yellow inline-block">Ghana Cities</h3>
              <ul className="space-y-3">
                {['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Cape Coast'].map(city => (
                  <li key={city}>
                    <button onClick={() => handleDestinationClick(city)} className="text-gray-600 hover:text-brand-maroon font-medium transition-colors text-left w-full cursor-pointer">
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand-yellow inline-block">Ghana Airports</h3>
              <ul className="space-y-3">
                {['Kotoka Int\'l Airport (ACC)', 'Kumasi Airport (KMS)', 'Tamale Airport (TML)', 'Takoradi Airport (TKD)', 'Sunyani Airport (NYI)'].map(apt => (
                  <li key={apt}>
                    <button onClick={() => handleDestinationClick(apt)} className="text-gray-600 hover:text-brand-maroon font-medium transition-colors text-left w-full cursor-pointer">
                      {apt}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-brand-yellow inline-block">Popular Destinations</h3>
              <ul className="space-y-3">
                {['Mole National Park', 'Kakum National Park', 'Aburi Botanical Gardens', 'Labadi Beach', 'Boti Falls'].map(dest => (
                  <li key={dest}>
                    <button onClick={() => handleDestinationClick(dest)} className="text-gray-600 hover:text-brand-maroon font-medium transition-colors text-left w-full cursor-pointer">
                      {dest}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Rental Types */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-black text-brand-maroon mb-8 tracking-tight">Explore Rental Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* One-Way */}
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
            <img src="https://i.ibb.co/Q7qygPGB/Resized-4.jpg" alt="One-Way Rental" className="h-48 w-full object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">One-Way Rental</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">Convenient inter-city travel. Pick up your vehicle in one location and drop it off at another.</p>
              <Link to="/one-way-rental" className="text-brand-maroon font-bold text-sm uppercase tracking-wider hover:text-brand-maroon-hover inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          {/* Long-Term */}
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
            <img src="https://i.ibb.co/Q7qygPGB/Resized-4.jpg" alt="Long-Term Rental" className="h-48 w-full object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Rental</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">Enjoy special discounted rates and unlimited mileage for rentals lasting 28 days or longer.</p>
              <Link to="/long-term-rental" className="text-brand-maroon font-bold text-sm uppercase tracking-wider hover:text-brand-maroon-hover inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          {/* Weekend */}
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
            <img src="https://i.ibb.co/5X2DH7NV/Airport-Pickup-8.jpg" alt="Weekend Rental" className="h-48 w-full object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weekend Rental</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">Special off-peak rates and flexible Sunday returns for your weekend getaways.</p>
              <Link to="/weekend-rental" className="text-brand-maroon font-bold text-sm uppercase tracking-wider hover:text-brand-maroon-hover inline-flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
