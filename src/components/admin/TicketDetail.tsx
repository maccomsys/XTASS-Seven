import { useParams, Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Send, CheckCircle } from 'lucide-react';

export default function TicketDetail() {
  const { id } = useParams();

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b-4 border-gray-900 pb-4">
          <div>
             <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Late Arrival Complaint</h1>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Ticket {id || 'TKT-9921'} • Created Mar 15, 2024</p>
          </div>
          <div className="flex gap-4">
             <Link to="/admin/tickets" className="bg-white border-2 border-gray-900 text-gray-900 font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors hover:bg-gray-100">
               Back to Tickets
             </Link>
             <button className="bg-green-600 text-white font-black uppercase tracking-widest text-xs px-6 py-3 flex items-center hover:bg-green-700 transition">
               <CheckCircle className="w-4 h-4 mr-2" />
               Close Ticket
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 space-y-6">
              
              <div className="bg-white border-2 border-gray-200 p-6">
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b-2 border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-black text-gray-500 uppercase">
                          JD
                      </div>
                      <div>
                          <p className="font-black text-gray-900 uppercase text-sm">Jane Doe <span className="text-gray-400 font-bold ml-2">Mar 15, 10:20 AM</span></p>
                          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                              I booked a transfer for 9:00 AM, but the driver didn't arrive until 9:45 AM. I almost missed my flight. This is unacceptable for a premium service. I would like a refund or at least an explanation.
                          </p>
                      </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 border-2 border-gray-200">
                     <textarea rows={4} placeholder="Type your response to the customer..." className="w-full bg-white border-2 border-gray-200 p-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"></textarea>
                     <div className="flex justify-end mt-4">
                        <button className="bg-gray-900 text-white font-black uppercase tracking-widest text-xs px-6 py-3 flex items-center hover:bg-black transition">
                           Send Reply <Send className="w-4 h-4 ml-2" />
                        </button>
                     </div>
                  </div>
              </div>

           </div>

           <div className="space-y-6">
               <div className="bg-gray-50 border-2 border-gray-200 p-6">
                  <h3 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-4">Ticket Details</h3>
                  <div className="space-y-3">
                     <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500">Status</p>
                        <p className="font-bold text-sm text-red-600">Open</p>
                     </div>
                     <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500">Priority</p>
                        <p className="font-bold text-sm text-red-600">High</p>
                     </div>
                     <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500">Related Booking</p>
                        <Link to="/admin/reservations/BKG-101" className="font-bold text-sm text-brand-maroon hover:underline">BKG-101</Link>
                     </div>
                  </div>
               </div>
               
               <div className="bg-gray-50 border-2 border-gray-200 p-6">
                  <h3 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-4">Customer Info</h3>
                  <div className="space-y-3">
                     <div>
                        <p className="font-bold text-sm text-gray-900 uppercase">Jane Doe</p>
                        <a href="mailto:jane@example.com" className="text-sm font-bold text-gray-500 hover:text-gray-900 transition">jane@example.com</a>
                     </div>
                     <Link to="/admin/customers/CUST-009" className="inline-block mt-2 text-[10px] font-black uppercase tracking-widest text-brand-maroon hover:underline">
                        View Full Profile
                     </Link>
                  </div>
               </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
}
