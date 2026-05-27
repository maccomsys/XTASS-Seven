import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, CarFront, ChevronRight, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export default function RentalConfirmation() {
  const navigate = useNavigate();
  
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedCancel, setAgreedCancel] = useState(false);
  const [agreedDriver, setAgreedDriver] = useState(false);
  const [agreedLiability, setAgreedLiability] = useState(false);

  const canConfirm = agreedTerms && agreedCancel && agreedDriver && agreedLiability;

  return (
    <main className="flex-grow bg-gray-50 pb-32">
      <div className="bg-brand-maroon py-6">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center text-brand-yellow font-bold text-sm tracking-wider uppercase mb-2">
            STEP 5 OF 5
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Review & Reserve</h1>
          <p className="text-gray-200 font-medium text-sm">Please review your rental details before completing the reservation.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        
        {/* Full Rental Summary */}
        <section className="bg-white shadow-xl border border-gray-100 mb-8">
          <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Trip Details</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 uppercase tracking-wider">Self-Drive Rental</span>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
               <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-maroon/10 flex items-center justify-center mr-4 shrink-0 mt-1">
                     <span className="w-2.5 h-2.5 rounded-full bg-brand-maroon"></span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">Pickup</span>
                    <p className="font-bold text-gray-900 leading-tight mb-1">Kotoka International Airport (ACC)</p>
                    <p className="text-sm text-gray-600">Nov 15, 2024 • 14:30</p>
                  </div>
               </div>
               <div className="w-0.5 h-8 bg-gray-200 ml-4 -my-4 relative z-0"></div>
               <div className="flex items-start relative z-10">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/30 flex items-center justify-center mr-4 shrink-0 mt-1">
                     <div className="w-3 h-3 bg-brand-yellow border-2 border-gray-900"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">Return</span>
                    <p className="font-bold text-gray-900 leading-tight mb-1">Kotoka International Airport (ACC)</p>
                    <p className="text-sm text-gray-600">Nov 18, 2024 • 14:30</p>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4 md:border-l md:border-gray-100 md:pl-8">
               <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Rental Duration</span>
                  <p className="font-black text-gray-900 text-lg">3 Days, 0 Hours</p>
               </div>
               <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Rental Purpose</span>
                  <p className="font-bold text-gray-900">Business</p>
               </div>
            </div>
          </div>
        </section>

        {/* Vehicle & Renter Summary Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Vehicle Summary */}
          <section className="bg-white shadow-xl border border-gray-100">
             <div className="p-6 border-b border-gray-100">
               <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Vehicle</h2>
             </div>
             <div className="p-6">
                <div className="flex items-center mb-6 border-b border-gray-100 pb-6">
                  <div className="w-20 h-16 bg-gray-100 flex items-center justify-center mr-4 shrink-0">
                    <CarFront className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 uppercase tracking-tight text-lg mb-1">Toyota Land Cruiser</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Premium SUV • Auto</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                   <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Daily Rate</span>
                      <span className="font-bold text-gray-900">GH₵ 1,200.00</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Duration Total (3 Days)</span>
                      <span className="font-bold text-gray-900">GH₵ 3,600.00</span>
                   </div>
                </div>
             </div>
          </section>

          {/* Renter & Driver Details */}
          <section className="bg-white shadow-xl border border-gray-100 flex flex-col">
             <div className="p-6 border-b border-gray-100">
               <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Renter Details</h2>
             </div>
             <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                   <div className="mb-6">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Primary Renter</span>
                      <p className="font-black text-gray-900 text-lg uppercase">Kwame Mensah</p>
                      <p className="text-sm text-gray-600">kwame.mensah@example.com</p>
                   </div>
                   <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Driver Assignment</span>
                      <p className="inline-block bg-brand-maroon/10 text-brand-maroon px-3 py-1 font-bold text-sm uppercase tracking-wider">
                         You Will Drive
                      </p>
                   </div>
                </div>
             </div>
          </section>
        </div>

        {/* Extras Summary */}
        <section className="bg-white shadow-xl border border-gray-100 mb-8">
           <div className="p-6 border-b border-gray-100">
             <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Selected Extras</h2>
           </div>
           <div className="p-6">
              <div className="space-y-4 mb-6">
                 <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                    <div>
                      <p className="font-bold text-gray-900 text-sm uppercase tracking-wider">Premium Comprehensive Insurance</p>
                      <p className="text-xs text-gray-500 font-medium">GH₵ 150/day x 3 days</p>
                    </div>
                    <span className="font-bold text-gray-900">GH₵ 450.00</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                    <div>
                      <p className="font-bold text-gray-900 text-sm uppercase tracking-wider">Child Seat (Toddler)</p>
                      <p className="text-xs text-gray-500 font-medium">GH₵ 50/day x 3 days</p>
                    </div>
                    <span className="font-bold text-gray-900">GH₵ 150.00</span>
                 </div>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200 mt-6 md:-mx-6 md:-mb-6">
                 <div className="flex justify-between items-center">
                    <span className="font-black text-gray-900 uppercase tracking-widest text-lg">Total Amount</span>
                    <span className="font-black text-brand-maroon text-2xl">GH₵ 4,200.00</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Legal Agreements */}
        <section className="mb-12">
           <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Rental Agreements</h2>
           <div className="space-y-4 bg-white border border-gray-200 p-6 md:p-8">
             
             <label className="flex items-start cursor-pointer group">
                <div className={`w-6 h-6 border-2 flex items-center justify-center mr-4 shrink-0 transition-colors mt-0.5 ${agreedTerms ? 'border-brand-maroon bg-brand-maroon' : 'border-gray-300 bg-gray-50 group-hover:border-gray-400'}`}>
                  {agreedTerms && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <input type="checkbox" className="sr-only" checked={agreedTerms} onChange={(e) => setAgreedTerms(e.target.checked)} />
                <span className="text-sm text-gray-700 font-bold leading-snug">I agree to the <a href="#" className="text-brand-maroon underline">XTASS Car Rental Terms & Conditions</a>.</span>
             </label>

             <label className="flex items-start cursor-pointer group">
                <div className={`w-6 h-6 border-2 flex items-center justify-center mr-4 shrink-0 transition-colors mt-0.5 ${agreedCancel ? 'border-brand-maroon bg-brand-maroon' : 'border-gray-300 bg-gray-50 group-hover:border-gray-400'}`}>
                  {agreedCancel && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <input type="checkbox" className="sr-only" checked={agreedCancel} onChange={(e) => setAgreedCancel(e.target.checked)} />
                <span className="text-sm text-gray-700 font-bold leading-snug">I acknowledge the cancellation and refund policy.</span>
             </label>

             <label className="flex items-start cursor-pointer group">
                <div className={`w-6 h-6 border-2 flex items-center justify-center mr-4 shrink-0 transition-colors mt-0.5 ${agreedDriver ? 'border-brand-maroon bg-brand-maroon' : 'border-gray-300 bg-gray-50 group-hover:border-gray-400'}`}>
                  {agreedDriver && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <input type="checkbox" className="sr-only" checked={agreedDriver} onChange={(e) => setAgreedDriver(e.target.checked)} />
                <span className="text-sm text-gray-700 font-bold leading-snug">I confirm the authorised driver details are accurate.</span>
             </label>

             <label className="flex items-start cursor-pointer group">
                <div className={`w-6 h-6 border-2 flex items-center justify-center mr-4 shrink-0 transition-colors mt-0.5 ${agreedLiability ? 'border-brand-maroon bg-brand-maroon' : 'border-gray-300 bg-gray-50 group-hover:border-gray-400'}`}>
                  {agreedLiability && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <input type="checkbox" className="sr-only" checked={agreedLiability} onChange={(e) => setAgreedLiability(e.target.checked)} />
                <span className="text-sm text-gray-700 font-bold leading-snug">I accept liability for the vehicle during the rental period according to the selected insurance terms.</span>
             </label>

           </div>
        </section>

        {/* Global Action */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
          <button 
            onClick={() => navigate(-1)}
            className="sm:w-1/3 py-4 border-2 border-gray-200 bg-white font-bold text-gray-900 uppercase tracking-wider text-sm hover:border-gray-900 transition-colors"
          >
            Back
          </button>
          <button 
            disabled={!canConfirm}
            onClick={() => navigate('/payment-selection')}
            className="flex-1 bg-brand-yellow font-black text-gray-900 py-4 px-8 hover:bg-brand-yellow-hover transition-colors shadow-lg uppercase tracking-widest text-sm flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none group"
          >
            <span>Confirm Reservation</span>
            <ChevronRight className="w-5 h-5 ml-2 group-enabled:group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </main>
  );
}
