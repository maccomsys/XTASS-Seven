import React from "react";
import { useState } from 'react';
import { Briefcase, ShieldCheck, TrendingUp, Award, Upload, CheckCircle, ArrowRight } from 'lucide-react';

export default function Careers() {
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
      <section className="bg-brand-maroon text-white pt-20 pb-16 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Careers at XTASS</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Join the team redefining premium mobility and transportation logistics in Ghana.
          </p>
        </div>
      </section>

      {/* Why Work at XTASS */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-brand-maroon uppercase tracking-tight">Why Join Us?</h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 border border-gray-200 shadow-sm text-center group hover:border-brand-maroon transition-colors">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors text-brand-maroon">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stable Employment</h3>
            <p className="text-gray-600 text-sm font-medium">Consistent hours, full employment contracts, and robust operational structure.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm text-center group hover:border-brand-maroon transition-colors">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors text-brand-maroon">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Growth</h3>
            <p className="text-gray-600 text-sm font-medium">Continuous training in logistics, customer service, and advanced driving techniques.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm text-center group hover:border-brand-maroon transition-colors">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors text-brand-maroon">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Environments</h3>
            <p className="text-gray-600 text-sm font-medium">Immaculate fleet conditions, clear protocols, and 24/7 internal support systems.</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 shadow-sm text-center group hover:border-brand-maroon transition-colors">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-colors text-brand-maroon">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pay</h3>
            <p className="text-gray-600 text-sm font-medium">Above-market compensation and benefits for verified, high-performing personnel.</p>
          </div>
        </div>
      </section>

      {/* Application Process & Form */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Process */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight uppercase">How to Apply</h2>
            <p className="text-lg text-gray-600 mb-12 font-medium">
              We are rigorous in our selection. Review the steps below to understand how XTASS recruits its team members.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 bg-brand-yellow text-brand-maroon-dark rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="flex-grow w-px bg-gray-200 my-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Application</h3>
                  <p className="text-gray-600 font-medium">Fill out the detailed form with your current contact information, CV, and cover letter.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="flex-grow w-px bg-gray-200 my-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">HR Review</h3>
                  <p className="text-gray-600 font-medium">Our operations team will review your qualifications against our current vacancies.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="flex-grow w-px bg-gray-200 my-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interview &amp; Verification</h3>
                  <p className="text-gray-600 font-medium">Selected candidates are invited for an interview and mandatory background checks.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Onboarding</h3>
                  <p className="text-gray-600 font-medium">Begin the XTASS orientation and final training protocols.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-black text-brand-maroon uppercase tracking-tight mb-6">Open Application Form</h3>
            
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted</h4>
                <p className="text-gray-600 font-medium mb-8">
                  Thank you for your interest in XTASS. We have received your application and our HR department will reach out if there is a match.
                </p>
                <button onClick={() => setFormStatus('idle')} className="text-brand-maroon font-bold uppercase tracking-widest text-sm hover:underline">
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                  <input type="text" required defaultValue="Kwame Mensah" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                    <input type="email" required defaultValue="kwame.m@example.com" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                    <input type="tel" required defaultValue="+233 24 123 4567" className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Position of Interest *</label>
                  <select required className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none">
                    <option value="" disabled>Select a position</option>
                    <option value="driver" defaultValue="driver">Executive Driver</option>
                    <option value="customer_service">Customer Service Representative</option>
                    <option value="operations">Operations / Dispatch</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Resume / CV *</label>
                  <div className="border-2 border-dashed border-gray-300 bg-white p-6 text-center cursor-pointer hover:border-brand-yellow transition-colors group">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-brand-yellow transition-colors" />
                    <p className="text-sm text-gray-600 font-medium">Click to upload your document (PDF, DOCX)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Cover Letter (Optional)</label>
                  <textarea rows={4} className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" defaultValue="I am highly interested in joining XTASS as an Executive Driver. I have 5 years of verified defensive driving experience..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 font-bold uppercase tracking-wider text-sm transition-colors shadow-sm inline-flex items-center justify-center
                    ${formStatus === 'submitting' 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-brand-maroon text-white hover:bg-brand-maroon-hover'
                    }`}
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                  {formStatus !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
