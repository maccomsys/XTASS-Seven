import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Clock, CarFront, CheckCircle2, AlertTriangle, Play, Settings, Activity, FileWarning, Wrench } from 'lucide-react';

const REVENUE_DATA = [
  { day: '01', revenue: 4200 }, { day: '02', revenue: 3800 }, { day: '03', revenue: 4500 },
  { day: '04', revenue: 5100 }, { day: '05', revenue: 4900 }, { day: '06', revenue: 6200 },
  { day: '07', revenue: 5800 }, { day: '08', revenue: 4100 }, { day: '09', revenue: 3900 },
  { day: '10', revenue: 5300 }, { day: '11', revenue: 6100 }, { day: '12', revenue: 7200 },
  { day: '13', revenue: 8100 }, { day: '14', revenue: 7600 }, { day: '15', revenue: 6400 },
];

const BOOKING_TREND_DATA = [
  { date: 'Nov 01', count: 24 }, { date: 'Nov 02', count: 28 }, { date: 'Nov 03', count: 22 },
  { date: 'Nov 04', count: 35 }, { date: 'Nov 05', count: 41 }, { date: 'Nov 06', count: 39 },
  { date: 'Nov 07', count: 45 }, { date: 'Nov 08', count: 48 }, { date: 'Nov 09', count: 42 },
  { date: 'Nov 10', count: 51 }, { date: 'Nov 11', count: 58 }, { date: 'Nov 12', count: 62 },
  { date: 'Nov 13', count: 70 }, { date: 'Nov 14', count: 65 }, { date: 'Nov 15', count: 72 },
];

const RECENT_BOOKINGS = [
  { id: 'XTA-5012', customer: 'Kwame Mensah', type: 'Instant Ride', status: 'Active', total: 150 },
  { id: 'XTA-5011', customer: 'Sarah Johnson', type: 'Car Rental', status: 'Pending', total: 2400 },
  { id: 'XTA-5010', customer: 'Michael Osei', type: 'Scheduled Pickup', status: 'Upcoming', total: 320 },
  { id: 'XTA-5009', customer: 'Grace Addo', type: 'Airport Transfer', status: 'Completed', total: 450 },
  { id: 'XTA-5008', customer: 'David Frimpong', type: 'Car Rental', status: 'Active', total: 1200 },
  { id: 'XTA-5007', customer: 'Anita Yeboah', type: 'Instant Ride', status: 'Completed', total: 180 },
  { id: 'XTA-5006', customer: 'John Appiah', type: 'Scheduled Pickup', status: 'Pending', total: 350 },
  { id: 'XTA-5005', customer: 'Mercy Baidoo', type: 'Airport Transfer', status: 'Active', total: 500 },
  { id: 'XTA-5004', customer: 'Samuel Owusu', type: 'Group Transport', status: 'Upcoming', total: 1600 },
  { id: 'XTA-5003', customer: 'Linda Ofori', type: 'Car Rental', status: 'Completed', total: 3200 },
];

