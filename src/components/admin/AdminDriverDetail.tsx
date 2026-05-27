import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Phone, Mail, Star, Calendar, Car, ShieldCheck } from 'lucide-react';

export default function AdminDriverDetail() {
  const { id } = useParams();

  return (
    <AdminLayout>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b-4 border-gray-900 pb-4">
          <div>
             <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Kwame Mensah</h1>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">ID: {id || 'DRV-8492'}</p>
          </div>
          <div className="flex gap-4">
             <Link to={`/admin/drivers/${id || 'DRV-8492'}/edit`} className="bg-white border-2 border-gray-900 text-gray-900 font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors hover:bg-gray-100">
               Edit Profile
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Profile Picture and Quick Info */}
           <div className="space-y-6">
              <div className="bg-gray-900 p-1">
                 <img src="https://i.ibb.co/5X2DH7NV/Airport-Pickup-8.jpg" alt="Kwame Mensah" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="bg-gray-100 p-6">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-sm font-black uppercase tracking-widest text-green-600">Active</span>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <Star className="w-5 h-5 text-brand-yellow" />
                       <span className="font-bold text-gray-900">4.9 / 5.0 Rating</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Phone className="w-5 h-5 text-gray-500" />
                       <a href="tel:+233240000000" className="font-bold text-gray-900 hover:underline">+233 24 000 0000</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <Mail className="w-5 h-5 text-gray-500" />
                       <a href="mailto:kwame.m@example.com" className="font-bold text-gray-900 hover:underline">kwame.m@example.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <Calendar className="w-5 h-5 text-gray-500" />
                       <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Joined Jan 2024</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Metrics and Log */}
           <div className="lg:col-span-2 space-y-8">
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="p-4 border-2 border-gray-200">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Trips</p>
                    <p className="text-2xl font-black text-gray-900">412</p>
                 </div>
                 <div className="p-4 border-2 border-gray-200">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Completion</p>
                    <p className="text-2xl font-black text-green-600">99.5%</p>
                 </div>
                 <div className="p-4 border-2 border-gray-200">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Earnings</p>
                    <p className="text-2xl font-black text-gray-900">GH₵ 12.4k</p>
                 </div>
                 <div className="p-4 border-2 border-gray-200">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Cancellation</p>
                    <p className="text-2xl font-black text-red-600">0.5%</p>
                 </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 pb-4 mb-4">Compliance Status</h2>
                 <div className="space-y-4">
                     <div className="flex justify-between items-center bg-gray-50 p-4">
                        <div className="flex items-center gap-3">
                           <ShieldCheck className="w-5 h-5 text-gray-400" />
                           <span className="font-bold text-gray-900">DVLA License</span>
                        </div>
                        <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 uppercase tracking-widest">Valid (Exp 2027)</span>
                     </div>
                     <div className="flex justify-between items-center bg-gray-50 p-4">
                        <div className="flex items-center gap-3">
                           <ShieldCheck className="w-5 h-5 text-gray-400" />
                           <span className="font-bold text-gray-900">Background Check</span>
                        </div>
                        <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 uppercase tracking-widest">Cleared</span>
                     </div>
                     <div className="flex justify-between items-center bg-gray-50 p-4">
                        <div className="flex items-center gap-3">
                           <ShieldCheck className="w-5 h-5 text-gray-400" />
                           <span className="font-bold text-gray-900">Medical Clearance</span>
                        </div>
                        <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 uppercase tracking-widest">Cleared</span>
                     </div>
                 </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-100 pb-4 mb-4">Current Assignment</h2>
                 <div className="flex items-center gap-4 bg-gray-50 p-4">
                    <Car className="w-8 h-8 text-brand-maroon" />
                    <div>
                       <p className="font-black text-gray-900 uppercase">Toyota Land Cruiser (2023)</p>
                       <p className="text-sm text-gray-500 font-bold tracking-widest mt-1">Plate: GR-5832-23</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </AdminLayout>
  );
}
