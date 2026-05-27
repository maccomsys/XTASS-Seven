import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Edit3, Users, Star, CarFront, Phone, CheckCircle2, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

export default function BookingDetail() {
  const { id } = useParams();
  const bookingId = id || 'XTA-12345';
  
  // Mock data for demonstration
  const [isUpcoming] = useState(true);
  const [driverAssigned] = useState(false);
  const [paymentStatus] = useState<'PAY LATER' | 'PAID' | 'REFUND PENDING'>('PAY LATER');
  
  // Section toggle states
  const [openSections, setOpenSections] = useState({
    trip: true,
    vehicle: true,
    driver: true,
    payment: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const steps = [
    { label: 'Booked', time: '12 Oct, 09:00 AM', status: 'completed' },
    { label: 'Confirmed', time: '12 Oct, 09:15 AM', status: 'completed' },
    { label: 'Driver Assigned', time: 'Pending', status: 'current' },
    { label: 'In Progress', time: '--', status: 'upcoming' },
    { label: 'Completed', time: '--', status: 'upcoming' },
  ];

  return (
    <main className="flex-grow bg-gray-50 pb-32">
      {/* Header */}
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Link to="/dashboard" className="inline-flex items-center text-brand-yellow hover:text-white transition-colors mb-6 font-bold text-sm uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                  {bookingId}
                </h1>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 uppercase tracking-wider">
                  Upcoming
                </span>
              </div>
              <p className="text-gray-300 font-medium">Scheduled Pickup • Business Class</p>
            </div>
            {isUpcoming && !driverAssigned && (
              <div className="flex shrink-0 gap-3">
                <Link to={`/modify-booking/${bookingId}`} className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 transition-colors flex items-center border border-white/20">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Modify
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20 space-y-6">
        
        {/* Main 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            
            {/* Trip Details Section */}
            <div className="bg-white shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleSection('trip')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200"
              >
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-brand-maroon" />
                  Trip Details
                </h2>
                {openSections.trip ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              
              {openSections.trip && (
                <div className="p-6">
                  <div className="relative pl-6 pb-6 border-l-2 border-gray-200 ml-3">
                    <div className="absolute w-4 h-4 rounded-full bg-brand-maroon -left-[9px] top-0 shadow ring-4 ring-white"></div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Pick-up</p>
                    <p className="font-bold text-gray-900 text-lg mb-1">Kotoka International Airport (ACC)</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-2">
                       <Calendar className="w-4 h-4 text-gray-400" /> Thu, 15 Oct 2026
                       <Clock className="w-4 h-4 text-gray-400 ml-2" /> 10:00 AM
                    </p>
                  </div>
                  <div className="relative pl-6 ml-3 mt-2">
                    <div className="absolute w-4 h-4 rounded-full border-2 border-brand-maroon bg-white -left-[9px] top-0 shadow ring-4 ring-white"></div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Drop-off</p>
                    <p className="font-bold text-gray-900 text-lg">Kempinski Hotel Gold Coast City</p>
                  </div>
                </div>
              )}
            </div>

            {/* Passenger & Vehicle Section */}
            <div className="bg-white shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleSection('vehicle')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200"
              >
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <CarFront className="w-5 h-5 mr-3 text-brand-maroon" />
                  Passenger &amp; Vehicle
                </h2>
                {openSections.vehicle ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              
              {openSections.vehicle && (
                <div className="p-6">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="font-bold">2 Passengers</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CarFront className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="font-bold">Business Class</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 border border-gray-100">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Extras Selected</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm">
                        <span className="text-gray-600">Child Seat (Toddler)</span>
                        <span className="font-bold text-gray-900">$10.00 / day</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-gray-600">Wi-Fi Router</span>
                        <span className="font-bold text-gray-900">$5.00 / day</span>
                      </li>
                    </ul>
                    {isUpcoming && !driverAssigned && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link to={`/modify-booking/${bookingId}`} className="text-brand-maroon font-bold text-sm hover:underline">
                          + Add/Edit Extras
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Driver Information Section */}
            <div className="bg-white shadow-sm border border-gray-200">
              <button 
                onClick={() => toggleSection('driver')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200"
              >
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 mr-3 text-brand-maroon" />
                  Driver Information
                </h2>
                {openSections.driver ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              
              {openSections.driver && (
                <div className="p-6">
                  {driverAssigned ? (
                    <div className="flex items-start gap-4">
                      <img src="https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg" alt="Driver" className="w-16 h-16 rounded-full object-cover shadow-sm bg-gray-200" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">Kwame Mensah</h3>
                        <div className="flex items-center gap-1 text-brand-yellow font-bold text-sm mt-0.5">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current text-gray-300" />
                          <span className="text-gray-600 font-medium ml-1">4.8</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Black Toyota Yaris • <span className="font-bold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">GT-2024-21</span></p>
                      </div>
                      <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-brand-maroon transition-colors" title="Call Driver" aria-label="Call Driver">
                        <Phone className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Clock className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-gray-900 font-bold">Assigning your driver...</h3>
                      <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto">We typically assign drivers 24 hours before your trip. We'll notify you once confirmed.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Payment Summary Section */}
            <div className="bg-white shadow-sm border border-gray-200 mb-20 lg:mb-0">
              <button 
                onClick={() => toggleSection('payment')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200"
              >
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-brand-maroon" />
                  Payment Summary
                </h2>
                {openSections.payment ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              
              {openSections.payment && (
                <div className="p-6">
                  {paymentStatus === 'PAY LATER' && (
                    <div className="bg-brand-yellow/20 text-brand-yellow-dark px-4 py-3 font-bold text-sm mb-6 flex items-center border border-brand-yellow/30">
                      <Clock className="w-4 h-4 mr-2" />
                      Payment to be collected at pick-up.
                    </div>
                  )}
                  {paymentStatus === 'PAID' && (
                    <div className="bg-green-50 text-green-800 px-4 py-3 font-bold text-sm mb-6 flex items-center border border-green-200">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Paid via Mobile Money on 12 Oct 2026.
                    </div>
                  )}

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Fare</span>
                      <span>$45.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Extras (2)</span>
                      <span>$15.00</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service Tax (5%)</span>
                      <span>$3.00</span>
                    </div>
                    <div className="flex justify-between items-center font-black text-xl text-gray-900 pt-4 border-t border-gray-200">
                      <span>Total Amount</span>
                      <span>$63.00</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right sidebar: Status Timeline */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="font-black text-lg text-gray-900 mb-6 uppercase tracking-wider">Booking Status</h2>
              
              <div className="relative pl-6 ml-2 space-y-8 before:absolute before:inset-0 before:ml-[5px] before:w-0.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:bg-gray-200">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative z-10 flex items-start">
                    {/* Circle */}
                    <div className="absolute -left-6 top-0">
                      {step.status === 'completed' && (
                        <div className="w-5 h-5 rounded-full bg-brand-maroon flex items-center justify-center ring-4 ring-white z-10">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {step.status === 'current' && (
                        <div className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center ring-4 ring-white z-10">
                          <div className="w-2 h-2 bg-brand-maroon rounded-full animate-pulse"></div>
                        </div>
                      )}
                      {step.status === 'upcoming' && (
                        <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 ring-4 ring-white z-10"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <p className={`font-bold text-sm ${step.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{step.label}</p>
                      <p className={`text-xs mt-0.5 ${step.status === 'upcoming' ? 'text-gray-300' : 'text-gray-500'}`}>{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Action Bar */}
      {isUpcoming && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] p-4 z-50 animate-in slide-in-from-bottom-full duration-300">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="text-sm font-bold text-gray-900">Need to make a change?</p>
              <p className="text-xs text-gray-500">Free cancellation up to 24 hours before pickup.</p>
            </div>
            <div className="flex items-center w-full md:w-auto gap-4">
              <Link to={`/cancel-booking/${bookingId}`} className="text-red-600 font-bold hover:underline py-2 px-2 text-center text-sm ml-auto md:ml-0 whitespace-nowrap">
                Cancel Booking
              </Link>
              <Link to={`/modify-booking/${bookingId}`} className="bg-brand-yellow text-gray-900 font-bold hover:bg-brand-yellow-hover transition-colors py-3 px-8 text-center text-sm w-full md:w-auto whitespace-nowrap">
                Modify Booking
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
