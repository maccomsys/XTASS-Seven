import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, Car, ArrowRight, Activity, Navigation, Settings } from 'lucide-react';

export default function CustomerDashboard() {
  const navigate = useNavigate();
  
  const firstName = "Kwame";
  const currentDate = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <main className="flex-grow bg-gray-50 pb-24 font-sans">
      
      {/* Welcome Banner */}
      <section className="bg-gray-900 text-white pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-yellow font-bold text-sm tracking-widest uppercase mb-2">{currentDate}</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Good morning, {firstName}.</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 space-y-8">
        
        {/* Upcoming Trip Card */}
        <div className="bg-white shadow-2xl border-t-4 border-brand-yellow overflow-hidden group hover:shadow-3xl transition-shadow">
          <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
            
            <div className="flex-1 relative z-10">
              <div className="inline-block bg-brand-yellow text-gray-900 text-xs font-black uppercase px-2 py-1 tracking-widest mb-4">Upcoming Ride</div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">Tomorrow at 10:00 AM</h2>
              <div className="flex items-start text-gray-600 font-medium">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                <span>Kotoka International Airport (ACC) <ArrowRight className="inline w-3 h-3 mx-1"/> Kempinski Hotel</span>
              </div>
              <p className="text-sm font-bold text-brand-maroon mt-3">Executive Sedan (Toyota Corolla)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 relative z-10 lg:pl-12 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0">
               <button 
                 onClick={() => navigate('/trip-tracking')}
                 className="px-8 py-4 bg-brand-maroon hover:bg-brand-maroon-hover text-white flex items-center justify-center font-bold uppercase tracking-wider text-sm transition-colors shadow"
               >
                 <Activity className="w-4 h-4 mr-2" /> Track Ride
               </button>
               <button 
                 className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 flex items-center justify-center font-bold uppercase tracking-wider text-sm transition-colors"
               >
                 View Details
               </button>
            </div>
          </div>
        </div>

        {/* Quick Booking Shortcuts */}
        <div>
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-4">Book Another Ride</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div 
              onClick={() => navigate('/booking/step-1')}
              className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-maroon transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-maroon/10 transition-colors">
                <Clock className="w-8 h-8 text-brand-maroon" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">Instant Pickup</h3>
              <p className="text-sm text-gray-500 font-medium">Available now for immediate travel.</p>
            </div>

            <div 
              onClick={() => navigate('/booking/step-1')}
              className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-maroon transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-maroon/10 transition-colors">
                <Calendar className="w-8 h-8 text-brand-maroon" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">Scheduled Pickup</h3>
              <p className="text-sm text-gray-500 font-medium">Book a chauffeur for a future date & time.</p>
            </div>

            <div 
              onClick={() => navigate('/booking/step-1')}
              className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-maroon transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-maroon/10 transition-colors">
                <Car className="w-8 h-8 text-brand-maroon" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">Car Rental</h3>
              <p className="text-sm text-gray-500 font-medium">Self-drive premium vehicles for daily hire.</p>
            </div>

          </div>
        </div>

        {/* Recently Viewed / Past Trips */}
        <div>
           <div className="flex justify-between items-end mb-4">
               <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest">Recent Routes</h2>
               <button onClick={() => navigate('/trip-history')} className="text-brand-maroon font-bold text-sm uppercase hover:underline">View History</button>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white border border-gray-200 p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">Scheduled Pickup</span>
                    <span className="text-xs font-bold text-gray-400">May {10 + item}, 2026</span>
                  </div>
                  
                  <div className="relative pl-6 mb-6 flex-grow">
                     <div className="absolute left-1.5 top-1 bottom-1 w-px bg-gray-200"></div>
                     <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-900 rounded-full border-2 border-white shadow-sm"></div>
                     <p className="font-bold text-gray-900 text-sm leading-snug mb-4">Accra Mall, Airport Rd.</p>
                     
                     <div className="absolute left-0 bottom-1.5 w-3 h-3 bg-brand-maroon rounded-full border-2 border-white shadow-sm"></div>
                     <p className="font-bold text-gray-900 text-sm leading-snug">East Legon, Mensah Wood Ave.</p>
                  </div>
                  
                  <button onClick={() => navigate('/booking/step-1')} className="w-full py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center">
                    <Navigation className="w-3 h-3 mr-2 text-brand-maroon" /> Book Same Route
                  </button>
                </div>
             ))}
           </div>
        </div>

      </section>
    </main>
  );
}
