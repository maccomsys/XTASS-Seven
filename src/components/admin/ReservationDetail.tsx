import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { ArrowLeft, Phone, Mail, CarFront, User, CreditCard, Clock, FileText, CheckCircle2, ChevronDown, UserPlus, Flag, Archive, RotateCcw } from 'lucide-react';

export default function ReservationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookingId = id || 'XTA-5011';

  const [refundStatus, setRefundStatus] = useState('Pending');

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6 pb-24">
        
        {/* Breadcrumb / Back */}
        <div>
           <Link to="/admin/reservations" className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reservations
           </Link>
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div className="flex items-center gap-4">
               <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">{bookingId}</h1>
               <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-black uppercase tracking-wider">Pending</span>
               <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold uppercase tracking-wider hidden sm:inline-block">Car Rental</span>
             </div>
             <div className="text-sm font-medium text-gray-500">
               Created Nov 14, 2024 at 10:45 AM
             </div>
           </div>
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {/* Customer Contact Details */}
           <div className="bg-white border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Customer Profile</h2>
                 <Link to="/admin/customers/CUST-1049" className="text-xs font-bold text-brand-maroon uppercase tracking-wider hover:underline">View Profile</Link>
              </div>
              <div className="flex items-start">
                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <User className="w-6 h-6 text-gray-400" />
                 </div>
                 <div className="flex-1">
                    <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight">Sarah Johnson</h3>
                    <div className="mt-2 space-y-2">
                       <a href="mailto:sarah.j@example.com" className="flex items-center text-sm font-medium text-gray-600 hover:text-brand-maroon transition-colors group">
                          <Mail className="w-4 h-4 mr-2 text-gray-400 group-hover:text-brand-maroon" /> sarah.j@example.com
                       </a>
                       <a href="tel:+233201234567" className="flex items-center text-sm font-medium text-gray-600 hover:text-brand-maroon transition-colors group">
                          <Phone className="w-4 h-4 mr-2 text-gray-400 group-hover:text-brand-maroon" /> +233 20 123 4567
                       </a>
                    </div>
                 </div>
              </div>
           </div>

           {/* Trip Details */}
           <div className="bg-white border text-white border-gray-200 shadow-sm p-6 relative overflow-hidden bg-gray-900">
              <div className="relative z-10">
                 <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                    <h2 className="text-sm font-black text-white uppercase tracking-widest">Logistics</h2>
                    <span className="text-xs font-bold bg-white/10 text-white px-2 py-0.5 uppercase tracking-wider">Premium SUV</span>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-brand-yellow mt-1.5 mr-3 shrink-0"></div>
                       <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Pickup</p>
                          <p className="text-sm font-bold text-white">Osu Oxford Street (Branch HQ)</p>
                          <p className="text-xs text-gray-400">Nov 16, 2024 at 09:00 AM</p>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-brand-maroon mt-1.5 mr-3 shrink-0"></div>
                       <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Return</p>
                          <p className="text-sm font-bold text-white">Osu Oxford Street (Branch HQ)</p>
                          <p className="text-xs text-gray-400">Nov 18, 2024 at 09:00 AM</p>
                       </div>
                    </div>
                 </div>
              </div>
              <CarFront className="absolute -bottom-8 -right-8 w-40 h-40 text-gray-800 opacity-50" />
           </div>

        </div>

        {/* Middle Section: Driver & Extras */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           
           {/* Driver Information */}
           <div className="bg-white border border-gray-200 shadow-sm p-6 lg:col-span-1 flex flex-col justify-between">
              <div>
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4 mb-4">Driver Assignment</h2>
                 <div className="text-center py-6">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
                       <UserPlus className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm mb-1">No Driver Assigned</p>
                    <p className="text-xs text-gray-500 font-medium px-4 mb-6">Assign a fleet driver for delivery or VIP service from Live Operations.</p>
                 </div>
              </div>
              <button className="w-full bg-gray-900 text-white hover:bg-black font-black uppercase tracking-widest text-xs py-3 transition-colors shadow-sm">
                 Assign Driver Now
              </button>
           </div>

           {/* Extras & Payment */}
           <div className="bg-white border border-gray-200 shadow-sm lg:col-span-2 flex flex-col">
              <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 p-6 m-0">Billing Summary</h2>
              
              <div className="p-6 flex-1 flex flex-col md:flex-row gap-8">
                 <div className="flex-1 space-y-4">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Line Items</h3>
                    <div className="flex justify-between items-start pb-2 border-b border-gray-50">
                       <div>
                          <p className="text-sm font-bold text-gray-900">Mercedes-Benz G-Class (3 Days)</p>
                          <p className="text-xs text-gray-500">GH₵ 600/day</p>
                       </div>
                       <span className="text-sm font-bold text-gray-900">GH₵ 1,800.00</span>
                    </div>
                    <div className="flex justify-between items-start pb-2 border-b border-gray-50">
                       <div>
                          <p className="text-sm font-bold text-gray-900">Premium Insurance</p>
                          <p className="text-xs text-gray-500">GH₵ 150/day x 3</p>
                       </div>
                       <span className="text-sm font-bold text-gray-900">GH₵ 450.00</span>
                    </div>
                    <div className="flex justify-between items-start pb-2 border-b border-gray-50">
                       <div>
                          <p className="text-sm font-bold text-gray-900">Child Seat (Toddler)</p>
                          <p className="text-xs text-gray-500">GH₵ 50/day x 3</p>
                       </div>
                       <span className="text-sm font-bold text-gray-900">GH₵ 150.00</span>
                    </div>
                 </div>

                 <div className="w-full md:w-64 bg-gray-50 border border-gray-200 p-4 space-y-4">
                    <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Paid</p>
                       <p className="text-2xl font-black text-brand-maroon">GH₵ 2,400.00</p>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Payment Method</p>
                       <div className="flex items-center">
                          <CreditCard className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm font-bold text-gray-900">Card ending 4242</span>
                       </div>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Refund Status</p>
                       <div className="relative">
                          <select 
                            value={refundStatus}
                            onChange={(e) => setRefundStatus(e.target.value)}
                            className="block w-full pl-3 pr-8 py-2 text-sm font-bold border border-gray-300 bg-white focus:outline-none focus:ring-brand-maroon focus:border-brand-maroon appearance-none"
                          >
                             <option value="Not Applicable">Not Applicable</option>
                             <option value="Pending">Pending Review</option>
                             <option value="Processing">Processing</option>
                             <option value="Processed">Processed</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* Bottom Section: Notes & Audit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {/* Internal Notes */}
           <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col">
              <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4 mb-4">Internal Notes</h2>
              <textarea 
                className="w-full flex-1 border border-gray-300 p-3 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-brand-maroon mb-4 min-h-[120px]" 
                placeholder="Add admin-only notes regarding this booking..."
                defaultValue="Customer requested immediate notification if an earlier pickup time becomes available."
              ></textarea>
              <button className="self-end bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold uppercase tracking-wider text-xs px-6 py-2 transition-colors">
                 Save Notes
              </button>
           </div>

           {/* Audit Log */}
           <div className="bg-white border border-gray-200 shadow-sm flex flex-col h-full max-h-[300px]">
              <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 p-6 m-0 shrink-0">System Audit Log</h2>
              <div className="p-6 overflow-y-auto space-y-4">
                 
                 <div className="flex gap-4">
                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-brand-maroon"></div></div>
                    <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Nov 14, 2024 at 10:45 AM</p>
                       <p className="text-sm font-medium text-gray-900"><span className="font-bold">System</span>: Reservation created & payment authorized.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="mt-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div></div>
                    <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Nov 14, 2024 at 11:20 AM</p>
                       <p className="text-sm font-medium text-gray-900"><span className="font-bold">Admin (System Admin)</span>: Added internal note.</p>
                    </div>
                 </div>

              </div>
           </div>

        </div>

        {/* Global Admin Actions */}
        <div className="bg-gray-100 border border-gray-300 p-4 sm:p-6 flex flex-wrap gap-4 justify-between items-center sticky bottom-0">
           <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-white border border-gray-300 text-gray-700 font-bold uppercase tracking-wider text-xs px-4 py-3 hover:bg-gray-50 transition-colors shadow-sm">
                 <RotateCcw className="w-4 h-4 mr-2" /> Process Refund
              </button>
              <button className="flex items-center bg-white border border-gray-300 text-gray-700 font-bold uppercase tracking-wider text-xs px-4 py-3 hover:bg-gray-50 transition-colors shadow-sm">
                 <Flag className="w-4 h-4 mr-2" /> Flag for Review
              </button>
           </div>
           <div>
              <button className="flex items-center text-red-600 font-bold uppercase tracking-wider text-xs hover:underline">
                 <Archive className="w-4 h-4 mr-1" /> Archive Booking
              </button>
           </div>
        </div>

      </div>
    </AdminLayout>
  );
}
