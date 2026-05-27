import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { CarFront, ArrowLeft, ArrowUpRight, Wrench, Calendar, MapPin, User, Camera, History } from 'lucide-react';

export default function AdminVehicleDetail() {
    const { id } = useParams();
    const vehicleId = id || 'V-101';
    
    const [selectedPhoto, setSelectedPhoto] = useState('https://i.ibb.co/0j6bZk7B/Airport-Pickup-2.jpg');

    const photos = [
        'https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg',
        'https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg',
        'https://i.ibb.co/sv5GZPW4/Airport-Pickup-4.jpg'
    ];

    return (
        <AdminLayout>
            <div className="p-8 max-w-6xl mx-auto border-l-4 border-gray-900 border-r-4 border-r-gray-900 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                {/* Header elements */}
                <div className="flex justify-between items-center mb-6">
                    <Link to="/admin/fleet" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Fleet
                    </Link>
                    <div className="flex space-x-3">
                        <Link to={`/admin/fleet/${vehicleId}/availability`} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold uppercase tracking-widest text-xs px-4 py-2 transition-colors flex items-center">
                            <Calendar className="w-4 h-4 mr-2" /> Calendar
                        </Link>
                        <Link to={`/admin/fleet/${vehicleId}/maintenance`} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold uppercase tracking-widest text-xs px-4 py-2 transition-colors flex items-center">
                            <Wrench className="w-4 h-4 mr-2" /> Maintenance
                        </Link>
                        <Link to={`/admin/fleet/${vehicleId}/edit`} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                            Edit Profile
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Photos & Specs */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Title block */}
                        <div>
                            <div className="flex items-center mb-2">
                                <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Toyota Camry 2023</h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
                                    {vehicleId}
                                </span>
                                <span className="bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-gray-900">
                                    GR-1234-24
                                </span>
                                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-green-800">
                                    Available
                                </span>
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div className="border-4 border-gray-900 p-2">
                            <div className="aspect-video bg-gray-100 mb-2 overflow-hidden">
                                <img src={selectedPhoto} alt="Vehicle" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {photos.map((photo, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => setSelectedPhoto(photo)}
                                        className={`w-24 h-16 flex-shrink-0 border-2 transition-colors ${selectedPhoto === photo ? 'border-red-600' : 'border-transparent hover:border-gray-400'}`}
                                    >
                                        <img src={photo} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gray-50 border-2 border-gray-200 p-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Class</p>
                                <p className="text-sm font-black text-gray-900">Sedan</p>
                            </div>
                            <div className="bg-gray-50 border-2 border-gray-200 p-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Service Level</p>
                                <p className="text-sm font-black text-gray-900">Economy</p>
                            </div>
                            <div className="bg-gray-50 border-2 border-gray-200 p-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Daily Rate</p>
                                <p className="text-sm font-black text-gray-900">GH₵ 400</p>
                            </div>
                            <div className="bg-gray-50 border-2 border-gray-200 p-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Capacity</p>
                                <p className="text-sm font-black text-gray-900">4 Pax, 2 Bags</p>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-200 pb-2">Features</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Air Conditioning', 'Bluetooth', 'USB Charger'].map(feat => (
                                    <span key={feat} className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1">
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Assignment & History */}
                    <div className="space-y-8">
                        
                        {/* Current Assignment */}
                        <div className="border-4 border-gray-900 p-6 relative">
                            <div className="absolute -top-4 left-4 bg-white px-2 text-sm font-bold uppercase tracking-widest flex items-center">
                                <User className="w-4 h-4 mr-2" /> Current Assignment
                            </div>
                            <div className="flex items-center space-x-4 mb-4 mt-2">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-400">
                                    <img src="https://i.ibb.co/5X2DH7NV/Airport-Pickup-8.jpg" alt="Driver" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-gray-900">Kofi Annan</p>
                                    <p className="text-xs font-bold text-gray-500">+233 24 111 2222</p>
                                </div>
                            </div>
                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold uppercase tracking-widest text-xs py-3 border-2 border-gray-300 transition-colors">
                                Reassign Driver
                            </button>
                        </div>

                        {/* Booking History */}
                        <div className="border-2 border-gray-200 p-6">
                            <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-gray-100">
                                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center">
                                    <History className="w-4 h-4 mr-2" /> Recent Bookings
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { id: 'XTA-5012', date: 'Oct 24, 2023', user: 'Kwame M.', status: 'Completed' },
                                    { id: 'XTA-5009', date: 'Oct 22, 2023', user: 'Grace A.', status: 'Completed' },
                                    { id: 'XTA-4990', date: 'Oct 18, 2023', user: 'John D.', status: 'Completed' }
                                ].map((booking, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm">
                                        <div>
                                            <Link to={`/admin/reservations/${booking.id}`} className="font-bold text-red-600 hover:underline">{booking.id}</Link>
                                            <p className="text-xs text-gray-500">{booking.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{booking.user}</p>
                                            <p className="text-xs text-green-600 font-bold">{booking.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full text-center text-xs font-bold text-gray-500 hover:text-red-600 uppercase tracking-widest mt-4 pt-4 border-t-2 border-gray-100">
                                View All Books
                            </button>
                        </div>

                        {/* Maintenance Summary */}
                        <div className="border-2 border-gray-200 p-6 bg-gray-50">
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center mb-4">
                                <Wrench className="w-4 h-4 mr-2" /> Maintenance
                            </h3>
                            <div className="space-y-2 mb-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-bold">Last Service:</span>
                                    <span className="font-black text-gray-900">Oct 15, 2023</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 font-bold">Next Due:</span>
                                    <span className="font-black text-orange-600">Jan 15, 2024</span>
                                </div>
                            </div>
                            <Link to={`/admin/fleet/${vehicleId}/maintenance`} className="block text-center bg-white border-2 border-gray-300 text-gray-900 font-bold uppercase tracking-widest text-xs py-3 transition-colors hover:border-gray-900">
                                View Log
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