export default function AdminDashboard() {
  const [dateRange, setDateRange] = useState('14');
  const [metrics, setMetrics] = useState({
    reservations: 142,
    activeTrips: 28,
    driversOnline: 105,
    revenue: 45.2
  });

  useEffect(() => {
    // Simulate live data updates every 10 seconds
    const interval = setInterval(() => {
      setMetrics(prev => ({
        reservations: prev.reservations + Math.floor(Math.random() * 3),
        activeTrips: Math.max(10, prev.activeTrips + Math.floor(Math.random() * 5) - 2),
        driversOnline: Math.max(50, prev.driversOnline + Math.floor(Math.random() * 5) - 2),
        revenue: prev.revenue + (Math.random() * 0.5)
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AdminLayout>
      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-1">Overview Dashboard</h1>
            <p className="text-sm font-medium text-gray-500">Live platform metrics and operational status</p>
          </div>
          <div className="flex items-center text-xs font-bold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            LIVE SYSTEM DATA
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="bg-white border-t-4 border-blue-500 shadow-sm p-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Reservations Today</span>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-black text-gray-900">{metrics.reservations}</span>
                 <span className="flex items-center text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5"><ArrowUpRight className="w-4 h-4 mr-1" /> 12%</span>
              </div>
           </div>
           <div className="bg-white border-t-4 border-green-500 shadow-sm p-6 relative overflow-hidden">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Active Trips Now</span>
              <div className="flex items-end justify-between position-relative z-10">
                 <span className="text-3xl font-black text-gray-900">{metrics.activeTrips}</span>
              </div>
              <Activity className="absolute -bottom-4 -right-4 w-24 h-24 text-green-50 opacity-50" />
           </div>
           <div className="bg-white border-t-4 border-orange-500 shadow-sm p-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Drivers Online</span>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-black text-gray-900">{metrics.driversOnline}</span>
                 <span className="text-sm font-bold text-gray-500">of 140 total</span>
              </div>
           </div>
           <div className="bg-white border-t-4 border-brand-maroon shadow-sm p-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Revenue Today (GH₵)</span>
              <div className="flex items-end justify-between">
                 <span className="text-3xl font-black text-brand-maroon">₵ {metrics.revenue.toFixed(1)}K</span>
                 <span className="flex items-center text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5"><ArrowUpRight className="w-4 h-4 mr-1" /> 8%</span>
              </div>
           </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Booking Trend */}
           <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col h-96">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Reservation Trend</h2>
                 <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 py-1 px-2 outline-none cursor-pointer uppercase tracking-wider"
                 >
                    <option value="7">Last 7 Days</option>
                    <option value="14">Last 14 Days</option>
                    <option value="30">Last 30 Days</option>
                 </select>
              </div>
              <div className="flex-1 w-full min-h-0">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={BOOKING_TREND_DATA} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                       <XAxis dataKey="date" tick={{fontSize: 10, fill: '#6B7280'}} tickLine={false} axisLine={false} dy={10} />
                       <YAxis tick={{fontSize: 10, fill: '#6B7280'}} tickLine={false} axisLine={false} />
                       <RechartsTooltip 
                         contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                         itemStyle={{ color: '#FACC15' }}
                       />
                       <Line type="monotone" dataKey="count" stroke="#111827" strokeWidth={3} dot={{ r: 4, fill: '#111827', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, fill: '#FACC15', stroke: '#111827' }} />
                    </LineChart>
                 </ResponsiveContainer>
              </div>
           </div>

           {/* Revenue Chart */}
           <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col h-96">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Monthly Revenue (GH₵)</h2>
              </div>
              <div className="flex-1 w-full min-h-0">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={REVENUE_DATA} margin={{ top: 5, right: 0, left: -10, bottom: 0 }}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                       <XAxis dataKey="day" tick={{fontSize: 10, fill: '#6B7280'}} tickLine={false} axisLine={false} dy={10} />
                       <YAxis tick={{fontSize: 10, fill: '#6B7280'}} tickLine={false} axisLine={false} tickFormatter={(val) => `₵${val/1000}k`} />
                       <RechartsTooltip 
                         cursor={{ fill: '#F3F4F6' }}
                         contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                         itemStyle={{ color: '#800000' }}
                       />
                       <Bar dataKey="revenue" fill="#800000" radius={[2, 2, 0, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           
           {/* Recent Reservations Table */}
           <div className="lg:col-span-2 bg-white border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Recent Reservations</h2>
                 <Link to="/admin/reservations" className="text-xs font-bold text-brand-maroon hover:underline uppercase tracking-wider">View All</Link>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                          <th className="py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Total (GH₵)</th>
                          <th className="py-3 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {RECENT_BOOKINGS.map(booking => (
                          <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                             <td className="py-3 px-6 text-sm font-bold text-gray-900">{booking.id}</td>
                             <td className="py-3 px-6 text-sm text-gray-600 font-medium">{booking.customer}</td>
                             <td className="py-3 px-6 text-sm text-gray-600 font-medium">{booking.type}</td>
                             <td className="py-3 px-6">
                                <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                                  booking.status === 'Active' ? 'bg-green-100 text-green-800' :
                                  booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                  booking.status === 'Completed' ? 'bg-gray-100 text-gray-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                   {booking.status}
                                </span>
                             </td>
                             <td className="py-3 px-6 text-sm font-bold text-gray-900 text-right">{booking.total.toFixed(2)}</td>
                             <td className="py-3 px-6 text-center">
                                <Link to={`/admin/reservations/${booking.id}`} className="text-xs font-bold text-brand-maroon hover:text-black uppercase tracking-wider bg-brand-maroon/10 hover:bg-gray-200 px-3 py-1.5 transition-colors inline-block">
                                   View
                                </Link>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Sidebar Widgets */}
           <div className="space-y-6">
              
              {/* Driver Availability */}
              <div className="bg-white border border-gray-200 shadow-sm p-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Driver Availability</h2>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                          <span className="text-sm font-bold text-gray-700">Online & Available</span>
                       </div>
                       <span className="text-lg font-black text-gray-900">42</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                          <span className="text-sm font-bold text-gray-700">On a Trip</span>
                       </div>
                       <span className="text-lg font-black text-gray-900">63</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-gray-300 mr-3"></div>
                          <span className="text-sm font-bold text-gray-700">Offline</span>
                       </div>
                       <span className="text-lg font-black text-gray-900">35</span>
                    </div>
                 </div>
              </div>

              {/* Pending Assignments Alert */}
              <div className="bg-red-50 border border-red-200 shadow-sm p-6 relative overflow-hidden">
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                       <div className="flex items-center mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                          <h2 className="text-sm font-black text-red-900 uppercase tracking-widest">Pending Assignments</h2>
                       </div>
                       <p className="text-2xl font-black text-red-700 mb-1">3 Alerts</p>
                       <p className="text-sm text-red-800 font-medium mb-6">Bookings awaiting driver assignment.</p>
                    </div>
                    <Link to="/admin/reservations" className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs py-3 transition-colors shadow-sm cursor-pointer block text-center">
                       Assign Now
                    </Link>
                 </div>
              </div>

              {/* Live Alerts Panel */}
              <div className="bg-white border border-gray-200 shadow-sm p-6">
                 <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">System Alerts</h2>
                 <div className="space-y-4">
                    <div className="flex items-start bg-red-50 p-3 border-l-4 border-red-500">
                       <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                       <div>
                          <p className="text-sm font-bold text-red-900 uppercase tracking-wider">Assignments Due</p>
                          <p className="text-xs text-red-800 mt-1 font-medium">3 trips scheduled within next 2 hours unassigned.</p>
                       </div>
                    </div>
                    <div className="flex items-start bg-yellow-50 p-3 border-l-4 border-yellow-500">
                       <FileWarning className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                       <div>
                          <p className="text-sm font-bold text-yellow-900 uppercase tracking-wider">Driver Documents</p>
                          <p className="text-xs text-yellow-800 mt-1 font-medium">7 drivers have licenses expiring in 30 days.</p>
                       </div>
                    </div>
                    <div className="flex items-start bg-orange-50 p-3 border-l-4 border-orange-500">
                       <Wrench className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                       <div>
                          <p className="text-sm font-bold text-orange-900 uppercase tracking-wider">Fleet Maintenance</p>
                          <p className="text-xs text-orange-800 mt-1 font-medium">4 vehicles overdue for scheduled 10k mile service.</p>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </AdminLayout>
  );
}
