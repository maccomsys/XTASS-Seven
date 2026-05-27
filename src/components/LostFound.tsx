import { useState } from 'react';
import { Search, MapPin, Package, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LostFound() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Search className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Lost &amp; Found</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Left something behind? We will do everything we can to reunite you with your property.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 -mt-8 relative z-10">
        
        {/* Left Column: Form */}
        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight flex items-center">
            <Package className="w-6 h-6 mr-3 text-brand-maroon" /> Report a Lost Item
          </h2>
          
          {formStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in-95 duration-500 w-full h-full">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully</h3>
              <p className="text-gray-600 font-medium mb-2">Your Case Number: <strong className="text-gray-900">LST-90011B</strong></p>
              <p className="text-gray-600 font-medium max-w-sm mx-auto mb-8">
                Our dispatch team is currently attempting to contact the driver of your vehicle. We will update you shortly.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-brand-maroon font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Booking Reference *</label>
                <input type="text" required placeholder="e.g. XTA-12345" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                <p className="text-xs text-gray-500 mt-2 font-medium">Found in your email confirmation. Essential for identifying the correct vehicle.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Item Description *</label>
                <textarea 
                  required
                  rows={4} 
                  placeholder="Please be as specific as possible (color, brand, distinguishing features)."
                  className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Contact Email *</label>
                  <input type="email" required placeholder="Where we will send updates" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Contact Phone *</label>
                  <input type="tel" required placeholder="Mobile number" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className={`w-full py-4 font-bold uppercase tracking-wider text-sm transition-colors shadow-sm inline-flex items-center justify-center mt-4
                  ${formStatus === 'submitting' 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-brand-maroon text-white hover:bg-brand-maroon-hover'
                  }`}
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Report'}
                {formStatus !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2" />}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Process */}
        <div className="pt-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight uppercase">Recovery Process</h2>
          <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
            We understand losing an item is stressful. Here is exactly what happens once you submit a report.
          </p>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200">
            {/* Step 1 */}
            <div className="relative flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-maroon bg-white text-brand-maroon font-black shadow-sm shrink-0 z-10">
                1
              </div>
              <div className="ml-6 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">XTASS Contacts Driver</h3>
                <p className="text-gray-600 font-medium">Using your booking reference, our dispatch immediately alerts the dedicated chauffeur or fleet manager assigned to your trip to secure the vehicle.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-maroon bg-white text-brand-maroon font-black shadow-sm shrink-0 z-10">
                2
              </div>
              <div className="ml-6 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Item Recovery</h3>
                <p className="text-gray-600 font-medium">If located, the item is secured. We will contact you immediately to inform you of its status.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-maroon bg-white text-brand-maroon font-black shadow-sm shrink-0 z-10">
                3
              </div>
              <div className="ml-6 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Return Delivery / Collection</h3>
                <p className="text-gray-600 font-medium">Arrangements are made for you to collect the item from our nearest hub, or we can coordinate a courier return (delivery fees may apply).</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-100 p-6 rounded border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center"><UserCheck className="w-5 h-5 mr-2 text-brand-maroon" /> Typical Recovery Times</h4>
            <p className="text-sm text-gray-600 font-medium">
              If reported within 2 hours of trip completion, recovery success rates are above 90%. Found items are held at our secure facilities for a maximum of 30 days.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
