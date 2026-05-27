import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingProgress from './BookingProgress';
import { ChevronDown, ChevronUp, MapPin, Calendar, Clock, Car, Info, Shield, Plus, FileText, CheckCircle2 } from 'lucide-react';

export default function BookingStep5() {
  const navigate = useNavigate();
  
  // Mock booking data
  const bookingData = {
    pickup: 'Kotoka International Airport (ACC)',
    returnLoc: 'Kempinski Hotel Gold Coast City',
    pickupDate: 'Mon, 15 Jun 2026',
    pickupTime: '10:00 AM',
    returnDate: 'Fri, 19 Jun 2026',
    returnTime: '12:00 PM',
    vehicleName: 'Toyota Corolla or similar',
    vehicleClass: 'Executive Sedan',
    vehicleImage: 'https://i.ibb.co/NnFG4ZN6/Resized-5.jpg',
    basePrice: 450,
    extrasPrice: 50,
    taxes: 84.50,
  };

  const total = bookingData.basePrice + bookingData.extrasPrice + bookingData.taxes;

  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [saveTimeOpen, setSaveTimeOpen] = useState(false);
  const [flightOpen, setFlightOpen] = useState(false);
  const [payNow, setPayNow] = useState(false);

  // Form State
  const [firstName, setFirstName] = useState('Kwame');
  const [lastName, setLastName] = useState('Nkrumah');
  const [phone, setPhone] = useState('0241234567');
  const [email, setEmail] = useState('kwame@example.com');
  const [purpose, setPurpose] = useState('Business');
  const [smsOptIn, setSmsOptIn] = useState(true);
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isFormValid = firstName && lastName && phone && email && purpose;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate('/booking-confirmation');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24 font-sans flex flex-col">
      <BookingProgress currentStep={5} totalPrice={total} />
      
      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full flex flex-col-reverse lg:flex-row gap-8 items-start">
        
        {/* Main Content Form */}
        <div className="w-full lg:w-2/3 space-y-8">
          
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Review & Reserve</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Policies Accordion */}
            <div className="bg-white border border-gray-200">
              <button 
                type="button"
                onClick={() => setPoliciesOpen(!policiesOpen)}
                className="w-full p-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-brand-maroon mr-3" />
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Rental Policies</h2>
                </div>
                {policiesOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              {policiesOpen && (
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Renter Requirements</h3>
                    <p className="text-sm text-gray-600 font-medium">Valid driving licence required. Minimum age applies.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Cancellation Policy</h3>
                    <p className="text-sm text-gray-600 font-medium">Free cancellation up to 48 hours before pickup.</p>
                  </div>
                  <a href="/terms-conditions" target="_blank" className="text-brand-maroon text-sm font-bold hover:underline block mt-4">View full Rental Contract Terms</a>
                </div>
              )}
            </div>

            {/* Contact Details Form */}
            <div className="bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-100 pb-2">Contact Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">First Name *</label>
                  <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Last Name *</label>
                  <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Phone Number *</label>
                  <div className="flex">
                    <span className="bg-gray-100 border-2 border-r-0 border-gray-200 p-3 text-sm font-bold text-gray-600">+233</span>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Email Address *</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Purpose of Travel *</label>
                  <select value={purpose} onChange={e => setPurpose(e.target.value)} required className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm">
                    <option value="">Select Purpose</option>
                    <option value="Business">Business</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Airport Transfer">Airport Transfer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-gray-900 mb-3">Send SMS updates about this booking?</p>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" checked={smsOptIn} onChange={() => setSmsOptIn(true)} className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon" />
                    <span className="ml-2 text-sm font-bold text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" checked={!smsOptIn} onChange={() => setSmsOptIn(false)} className="w-4 h-4 text-brand-maroon focus:ring-brand-maroon" />
                    <span className="ml-2 text-sm font-bold text-gray-700">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Flight Details (Optional) */}
            <div className="bg-white border border-gray-200">
              <button 
                type="button"
                onClick={() => setFlightOpen(!flightOpen)}
                className="w-full p-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Flight Details (Optional)</h2>
                </div>
                {flightOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              {flightOpen && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium mb-4">Provide flight info for automatic driver time adjustment.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Airline</label>
                      <select className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm">
                        <option value="">Select Airline</option>
                        <option value="Emirates">Emirates</option>
                        <option value="British Airways">British Airways</option>
                        <option value="Delta">Delta</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Flight Number</label>
                      <input type="text" placeholder="e.g. EK787" className="w-full border-2 border-gray-200 focus:border-brand-maroon rounded-none outline-none p-3 text-sm" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Complete Booking Section */}
            <div className="bg-gray-900 text-white p-8 border-t-4 border-brand-yellow mt-8">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Complete Your Booking</h2>
              
              <div className="bg-white/10 p-6 mb-8 text-center border-2 border-white/20 border-dashed">
                <p className="text-sm font-bold text-brand-yellow uppercase tracking-widest mb-2">Estimated Total Due at Pick-Up</p>
                <p className="text-4xl font-black">GH₵{total.toFixed(2)}</p>
                <p className="text-sm text-gray-400 font-medium mt-2">You will be charged when you pick up the vehicle.</p>
              </div>

              <div className="flex items-start mb-6">
                <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mr-3 mt-0.5" />
                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                  By clicking Reserve Now, I agree to the <a href="/terms-conditions" target="_blank" className="text-brand-yellow hover:underline">Terms of Use</a> and acknowledge that all reservations are subject to availability.
                </p>
              </div>

              <button 
                type="submit"
                disabled={!isFormValid}
                className="w-full py-5 bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-black uppercase tracking-widest text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center shadow-xl"
              >
                Reserve Now
              </button>
            </div>

          </form>

        </div>

        {/* Right Sidebar - Booking Summary */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-[100px]">
          <div className="bg-white shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-brand-maroon p-6 text-white flex justify-between items-center">
              <h2 className="text-lg font-black uppercase tracking-wider">Booking Summary</h2>
            </div>
            
            <div className="p-0">
              
               {/* Location & Time */}
               <div className="p-6 border-b border-gray-100">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="font-black text-gray-900 uppercase tracking-tight">Location & Time</h3>
                   <a href="/booking/step-2" className="text-brand-maroon text-xs font-bold hover:underline">Edit</a>
                 </div>
                 
                 <div className="relative mb-4">
                   <div className="pl-6 border-l-2 border-dashed border-gray-300 ml-2 relative">
                     <div className="absolute -left-[11px] top-0 w-5 h-5 bg-brand-maroon rounded-full flex items-center justify-center border-4 border-white"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Pick-Up</p>
                     <p className="font-bold text-gray-900 text-sm leading-tight mb-1">{bookingData.pickup}</p>
                     <p className="text-xs text-gray-500 font-medium">{bookingData.pickupDate} @ {bookingData.pickupTime}</p>
                     
                     <div className="h-6"></div>
                     
                     <div className="absolute -left-[11px] bottom-0 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center border-4 border-white"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Return</p>
                     <p className="font-bold text-gray-900 text-sm leading-tight mb-1">{bookingData.returnLoc}</p>
                     <p className="text-xs text-gray-500 font-medium">{bookingData.returnDate} @ {bookingData.returnTime}</p>
                   </div>
                 </div>
               </div>

               {/* Vehicle Details */}
               <div className="p-6 border-b border-gray-100 bg-gray-50">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="font-black text-gray-900 uppercase tracking-tight">Vehicle</h3>
                   <a href="/booking/step-3" className="text-brand-maroon text-xs font-bold hover:underline">Edit</a>
                 </div>
                 
                 <h4 className="font-bold text-gray-900">{bookingData.vehicleClass}</h4>
                 <p className="text-sm text-gray-600 mb-3">{bookingData.vehicleName}</p>
                 <img src={bookingData.vehicleImage} alt={bookingData.vehicleName} className="w-full h-32 object-cover border border-gray-200 shadow-sm mb-4" />
                 
                 <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                   <span>Rate / Day</span>
                   <span>GH₵{bookingData.basePrice.toFixed(2)}</span>
                 </div>
               </div>

               {/* Extras */}
               <div className="p-6 border-b border-gray-100">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="font-black text-gray-900 uppercase tracking-tight">Extras added</h3>
                   <a href="/booking/step-4" className="text-brand-maroon text-xs font-bold hover:underline">Edit</a>
                 </div>
                 <div className="flex justify-between items-center text-sm font-medium text-gray-600 mb-2">
                   <span>Collision Damage Waiver</span>
                   <span>GH₵50.00</span>
                 </div>
               </div>

               <div className="p-6 border-b border-gray-100">
                 <div className="flex justify-between items-center text-sm font-bold text-gray-900 mb-2">
                   <span className="flex items-center">Taxes & Fees <Info className="w-3 h-3 text-gray-400 ml-1" /></span>
                   <span>GH₵{bookingData.taxes.toFixed(2)}</span>
                 </div>
               </div>

               <div className="p-6 bg-gray-50">
                 <div className="flex justify-between items-end">
                   <span className="font-black text-gray-900 uppercase tracking-tight text-lg leading-none">Estimated Total</span>
                   <span className="text-2xl font-black text-brand-maroon leading-none">GH₵{total.toFixed(2)}</span>
                 </div>
               </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
