import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

export default function VehicleAvailability() {
    const { id } = useParams();
    const vehicleId = id || 'V-101';
    
    // Simplistic calendar logic
    const daysInMonth = 31;
    const startDay = 3; // Wednesday
    const blanks = Array.from({ length: startDay }, (_, i) => i);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const [blockModalOpen, setBlockModalOpen] = useState(false);

    const getDayStyle = (day: number) => {
        // mock logic
        if (day >= 12 && day <= 15) return 'bg-orange-100 text-orange-800 border-orange-300 cursor-pointer hover:bg-orange-200'; // Assigned
        if (day >= 25 && day <= 26) return 'bg-gray-200 text-gray-800 border-gray-400 cursor-pointer hover:bg-gray-300'; // Maintenance
        return 'bg-green-50 text-green-800 border-green-200 cursor-pointer hover:bg-green-100'; // Available
    };

    return (
        <AdminLayout>
            <div className="p-8 max-w-5xl mx-auto">
                <div className="mb-6">
                    <Link to={`/admin/fleet/${vehicleId}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Vehicle
                    </Link>
                </div>

                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <CalendarIcon className="w-8 h-8 mr-3 text-red-600" />
                            Availability Calendar
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">Vehicle {vehicleId} - Toyota Camry 2023</p>
                    </div>
                </div>

                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8">
                    
                    {/* Month Nav */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-100">
                        <h2 className="text-2xl font-black text-gray-900 uppercase">October 2023</h2>
                        <div className="flex space-x-2">
                            <button className="p-2 border-2 border-gray-300 hover:bg-gray-100 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="p-2 border-2 border-gray-300 hover:bg-gray-100 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex space-x-6 mb-6">
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <span className="w-4 h-4 bg-green-200 border-2 border-green-300 mr-2 block"></span> Available
                        </div>
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <span className="w-4 h-4 bg-orange-200 border-2 border-orange-300 mr-2 block"></span> Assigned/Booked
                        </div>
                        <div className="flex items-center text-sm font-bold text-gray-700">
                            <span className="w-4 h-4 bg-gray-300 border-2 border-gray-400 mr-2 block"></span> Blocked/Maintenance
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2 mb-8">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center font-black text-gray-400 uppercase tracking-widest text-xs py-2">
                                {day}
                            </div>
                        ))}
                        {blanks.map(b => (
                            <div key={`blank-${b}`} className="min-h-[100px] bg-gray-50 border-2 border-gray-100 opacity-50"></div>
                        ))}
                        {days.map(day => (
                            <div key={day} className={`min-h-[100px] border-2 p-2 relative transition-colors ${getDayStyle(day)}`}>
                                <span className="absolute top-2 right-2 text-sm font-black">{day}</span>
                                {day === 24 && <div className="absolute bottom-2 left-2 right-2 flex justify-center"><div className="w-2 h-2 rounded-full bg-red-600"></div></div>}
                            </div>
                        ))}
                    </div>

                    {/* Block Date Form */}
                    <div className="border-t-4 border-gray-900 pt-8 mt-8">
                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider mb-4">Block Date Range</h3>
                        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Start Date</label>
                                <input type="date" className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">End Date</label>
                                <input type="date" className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Reason</label>
                                <select className="w-full bg-white border-2 border-gray-300 p-3 text-sm font-bold focus:border-red-600 appearance-none">
                                    <option>Scheduled Maintenance</option>
                                    <option>Inspection</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <button type="button" className="bg-gray-900 hover:bg-black text-white font-black uppercase tracking-widest text-sm p-3 border-2 border-gray-900 transition-colors">
                                Block Dates
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
