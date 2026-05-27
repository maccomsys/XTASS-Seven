import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, CarFront, AlertTriangle, Phone, Mail, ChevronRight, X } from 'lucide-react';

export default function ModifyBooking() {
  const { id } = useParams();
  const bookingId = id || 'XTA-12345';
  const navigate = useNavigate();
  
  // State simulation
  const [driverAssigned] = useState(false);
  
  // Form fields
  const [pickup, setPickup] = useState('Kotoka International Airport (ACC)');
  const [dropoff, setDropoff] = useState('Kempinski Hotel Gold Coast City');
  const [date, setDate] = useState('2026-10-15');
  const [time, setTime] = useState('10:00');
  const [passengers, setPassengers] = useState(2);
  const [serviceLevel, setServiceLevel] = useState('business');

  // Interactive states
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Monitor modifications to trigger the calculation banner
  const handleModify = () => setIsModified(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (driverAssigned) return;
    
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      
      // Auto redirect after showing success state
      setTimeout(() => {
        navigate(`/booking-detail/${bookingId}`);
      }, 2000);
    }, 1500);
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Modify Reservation
            </h1>
            <p className="text-gray-300 font-medium">Booking {bookingId}</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {/* Driver Assigned Warning */}
        {driverAssigned && (
          <div className="bg-brand-yellow border border-brand-yellow-dark p-6 mb-8 text-gray-900 shadow-md">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-brand-maroon mr-4 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-black text-lg mb-1 uppercase tracking-tight">Modification Disabled</h3>
                <p className="text-sm font-medium mb-4">A driver has already been assigned to your booking. Modifications are no longer available automatically. Please contact our support team directly to request a change.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+233000000000" className="inline-flex items-center bg-gray-900 text-white px-4 py-2 text-sm font-bold hover:bg-gray-800 transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    +233 XXX XXX XXX
                  </a>
                  <a href="mailto:support@xtass.com" className="inline-flex items-center border-2 border-gray-900 text-gray-900 px-4 py-2 text-sm font-bold hover:bg-black/5 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSave} className="space-y-6">
            
            <fieldset disabled={driverAssigned} className={`space-y-6 ${driverAssigned ? 'opacity-60' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      value={pickup} 
                      onChange={(e) => {setPickup(e.target.value); handleModify();}}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Drop-off Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      value={dropoff} 
                      onChange={(e) => {setDropoff(e.target.value); handleModify();}}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="date"
                      min="2026-05-26" // Should be today
                      value={date} 
                      onChange={(e) => {setDate(e.target.value); handleModify();}}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Pick-up Time (Min 2hrs ahead)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="time" 
                      value={time} 
                      onChange={(e) => {setTime(e.target.value); handleModify();}}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-200">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Passengers</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={passengers} 
                      onChange={(e) => {setPassengers(Number(e.target.value)); handleModify();}}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm appearance-none"
                    >
                      {[1,2,3,4,5,6,7].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Service Level</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CarFront className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={serviceLevel} 
                      onChange={(e) => {setServiceLevel(e.target.value); handleModify();}}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm appearance-none"
                    >
                      <option value="standard">Standard Class</option>
                      <option value="business">Business Class</option>
                      <option value="first">First Class</option>
                      <option value="suv">Premium SUV</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Pricing Update Panel */}
            {isModified && !driverAssigned && !showSuccess && (
              <div className="bg-gray-50 border border-gray-200 p-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-brand-maroon mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Fare recalculation pending</h4>
                    <p className="text-sm text-gray-600">Your changes may affect the final cost. The final fare will be confirmed after your booking is modified and reviewed by our dispatch team.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Success State */}
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 p-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-green-800 font-bold mb-1">Modifications Saved</h4>
                    <p className="text-sm text-green-700">Your booking has been successfully updated. Redirecting back to details...</p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            {!driverAssigned && !showSuccess && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={!isModified || isSaving}
                  className={`flex-1 py-4 font-bold text-sm tracking-wider uppercase transition-colors flex justify-center items-center ${
                    isModified && !isSaving
                      ? 'bg-brand-maroon text-white hover:bg-brand-maroon-hover'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
                <Link
                  to={`/booking-detail/${bookingId}`}
                  className="sm:w-48 py-4 border-2 border-gray-200 text-gray-900 font-bold text-center text-sm tracking-wider uppercase hover:border-gray-900 transition-colors"
                >
                  Cancel
                </Link>
              </div>
            )}
            
            {driverAssigned && (
              <div className="pt-4">
                 <Link
                  to={`/booking-detail/${bookingId}`}
                  className="block w-full py-4 border-2 border-gray-200 text-gray-900 font-bold text-center text-sm tracking-wider uppercase hover:border-gray-900 transition-colors"
                >
                  Return to Booking
                </Link>
              </div>
            )}

          </form>
        </div>
      </section>
    </main>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
