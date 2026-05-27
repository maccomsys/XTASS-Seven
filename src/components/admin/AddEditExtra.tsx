import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, ArrowLeft, Package, UploadCloud } from 'lucide-react';

export default function AddEditExtra() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const [isPerRental, setIsPerRental] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Extra item saved successfully.');
    navigate(-1);
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
            <div>
              <button onClick={() => navigate(-1)} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-2">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </button>
              <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                 Add/Edit Extra Item
              </h1>
            </div>
        </div>

        <form onSubmit={handleSave} className="space-y-8 bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
            <div className="absolute -top-4 left-4 bg-gray-900 text-white px-2 py-1 text-xs font-black uppercase tracking-widest flex items-center">
               <Package className="w-4 h-4 mr-2" /> Item Configuration
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
                     <select required defaultValue="Equipment" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Category</option>
                        <option value="Protection">Protection</option>
                        <option value="Equipment">Equipment</option>
                     </select>
                 </div>
                 
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Item Name</label>
                     <input type="text" required placeholder="e.g. GPS Navigation" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                 </div>

                 <div className="md:col-span-2">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                     <textarea required rows={3} placeholder="Customer-facing description of the item" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                 </div>
                 
                 <div className="md:col-span-2">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Icon Upload</label>
                     <div className="border-2 border-dashed border-gray-300 p-4 text-center cursor-pointer hover:border-gray-900 hover:bg-gray-50 transition-colors">
                        <UploadCloud className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                        <span className="text-xs font-bold text-gray-600">SVG or PNG format</span>
                     </div>
                 </div>

                 <div>
                     <div className="flex justify-between items-center mb-2">
                         <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Pricing Model</label>
                         <label className="flex items-center space-x-2 cursor-pointer">
                             <input type="checkbox" checked={isPerRental} onChange={(e) => setIsPerRental(e.target.checked)} className="rounded text-red-600 focus:ring-red-500" />
                             <span className="text-xs font-bold text-gray-700">Per-Rental Price?</span>
                         </label>
                     </div>
                     <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm">₵</span>
                        <input type="number" required placeholder="0.00" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold py-3 pl-8 pr-4 focus:ring-0 focus:border-red-600 transition-colors" />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">{isPerRental ? '/ rental' : '/ day'}</span>
                     </div>
                 </div>

                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Max Quantity Per Booking</label>
                     <input type="number" required placeholder="e.g. 2" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                 </div>

                 <div className="md:col-span-2">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Applicable Ride Types</label>
                     <div className="flex flex-wrap gap-3">
                         {['Instant Ride', 'Scheduled Pickup', 'Car Rental'].map(type => (
                             <label key={type} className="flex items-center space-x-2 bg-gray-50 p-2 border-2 border-gray-200 cursor-pointer hover:border-gray-400">
                                 <input type="checkbox" defaultChecked className="rounded text-red-600 focus:ring-red-500" />
                                 <span className="text-sm font-bold text-gray-900">{type}</span>
                             </label>
                         ))}
                     </div>
                 </div>
             </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between border-t-2 border-gray-200 pt-6 mt-8">
             <div>
                <p className="text-sm font-black text-gray-900 uppercase tracking-wider">Status</p>
                <p className="text-xs text-gray-500 font-bold mt-1">Activate to show this item in the booking flow.</p>
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
              Save Extra
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
