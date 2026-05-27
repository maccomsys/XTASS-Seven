import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Accessibility, MapPin, Calendar, Users, Phone, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function SpecialNeeds() {
  const navigate = useNavigate();
  
  // State
  const [needsWheelchair, setNeedsWheelchair] = useState(true);
  const [pickup, setPickup] = useState('Kotoka International Airport (ACC)');
  const [dropoff, setDropoff] = useState('Kempinski Hotel Gold Coast City Accra');
  const [date, setDate] = useState('2024-11-15');
  const [time, setTime] = useState('14:30');
  const [passengers, setPassengers] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/available-vehicles');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 flex items-start">
          <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mr-6 shrink-0 mt-1">
            <Accessibility className="w-8 h-8 text-gray-900" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Accessible Transport
            </h1>
            <p className="text-gray-300 font-medium text-lg max-w-2xl">
               Book a ride structured around your specific needs. Our vehicles and drivers are equipped to provide safe, comfortable transit.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
        
        <form onSubmit={handleSearch} className="bg-white shadow-2xl border border-gray-100 p-8">
          
          {/* Accessibility Options */}
          <div className="bg-blue-50 border border-blue-200 p-6 mb-8">
             <div className="flex items-start mb-6 border-b border-blue-200 pb-4">
               <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 shrink-0" />
               <div>
                  <h2 className="text-lg font-black text-blue-900 uppercase tracking-widest leading-none mb-2">Special Assistance Included</h2>
                  <p className="text-blue-800 text-sm font-medium">Our drivers are trained to assist passengers with special needs from pickup to dropoff.</p>
               </div>
             </div>

             <label className="flex items-center cursor-pointer group bg-white border border-blue-100 p-4 shadow-sm hover:border-blue-300 transition-colors">
                <div className={`w-8 h-8 rounded border-2 flex items-center justify-center mr-4 transition-colors ${needsWheelchair ? 'border-brand-maroon bg-brand-maroon' : 'border-gray-300 bg-gray-50 group-hover:border-gray-400'}`}>
                  {needsWheelchair && <Accessibility className="w-5 h-5 text-white" />}
                </div>
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={needsWheelchair}
                  onChange={(e) => setNeedsWheelchair(e.target.checked)}
                />
                <div>
                  <span className="font-black text-gray-900 text-lg uppercase tracking-wider block">Wheelchair Accessible Vehicle</span>
                  <span className="text-sm text-gray-500 font-medium">Requires a vehicle with a ramp or lift.</span>
                </div>
             </label>
          </div>

          {/* Booking Fields */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Trip Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pickup Location</label>
                 <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-maroon" />
                   <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} required className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 font-bold text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-maroon outline-none" />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Dropoff Location</label>
                 <div className="relative">
                   <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input type="text" value={dropoff} onChange={e => setDropoff(e.target.value)} required className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 font-bold text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-maroon outline-none" />
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Date</label>
                 <div className="relative">
                   <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 font-bold text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-maroon outline-none uppercase text-sm" />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Time</label>
                 <div className="relative">
                   <input type="time" value={time} onChange={e => setTime(e.target.value)} required className="w-full px-4 py-4 bg-gray-50 border border-gray-200 font-bold text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-maroon outline-none uppercase text-sm text-center" />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Passengers</label>
                 <div className="relative">
                   <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <select value={passengers} onChange={e => setPassengers(Number(e.target.value))} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 font-bold text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-maroon outline-none appearance-none cursor-pointer">
                     {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>)}
                   </select>
                 </div>
               </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-10 bg-brand-yellow font-black text-gray-900 py-5 hover:bg-brand-yellow-hover transition-colors shadow-lg uppercase tracking-widest text-lg flex justify-center items-center group"
          >
            <span>Search Accessible Vehicles</span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
        </form>

        {/* Contact Support Block */}
        <div className="mt-12 bg-white border border-gray-200 p-8 text-center flex flex-col justify-center items-center">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
             <HelpCircle className="w-8 h-8 text-gray-400" />
           </div>
           <h3 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-2">Need a custom arrangement?</h3>
           <p className="text-gray-500 font-medium mb-6 max-w-lg">If you have specific medical requirements or need specialized escort services beyond standard accessibility, our support team is ready to assist.</p>
           
           <Link to="/help-support" className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors">
             <Phone className="w-4 h-4 mr-2" /> Contact Support
           </Link>
        </div>

      </div>
    </main>
  );
}
