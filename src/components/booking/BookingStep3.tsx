import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingProgress from './BookingProgress';
import { Users, Briefcase, Settings2, ShieldCheck, ChevronDown, Check } from 'lucide-react';

export default function BookingStep3() {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);

  const vehicles = [
    {
      id: 1,
      class: 'Executive Sedan',
      model: 'Toyota Corolla or similar',
      image: 'https://i.ibb.co/0j6bZk7B/Airport-Pickup-2.jpg',
      transmission: 'Automatic',
      passengers: 4,
      luggage: 2,
      price: 450,
      badge: 'Executive Choice'
    },
    {
      id: 2,
      class: 'Premium Standard',
      model: 'Toyota Camry or similar',
      image: 'https://i.ibb.co/sv5GZPW4/Airport-Pickup-4.jpg',
      transmission: 'Automatic',
      passengers: 4,
      luggage: 3,
      price: 580,
      badge: ''
    },
    {
      id: 3,
      class: 'Luxury SUV',
      model: 'Toyota Land Cruiser Prado',
      image: 'https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg',
      transmission: 'Automatic',
      passengers: 7,
      luggage: 4,
      price: 1200,
      badge: 'Family Friendly'
    }
  ];

  return (
    <main className="flex-grow bg-gray-50 pb-24 font-sans flex flex-col">
      <BookingProgress currentStep={3} totalPrice={selectedVehicle ? vehicles.find(v => v.id === selectedVehicle)?.price : 0} />
      
      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-[100px] bg-white border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <h2 className="font-black text-gray-900 uppercase tracking-tight">Filters</h2>
            <button className="text-xs font-bold text-gray-500 hover:text-brand-maroon underline uppercase">Clear All</button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Vehicle Type</h3>
              <div className="space-y-2">
                <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon rounded-sm mr-3" defaultChecked /> Sedan
                  <span className="ml-auto text-gray-400 font-medium">2</span>
                </label>
                <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon rounded-sm mr-3" defaultChecked /> SUV
                  <span className="ml-auto text-gray-400 font-medium">1</span>
                </label>
                <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon rounded-sm mr-3" /> Van / Minivan
                  <span className="ml-auto text-gray-400 font-medium">0</span>
                </label>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
               <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Fuel Type</h3>
               <div className="space-y-2">
                <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon rounded-sm mr-3" /> Petrol Vehicle
                </label>
                <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon rounded-sm mr-3" /> Electric Vehicle
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Choose a Vehicle</h1>
            <div className="flex items-center mt-4 sm:mt-0 gap-4">
              <span className="text-sm font-bold text-gray-500">{vehicles.length} Results</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 text-sm font-bold text-gray-900 py-2 pl-4 pr-10 rounded-none outline-none focus:border-brand-maroon cursor-pointer">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Passengers: Most</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* XTASS Picks Card */}
            <div className="bg-gray-900 border-2 border-brand-yellow p-6 flex flex-col md:flex-row items-center cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="w-full md:w-1/3 flex items-center justify-center shrink-0 mb-4 md:mb-0">
                <HelpCircle className="w-24 h-24 text-gray-700" />
              </div>
              <div className="ml-0 md:ml-6 flex-grow text-center md:text-left">
                 <div className="inline-block bg-brand-yellow px-3 py-1 text-gray-900 text-xs font-black uppercase tracking-widest mb-3">XTASS Surprise</div>
                 <h2 className="text-xl font-bold text-white mb-2">Vehicle confirmed at pickup.</h2>
                 <p className="text-gray-400 font-medium text-sm">You are guaranteed a Business class vehicle or larger.</p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-center md:items-end shrink-0">
                 <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">From</p>
                 <p className="text-2xl font-black text-brand-yellow">GH₵450.00 <span className="text-sm font-medium text-gray-400">/day</span></p>
              </div>
            </div>

            {/* Vehicle List */}
            {vehicles.map((v) => {
              const isSelected = selectedVehicle === v.id;

              return (
                <div key={v.id} className={`bg-white border-2 transition-all relative overflow-hidden flex flex-col md:flex-row
                  ${isSelected ? 'border-brand-maroon shadow-lg' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}>
                  
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-maroon"></div>
                  )}

                  {/* Image Section */}
                  <div className="w-full md:w-1/3 relative shrink-0">
                     {v.badge && (
                       <div className="absolute top-4 left-0 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 z-10">
                         {v.badge}
                       </div>
                     )}
                     <img src={v.image} alt={v.model} className="w-full h-48 md:h-full object-cover" />
                  </div>

                  {/* Details Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{v.class}</h2>
                      <p className="text-gray-500 font-bold mb-4">{v.model}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-700 mb-6">
                        <span className="flex items-center"><Settings2 className="w-4 h-4 mr-2 text-gray-400" />{v.transmission}</span>
                        <span className="flex items-center"><Users className="w-4 h-4 mr-2 text-gray-400" />{v.passengers}</span>
                        <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2 text-gray-400" />{v.luggage}</span>
                      </div>
                    </div>
                    
                    <button className="text-brand-maroon font-bold text-sm underline hover:no-underline self-start">
                      Features &amp; Price Details
                    </button>
                  </div>

                  {/* Price & Action Section */}
                  <div className="p-6 md:border-l border-gray-100 flex flex-col items-center md:items-end justify-center bg-gray-50 shrink-0 w-full md:w-64">
                    <span className="bg-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest px-2 py-1 mb-4">Pay Later</span>
                    <p className="text-3xl font-black text-gray-900 leading-none">GH₵{v.price}<span className="text-sm font-medium text-gray-500">/day</span></p>
                    <p className="text-sm text-gray-500 font-medium mt-1 mb-6">Total: GH₵{(v.price * 3).toFixed(2)}</p>
                    
                    <button 
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`w-full py-4 font-bold uppercase tracking-wider text-sm transition-colors border-2 ${
                        isSelected 
                          ? 'bg-white border-brand-maroon text-brand-maroon pointer-events-none' 
                          : 'bg-brand-maroon border-brand-maroon text-white hover:bg-brand-maroon-hover'
                      }`}
                    >
                      {isSelected ? <span className="flex items-center justify-center"><Check className="w-4 h-4 mr-2" /> Selected</span> : 'Select'}
                    </button>
                  </div>

                </div>
              );
            })}

          </div>

          <div className="mt-8 flex justify-end">
            <button 
              disabled={!selectedVehicle}
              onClick={() => navigate('/booking/step-4')}
              className="px-10 py-5 bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold uppercase tracking-wider transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Add Extras
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
