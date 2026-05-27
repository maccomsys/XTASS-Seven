import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, UploadCloud, Check, X } from 'lucide-react';

export default function AddVehicle() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vehicle successfully registered to the fleet.');
    navigate('/admin/fleet');
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-5xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Add New Vehicle</h1>
          <Link to="/admin/fleet" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
            Cancel
          </Link>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Make</label>
                 <input type="text" required placeholder="e.g. Toyota" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Model</label>
                 <input type="text" required placeholder="e.g. Corolla" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Year</label>
                 <input type="number" required placeholder="YYYY" min="2000" max="2100" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
             </div>
             <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Registration Plate</label>
                 <input type="text" required placeholder="e.g. GR-1234-24" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors uppercase" />
             </div>
          </div>

          {/* Classification */}
          <div className="bg-gray-50 p-6 border-2 border-gray-200">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Vehicle Class</label>
                    <select required className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Class</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Van">Van/Minivan</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Level</label>
                    <select required className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Level</option>
                        <option value="Basic">Basic</option>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 line-clamp-1">
                <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Pax Capacity</label>
                     <input type="number" required min="1" defaultValue="4" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
                <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Luggage Capacity (Bags)</label>
                     <input type="number" required min="0" defaultValue="2" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
                <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Daily Rate (GH₵)</label>
                     <input type="number" required min="0" defaultValue="400" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
             </div>
          </div>

          {/* Specs & Features */}
          <div className="border-t-2 border-gray-200 pt-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Fuel Type</label>
                    <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Transmission</label>
                    <select required className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>
             </div>

             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Included Features</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Air Conditioning', 'Bluetooth', 'USB Charger', 'Wi-Fi', 'GPS-Ready', 'Leather Seats', 'Sunroof', 'Child Seat Auth.'].map((feat) => (
                         <label key={feat} className="flex items-center">
                            <input type="checkbox" defaultChecked={feat === 'Air Conditioning' || feat === 'Bluetooth'} className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                            <span className="text-sm font-bold text-gray-900">{feat}</span>
                         </label>
                    ))}
                </div>
             </div>
          </div>

          {/* Photos */}
          <div className="border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <p className="text-sm font-black text-gray-900 uppercase tracking-wider mb-1">Upload Vehicle Photos</p>
              <p className="text-xs text-gray-500 font-bold mb-4">Drag and drop or click to select files (Max 5MB each)</p>
              <button type="button" className="bg-white border-2 border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-700 hover:border-gray-900 transition-colors">
                  Browse Files
              </button>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between border-y-2 border-gray-200 py-6">
             <div>
                <p className="text-sm font-black text-gray-900 uppercase tracking-wider">Vehicle Status</p>
                <p className="text-xs text-gray-500 font-bold mt-1">Set to active to make it immediately available for booking assignment.</p>
             </div>
             <button 
                type="button"
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${isActive ? 'translate-x-9' : 'translate-x-1'}`} />
             </button>
          </div>

          <div className="flex justify-end space-x-4 pt-4 mt-8">
            <Link to="/admin/fleet" className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-black uppercase tracking-widest text-sm px-6 py-4 transition-colors">
              Cancel
            </Link>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
              <Save className="w-5 h-5 mr-2" />
              Save Vehicle
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
