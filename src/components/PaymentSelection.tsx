import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, ChevronRight, CheckCircle2, ShieldCheck, Lock, ArrowRight, ChevronLeft, Building2, Globe } from 'lucide-react';

interface SavedMethod {
  id: string;
  type: 'card' | 'momo';
  accountName: string;
  maskedNumber: string;
}

const SAVED_METHODS: SavedMethod[] = [
  { id: '1', type: 'card', accountName: 'Visa', maskedNumber: '•••• 4242' },
  { id: '2', type: 'momo', accountName: 'MTN Mobile Money', maskedNumber: 'MTN ••• 789' }
];

export default function PaymentSelection() {
  const navigate = useNavigate();
  const [selectedMethodId, setSelectedMethodId] = useState<string | null>(null);
  
  // New Method State
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [showNewMomoForm, setShowNewMomoForm] = useState(false);

  const handleSelectSaved = (id: string) => {
    setSelectedMethodId(id);
    setShowNewCardForm(false);
    setShowNewMomoForm(false);
  };

  const selectNewCard = () => {
    setSelectedMethodId('new-card');
    setShowNewCardForm(true);
    setShowNewMomoForm(false);
  };

  const selectNewMomo = () => {
    setSelectedMethodId('new-momo');
    setShowNewMomoForm(true);
    setShowNewCardForm(false);
  };

  const handleProceed = () => {
    if (selectedMethodId) {
      navigate('/payment-processing');
    }
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Step Header */}
      <div className="bg-brand-maroon py-6">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex items-center text-brand-yellow font-bold text-sm tracking-wider uppercase mb-2">
            STEP 5 OF 6
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">Payment Selection</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
        
        {/* Saved Methods */}
        <section className="mb-12">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Saved Methods</h2>
          <div className="space-y-4">
            {SAVED_METHODS.map(method => (
              <div 
                key={method.id}
                onClick={() => handleSelectSaved(method.id)}
                className={`bg-white border-2 cursor-pointer transition-all flex items-center p-6 ${selectedMethodId === method.id ? 'border-brand-maroon shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 mr-6 shrink-0 flex items-center justify-center ${selectedMethodId === method.id ? 'border-brand-maroon' : 'border-gray-300'}`}>
                  {selectedMethodId === method.id && <div className="w-3 h-3 bg-brand-maroon rounded-full"></div>}
                </div>
                
                <div className="w-12 h-8 bg-gray-50 border border-gray-100 rounded flex items-center justify-center mr-4 shrink-0">
                  {method.type === 'card' ? <CreditCard className="w-5 h-5 text-gray-600" /> : <Smartphone className="w-5 h-5 text-gray-600" />}
                </div>
                
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg uppercase tracking-wider">{method.accountName}</p>
                  <p className="text-sm text-gray-500 font-mono tracking-widest">{method.maskedNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add New Method */}
        <section className="mb-12">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Use Another Method</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button 
               onClick={selectNewCard}
               className={`flex items-center justify-center p-6 border-2 font-bold uppercase tracking-wider text-sm transition-colors ${selectedMethodId === 'new-card' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'}`}
            >
               <CreditCard className="w-5 h-5 mr-3" /> Credit / Debit Card
            </button>
            <button 
               onClick={selectNewMomo}
               className={`flex items-center justify-center p-6 border-2 font-bold uppercase tracking-wider text-sm transition-colors ${selectedMethodId === 'new-momo' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'}`}
            >
               <Smartphone className="w-5 h-5 mr-3" /> Mobile Money
            </button>
          </div>

          {/* New Card Form */}
          {showNewCardForm && (
             <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 animate-in slide-in-from-top-4 duration-300">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">Card Details</h3>
                 <Lock className="w-4 h-4 text-gray-400" />
               </div>
               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-900 mb-2">Card Number</label>
                   <input type="text" placeholder="0000 0000 0000 0000" className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white text-lg tracking-widest font-mono" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-900 mb-2">Cardholder Name</label>
                   <input type="text" placeholder="NAME ON CARD" className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white uppercase text-sm" />
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-bold text-gray-900 mb-2">Expiry Date</label>
                     <input type="text" placeholder="MM/YY" className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-center uppercase text-sm" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-900 mb-2">CVV</label>
                     <input type="password" placeholder="•••" className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-center tracking-[0.3em] font-mono" />
                   </div>
                 </div>
               </div>
             </div>
          )}

          {/* New MoMo Form */}
          {showNewMomoForm && (
             <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 animate-in slide-in-from-top-4 duration-300">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest">Mobile Wallet Details</h3>
               </div>
               <div className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Network Provider</label>
                    <select className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 font-medium">
                      <option>MTN Mobile Money</option>
                      <option>Telecel Cash</option>
                      <option>AirtelTigo Money</option>
                    </select>
                  </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-900 mb-2">Mobile Number</label>
                   <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-none border border-r-0 border-gray-300 bg-gray-100 text-gray-500 font-bold sm:text-sm">
                        +233
                      </span>
                      <input type="tel" placeholder="24 123 4567" className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 flex-1 text-sm" />
                   </div>
                   <p className="text-xs text-gray-500 mt-2 font-medium">You will receive a prompt on your phone to authorize this payment.</p>
                 </div>
               </div>
             </div>
          )}
        </section>

        {/* Global Action */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
          <button 
            onClick={() => navigate(-1)}
            className="sm:w-1/3 py-4 border-2 border-gray-200 bg-white font-bold text-gray-900 uppercase tracking-wider text-sm hover:border-gray-900 transition-colors"
          >
            Go Back
          </button>
          <button 
            onClick={handleProceed}
            disabled={!selectedMethodId}
            className="flex-1 bg-brand-yellow font-black text-gray-900 py-4 px-8 hover:bg-brand-yellow-hover transition-colors shadow-lg uppercase tracking-widest text-sm flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <span>Confirm & Pay Now</span>
            <ArrowRight className="w-5 h-5 ml-2 group-enabled:group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center text-xs font-bold text-gray-400 uppercase tracking-wider">
           <Lock className="w-4 h-4 mr-2" /> Payments securely processed
        </div>

      </div>
    </main>
  );
}
