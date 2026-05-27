import { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { Activity, Car, Users, RefreshCw, AlertCircle, MapPin, ExternalLink, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_TRIPS = [
  { id: 'B-1092', driver: 'Kofi Annan', driverId: 'D-001', stage: 'En Route to Pickup', stageCode: 'en_route', pickup: 'Kotoka Int. Airport', dropoff: 'Kempinski Hotel', eta: '5 mins' },
  { id: 'B-1090', driver: 'Esi Owusu', driverId: 'D-003', stage: 'On Trip', stageCode: 'on_trip', pickup: 'Accra Mall', dropoff: 'Osu Oxford Street', eta: '12 mins' },
  { id: 'B-1088', driver: 'Yaw Mensah', driverId: 'D-002', stage: 'Waiting for Customer', stageCode: 'waiting', pickup: 'Labadi Beach Hotel', dropoff: 'Kotoka Int. Airport', eta: 'N/A' },
];

const MOCK_PENDING = [
  { id: 'B-1094', service: 'Premium', pickup: 'East Legon', dropoff: 'Cantonments', pax: 2, time: 'ASAP' },
  { id: 'B-1095', service: 'Economy', pickup: 'Spintex Road', dropoff: 'Tema Comm 1', pax: 1, time: 'In 30 mins' },
];

export default function LiveOperationsDashboard() {
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setLastUpdated(new Date().toLocaleTimeString());
            setIsRefreshing(false);
        }, 800);
    };

    // Auto-refresh every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLastUpdated(new Date().toLocaleTimeString());
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const getStageColor = (code: string) => {
        switch(code) {
           case 'en_route': return 'bg-blue-100 text-blue-800 border-blue-800';
           case 'on_trip': return 'bg-green-100 text-green-800 border-green-800';
           case 'waiting': return 'bg-yellow-100 text-yellow-800 border-yellow-800';
           default: return 'bg-gray-100 text-gray-800 border-gray-800';
        }
    };

    return (
        <AdminLayout>
            <div className="p-8">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <Activity className="w-8 h-8 mr-3 text-red-600" />
                            Live Operations
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Real-time overview of active trips and pending assignments.</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden sm:block">
                            Last Update: {lastUpdated}
                        </span>
                        <button 
                            onClick={handleRefresh}
                            className={`bg-gray-900 hover:bg-gray-800 text-white font-black uppercase tracking-widest text-xs px-6 py-3 transition-colors flex items-center justify-center shadow-[4px_4px_0_0_rgba(220,38,38,1)] ${isRefreshing ? 'opacity-70 pointer-events-none' : ''}`}
                        >
                            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} /> Refresh
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center">
                        <div className="p-3 bg-red-100 text-brand-maroon mr-4">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Trips</p>
                            <p className="text-3xl font-black text-gray-900 tracking-tight">12</p>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center">
                         <div className="p-3 bg-green-100 text-green-700 mr-4">
                            <Car className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Available Drivers</p>
                            <p className="text-3xl font-black text-gray-900 tracking-tight">8</p>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-brand-maroon p-6 shadow-[4px_4px_0_0_rgba(220,38,38,1)] flex items-center">
                         <div className="p-3 bg-red-100 text-brand-maroon mr-4">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-red-600 uppercase tracking-widest">Pending Assignments</p>
                            <p className="text-3xl font-black text-brand-maroon tracking-tight">2</p>
                        </div>
                    </div>
                    <div className="bg-white border-2 border-gray-900 p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center">
                         <div className="p-3 bg-blue-100 text-blue-700 mr-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Drivers En Route</p>
                            <p className="text-3xl font-black text-gray-900 tracking-tight">5</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Active Trips List */}
                    <div className="xl:col-span-2 bg-white border-2 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col h-[600px]">
                        <div className="p-4 border-b-2 border-gray-200 bg-gray-50">
                             <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Active Trips in Progress</h2>
                        </div>
                        <div className="overflow-y-auto flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-white sticky top-0 border-b-2 border-gray-200 z-10">
                                    <tr>
                                        <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Trip / Driver</th>
                                        <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Stage</th>
                                        <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest hidden sm:table-cell">Locations</th>
                                        <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">View</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-gray-100">
                                    {MOCK_TRIPS.map(t => (
                                        <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4">
                                                <p className="font-black text-gray-900 text-sm">{t.id}</p>
                                                <Link to={`/admin/drivers/${t.driverId}`} className="text-xs font-bold text-brand-maroon hover:underline flex items-center mt-1">
                                                     <User className="w-3 h-3 mr-1" /> {t.driver}
                                                </Link>
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex px-2 py-1 text-[10px] font-black uppercase tracking-wider border-2 ${getStageColor(t.stageCode)}`}>
                                                    {t.stage}
                                                </span>
                                                {t.eta !== 'N/A' && <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase">ETA: {t.eta}</p>}
                                            </td>
                                            <td className="p-4 hidden sm:table-cell">
                                                <p className="text-xs font-bold text-gray-700 truncate max-w-[200px] mb-1"><span className="text-gray-400">P:</span> {t.pickup}</p>
                                                <p className="text-xs font-bold text-gray-700 truncate max-w-[200px]"><span className="text-gray-400">D:</span> {t.dropoff}</p>
                                            </td>
                                            <td className="p-4 text-right">
                                                <Link to={`/admin/reservations`} className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-brand-maroon bg-gray-100 hover:bg-red-50 transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Trip Assignment Panel */}
                    <div className="xl:col-span-1 flex flex-col h-[600px]">
                        <div className="bg-red-50 border-4 border-brand-maroon shadow-[4px_4px_0_0_rgba(220,38,38,1)] p-6 mb-6">
                            <h2 className="text-sm font-black text-red-800 uppercase tracking-widest mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2" /> Pending Assignments (2)
                            </h2>
                            <p className="text-xs font-bold text-red-600 mb-4">Bookings confirmed, driver required.</p>
                            
                            <div className="space-y-4">
                                {MOCK_PENDING.map((p, idx) => (
                                    <div key={p.id} className={`bg-white border-2 border-red-300 p-4 ${idx === 0 ? 'ring-2 ring-brand-maroon ring-offset-2' : 'opacity-75'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-black text-gray-900 text-sm">{p.id}</span>
                                            <span className="text-[10px] bg-gray-900 text-white font-bold px-2 py-1 uppercase">{p.service}</span>
                                        </div>
                                        <p className="text-xs font-bold text-gray-600 mb-1">Time: <span className="text-brand-maroon">{p.time}</span></p>
                                        <p className="text-xs font-bold text-gray-600 truncate mb-3">Route: {p.pickup} → {p.dropoff}</p>
                                        {idx === 0 && (
                                            <button onClick={() => alert('Assign modal opened')} className="w-full bg-brand-maroon hover:bg-red-800 text-white text-[10px] font-black uppercase tracking-widest py-2 transition-colors">
                                                Assign Driver Now
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Driver Availability Summary */}
                        <div className="bg-gray-100 border-2 border-gray-900 p-6 flex-1">
                            <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Driver Availability</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b-2 border-gray-300">
                                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Premium Fleet</span>
                                    <span className="text-sm font-black text-gray-900"><span className="text-green-600">2 Avail</span> / 1 Busy</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b-2 border-gray-300">
                                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Business Fleet</span>
                                    <span className="text-sm font-black text-gray-900"><span className="text-green-600">4 Avail</span> / 6 Busy</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b-2 border-gray-300">
                                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Economy Fleet</span>
                                    <span className="text-sm font-black text-gray-900"><span className="text-green-600">2 Avail</span> / 5 Busy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
