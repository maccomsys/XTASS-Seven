import { Link, useNavigate } from 'react-router-dom';
import BookingProgress from './BookingProgress';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

export default function BookingStep2() {
  const navigate = useNavigate();

  // Mocked state from Step 1
  const bookingData = {
    rideType: 'Scheduled Pickup',
    serviceLevel: 'Premium',
    pickup: 'Kotoka International Airport, Ghana',
    date: 'Mon, 15 Jun 2026',
    time: '10:00 AM',
    passengers: 2,
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24 font-sans flex flex-col">
      <BookingProgress currentStep={2} />
      
      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Main Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Location & Schedule</h1>

          {/* Map Placeholder */}
          <div className="bg-gray-200 h-64 w-full mb-8 relative border border-gray-300 overflow-hidden">
             {/* Fake map background using SVG pattern or generic image */}
             <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             {/* Map Pin */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 mb-2 shadow-lg whitespace-nowrap">
                  {bookingData.pickup}
                </div>
                <div className="w-6 h-6 bg-brand-maroon rounded-full border-4 border-white shadow-xl flex items-center justify-center relative">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                   <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-brand-maroon absolute -bottom-[10px]"></div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Pickup Date/Time Card */}
            <div className="bg-white p-6 shadow-sm border border-gray-200 relative">
              <div className="absolute top-6 right-6">
                <Link to="/booking/step-1" className="text-brand-maroon text-sm font-bold hover:underline">Edit</Link>
              </div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Pickup Date & Time</h3>
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-brand-maroon mr-4 mt-1" />
                <div>
                  <p className="text-xl font-bold text-gray-900">{bookingData.date}</p>
                  <p className="text-gray-600 font-medium">{bookingData.time}</p>
                </div>
              </div>
            </div>

            {/* Simulated Return Card */}
             <div className="bg-white p-6 shadow-sm border border-gray-200 relative opacity-50 cursor-not-allowed">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Return Details</h3>
              <div className="flex items-center justify-center h-14">
                <p className="text-gray-500 font-medium italic">One-way trip selected</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/booking/step-3')}
            className="w-full bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold py-5 uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center"
          >
            Continue to Choose a Vehicle <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-[100px]">
          <div className="bg-white shadow-xl border border-gray-200">
             <div className="bg-gray-900 p-6 text-white">
               <h2 className="text-lg font-black uppercase tracking-wider">Booking Summary</h2>
             </div>
             <div className="p-6 space-y-6">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Ride Type</p>
                  <p className="font-bold text-gray-900">{bookingData.rideType}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Service Level</p>
                  <p className="font-bold text-gray-900">{bookingData.serviceLevel}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Pickup Location</p>
                  <div className="flex items-start mt-1">
                    <MapPin className="w-4 h-4 text-brand-maroon mr-2 mt-0.5 shrink-0" />
                    <p className="text-sm font-bold text-gray-900 leading-snug">{bookingData.pickup}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Passengers</p>
                  <div className="flex items-center font-bold text-gray-900">
                    <Users className="w-4 h-4 mr-2 text-brand-maroon" /> {bookingData.passengers}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
