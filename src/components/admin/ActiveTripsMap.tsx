import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Map, Filter, Maximize, Navigation, List, X, CarFront, ChevronRight } from 'lucide-react';

const MOCK_TRIPS = [
    { id: 'B-1092', driver: 'Kofi Annan', stage: 'On Trip', stageCode: 'green', type: 'Ride' },
    { id: 'B-1090', driver: 'Esi Owusu', stage: 'En Route', stageCode: 'yellow', type: 'Ride' },
    { id: 'B-1088', driver: 'Yaw Mensah', stage: 'Waiting', stageCode: 'yellow', type: 'Ride' },
    { id: 'CR-502', driver: 'Kwame Osei', stage: 'Rental Active', stageCode: 'green', type: 'Rental' },
];

export default function ActiveTripsMap() {
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const [selectedService, setSelectedService] = useState('All');
    const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

    return (
        <AdminLayout>
            <div className="h-[calc(100vh-64px)] flex flex-col xl:flex-row bg-gray-50 overflow-hidden relative">
                
                {/* Map Area Placeholder */}
                <div className={`flex-1 relative transition-all duration-300 ${isPanelOpen ? 'xl:mr-96' : ''}`}>
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 bg-[#e5e5e5] flex items-center justify-center overflow-hidden">
                         {/* Map Grid Pattern */}
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                         
                         <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${selectedTrip === 'B-1092' ? 'scale-150 ring-4 ring-green-200' : ''} bg-green-500`}></div>
                              {selectedTrip === 'B-1092' && <span className="bg-white text-xs font-bold px-2 py-1 mt-1 shadow-sm">Kofi Annan (On Trip)</span>}
                         </div>
                         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${selectedTrip === 'B-1090' ? 'scale-150 ring-4 ring-yellow-200' : ''} bg-yellow-500`}></div>
                         </div>
                         <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${selectedTrip === 'CR-502' ? 'scale-150 ring-4 ring-green-200' : ''} bg-green-500`}></div>
                              <span className="bg-white text-[10px] font-black px-1 mt-1 border border-brand-maroon text-brand-maroon">RENTAL</span>
                         </div>
                         
                         {/* Available / Offline Drivers */}
                         <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-blue-500 border border-white shadow-sm"></div>
                         <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-gray-400 border border-white shadow-sm"></div>
                         
                         {/* Pending Assignment Pin */}
                         <div className="absolute bottom-1/4 left-1/2 flex flex-col items-center">
                             <div className="relative flex h-6 w-6 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-maroon border-2 border-white shadow-lg"></span>
                             </div>
                             <span className="bg-white text-xs font-bold px-2 py-1 mt-1 shadow-sm text-brand-maroon">Pending (ASAP)</span>
                         </div>

                         <div className="text-gray-400 text-6xl font-black uppercase tracking-widest opacity-20 absolute rotate-[-15deg] pointer-events-none select-none">Greater Accra</div>
                    </div>

                    {/* Floating Map Controls */}
                    <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pointer-events-none">
                         <div className="bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-4 flex items-center space-x-4 pointer-events-auto">
                              <div className="flex items-center">
                                  <Map className="w-5 h-5 mr-3 text-brand-maroon" />
                                  <h1 className="text-lg font-black text-gray-900 uppercase tracking-widest">Active Trips</h1>
                              </div>
                              <div className="h-6 w-px bg-gray-300"></div>
                              <div className="flex items-center space-x-2">
                                  <Filter className="w-4 h-4 text-gray-500" />
                                  <select 
                                      value={selectedService}
                                      onChange={(e) => setSelectedService(e.target.value)}
                                      className="bg-transparent text-xs font-bold text-gray-700 uppercase tracking-widest focus:outline-none cursor-pointer"
                                  >
                                      <option value="All">All Services</option>
                                      <option value="Premium">Premium</option>
                                      <option value="Economy">Economy</option>
                                  </select>
                              </div>
                         </div>
                         
                         <div className="flex flex-col gap-2 pointer-events-auto">
                             <button className="bg-white p-3 border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors hidden xl:block" onClick={() => setIsPanelOpen(!isPanelOpen)}>
                                 {isPanelOpen ? <Maximize className="w-5 h-5" /> : <List className="w-5 h-5" />}
                             </button>
                             <button className="bg-white p-3 border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition-colors">
                                 <Navigation className="w-5 h-5" />
                             </button>
                         </div>
                    </div>
                    
                    {/* Legend - Bottom Left */}
                    <div className="absolute bottom-4 left-4 bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-4 text-xs font-bold pointer-events-auto space-y-2">
                        <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div> On Trip / Active</div>
                        <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div> Assigned / En Route</div>
                        <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div> Available Driver</div>
                        <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div> Offline</div>
                        <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-brand-maroon mr-2"></div> Pending Assignment</div>
                    </div>
                </div>

                {/* Right Panel - Active Trips List */}
                <div className={`absolute xl:static top-0 right-0 h-full w-full sm:w-96 bg-white border-l-4 border-gray-900 shadow-[-8px_0_0_0_rgba(0,0,0,0.1)] transition-transform duration-300 transform ${isPanelOpen ? 'translate-x-0' : 'translate-x-[110%]'} flex flex-col z-20`}>
                    <div className="p-4 border-b-2 border-gray-200 flex justify-between items-center bg-gray-900 text-white">
                        <h2 className="text-sm font-black uppercase tracking-widest flex items-center">
                            <CarFront className="w-5 h-5 mr-3 text-red-500" /> Trips List
                        </h2>
                        <button onClick={() => setIsPanelOpen(false)} className="text-gray-400 hover:text-white transition-colors xl:hidden">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {MOCK_TRIPS.map(trip => (
                            <div 
                                key={trip.id} 
                                onClick={() => setSelectedTrip(trip.id)}
                                className={`bg-white border-2 p-4 cursor-pointer transition-all ${
                                    selectedTrip === trip.id 
                                    ? 'border-brand-maroon shadow-[4px_4px_0_0_rgba(220,38,38,1)]' 
                                    : 'border-gray-200 hover:border-gray-900'
                                }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-black text-gray-900 text-sm">{trip.id}</span>
                                        {trip.type === 'Rental' && (
                                            <span className="bg-gray-100 text-[10px] font-black uppercase tracking-widest px-2 py-1 text-gray-600 border border-gray-300">Rental</span>
                                        )}
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                                <p className="text-xs font-bold text-gray-600 mb-3">{trip.driver}</p>
                                <div className="flex items-center">
                                    <div className={`w-2 h-2 rounded-full mr-2 ${trip.stageCode === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500">{trip.stage}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
