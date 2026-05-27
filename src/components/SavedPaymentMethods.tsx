import { useState } from 'react';
import { CreditCard, Smartphone, Plus, Trash2, CheckCircle2, ShieldCheck, BadgeDollarSign } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'momo';
  network: string; // e.g. "Visa", "Mastercard", "MTN", "Vodafone"
  maskedNumber: string;
  isDefault: boolean;
  expiry?: string;
}

const INITIAL_METHODS: PaymentMethod[] = [
  { id: '1', type: 'card', network: 'Visa', maskedNumber: '•••• •••• •••• 4242', isDefault: true, expiry: '12/28' },
  { id: '2', type: 'momo', network: 'MTN Mobile Money', maskedNumber: 'MTN ••• 789', isDefault: false }
];

export default function SavedPaymentMethods() {
  const [methods, setMethods] = useState<PaymentMethod[]>(INITIAL_METHODS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [methodType, setMethodType] = useState<'card' | 'momo'>('card');

  // Form State - Card
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Form State - MoMo
  const [networkProvider, setNetworkProvider] = useState('MTN Mobile Money');
  const [phoneNumber, setPhoneNumber] = useState('');

  const maskCardNumber = (num: string) => {
    // Just a basic visual mask simulation for typing
    const digits = num.replace(/\D/g, '');
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(' ') : digits;
  };

  const handleSetDefault = (id: string) => {
    setMethods(methods.map(m => ({
      ...m,
      isDefault: m.id === id
    })));
  };

  const handleRemove = (id: string) => {
    if (window.confirm('Are you sure you want to remove this payment method?')) {
      const isRemovingDefault = methods.find(m => m.id === id)?.isDefault;
      const updatedMethods = methods.filter(m => m.id !== id);
      
      // If we removed the default, make the first remaining one default
      if (isRemovingDefault && updatedMethods.length > 0) {
        updatedMethods[0].isDefault = true;
      }
      
      setMethods(updatedMethods);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    let newMethod: PaymentMethod;
    const newId = Date.now().toString();
    const willBeDefault = methods.length === 0; // Default if first method

    if (methodType === 'card') {
      const last4 = cardNumber.replace(/\D/g, '').slice(-4) || 'XXXX';
      newMethod = {
        id: newId,
        type: 'card',
        network: cardNumber.startsWith('4') ? 'Visa' : 'Mastercard', // naive check
        maskedNumber: `•••• •••• •••• ${last4}`,
        isDefault: willBeDefault,
        expiry: expiryDate
      };
    } else {
      const last3 = phoneNumber.replace(/\D/g, '').slice(-3) || 'XXX';
      newMethod = {
        id: newId,
        type: 'momo',
        network: networkProvider,
        maskedNumber: `${networkProvider.split(' ')[0]} ••• ${last3}`,
        isDefault: willBeDefault
      };
    }

    setMethods([...methods, newMethod]);
    
    // Reset
    setShowAddForm(false);
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
    setPhoneNumber('');
  };

  const getNetworkIcon = (method: PaymentMethod) => {
    if (method.type === 'card') return <CreditCard className="w-8 h-8 text-gray-700" />;
    return <Smartphone className="w-8 h-8 text-gray-700" />;
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Payment Methods
            </h1>
            <p className="text-gray-300 font-medium">Manage your saved credit cards and mobile money accounts.</p>
          </div>
          {!showAddForm && (
            <button 
              onClick={() => setShowAddForm(true)}
              className="mt-6 md:mt-0 bg-brand-yellow text-gray-900 font-bold py-3 px-6 uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors inline-flex items-center shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
              Add Payment Method
            </button>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {showAddForm ? (
          <div className="bg-white shadow-xl border border-gray-100 p-8 mb-8 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider flex items-center">
              <ShieldCheck className="w-6 h-6 mr-3 text-brand-maroon" />
              Add New Payment Method
            </h2>

            {/* Method Type Selector */}
            <div className="flex gap-4 mb-8">
              <button
                type="button"
                onClick={() => setMethodType('card')}
                className={`flex-1 flex flex-col items-center justify-center py-6 border-2 transition-colors ${methodType === 'card' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}
              >
                <CreditCard className="w-8 h-8 mb-2" />
                <span className="font-bold text-sm tracking-wider uppercase">Credit / Debit Card</span>
              </button>
              <button
                type="button"
                onClick={() => setMethodType('momo')}
                className={`flex-1 flex flex-col items-center justify-center py-6 border-2 transition-colors ${methodType === 'momo' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}
              >
                <Smartphone className="w-8 h-8 mb-2" />
                <span className="font-bold text-sm tracking-wider uppercase">Mobile Money</span>
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
              
              {methodType === 'card' ? (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Card Number</label>
                    <input 
                      type="text" 
                      value={cardNumber} 
                      onChange={(e) => setCardNumber(maskCardNumber(e.target.value))}
                      required
                      maxLength={19}
                      placeholder="0000 0000 0000 0000"
                      className="block w-full px-4 py-3 text-lg tracking-widest font-mono border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Cardholder Name</label>
                    <input 
                      type="text" 
                      value={cardName} 
                      onChange={(e) => setCardName(e.target.value.toUpperCase())}
                      required
                      placeholder="JOHN DOE"
                      className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 uppercase focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Expiry Date</label>
                      <input 
                        type="text" 
                        value={expiryDate} 
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          if (val.length >= 2) val = val.slice(0,2) + '/' + val.slice(2,4);
                          setExpiryDate(val);
                        }}
                        required
                        maxLength={5}
                        placeholder="MM/YY"
                        className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm text-center"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">CVV</label>
                      <input 
                        type="password" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                        required
                        maxLength={4}
                        placeholder="•••"
                        className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon text-center tracking-[0.3em] font-mono"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Network Provider</label>
                    <select
                      value={networkProvider} 
                      onChange={(e) => setNetworkProvider(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm font-medium"
                    >
                      <option value="MTN Mobile Money">MTN Mobile Money</option>
                      <option value="Vodafone Cash">Telecel Cash / Vodafone Cash</option>
                      <option value="AirtelTigo Money">AirtelTigo Money</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Mobile Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-none border border-r-0 border-gray-300 bg-gray-100 text-gray-500 font-bold sm:text-sm">
                        +233
                      </span>
                      <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        required
                        placeholder="24 123 4567"
                        className="flex-1 block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="bg-brand-maroon text-white font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-brand-maroon-hover transition-colors flex-1 md:flex-none"
                >
                  Save Method
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-white text-gray-900 border-2 border-gray-200 font-bold py-3 px-8 text-sm uppercase tracking-wider hover:border-gray-900 transition-colors flex-1 md:flex-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            {methods.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {methods.map((method) => (
                  <div key={method.id} className={`bg-white border-2 shadow-sm flex flex-col relative overflow-hidden transition-all ${method.isDefault ? 'border-green-500' : 'border-gray-200'}`}>
                    
                    <div className="p-6 pb-0 flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-10 bg-gray-50 border border-gray-200 rounded flex items-center justify-center mr-4 shrink-0">
                          {getNetworkIcon(method)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{method.network}</h3>
                          <div className="flex items-center text-gray-500 mt-1 font-mono text-sm tracking-widest">
                             {method.maskedNumber}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {method.type === 'card' && method.expiry && (
                      <div className="px-6 mb-6">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expires</p>
                        <p className="text-sm font-medium text-gray-900 mt-0.5">{method.expiry}</p>
                      </div>
                    )}
                    
                    <div className="flex border-t border-gray-100 mt-auto bg-gray-50">
                      {method.isDefault ? (
                        <div className="flex-1 flex justify-center items-center py-3 text-sm font-bold text-green-700 bg-green-50/50 border-r border-gray-100">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" /> Default Method
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleSetDefault(method.id)}
                          className="flex-1 flex justify-center items-center py-3 text-sm font-bold text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-100"
                        >
                           Set as Default
                        </button>
                      )}
                      
                      <button 
                        onClick={() => handleRemove(method.id)}
                        className="px-6 flex justify-center items-center py-3 text-sm font-bold text-red-600 hover:bg-red-100 transition-colors"
                        title="Remove method"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BadgeDollarSign className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Saved Payment Methods</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  Add a credit card or mobile money account to make checkout faster and easier for future trips.
                </p>
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="inline-flex items-center bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider shadow-lg"
                >
                  <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
                  Add Payment Method
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
