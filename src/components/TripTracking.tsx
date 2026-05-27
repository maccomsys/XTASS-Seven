import { useState, useEffect } from 'react';
import { Map, Phone, MessageSquare, AlertOctagon, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TripTracking() {
  const [eta, setEta] = useState(12); // minutes
  const [stage, setStage] = useState(2); // Driver En Route
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showContact, setShowContact] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  useEffect(() => {
    // countdown ETA
    const timer = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 1));
    }, 60000); // every minute

    // Simulate stage change after 5s for demonstration
    const stageTimer = setTimeout(() => {
      setStage(3);
      setToastMsg('Your driver has arrived and is waiting at the pickup point.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(stageTimer);
    };
  }, []);

  const stages = [
    { num: 1, label: 'Confirmed' },
    { num: 2, label: 'En Route' },
    { num: 3, label: 'Arrived' },
    { num: 4, label: 'Started' },
    { num: 5, label: 'Arriving' },
    { num: 6, label: 'Completed' },
  ];

  return (
    <main className="flex-grow bg-gray-100 flex flex-col font-sans relative overflow-hidden h-[calc(100vh-80px)]">
      
      {/* Toast Notification */}
      <div className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-md ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="bg-gray-900 text-white p-4 shadow-2xl rounded text-sm font-bold text-center border-l-4 border-brand-yellow">
          {toastMsg}
        </div>
      </div>

      {/* Map Map Area (Placeholder) */}
      <div className="flex-grow relative bg-gray-200">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Fake Map Route Layout */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-2/3 h-2/3">
             {/* Route Line */}
             <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border-4 border-dashed border-gray-400 rounded-bl-[100px] border-r-0 border-t-0"></div>
             
             {/* Pickup Pin */}
             <div className="absolute bottom-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2">
               <div className="bg-brand-maroon text-white text-[10px] font-black uppercase px-2 py-1 mb-1 rounded shadow">Pickup</div>
               <div className="w-5 h-5 bg-brand-maroon rounded-full border-2 border-white shadow-lg mx-auto relative z-10"></div>
             </div>

             {/* Destination Pin */}
             <div className="absolute top-[20%] right-[20%] -translate-x-1/2 -translate-y-1/2">
               <div className="bg-gray-900 text-white text-[10px] font-black uppercase px-2 py-1 mb-1 rounded shadow">Drop-off</div>
               <div className="w-5 h-5 bg-gray-900 rounded-full border-2 border-white shadow-lg mx-auto relative z-10"></div>
             </div>

             {/* Animated Car Marker */}
             <div className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-linear z-20
                ${stage === 2 ? 'bottom-[20%] left-[40%]' : 
                  stage === 3 ? 'bottom-[20%] left-[20%]' : 
                  'top-[50%] left-[50%]'}
             `}>
               <div className="bg-white p-2 rounded shadow-xl border-2 border-brand-maroon">
                 <svg className="w-6 h-6 text-brand-maroon" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                 </svg>
               </div>
             </div>
          </div>
        </div>

        <button className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold text-gray-900 shadow border border-gray-200 uppercase tracking-wider hover:bg-white transition-colors">
          View Full Map
        </button>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-4 z-40">
        <button 
          onClick={() => setShowContact(true)}
          className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-transform hover:scale-110 group"
          title="Contact Driver"
        >
          <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
        </button>
        <button 
          onClick={() => setShowEmergency(true)}
          className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-red-700 transition-transform hover:scale-110"
          title="Emergency Help"
        >
          <AlertOctagon className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Panel */}
      <div className="bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative z-30">
        
        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
          <div className="min-w-max flex items-center justify-between">
             {stages.map((s, idx) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mb-2 ${
                      stage > s.num ? 'bg-brand-maroon' : 
                      stage === s.num ? 'bg-brand-yellow scale-150 shadow-[0_0_0_4px_rgba(234,179,8,0.2)]' : 
                      'bg-gray-200'
                    } transition-all duration-300`}></div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      stage >= s.num ? 'text-gray-900' : 'text-gray-400'
                    }`}>{s.label}</span>
                  </div>
                  {idx < stages.length - 1 && (
                    <div className={`w-16 h-0.5 mx-2 -mt-4 ${stage > s.num ? 'bg-brand-maroon' : 'bg-gray-100'}`}></div>
                  )}
                </div>
             ))}
          </div>
        </div>

        {/* Driver Info Card */}
        <div className="p-6 md:px-12 flex items-center justify-between">
           <div className="flex items-center">
             <div className="w-16 h-16 bg-gray-200 rounded-full border-2 border-brand-maroon mr-4 overflow-hidden shrink-0 relative">
               <img src="https://i.ibb.co/zWN7ZHns/Airport-Pickup-1.jpg" alt="Driver" className="w-full h-full object-cover" />
             </div>
             <div>
               <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight leading-none">Kofi A.</h3>
               <p className="text-brand-maroon font-bold text-sm mb-1">★ 4.9 <span className="text-gray-400">|</span> Executive Sedan</p>
               <div className="inline-block bg-gray-900 text-white text-xs font-black px-2 py-0.5 tracking-widest rounded">GW-4500-24</div>
             </div>
           </div>

           <div className="text-right flex flex-col items-end">
             {stage < 4 ? (
               <>
                 <p className="text-4xl font-black text-brand-maroon leading-none">{eta}<span className="text-lg">m</span></p>
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Arrival ETA</p>
               </>
             ) : (
                <div className="text-right">
                  <p className="text-xl font-black text-green-600 uppercase">In Progress</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Enjoy your ride</p>
                </div>
             )}
           </div>
        </div>

      </div>

      {/* Contact Modal (Mock) */}
      {showContact && (
        <div className="absolute inset-0 bg-gray-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm rounded overflow-hidden shadow-2xl">
            <div className="p-6 text-center border-b border-gray-100 relative">
               <button onClick={() => setShowContact(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"><X className="w-5 h-5"/></button>
               <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-brand-maroon">
                  <img src="https://i.ibb.co/ymzQTwCS/Resized-2.jpg" alt="Driver" />
               </div>
               <h3 className="font-black text-xl uppercase tracking-tight text-gray-900">Contact Driver</h3>
               <p className="text-gray-500 text-sm font-medium">Kofi A. is driving to your location.</p>
            </div>
            <div className="p-2 space-y-2 bg-gray-50">
              <button className="w-full p-4 bg-white hover:bg-gray-50 border border-gray-200 font-bold text-gray-900 flex items-center justify-center uppercase tracking-wider text-sm transition-colors">
                 <Phone className="w-5 h-5 mr-3 text-brand-maroon" /> Call Driver
              </button>
              <button className="w-full p-4 bg-white hover:bg-gray-50 border border-gray-200 font-bold text-gray-900 flex items-center justify-center uppercase tracking-wider text-sm transition-colors">
                 <MessageSquare className="w-5 h-5 mr-3 text-brand-maroon" /> Send SMS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Modal (Mock) */}
      {showEmergency && (
        <div className="absolute inset-0 bg-red-900/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-white w-full max-w-sm rounded p-8 text-center shadow-2xl animate-in zoom-in duration-200">
             <AlertOctagon className="w-16 h-16 text-red-600 mx-auto mb-6" />
             <h3 className="font-black text-2xl uppercase tracking-tight text-gray-900 mb-2">Emergency Hub</h3>
             <p className="text-gray-600 font-medium text-sm mb-8 leading-relaxed">If you are in immediate danger, please contact local authorities (191) first. Would you like to alert the XTASS Security Team?</p>
             <button onClick={() => setShowEmergency(false)} className="w-full mb-3 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm transition-colors shadow-lg">
                Alert XTASS Security
             </button>
             <button onClick={() => setShowEmergency(false)} className="w-full py-4 text-gray-500 hover:text-gray-900 font-bold uppercase tracking-wider text-sm transition-colors">
                Cancel
             </button>
          </div>
        </div>
      )}

    </main>
  );
}
