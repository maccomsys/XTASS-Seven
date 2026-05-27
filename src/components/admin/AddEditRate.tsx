import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, ArrowLeft, Tag } from 'lucide-react';

export default function AddEditRate() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Rate saved successfully.');
    navigate('/admin/rates');
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
            <div>
              <Link to="/admin/rates" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-2">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Rate Matrix
              </Link>
              <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                 Create Custom Rate
              </h1>
            </div>
        </div>

        <form onSubmit={handleSave} className="space-y-8 bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
            <div className="absolute -top-4 left-4 bg-gray-900 text-white px-2 py-1 text-xs font-black uppercase tracking-widest flex items-center">
               <Tag className="w-4 h-4 mr-2" /> Rate Configuration
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                 <div className="md:col-span-2">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Rate Name / Identifier</label>
                     <input type="text" required placeholder="e.g. Holiday Special Economy Sedan" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                 </div>
                 
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Booking Type</label>
                     <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Type</option>
                        <option value="Instant Ride">Instant Ride</option>
                        <option value="Scheduled Pickup">Scheduled Pickup</option>
                        <option value="Car Rental">Car Rental</option>
                     </select>
                 </div>
                 
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Level</label>
                     <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Level</option>
                        <option value="Premium">Premium</option>
                        <option value="Business">Business</option>
                        <option value="Economy">Economy</option>
                        <option value="Basic">Basic</option>
                     </select>
                 </div>

                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Vehicle Type</label>
                     <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Vehicle Type</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Van/Minivan">Van/Minivan</option>
                     </select>
                 </div>

                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Base Rate (GH₵)</label>
                     <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm">₵</span>
                        <input type="number" required placeholder="0.00" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-8 pr-4 focus:ring-0 focus:border-red-600 transition-colors" />
                     </div>
                 </div>

                 <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border-2 border-gray-200 bg-gray-50">
                    <div className="md:col-span-2 border-b border-gray-300 pb-2 mb-2">
                        <p className="text-xs font-black text-gray-900 uppercase tracking-widest">Validity Period (Optional)</p>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Effective Date From</label>
                        <input type="date" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Effective Date To</label>
                        <input type="date" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                 </div>
             </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between border-t-2 border-gray-200 pt-6 mt-8">
             <div>
                <p className="text-sm font-black text-gray-900 uppercase tracking-wider">Rate Status</p>
                <p className="text-xs text-gray-500 font-bold mt-1">Activate to apply this rate to upcoming bookings.</p>
             </div>
             <button 
                type="button"
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isActive ? 'translate-x-9' : 'translate-x-1'}`} />
             </button>
          </div>

          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
              <Save className="w-5 h-5 mr-2" />
              Save Rate Config
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
