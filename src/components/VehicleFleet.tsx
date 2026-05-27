import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, Car, ShieldCheck, Check, Filter } from 'lucide-react';

export default function VehicleFleet() {
  const [passengerFilter, setPassengerFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [featureFilter, setFeatureFilter] = useState('All');

  return (
    <main className="flex-grow bg-gray-50 pb-20">
      {/* Header */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">XTASS Vehicle Fleet</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Explore our meticulously maintained fleet. From efficient sedans to spacious vans, find the perfect vehicle for your journey.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gray-700 font-bold">
            <Filter className="w-5 h-5 mr-2" />
            Filter Fleet
          </div>
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <select 
              className="border border-gray-300 rounded-none px-4 py-2 text-sm font-medium focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none"
              value={passengerFilter}
              onChange={(e) => setPassengerFilter(e.target.value)}
            >
              <option value="All">Passengers (Any)</option>
              <option value="1-3">1–3 Passengers</option>
              <option value="1-4">1–4 Passengers</option>
              <option value="5-8">5–8 Passengers</option>
            </select>
            <select 
              className="border border-gray-300 rounded-none px-4 py-2 text-sm font-medium focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none"
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
            >
              <option value="All">Service Level (Any)</option>
              <option value="Premium">Premium</option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
              <option value="Basic">Basic</option>
            </select>
            <select 
              className="border border-gray-300 rounded-none px-4 py-2 text-sm font-medium focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon outline-none"
              value={featureFilter}
              onChange={(e) => setFeatureFilter(e.target.value)}
            >
              <option value="All">Features (All)</option>
              <option value="Air Conditioning">Air Conditioning</option>
              <option value="Wi-Fi">Wi-Fi</option>
              <option value="GPS">GPS</option>
              <option value="AWD">AWD Option</option>
            </select>
          </div>
        </div>
      </section>

      {/* Fleet Listing */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 space-y-20">
        
        {/* Sedan Category */}
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-gray-100 relative">
            <img 
              src="https://i.ibb.co/HTVggwbD/Airport-Pickup-5.jpg" 
              alt="Executive Sedan" 
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute top-4 left-4 bg-brand-yellow text-brand-maroon-dark font-bold text-xs px-3 py-1 uppercase tracking-widest shadow-sm">
              Most Popular
            </div>
          </div>
          <div className="p-8 md:w-7/12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-black text-brand-maroon tracking-tight">Executive Sedan</h2>
                <div className="text-right">
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wider block">From</span>
                  <span className="text-2xl font-black text-gray-900">GH₵ 350<span className="text-sm font-medium text-gray-500">/day</span></span>
                </div>
              </div>
              <p className="text-gray-600 font-medium mb-6">
                Perfect for city drives, airport transfers, and business meetings. Efficient, comfortable, and thoroughly modern.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <User className="w-5 h-5 mr-3 text-brand-maroon" /> 1–3 Passengers
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <Briefcase className="w-5 h-5 mr-3 text-brand-maroon" /> 3 Bags
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <ShieldCheck className="w-5 h-5 mr-3 text-brand-maroon" /> Premium, Business, Economy, Basic
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <Car className="w-5 h-5 mr-3 text-brand-maroon" /> Automatic
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {['Air Conditioning', 'Bluetooth Audio', 'USB Charger', 'Premium Seating'].map(feature => (
                    <span key={feature} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full border border-gray-200">
                      <Check className="w-3 h-3 inline mr-1 text-green-600" /> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/start-reservation?type=sedan"
              className="block w-full text-center bg-brand-maroon text-white font-bold py-4 hover:bg-brand-maroon-hover transition-colors shadow-sm"
            >
              Book This Vehicle
            </Link>
          </div>
        </div>

        {/* SUV Category */}
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-gray-100 relative">
            <img 
              src="https://i.ibb.co/HTVggwbD/Airport-Pickup-5.jpg" 
              alt="Luxury All-Terrain SUV" 
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
          <div className="p-8 md:w-7/12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-black text-brand-maroon tracking-tight">Luxury All-Terrain SUV</h2>
                <div className="text-right">
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wider block">From</span>
                  <span className="text-2xl font-black text-gray-900">GH₵ 550<span className="text-sm font-medium text-gray-500">/day</span></span>
                </div>
              </div>
              <p className="text-gray-600 font-medium mb-6">
                Command the road with confidence. Exceptional comfort combined with rugged capability for any journey in Ghana.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <User className="w-5 h-5 mr-3 text-brand-maroon" /> 1–4 Passengers
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <Briefcase className="w-5 h-5 mr-3 text-brand-maroon" /> 4 Bags
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <ShieldCheck className="w-5 h-5 mr-3 text-brand-maroon" /> Premium, Business
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <Car className="w-5 h-5 mr-3 text-brand-maroon" /> AWD Option
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {['Air Conditioning', 'Large Boot Space', 'AWD Option', 'Leather Interior'].map(feature => (
                    <span key={feature} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full border border-gray-200">
                      <Check className="w-3 h-3 inline mr-1 text-green-600" /> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/start-reservation?type=suv"
              className="block w-full text-center bg-brand-maroon text-white font-bold py-4 hover:bg-brand-maroon-hover transition-colors shadow-sm"
            >
              Book This Vehicle
            </Link>
          </div>
        </div>

        {/* Van / Minivan Category */}
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-gray-100 relative">
            <img 
              src="https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg" 
              alt="Corporate Minivan" 
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
          <div className="p-8 md:w-7/12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-black text-brand-maroon tracking-tight">Corporate Minivan</h2>
                <div className="text-right">
                  <span className="text-sm text-gray-500 font-bold uppercase tracking-wider block">From</span>
                  <span className="text-2xl font-black text-gray-900">GH₵ 800<span className="text-sm font-medium text-gray-500">/day</span></span>
                </div>
              </div>
              <p className="text-gray-600 font-medium mb-6">
                Superior group transport. Offers high-capacity seating alongside abundant cargo room without compromising on comfort.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <User className="w-5 h-5 mr-3 text-brand-maroon" /> 5–8 Passengers
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <Briefcase className="w-5 h-5 mr-3 text-brand-maroon" /> 6 Bags
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <ShieldCheck className="w-5 h-5 mr-3 text-brand-maroon" /> Premium, Business
                </div>
                <div className="flex items-center text-gray-700 font-medium text-sm">
                  <Car className="w-5 h-5 mr-3 text-brand-maroon" /> Automatic
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {['Multiple Seating Rows', 'Air Conditioning', 'Large Luggage Space', 'Wi-Fi Available'].map(feature => (
                    <span key={feature} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full border border-gray-200">
                      <Check className="w-3 h-3 inline mr-1 text-green-600" /> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/start-reservation?type=van"
              className="block w-full text-center bg-brand-maroon text-white font-bold py-4 hover:bg-brand-maroon-hover transition-colors shadow-sm"
            >
              Book This Vehicle
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
