import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function PaymentProcessing() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'processing' | 'success' | 'failure'>('processing');

  useEffect(() => {
    // Simulate 2 second processing delay
    const timer1 = setTimeout(() => {
      // 90% success rate for mock purposes
      if (Math.random() > 0.1) {
        setStatus('success');
      } else {
        setStatus('failure');
      }
    }, 2000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (status === 'success') {
      const timer2 = setTimeout(() => {
        navigate('/booking-confirmation'); 
      }, 1500);
      return () => clearTimeout(timer2);
    }
  }, [status, navigate]);

  const retryPayment = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <main className="flex-grow bg-white flex flex-col items-center justify-center p-6 min-h-[70vh]">
      <div className="max-w-md w-full text-center">
        
        {/* Logo minimal */}
        <div className="mb-12 pb-8 border-b border-gray-100 flex justify-center">
           <img src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png" alt="XTASS Logo" className="h-10 opacity-50 grayscale" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
           {/* Fallback if logo not found */}
           <span className="font-black text-2xl tracking-tighter text-gray-300 hidden">XTASS</span>
        </div>

        <div className="relative h-48 flex items-center justify-center mb-8">
           {status === 'processing' && (
             <div className="absolute inset-0 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
               <Loader2 className="w-20 h-20 text-brand-maroon animate-spin mb-6" />
               <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-2">Processing</h2>
               <p className="text-gray-500 font-medium">Please wait while we confirm your payment...</p>
             </div>
           )}

           {status === 'success' && (
             <div className="absolute inset-0 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
               <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-50">
                 <CheckCircle2 className="w-12 h-12 text-green-500" />
               </div>
               <h2 className="text-3xl font-black text-green-600 uppercase tracking-widest mb-2">Successful!</h2>
               <p className="text-gray-500 font-medium">Your booking is confirmed.</p>
             </div>
           )}

           {status === 'failure' && (
             <div className="absolute inset-0 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
               <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-50">
                 <XCircle className="w-12 h-12 text-red-500" />
               </div>
               <h2 className="text-3xl font-black text-red-600 uppercase tracking-widest mb-2">Payment Failed</h2>
               <p className="text-gray-500 font-medium">Unfortunately, your payment could not be processed.</p>
             </div>
           )}
        </div>

        {status === 'failure' && (
          <div className="flex flex-col gap-4 mt-12 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={retryPayment}
              className="w-full bg-brand-maroon font-bold text-white py-4 px-8 hover:bg-brand-maroon-hover transition-colors uppercase tracking-widest text-sm"
            >
              Try Again
            </button>
            <button 
              onClick={() => navigate('/payment-selection')}
              className="w-full bg-white border-2 border-gray-200 font-bold text-gray-900 py-4 px-8 hover:border-gray-900 transition-colors uppercase tracking-widest text-sm"
            >
              Use Different Method
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
