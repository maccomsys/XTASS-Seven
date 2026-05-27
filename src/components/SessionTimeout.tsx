import { useState, useEffect } from 'react';
import { Clock, ArrowRight, RotateCcw, ArrowDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SessionTimeout() {
  const navigate = useNavigate();
  const [isStale, setIsStale] = useState(false);

  // Simulate checking the age of the session
  useEffect(() => {
    // In a real app, this would check the timestamp of the stored session data
    // For styling purposes, we can toggle this or leave it false
    // setIsStale(true); 
  }, []);

  const handleStartNew = () => {
    // Logic to clear session storage goes here
    navigate('/start-reservation');
  };

  const handleResume = () => {
    if (isStale) return;
    // Logic to resume from session storage goes here
    navigate('/manage-reservation'); // or wherever they left off
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col font-sans overflow-y-auto">
      
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-200 py-6 px-6 md:px-12 flex items-center justify-center md:justify-start shrink-0">
        <Link to="/" className="text-3xl font-black tracking-tighter text-brand-maroon uppercase">
          XTASS
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-4xl bg-white shadow-2xl border border-gray-200 p-8 md:p-14">
          
          <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-center">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto md:mx-0 md:mr-8 mb-6 md:mb-0 shrink-0">
              <Clock className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-3">Session Timeout</h1>
              <p className="text-gray-600 font-medium text-lg mb-1 leading-relaxed">
                To protect your safety and privacy, this session has expired before your reservation could be completed.
              </p>
              <p className="text-gray-500 font-medium">Continue where you left off by resuming your previous reservation.</p>
            </div>
          </div>

          {/* Booking Details Grid */}
          <div className={`grid md:grid-cols-2 gap-8 mb-12 ${isStale ? 'opacity-50 grayscale' : ''}`}>
            
            {/* Rental Details */}
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h3 className="font-black text-gray-900 uppercase tracking-tight mb-4 border-b border-gray-200 pb-2">Itinerary Details</h3>
              
              <div className="relative">
                <div className="mb-6">
                  <p className="text-xs font-bold text-brand-maroon uppercase tracking-widest mb-1">Pick-Up</p>
                  <p className="font-bold text-gray-900">Kotoka International Airport (ACC)</p>
                  <p className="text-sm text-gray-500 font-medium">Mon, 15 Jun 2026 at 10:00 AM</p>
                </div>
                
                <div className="absolute left-6 top-14 bottom-14 w-px bg-gray-300"></div>
                <ArrowDown className="absolute left-[18px] top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 bg-gray-50" />
                
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Return</p>
                  <p className="font-bold text-gray-900">Kempinski Hotel Gold Coast City</p>
                  <p className="text-sm text-gray-500 font-medium">Fri, 19 Jun 2026 at 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-gray-50 border border-gray-200 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-gray-900 uppercase tracking-tight mb-4 border-b border-gray-200 pb-2">Vehicle Reserved</h3>
                <p className="font-bold text-brand-maroon text-lg mb-1">Executive Sedan</p>
                <p className="text-gray-900 font-bold mb-1">Toyota Corolla or similar</p>
                <p className="text-sm text-gray-500 font-medium">Automatic Transmission • Air Conditioning</p>
              </div>
              <div className="mt-6 flex justify-end">
                <img src="https://i.ibb.co/HTVggwbD/Airport-Pickup-5.jpg" alt="Vehicle Placeholder" className="w-48 h-24 object-cover border border-gray-200 shadow-sm" />
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-4 pt-6 border-t border-gray-200">
            <button 
              onClick={handleStartNew}
              className="w-full sm:w-auto px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Start New Reservation
            </button>
            
            <div className="w-full sm:w-auto relative group">
              <button 
                onClick={handleResume}
                disabled={isStale}
                className={`w-full sm:w-auto px-8 py-4 font-bold uppercase tracking-wider text-sm transition-colors shadow-sm inline-flex items-center justify-center
                  ${isStale 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-brand-maroon text-white hover:bg-brand-maroon-hover'
                  }`}
              >
                {isStale ? 'Session Expired' : 'Resume Reservation'}
                {!isStale && <RotateCcw className="w-4 h-4 ml-2" />}
              </button>
              
              {isStale && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-xs font-medium p-3 rounded shadow-lg text-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  This reservation has expired. Please start a new one.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
      
    </div>
  );
}
