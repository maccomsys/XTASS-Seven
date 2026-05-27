import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Save, User, MapPin, Calendar, Clock, DollarSign, FileText, CheckCircle2 } from 'lucide-react';

export default function ModifyReservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate(`/admin/reservations/${id}`);
    }, 2000);
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-5xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
          <div>
              <Link to={`/admin/reservations`} className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-2 block">
                &larr; Back to Reservations
              </Link>
              <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                Modify Reservation <span className="ml-4 bg-yellow-100 text-yellow-800 text-sm px-3 py-1 border-2 border-yellow-800">{id || 'XTA-5012'}</span>
              </h1>
          </div>
        </div>

        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 flex items-center">
            <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
            <div>
               <p className="text-sm font-bold text-green-900 uppercase tracking-wider">Modification Saved</p>
               <p className="text-xs text-green-800 mt-1">Customer and driver have been notified of changes.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Customer Summary (Read-only on this screen) */}
          <div className="bg-gray-50 border-2 border-gray-200 p-4 grid grid-cols-3 gap-4">
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Customer</p>
               <p className="text-sm font-black text-gray-900 mt-1">Kwame Mensah</p>
            </div>
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</p>
               <p className="text-sm font-black text-gray-900 mt-1">kwame@example.com</p>
            </div>
            <div>
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</p>
               <p className="text-sm font-black text-gray-900 mt-1">+233 24 123 4567</p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="border-4 border-gray-900 p-6 relative mt-10">
            <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-bold uppercase tracking-widest">
              Booking Specifics
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ride Type</label>
                <select defaultValue="Airport Transfer" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                  <option>Airport Transfer</option>
                  <option>Instant Ride</option>
                  <option>Scheduled Pickup</option>
                  <option>Car Rental</option>
                  <option>Group Transport</option>
                </select>
               </div>
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Level</label>
                <select defaultValue="Premium" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                  <option>Economy</option>
                  <option>Basic</option>
                  <option>Business</option>
                  <option>Premium</option>
                </select>
               </div>
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Passengers</label>
                <input type="number" min="1" max="10" defaultValue="2" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" defaultValue="Kotoka International Airport (Terminal 3)" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Return/Drop-off Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" defaultValue="Kempinski Hotel Gold Coast City" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Pickup Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="date" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="time" defaultValue="14:30" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                 </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Extras</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                  <span className="text-sm font-bold text-gray-900">Child Seat (+GH₵ 50)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                  <span className="text-sm font-bold text-gray-900">Meet & Greet (+GH₵ 100)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Admin Override Fields */}
          <div className="border-4 border-yellow-400 p-6 relative bg-yellow-50">
            <div className="absolute -top-4 left-4 bg-yellow-400 px-2 text-sm font-black text-gray-900 uppercase tracking-widest">
              Admin Overrides
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Driver Reassignment</label>
                  <select defaultValue="D-001" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                    <option value="">-- Unassigned --</option>
                    <option value="D-001">Kofi Annan (Current)</option>
                    <option value="D-002">Yaw Mensah (Available)</option>
                    <option value="D-003">Esi Owusu (Available)</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Pricing Override (GH₵)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="number" defaultValue="550" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                  </div>
               </div>
            </div>

            <div className="mb-6">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Override Reason (Required if price altered)</label>
                <input type="text" defaultValue="Added Meet & Greet post-booking." className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
            </div>

            <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Internal Notes Update</label>
                <div className="relative">
                   <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                   <textarea rows={3} defaultValue="Flight delayed by 30 mins, informed driver." className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t-4 border-gray-900 mt-8">
            <Link to={`/admin/reservations/${id || 'XTA-5012'}`} className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-black uppercase tracking-widest text-sm px-6 py-4 transition-colors">
              Cancel
            </Link>
            <button type="submit" disabled={success} className={`${success ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none`}>
              <Save className="w-5 h-5 mr-2" />
              {success ? 'Changes Saved' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
