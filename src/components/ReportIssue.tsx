import { useState } from 'react';
import { AlertCircle, FileText, Send, PhoneCall, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReportIssue() {
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
          <AlertCircle className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Report an Issue</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            We hold ourselves to the highest standards. Let us know if something went wrong.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 -mt-8 relative z-10">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Issue Submission Form</h2>
          
          {formStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in zoom-in-95 duration-500 border-2 border-green-50 bg-green-50/20">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted</h3>
              <p className="text-gray-600 font-medium mb-2">Your reference number is: <strong className="text-gray-900">REP-89921X</strong></p>
              <p className="text-gray-600 font-medium max-w-md mx-auto mb-8">
                Our Quality Assurance team has received your report. We aim to respond within 24 hours.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Issue Type *</label>
                  <select required className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none">
                    <option value="" disabled defaultValue="">Select severity/type</option>
                    <option value="driver_behavior">Driver Behaviour or Professionalism</option>
                    <option value="vehicle_condition">Vehicle Condition or Cleanliness</option>
                    <option value="billing">Billing or Payment Issue</option>
                    <option value="late_arrival">Late Arrival</option>
                    <option value="route">Route or Navigation Problem</option>
                    <option value="safety">Safety Concern (Non-Emergency)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Booking Reference (Optional)</label>
                  <input type="text" placeholder="e.g. XTA-12345" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Detailed Description *</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="Please describe exactly what happened. Include dates, times, or vehicle plate numbers if known."
                  className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Contact Email *</label>
                  <input type="email" required placeholder="For our team to follow up" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Contact Phone</label>
                  <input type="tel" placeholder="Alternative contact number" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className={`w-full md:w-auto px-10 py-4 font-bold uppercase tracking-wider text-sm transition-colors shadow-sm inline-flex items-center justify-center mt-4
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

        {/* Right Column: Info & Channels */}
        <div className="lg:col-span-4 space-y-8">
          
          <div className="bg-brand-maroon-dark text-white p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-brand-yellow">Response Timeline</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-white/10">
                <p className="font-bold text-sm uppercase tracking-widest text-white/70 mb-1">Standard Issues</p>
                <p className="font-medium text-white/90">We aim to respond to general complaints and billing inquiries within 24 hours.</p>
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-brand-yellow mb-1">Safety Concerns</p>
                <p className="font-medium text-white/90">Any report flagged as a safety concern is escalated immediately to our security desk for urgent review.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Faster Resolution Channels</h3>
            
            <a href="tel:+233000000000" className="flex items-center p-4 border border-gray-200 hover:border-brand-maroon hover:bg-red-50/30 transition-colors group mb-4">
              <PhoneCall className="w-6 h-6 text-brand-maroon mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">Call Support</p>
                <p className="text-gray-500 text-sm font-medium">+233 500 000 000</p>
              </div>
            </a>
            
            <button className="w-full flex items-center p-4 border border-gray-200 hover:border-blue-600 hover:bg-blue-50/50 transition-colors group text-left">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">Live Chat</p>
                <p className="text-gray-500 text-sm font-medium">Talk to an agent instantly</p>
              </div>
            </button>
          </div>

          <div className="bg-red-50 p-6 border-l-4 border-red-700">
             <h4 className="font-bold text-red-700 mb-2 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> During an active trip?</h4>
             <p className="text-sm text-red-900 font-medium mb-4">If you are currently in an XTASS vehicle and require emergency assistance, do not use this form.</p>
             <Link to="/emergency" className="text-red-700 font-bold uppercase tracking-wider text-xs underline underline-offset-4 hover:text-red-800">
               Go to Emergency Hotline
             </Link>
          </div>

        </div>

      </section>
    </main>
  );
}
