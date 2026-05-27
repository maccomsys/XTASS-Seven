import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Search, Plus, Save, User, MapPin, Calendar, Clock, DollarSign, FileText } from 'lucide-react';

export default function CreateReservation() {
  const navigate = useNavigate();
  const [customerSearch, setCustomerSearch] = useState('');
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking XTA-NEW created successfully!');
    navigate('/admin/reservations');
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-5xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-8 border-b-4 border-gray-900 pb-4">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Create Reservation</h1>
          <Link to="/admin/reservations" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
            Cancel
          </Link>
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          {/* Customer Search */}
          <div className="border-4 border-gray-900 p-6 relative">
            <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-bold uppercase tracking-widest flex items-center">
              <User className="w-4 h-4 mr-2" /> Customer Details
            </div>
            
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Search Existing Customer</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" 
                  placeholder="Search by name, email, or phone..."
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input 
                type="checkbox" 
                id="newCustomer" 
                checked={isNewCustomer}
                onChange={(e) => setIsNewCustomer(e.target.checked)}
                className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500" 
              />
              <label htmlFor="newCustomer" className="ml-2 text-sm font-bold text-gray-900">Create New Customer</label>
            </div>

            {isNewCustomer && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-4 border-2 border-dashed border-gray-300">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" defaultValue="Kwame Mensah" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" defaultValue="kwame@example.com" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" defaultValue="+233 24 123 4567" className="w-full bg-white border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
                </div>
              </div>
            )}
          </div>

          {/* Booking Details */}
          <div className="border-4 border-gray-900 p-6 relative">
            <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-bold uppercase tracking-widest">
              Booking Specifics
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ride Type</label>
                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                  <option>Airport Transfer</option>
                  <option>Instant Ride</option>
                  <option>Scheduled Pickup</option>
                  <option>Car Rental</option>
                  <option>Group Transport</option>
                </select>
               </div>
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Level</label>
                <select className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                  <option>Economy</option>
                  <option>Basic</option>
                  <option>Business</option>
                  <option>Premium</option>
                </select>
               </div>
               <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Passengers</label>
                <input type="number" min="1" max="10" defaultValue="1" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" defaultValue="Kotoka International Airport (ACC)" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
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
                      <input type="time" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="date" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="time" className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                    </div>
                 </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Extras</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                  <span className="text-sm font-bold text-gray-900">Child Seat (+GH₵ 50)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                  <span className="text-sm font-bold text-gray-900">Meet & Greet (+GH₵ 100)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500 mr-2" />
                  <span className="text-sm font-bold text-gray-900">Extra Luggage Space (+GH₵ 80)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Admin Override Fields */}
          <div className="border-4 border-yellow-400 p-6 relative bg-yellow-50">
            <div className="absolute -top-4 left-4 bg-yellow-400 px-2 text-sm font-black text-gray-900 uppercase tracking-widest">
              Admin Controls
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Driver Assignment Override</label>
                  <select className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors appearance-none">
                    <option value="">-- Let system assign --</option>
                    <option value="D-001">Kofi Annan (Available)</option>
                    <option value="D-002">Yaw Mensah (Available)</option>
                    <option value="D-003">Esi Owusu (On Trip)</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Manual Pricing Override (GH₵)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="number" defaultValue="450" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors" />
                  </div>
               </div>
            </div>

            <div className="mb-6">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Override Reason (Required if price altered)</label>
                <input type="text" defaultValue="VIP Customer Discount" className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 focus:ring-0 focus:border-red-600 transition-colors" />
            </div>

            <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Internal Notes (Not visible to customer)</label>
                <div className="relative">
                   <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                   <textarea rows={3} defaultValue="Customer requested English-speaking driver and cold water in vehicle." className="w-full bg-white border-2 border-gray-300 text-gray-900 text-sm font-bold p-3 pl-10 focus:ring-0 focus:border-red-600 transition-colors"></textarea>
                </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t-4 border-gray-900 mt-8">
            <Link to="/admin/reservations" className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-black uppercase tracking-widest text-sm px-6 py-4 transition-colors">
              Cancel
            </Link>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors flex items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none">
              <Plus className="w-5 h-5 mr-2" />
              Create Booking
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
