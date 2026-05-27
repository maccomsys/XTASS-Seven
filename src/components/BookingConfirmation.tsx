import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, User, Phone, Edit, XCircle, MapPin, Calendar, CreditCard, ChevronRight } from 'lucide-react';

export default function BookingConfirmation() {
  const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState(false);
  const [driverAssigned, setDriverAssigned] = useState(false);

  useEffect(() => {
    // Animate checkmark on load
    setTimeout(() => setShowCheck(true), 100);
    
    // Simulate driver assignment
    const timer = setTimeout(() => {
      setDriverAssigned(true);
    }, 5000); // 5 seconds assigning state
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-grow bg-gray-50 py-16 px-4 font-sans flex flex-col items-center">
      
      {/* Animated Success Checkmark */}
      <div className="mb-8 text-center">
        <div className={`w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center transition-all duration-700 transform ${showCheck ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <CheckCircle2 className="w-16 h-16 text-white" />
        </div>
        <h1 className={`mt-6 text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight transition-all duration-700 delay-300 ${showCheck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Booking Confirmed!
        </h1>
        <div className={`mt-4 inline-block bg-brand-maroon/10 text-brand-maroon font-bold px-4 py-2 rounded uppercase tracking-widest text-sm border border-brand-maroon/20 transition-all duration-700 delay-500 ${showCheck ? 'opacity-100' : 'opacity-0'}`}>
          Booking ID: XTA-88294
        </div>
      </div>

      <div className={`w-full max-w-2xl bg-white shadow-xl border border-gray-200 overflow-hidden transition-all duration-1000 delay-700 ${showCheck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Email/SMS Note */}
        <div className="bg-gray-900 text-white p-4 text-center text-sm font-medium">
          A confirmation has been sent to your email address and SMS.
        </div>

        <div className="p-8 space-y-8">
          
          {/* Trip Summary Card */}
          <div className="border border-gray-200 rounded p-6 bg-gray-50 relative">
             <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest px-3 py-1">Scheduled Pickup</div>
             <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight border-b border-gray-200 pb-4 mb-4">Trip Summary</h3>
             
             <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Pick-up</p>
                    <p className="font-bold text-gray-900">Kotoka International Airport (ACC)</p>
                    <p className="text-sm text-gray-600 mt-1">Mon, 15 Jun 2026 @ 10:00 AM</p>
                  </div>
                </div>
                
                <div className="border-t border-dashed border-gray-300 my-2"></div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Drop-off</p>
                    <p className="font-bold text-gray-900">Kempinski Hotel Gold Coast City</p>
                    <p className="text-sm text-gray-600 mt-1">Mon, 15 Jun 2026 @ 11:30 AM</p>
                  </div>
                </div>
             </div>

             <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Service Level</p>
                  <p className="font-bold text-gray-900">Premium</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Passengers</p>
                  <p className="font-bold text-gray-900">2 Guests</p>
               </div>
             </div>
          </div>

          {/* Driver Assignment Section */}
          <div>
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4">Driver Details</h3>
            
            {!driverAssigned ? (
              <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded bg-gray-50">
                <div className="w-6 h-6 border-4 border-brand-maroon border-t-transparent rounded-full animate-spin mr-4"></div>
                <p className="font-bold text-gray-700">Assigning your driver...</p>
              </div>
            ) : (
              <div className="flex items-center p-6 border border-gray-200 rounded shadow-sm bg-white animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-6 shrink-0 border-2 border-brand-maroon">
                   <img src="https://i.ibb.co/Q7qygPGB/Resized-4.jpg" alt="Driver" className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">Kofi A.</h4>
                  <p className="text-sm font-bold text-brand-maroon flex items-center mt-1">★ 4.9 Rating</p>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2 flex flex-wrap gap-3">
                    <span className="bg-gray-100 px-2 py-1 rounded">Executive Sedan</span>
                    <span className="bg-gray-900 text-white px-2 py-1 rounded tracking-widest">GW-4500-24</span>
                  </div>
                </div>
              </div>
            )}
            
            {!driverAssigned && (
              <p className="text-xs text-gray-500 font-medium text-center mt-3">
                Your driver will be assigned closer to your pickup time.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 border-t border-gray-100 pt-8">
            <button 
              onClick={() => navigate('/dashboard')} // Mocking navigation to detail/dashboard
              className="w-full py-4 bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center shadow-md"
            >
              <FileText className="w-4 h-4 mr-2" /> View Booking
            </button>
            <button 
              className="w-full py-4 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center"
            >
              <Edit className="w-4 h-4 mr-2" /> Modify Booking
            </button>
          </div>
          
          <div className="text-center pt-2">
            <button className="text-red-500 text-sm font-bold hover:underline transition-colors uppercase tracking-wider inline-flex items-center">
              <XCircle className="w-4 h-4 mr-1" /> Cancel Booking
            </button>
          </div>

        </div>
      </div>
      
    </main>
  );
}
