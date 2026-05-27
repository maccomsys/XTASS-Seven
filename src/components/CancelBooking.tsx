import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function CancelBooking() {
  const { id } = useParams();
  const bookingId = id || 'XTA-12345';
  
  const [reason, setReason] = useState('');
  const [isCancelled, setIsCancelled] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason) return;
    
    setIsProcessing(true);
    // Simulate cancellation process
    setTimeout(() => {
      setIsProcessing(false);
      setIsCancelled(true);
    }, 1500);
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24 h-full min-h-[80vh] flex flex-col justify-center py-12">
      <div className="max-w-xl mx-auto px-6 w-full">
        
        <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden relative">
          
          {/* Header Strip */}
          <div className={`h-2 w-full ${isCancelled ? 'bg-red-600' : 'bg-brand-maroon'}`}></div>

          <div className="p-8 md:p-12">
            {!isCancelled ? (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h1 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Cancel Reservation</h1>
                  <p className="text-gray-500 font-medium">Booking <span className="text-gray-900 font-bold">{bookingId}</span></p>
                </div>

                <form onSubmit={handleCancel} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Reason for cancellation</label>
                    <div className="relative">
                      <select 
                        required
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="block w-full pl-4 pr-10 py-3.5 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm appearance-none font-medium"
                      >
                        <option value="" disabled>Select a reason...</option>
                        <option value="Changed My Plans">Changed My Plans</option>
                        <option value="Booked by Mistake">Booked by Mistake</option>
                        <option value="Found Another Option">Found Another Option</option>
                        <option value="Driver Not Yet Assigned">Driver Not Yet Assigned</option>
                        <option value="Emergency">Emergency</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 border-l-4 border-gray-300 text-sm text-gray-600 italic">
                    <p><strong>Cancellation Policy:</strong> Cancellations made well in advance are generally free. Cancellations close to pickup time may incur a modest fee.</p>
                  </div>

                  <div className="pt-6 space-y-3">
                    <button
                      type="submit"
                      disabled={isProcessing || !reason}
                      className={`w-full py-4 text-center font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-center ${
                        isProcessing || !reason 
                          ? 'bg-red-200 text-red-500 cursor-not-allowed' 
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        'Confirm Cancellation'
                      )}
                    </button>
                    <Link
                      to={`/booking-detail/${bookingId}`}
                      className="block w-full py-4 border-2 border-gray-200 text-gray-900 font-bold text-center text-sm tracking-wider uppercase hover:border-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      Keep My Booking
                    </Link>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center animate-in fade-in zoom-in-95 duration-500 py-6">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Booking Cancelled</h1>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Your reservation <span className="font-bold text-gray-900">{bookingId}</span> has been successfully cancelled.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 p-6 mb-8 text-left uppercase text-xs tracking-wider">
                  <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
                    <span className="font-bold text-gray-500">Ref Code</span>
                    <span className="font-black text-gray-900">CXL-98765</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-500">Refund Status</span>
                    <span className="font-bold text-yellow-600">PROCESSING (3-5 DAYS)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    to="/start-reservation"
                    className="block w-full py-4 bg-brand-yellow font-bold text-gray-900 text-center text-sm tracking-wider uppercase hover:bg-brand-yellow-hover transition-colors"
                  >
                    Start a New Reservation
                  </Link>
                  <Link
                    to="/"
                    className="block w-full py-4 border-2 border-gray-200 text-gray-900 font-bold text-center text-sm tracking-wider uppercase hover:border-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
