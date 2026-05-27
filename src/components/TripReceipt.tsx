import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Star, MapPin, Receipt, ArrowRight } from 'lucide-react';

export default function TripReceipt() {
  const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCheck(true), 100);
  }, []);

  const handleRatingSubmit = () => {
    if (rating === 0) return;
    setRatingSubmitted(true);
  };

  return (
    <main className="flex-grow bg-gray-50 py-12 px-4 font-sans flex justify-center">
      <div className="w-full max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center transition-all duration-700 transform ${showCheck ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="mt-4 text-3xl font-black text-gray-900 uppercase tracking-tight">Trip Completed</h1>
          <p className="text-gray-500 font-medium">Thank you for riding with XTASS.</p>
        </div>

        <div className="bg-white shadow-2xl border border-gray-200">
          
          {/* Top Info Bar */}
          <div className="bg-gray-900 text-white px-8 py-4 flex flex-col sm:flex-row justify-between sm:items-center">
            <div className="flex items-center gap-2">
              <Receipt className="w-5 h-5 text-gray-400" />
              <span className="font-bold tracking-widest uppercase text-sm">Receipt #XTA-88294</span>
            </div>
            <span className="text-gray-400 text-sm mt-2 sm:mt-0 font-medium">15 Jun 2026, 11:45 AM</span>
          </div>

          <div className="p-8 md:p-12">
            
            {/* Trip Route */}
            <div className="border-b border-gray-100 pb-8 mb-8">
              <div className="relative pl-8 h-32">
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-200"></div>
                <div className="absolute left-0 top-1 w-5 h-5 bg-black rounded-full border-4 border-white shadow"></div>
                <div className="mb-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Pick-up</p>
                  <p className="font-bold text-gray-900">Kotoka International Airport (ACC)</p>
                  <p className="text-sm text-gray-500">10:05 AM</p>
                </div>
                
                <div className="absolute left-0 bottom-1 w-5 h-5 bg-brand-maroon rounded-full border-4 border-white shadow"></div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Drop-off</p>
                  <p className="font-bold text-gray-900">Kempinski Hotel Gold Coast City</p>
                  <p className="text-sm text-gray-500">11:32 AM</p>
                </div>
              </div>
              <div className="mt-6 inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 uppercase tracking-widest">
                Distance: 8.5 km
              </div>
            </div>

            {/* Fare Breakdown */}
            <div className="mb-10">
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4">Fare Breakdown</h2>
              <div className="space-y-4 text-sm font-medium text-gray-600">
                <div className="flex justify-between">
                  <span>Base Fare (Premium)</span>
                  <span className="font-bold text-gray-900">GH₵ 120.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance Charge (8.5 km)</span>
                  <span className="font-bold text-gray-900">GH₵ 42.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Charge (87 mins)</span>
                  <span className="font-bold text-gray-900">GH₵ 25.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes &amp; Platform Fees (18%)</span>
                  <span className="font-bold text-gray-900">GH₵ 33.75</span>
                </div>
                <div className="border-t-2 border-gray-900 pt-4 mt-2 flex justify-between items-end">
                  <span className="text-lg font-black text-gray-900 uppercase tracking-widest">Total Paid</span>
                  <span className="text-3xl font-black text-brand-maroon">GH₵ 221.25</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Paid via Credit Card ending in 4242</span>
                  <span>15 Jun 2026, 11:32 AM</span>
                </div>
              </div>
            </div>

            <button className="w-full mb-12 py-4 border-2 border-gray-200 hover:border-brand-maroon hover:text-brand-maroon text-gray-700 font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center bg-gray-50">
              <Download className="w-4 h-4 mr-2" /> Download PDF Receipt
            </button>

            {/* Driver Rating */}
            <div className="bg-gray-50 border border-gray-200 p-8 text-center relative overflow-hidden">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-white shadow-sm overflow-hidden">
                 <img src="https://i.ibb.co/HTVggwbD/Airport-Pickup-5.jpg" alt="Driver" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-1">Rate your driver, Kofi A.</h2>
              <p className="text-gray-500 text-sm font-medium mx-auto mb-6">Executive Sedan • GW-4500-24</p>
              
              {!ratingSubmitted ? (
                <div>
                  <div className="flex justify-center gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star}
                        onClick={() => setRating(star)}
                        className={`transition-transform hover:scale-110 focus:outline-none ${rating >= star ? 'text-brand-yellow' : 'text-gray-300'}`}
                      >
                        <Star className="w-10 h-10 fill-current" />
                      </button>
                    ))}
                  </div>
                  
                  {rating > 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                       <textarea 
                         value={comment}
                         onChange={(e) => setComment(e.target.value)}
                         placeholder="Optional: leave a comment about your trip..."
                         className="w-full border-2 border-gray-200 p-4 min-h-[100px] mb-4 text-sm font-medium focus:outline-none focus:border-brand-maroon"
                       />
                       <button 
                         onClick={handleRatingSubmit}
                         className="w-full py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors"
                       >
                         Submit Rating
                       </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-6 animate-in zoom-in duration-300">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                     <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Thank you!</h3>
                  <p className="text-gray-500 text-sm font-medium">Your feedback helps us improve.</p>
                </div>
              )}
            </div>

          </div>
          
          <div className="bg-brand-maroon p-1 text-center">
             <button 
               onClick={() => navigate('/booking/step-1')}
               className="w-full bg-brand-maroon text-white font-bold py-6 uppercase tracking-widest text-sm hover:bg-brand-maroon-hover transition-colors flex items-center justify-center"
             >
               Book Another Ride <ArrowRight className="w-5 h-5 ml-2" />
             </button>
          </div>
        </div>
      </div>
    </main>
  );
}
