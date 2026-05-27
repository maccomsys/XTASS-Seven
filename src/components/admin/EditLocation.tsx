import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Save, ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';

export default function EditLocation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/admin/locations');
    }, 2000);
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <AdminLayout>
      <div className="p-8 max-w-5xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
            <div>
              <Link to="/admin/locations" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-2">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Locations
              </Link>
              <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                 Edit Location <span className="ml-4 bg-gray-100 text-gray-800 text-sm px-3 py-1 border-2 border-gray-800">{id || 'LOC-001'}</span>
              </h1>
            </div>
        </div>

        {success && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-4 flex items-center">
            <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
            <div>
               <p className="text-sm font-bold text-green-900 uppercase tracking-wider">Location updated successfully</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Identity */}
          <div className="border-4 border-gray-900 p-6 relative bg-gray-50 mt-8">
             <div className="absolute -top-4 left-4 bg-gray-900 text-white px-2 py-1 text-xs font-black uppercase tracking-widest flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> Core Details
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Location Name</label>
                     <input type="text" required defaultValue="Kotoka International Airport (ACC)" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                 </div>
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Type</label>
                     <select required defaultValue="Airport" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Type</option>
                        <option value="Airport">Airport</option>
                        <option value="City">City Hub</option>
                        <option value="Depot">Depot</option>
                     </select>
                 </div>
                 <div className="md:col-span-2">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Address</label>
                     <input type="text" required defaultValue="Terminal 3, KIA, Accra" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                 </div>
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">City</label>
                     <input type="text" required defaultValue="Accra" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                 </div>
                 <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Region</label>
                     <select required defaultValue="Greater Accra" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                        <option value="">Select Region</option>
                        <option value="Greater Accra">Greater Accra</option>
                        <option value="Ashanti">Ashanti</option>
                        <option value="Western">Western</option>
                        <option value="Northern">Northern</option>
                     </select>
                 </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hours */}
              <div className="border-2 border-gray-200 p-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 pb-2 mb-4">Operating Hours</h2>
                 <div className="space-y-3">
                     {days.map(day => (
                         <div key={day} className="flex items-center justify-between text-sm">
                             <span className="font-bold text-gray-700 w-24">{day}</span>
                             <div className="flex items-center space-x-2 flex-1 ml-4 border-l-2 pl-4 border-gray-100">
                                 <input type="time" defaultValue="00:00" className="bg-gray-50 border-2 border-gray-200 p-1 font-bold focus:border-red-600" />
                                 <span className="text-gray-400 font-bold">to</span>
                                 <input type="time" defaultValue="23:59" className="bg-gray-50 border-2 border-gray-200 p-1 font-bold focus:border-red-600" />
                             </div>
                             <div className="flex items-center ml-4">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500 relative"></div>
                                </label>
                             </div>
                         </div>
                     ))}
                 </div>
              </div>

              {/* Contact & Meta */}
              <div className="space-y-8">
                  <div className="border-2 border-gray-200 p-6">
                      <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 pb-2 mb-4">Contact Info</h2>
                      <div className="space-y-4">
                          <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Location Phone</label>
                             <input type="tel" required defaultValue="+233 30 221 3456" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                          </div>
                      </div>
                  </div>

                  <div className="border-2 border-gray-200 p-6">
                      <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 pb-2 mb-4">Map Coordinates</h2>
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Latitude</label>
                             <input type="text" defaultValue="5.6037" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Longitude</label>
                             <input type="text" defaultValue="-0.1870" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between border-y-2 border-gray-200 py-6 bg-gray-50 px-4">
             <div>
                <p className="text-sm font-black text-gray-900 uppercase tracking-wider">Location Status</p>
                <p className="text-xs text-gray-500 font-bold mt-1">Set to active to make it visible to customers as a booking destination.</p>
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
            <button type="submit" disabled={success} className={`${success ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none`}>
              <Save className="w-5 h-5 mr-2" />
              {success ? 'Saved' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
