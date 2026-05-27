import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { MapPin, ArrowLeft, Clock, Car, Phone } from 'lucide-react';

export default function LocationDetail() {
    const { id } = useParams();
    const locId = id || 'LOC-001';

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <div className="flex justify-between items-center mb-6">
                    <Link to="/admin/locations" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Locations
                    </Link>
                    <Link to={`/admin/locations/${locId}/edit`} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold uppercase tracking-widest text-xs px-4 py-2 border-2 border-gray-300 transition-colors">
                        Edit Location
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Col: Overview & Map */}
                    <div className="lg:col-span-1 space-y-6">
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest px-2 py-1 mb-2 inline-block border-2 border-blue-800">
                                Airport
                            </span>
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                                Kotoka International Airport (ACC)
                            </h1>
                            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">{locId}</p>
                        </div>
                        
                        <div className="space-y-4 text-sm font-bold border-t-2 border-gray-100 pt-4">
                            <div className="flex items-start text-gray-700">
                                <MapPin className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                                <div>
                                    Terminal 3, KIA<br/>
                                    Accra, Greater Accra
                                </div>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                                +233 30 221 3456
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-100 aspect-square border-4 border-gray-900 relative flex items-center justify-center p-4">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="text-center relative z-10">
                                <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
                                <p className="text-xs font-black uppercase tracking-widest text-gray-500">Map View (5.6037, -0.1870)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Operations */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Hours */}
                        <div className="border-4 border-gray-900 p-6 relative">
                            <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-bold uppercase tracking-widest flex items-center">
                                <Clock className="w-4 h-4 mr-2" /> Operating Hours
                            </div>
                            <table className="w-full text-sm mt-2">
                                <tbody>
                                    {days.map(day => (
                                        <tr key={day} className={`border-b border-gray-100 ${day === today ? 'bg-yellow-50 font-black text-gray-900' : 'text-gray-600'}`}>
                                            <td className="py-3 px-2">{day}{day === today && ' (Today)'}</td>
                                            <td className="py-3 px-2 text-right">00:00 - 23:59</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Vehicles Stationed */}
                        <div className="border-2 border-gray-200 p-6">
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center mb-4 pb-2 border-b-2 border-gray-100">
                                <Car className="w-4 h-4 mr-2" /> Vehicles Stationed Here (2)
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div>
                                        <Link to={`/admin/fleet/V-101`} className="font-bold text-red-600 hover:underline">V-101</Link>
                                        <p className="text-xs text-gray-500 font-bold">Toyota Camry 2023</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-900 font-bold block">Sedan</span>
                                        <span className="text-xs text-green-600 font-bold">Available</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div>
                                        <Link to={`/admin/fleet/V-106`} className="font-bold text-red-600 hover:underline">V-106</Link>
                                        <p className="text-xs text-gray-500 font-bold">Lexus RX 350</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-900 font-bold block">SUV</span>
                                        <span className="text-xs text-green-600 font-bold">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Bookings */}
                        <div className="border-2 border-gray-200 p-6">
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center mb-4 pb-2 border-b-2 border-gray-100">
                                Upcoming Pickups (Next 24h)
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-blue-50 border-l-4 border-blue-500">
                                    <div>
                                        <Link to={`/admin/reservations/XTA-5012`} className="font-black text-gray-900 hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">XTA-5012</Link>
                                        <p className="text-xs text-gray-700 font-bold mt-1">Today, 14:30</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-900">Kwame Mensah</p>
                                        <p className="text-xs font-bold text-blue-700">Airport Transfer</p>
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
