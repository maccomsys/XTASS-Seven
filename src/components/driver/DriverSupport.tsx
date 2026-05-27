import { useState } from 'react';
import DriverLayout from './DriverLayout';
import { PhoneCall, Mail, MessageCircle, HelpCircle, FileWarning, ExternalLink } from 'lucide-react';

export default function DriverSupport() {
    const [reportSubmitted, setReportSubmitted] = useState(false);

    const handleSubmitReport = (e: React.FormEvent) => {
        e.preventDefault();
        setReportSubmitted(true);
        setTimeout(() => setReportSubmitted(false), 5000);
    };

    return (
        <DriverLayout>
            <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                        Support & Resources
                    </h1>
                    <p className="text-gray-500 font-medium mt-2">Contact XTASS operations or report an issue.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                     {/* Contact Channels */}
                     <div className="space-y-4">
                         <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Contact XTASS Team</h2>
                         
                         <a href="tel:+233501112233" className="block bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all group">
                              <div className="flex items-center">
                                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mr-4 group-hover:bg-gray-200 transition-colors">
                                      <PhoneCall className="w-6 h-6 text-gray-900" />
                                  </div>
                                  <div>
                                      <h3 className="font-black text-gray-900 uppercase tracking-widest">Call Operations</h3>
                                      <p className="text-sm font-bold text-gray-500 mt-1">+233 50 111 2233</p>
                                  </div>
                              </div>
                         </a>
                         
                         <a href="https://wa.me/233501112233" target="_blank" rel="noopener noreferrer" className="block bg-white border-2 border-green-700 p-6 shadow-[4px_4px_0_0_rgba(21,128,61,1)] hover:shadow-none hover:translate-y-1 transition-all group">
                              <div className="flex items-center">
                                  <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-full mr-4 group-hover:bg-green-100 transition-colors">
                                      <MessageCircle className="w-6 h-6 text-green-700" />
                                  </div>
                                  <div>
                                      <h3 className="font-black text-gray-900 uppercase tracking-widest">WhatsApp Support</h3>
                                      <p className="text-sm font-bold text-gray-500 mt-1">Chat with dispatch team</p>
                                  </div>
                              </div>
                         </a>

                         <a href="mailto:drivers@xtass.com" className="block bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all group">
                              <div className="flex items-center">
                                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full mr-4 group-hover:bg-gray-200 transition-colors">
                                      <Mail className="w-6 h-6 text-gray-900" />
                                  </div>
                                  <div>
                                      <h3 className="font-black text-gray-900 uppercase tracking-widest">Email Support</h3>
                                      <p className="text-sm font-bold text-gray-500 mt-1">drivers@xtass.com</p>
                                  </div>
                              </div>
                         </a>
                         
                         {/* FAQ Link */}
                         <div className="pt-4">
                             <a href="#" className="flex items-center justify-between bg-gray-900 text-white p-4 font-black uppercase tracking-widest hover:bg-gray-800 transition-colors hover:pl-6">
                                 <span className="flex items-center"><HelpCircle className="w-5 h-5 mr-3" /> Driver FAQ</span>
                                 <ExternalLink className="w-5 h-5" />
                             </a>
                         </div>
                     </div>

                     {/* Report Issue Form */}
                     <div className="bg-white border-4 border-gray-900 p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6 pb-2 border-b-2 border-gray-100 flex items-center">
                            <FileWarning className="w-6 h-6 mr-3 text-red-500" /> Report an Issue
                        </h2>
                        
                        {reportSubmitted ? (
                            <div className="bg-green-50 border-2 border-green-600 p-6 text-center">
                                <h3 className="text-lg font-black text-green-800 uppercase tracking-widest mb-2">Report Submitted</h3>
                                <p className="text-sm font-bold text-green-700">Thank you. The operations team will review your report shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmitReport} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Issue Type *</label>
                                    <select required className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900 appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select an issue category</option>
                                        <option value="vehicle">Vehicle Problem</option>
                                        <option value="route">Route or Navigation Issue</option>
                                        <option value="customer">Customer Concern</option>
                                        <option value="app">App Technical Issue</option>
                                        <option value="safety">Safety Concern</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Booking Reference (Optional)</label>
                                    <input type="text" placeholder="e.g. XTA-1090" className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900 uppercase" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description *</label>
                                    <textarea 
                                        required 
                                        rows={4} 
                                        placeholder="Please provide details about the issue..." 
                                        className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900 resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-brand-maroon hover:bg-red-800 text-white font-black uppercase tracking-widest py-4 border-2 border-transparent shadow-[4px_4px_0_0_rgba(153,27,27,1)] hover:shadow-none hover:translate-y-1 transition-all">
                                    Submit Report
                                </button>
                            </form>
                        )}
                     </div>
                </div>
            </div>
        </DriverLayout>
    );
}
