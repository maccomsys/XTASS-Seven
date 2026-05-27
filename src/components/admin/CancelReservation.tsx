import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { AlertCircle, FileWarning, DollarSign, XCircle, ArrowLeft } from 'lucide-react';

export default function CancelReservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [overrideFee, setOverrideFee] = useState(false);

  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking ${id || 'XTA-5012'} cancelled successfully.`);
    navigate('/admin/reservations');
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl mx-auto">
         <Link to={`/admin/reservations/${id || 'XTA-5012'}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reservation
         </Link>

         <div className="bg-white border-4 border-red-600 p-8 shadow-[8px_8px_0_0_rgba(220,38,38,1)]">
            <div className="flex items-center mb-6">
                <AlertCircle className="w-10 h-10 text-red-600 mr-4" />
                <div>
                   <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Cancel Reservation</h1>
                   <p className="text-gray-500 font-medium">This action cannot be undone.</p>
                </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-gray-50 border-2 border-gray-200 p-6 mb-8">
               <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-200 pb-2">Booking Summary</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Booking ID</p>
                     <p className="text-lg font-black text-gray-900">{id || 'XTA-5012'}</p>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Customer</p>
                     <p className="text-md font-bold text-gray-900">Kwame Mensah</p>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Type</p>
                     <p className="text-md font-bold text-gray-900">Airport Transfer</p>
                  </div>
                  <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total</p>
                     <p className="text-lg font-black text-brand-maroon">GH₵ 550.00</p>
                  </div>
               </div>
            </div>

            <form onSubmit={handleCancel} className="space-y-6 border-t-2 border-gray-100 pt-6">
                
                {/* Cancellation Reason Dropdown */}
                <div>
                    <label className="block text-sm font-black text-gray-900 uppercase tracking-wider mb-2">
                        Cancellation Reason <span className="text-red-600">*</span>
                    </label>
                    <select required className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-4 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">-- Select a reason --</option>
                        <option value="customer">Customer Request via Support</option>
                        <option value="admin">Admin Cancellation</option>
                        <option value="duplicate">Duplicate Booking</option>
                        <option value="noshow">No-Show</option>
                        <option value="vehicle">Vehicle Unavailable</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Override Fee Option */}
                <div className="bg-red-50 border-2 border-red-200 p-6">
                    <div className="flex items-start">
                        <div className="flex items-center h-5 mt-1">
                            <input 
                                id="override-fee" 
                                type="checkbox" 
                                checked={overrideFee}
                                onChange={(e) => setOverrideFee(e.target.checked)}
                                className="w-5 h-5 text-red-600 border-2 border-gray-300 focus:ring-red-500 cursor-pointer" 
                            />
                        </div>
                        <div className="ml-3">
                            <label htmlFor="override-fee" className="text-sm font-black text-red-900 uppercase tracking-wider cursor-pointer">
                                Waive or Override Cancellation Fee
                            </label>
                            <p className="text-xs font-medium text-red-700 mt-1">
                                Standard policy applies a 50% fee. Check this to manually set or waive the fee.
                            </p>
                        </div>
                    </div>

                    {overrideFee && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-red-200 pt-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Override Amount (GH₵)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input type="number" defaultValue="0" min="0" required={overrideFee} className="w-full bg-white border-2 border-red-300 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Reason for Waiver</label>
                                <input type="text" required={overrideFee} placeholder="e.g. System Error" className="w-full bg-white border-2 border-red-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center bg-gray-50 p-4 border-l-4 border-gray-400">
                    <FileWarning className="w-6 h-6 text-gray-500 mr-3 flex-shrink-0" />
                    <p className="text-xs font-bold text-gray-600 leading-tight">
                        Confirming cancellation will immediately notify the customer via email and SMS, and alert the assigned driver (if applicable).
                    </p>
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                    <Link to={`/admin/reservations/${id || 'XTA-5012'}`} className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-black uppercase tracking-widest text-sm px-6 py-4 transition-colors">
                        Keep Booking
                    </Link>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(153,27,27,1)] hover:translate-y-1 hover:shadow-none">
                        <XCircle className="w-5 h-5 mr-2" />
                        Confirm & Cancel
                    </button>
                </div>
            </form>
         </div>
      </div>
    </AdminLayout>
  );
}
