import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, X, CarFront, Check, ChevronRight, Award } from 'lucide-react';

interface VehicleStats {
  id: string;
  name: string;
  class: string;
  rate: number;
  passengers: number;
  luggage: number;
  transmission: string;
  fuel: string;
  ac: boolean;
  badges: string[];
}

const MOCK_COMPARISON: VehicleStats[] = [
  { 
    id: '1', name: 'Toyota Corolla', class: 'Economy', rate: 45.50,
    passengers: 4, luggage: 3, transmission: 'Automatic', fuel: 'Petrol', ac: true, badges: ['Budget Friendly']
  },
  { 
    id: '2', name: 'Mercedes-Benz E-Class', class: 'Premium', rate: 120.00,
    passengers: 4, luggage: 3, transmission: 'Automatic', fuel: 'Petrol', ac: true, badges: ['Executive Choice', 'Top Rated']
  }
];

export default function VehicleComparison() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState<VehicleStats[]>(MOCK_COMPARISON);

  const removeVehicle = (id: string) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  const getEmptySlots = () => {
    return 3 - vehicles.length;
  };

  return (
    <main className="flex-grow bg-gray-50 pb-32">
      <div className="bg-brand-maroon py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">Compare Vehicles</h1>
            <p className="text-gray-200 font-medium text-lg">Compare up to 3 vehicles side by side to find your perfect ride.</p>
          </div>
          {vehicles.length > 0 && (
             <button onClick={() => setVehicles([])} className="mt-4 md:mt-0 text-white/70 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors self-start md:self-auto">
               Clear All
             </button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 -mt-8 relative z-20">
        
        {/* Vehicle Selection Header row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
           <div className="hidden md:block"></div> {/* Spacer for first column in desktop */}

           {vehicles.map(v => (
             <div key={v.id} className="bg-white border-t-4 border-brand-maroon shadow-md relative group flex flex-col h-full">
               <button 
                 onClick={() => removeVehicle(v.id)}
                 className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors z-10"
               >
                 <X className="w-4 h-4" />
               </button>
               <div className="h-24 bg-gray-50 flex items-center justify-center border-b border-gray-100 shrink-0">
                  <CarFront className="w-12 h-12 text-gray-300" />
               </div>
               <div className="p-4 flex flex-col flex-grow">
                 <div className="flex flex-wrap gap-1 mb-2">
                   {v.badges.map(b => (
                     <span key={b} className="px-1.5 py-0.5 bg-brand-yellow/30 text-gray-900 text-[10px] font-black uppercase tracking-wider block truncate max-w-full">
                       {b}
                     </span>
                   ))}
                 </div>
                 <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">{v.class}</span>
                 <h3 className="font-black text-gray-900 text-sm md:text-base uppercase tracking-tight mb-auto leading-tight">{v.name}</h3>
               </div>
             </div>
           ))}

           {/* Empty Slots */}
           {Array.from({ length: getEmptySlots() }).map((_, i) => (
             <Link to="/available-vehicles" key={`empty-${i}`} className="bg-white border-2 border-dashed border-gray-300 hover:border-brand-maroon hover:bg-brand-maroon/5 group flex flex-col items-center justify-center p-6 text-center transition-colors min-h-[180px]">
               <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-brand-maroon group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Plus className="w-6 h-6" />
               </div>
               <span className="font-bold text-gray-600 uppercase tracking-wider text-xs group-hover:text-brand-maroon transition-colors">Add Vehicle</span>
             </Link>
           ))}
        </div>

        {/* Comparison Table */}
        {vehicles.length > 0 ? (
          <div className="bg-white shadow-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <tbody>
                {/* Daily Rate */}
                <tr>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 font-black text-gray-900 uppercase tracking-widest text-xs w-1/4">Daily Rate</th>
                  {vehicles.map(v => (
                    <td key={v.id} className="py-4 px-6 border-b border-gray-200 text-center w-1/4">
                       <span className="text-xl font-black text-brand-maroon">GH₵ {v.rate.toFixed(2)}</span>
                    </td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-rate-${i}`} className="border-b border-gray-200 bg-gray-50/50"></td>)}
                </tr>
                {/* Passengers */}
                <tr>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 font-bold text-gray-500 uppercase tracking-widest text-xs">Passengers</th>
                  {vehicles.map(v => (
                    <td key={v.id} className="py-4 px-6 border-b border-gray-200 text-center font-bold text-gray-900">{v.passengers} Adults</td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-pass-${i}`} className="border-b border-gray-200 bg-gray-50/50"></td>)}
                </tr>
                {/* Luggage */}
                <tr>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 font-bold text-gray-500 uppercase tracking-widest text-xs">Luggage</th>
                  {vehicles.map(v => (
                    <td key={v.id} className="py-4 px-6 border-b border-gray-200 text-center font-bold text-gray-900">{v.luggage} Bags</td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-lug-${i}`} className="border-b border-gray-200 bg-gray-50/50"></td>)}
                </tr>
                {/* Transmission */}
                <tr>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 font-bold text-gray-500 uppercase tracking-widest text-xs">Transmission</th>
                  {vehicles.map(v => (
                     <td key={v.id} className="py-4 px-6 border-b border-gray-200 text-center font-bold text-gray-900">{v.transmission}</td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-trans-${i}`} className="border-b border-gray-200 bg-gray-50/50"></td>)}
                </tr>
                {/* Fuel */}
                <tr>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 font-bold text-gray-500 uppercase tracking-widest text-xs">Fuel Type</th>
                  {vehicles.map(v => (
                     <td key={v.id} className="py-4 px-6 border-b border-gray-200 text-center font-bold text-gray-900">{v.fuel}</td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-fuel-${i}`} className="border-b border-gray-200 bg-gray-50/50"></td>)}
                </tr>
                {/* AC */}
                <tr>
                  <th className="py-4 px-6 border-b border-r border-gray-200 bg-gray-50 font-bold text-gray-500 uppercase tracking-widest text-xs">Air Conditioning</th>
                  {vehicles.map(v => (
                     <td key={v.id} className="py-4 px-6 border-b border-gray-200 text-center">
                       {v.ac ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : '-'}
                     </td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-ac-${i}`} className="border-b border-gray-200 bg-gray-50/50"></td>)}
                </tr>
                {/* Actions */}
                <tr>
                  <th className="py-6 px-6 border-r border-gray-200 bg-gray-50 font-bold text-gray-500 uppercase tracking-widest text-xs border-b-0"></th>
                  {vehicles.map(v => (
                     <td key={v.id} className="p-4 border-t border-gray-200 align-top">
                       <button onClick={() => navigate('/booking/step-1')} className="w-full bg-brand-yellow hover:bg-brand-yellow-hover font-black text-gray-900 py-3 uppercase tracking-wider text-xs transition-colors flex items-center justify-center">
                         Select <ChevronRight className="w-4 h-4 ml-1" />
                       </button>
                     </td>
                  ))}
                  {Array.from({ length: getEmptySlots() }).map((_, i) => <td key={`td-act-${i}`} className="p-4 bg-gray-50/50 border-t border-gray-200"></td>)}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 p-16 text-center shadow-sm">
             <CarFront className="w-16 h-16 text-gray-300 mx-auto mb-6" />
             <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">No Vehicles Selected</h3>
             <p className="text-gray-500 font-medium mb-8">Add vehicles to the comparison tool to see their features side-by-side.</p>
             <Link 
                to="/available-vehicles"
                className="inline-flex items-center bg-brand-yellow font-black text-gray-900 py-4 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider shadow-sm"
              >
                Browse Available Vehicles
              </Link>
          </div>
        )}

      </div>
    </main>
  );
}
