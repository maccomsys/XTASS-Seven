import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Briefcase, HelpCircle, CarFront, Armchair } from 'lucide-react';
import BookingProgress from './BookingProgress';

export default function BookingStep1() {
  const navigate = useNavigate();
  // Form State
  const [rideType] = useState('Scheduled Pickup'); // Read-only chip as requested
  const [serviceLevel, setServiceLevel] = useState('Premium');
  const [pickup, setPickup] = useState('Kotoka International Airport (ACC)');
  const [returnDifferent, setReturnDifferent] = useState(true);
  const [returnLocation, setReturnLocation] = useState('Kempinski Hotel Gold Coast City');
  // Get tomorrow's date for prefill
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [date, setDate] = useState(tomorrow.toISOString().split('T')[0]);
  const [time, setTime] = useState('10:00');
  const [passengers, setPassengers] = useState(2);
  const [luggage, setLuggage] = useState(2);
  const [childSeat, setChildSeat] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!pickup.trim()) newErrors.pickup = 'Pickup location is required.';
    if (returnDifferent && !returnLocation.trim()) newErrors.returnLocation = 'Return location is required.';
    if (!date) newErrors.date = 'Date is required.';
    if (!time) newErrors.time = 'Time is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/booking/step-2');
  };

  const serviceLevels = [
    { name: 'Basic', desc: 'Standard everyday vehicles', icon: <CarFront /> },
    { name: 'Economy', desc: 'Comfortable & cost-effective', icon: <CarFront /> },
    { name: 'Business', desc: 'Executive sedans', icon: <Armchair /> },
    { name: 'Premium', desc: 'Luxury models', icon: <Armchair /> }
  ];

  return (
    <main className="flex-grow bg-gray-50 pb-24 font-sans">
      <BookingProgress currentStep={1} />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-brand-maroon/10 text-brand-maroon font-bold px-4 py-2 rounded inline-block mb-8 uppercase tracking-wider text-sm border border-brand-maroon/20">
          Booking Type: {rideType}
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Trip Details</h1>

        <form onSubmit={handleContinue} className="space-y-10">
          
          {/* Service Level */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Service Level</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceLevels.map(level => (
                <div 
                  key={level.name}
                  onClick={() => setServiceLevel(level.name)}
                  className={`cursor-pointer p-4 border-2 rounded transition-all flex flex-col items-center text-center
                    ${serviceLevel === level.name 
                      ? 'border-brand-maroon bg-brand-maroon/5' 
                      : 'border-gray-200 bg-white hover:border-gray-300 opacity-80 hover:opacity-100'}`}
                >
                  <div className={`mb-2 ${serviceLevel === level.name ? 'text-brand-maroon' : 'text-gray-500'}`}>
                    {level.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{level.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{level.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <section className="bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-100 pb-2">Location</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Location</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={pickup}
                    onChange={(e) => { setPickup(e.target.value); setErrors({...errors, pickup: ''}) }}
                    placeholder="Kotoka International Airport, Ghana" 
                    className={`w-full ${errors.pickup ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} rounded-none shadow-sm pt-3 pb-3 pl-10 pr-3 outline-none border-2`}
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-maroon w-5 h-5 pointer-events-none" />
                </div>
                {errors.pickup && <p className="text-red-500 text-xs mt-1 font-bold">{errors.pickup}</p>}
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="returnDiff" 
                  checked={returnDifferent} 
                  onChange={(e) => { setReturnDifferent(e.target.checked); setErrors({...errors, returnLocation: ''}) }}
                  className="w-5 h-5 text-brand-maroon border-gray-300 rounded-sm focus:ring-brand-maroon cursor-pointer"
                />
                <label htmlFor="returnDiff" className="ml-3 text-sm font-bold text-gray-700 cursor-pointer select-none">
                  Return to a different location
                </label>
              </div>

              {returnDifferent && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Return Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={returnLocation}
                      onChange={(e) => { setReturnLocation(e.target.value); setErrors({...errors, returnLocation: ''}) }}
                      placeholder="Enter return location" 
                      className={`w-full ${errors.returnLocation ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} rounded-none shadow-sm pt-3 pb-3 pl-10 pr-3 outline-none border-2`}
                    />
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                  {errors.returnLocation && <p className="text-red-500 text-xs mt-1 font-bold">{errors.returnLocation}</p>}
                </div>
              )}
            </div>
          </section>

          {/* Date & Time */}
          <section className="bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-100 pb-2">Schedule</h2>
            <p className="text-sm text-gray-500 mb-4 font-medium flex items-center">
             <HelpCircle className="w-4 h-4 mr-2" /> Same-day bookings require at least 2 hours advance notice.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => { setDate(e.target.value); setErrors({...errors, date: ''}) }}
                  min={new Date().toISOString().split('T')[0]} // Prevents past dates
                  className={`w-full ${errors.date ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} rounded-none shadow-sm pt-3 pb-3 px-3 outline-none border-2 text-gray-700`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1 font-bold">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Pickup Time</label>
                <select 
                  value={time}
                  onChange={(e) => { setTime(e.target.value); setErrors({...errors, time: ''}) }}
                  className={`w-full ${errors.time ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-brand-maroon'} rounded-none shadow-sm pt-3 pb-3 px-3 outline-none border-2 text-gray-700`}
                >
                  <option value="">Select Time</option>
                  {/* Mocking 15 min intervals */}
                  <option value="10:00">10:00 AM</option>
                  <option value="10:15">10:15 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="10:45">10:45 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                </select>
                {errors.time && <p className="text-red-500 text-xs mt-1 font-bold">{errors.time}</p>}
              </div>
            </div>
          </section>

          {/* Passengers & Features */}
          <section className="bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-100 pb-2">Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Passengers Count */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2" /> Passengers
                </label>
                <div className="flex items-center border-2 border-gray-200 rounded w-max">
                  <button type="button" onClick={() => setPassengers(Math.max(1, passengers - 1))} disabled={passengers === 1} className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-gray-600 hover:bg-gray-100 disabled:opacity-30">-</button>
                  <div className="w-16 h-12 flex items-center justify-center font-bold text-lg border-x border-gray-200 bg-gray-50">{passengers}</div>
                  <button type="button" onClick={() => setPassengers(Math.max(1, Math.min(10, passengers + 1)))} disabled={passengers === 10} className="w-12 h-12 flex items-center justify-center font-bold text-xl text-gray-600 hover:bg-gray-100 disabled:opacity-30">+</button>
                </div>
              </div>

              {/* Luggage Count */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" /> Luggage
                </label>
                <div className="flex items-center border-2 border-gray-200 rounded w-max">
                  <button type="button" onClick={() => setLuggage(Math.max(0, luggage - 1))} disabled={luggage === 0} className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-gray-600 hover:bg-gray-100 disabled:opacity-30">-</button>
                  <div className="w-16 h-12 flex items-center justify-center font-bold text-lg border-x border-gray-200 bg-gray-50">{luggage}</div>
                  <button type="button" onClick={() => setLuggage(Math.max(0, Math.min(10, luggage + 1)))} disabled={luggage === 10} className="w-12 h-12 flex items-center justify-center font-bold text-xl text-gray-600 hover:bg-gray-100 disabled:opacity-30">+</button>
                </div>
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">Child Seat Required</h4>
                  <p className="text-xs text-gray-500 font-medium">Adds a standard child seat to your booking.</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => setChildSeat(!childSeat)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${childSeat ? 'bg-brand-maroon' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${childSeat ? 'left-7' : 'left-1'}`}></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">Wheelchair Accessible Vehicle</h4>
                  <p className="text-xs text-gray-500 font-medium">Filters vehicles to those with accessibility features.</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => setWheelchair(!wheelchair)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${wheelchair ? 'bg-brand-maroon' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${wheelchair ? 'left-7' : 'left-1'}`}></div>
                </button>
              </div>
            </div>
          </section>

          <button 
            type="submit" 
            className="w-full bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold py-5 uppercase tracking-wider transition-colors"
          >
            Continue to Schedule
          </button>
        </form>
      </div>
    </main>
  );
}
