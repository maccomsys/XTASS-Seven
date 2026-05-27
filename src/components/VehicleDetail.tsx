import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Briefcase, CarFront, Zap, Wind, Check } from 'lucide-react';

export default function VehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Mock Data
  const vehicle = {
    id: id || 'v1',
    makeModel: 'Toyota Corolla or similar',
    classType: 'Sedan',
    serviceLevel: 'Economy',
    dailyRate: 45.50,
    durationDays: 3, // For mock total
    images: [
      'https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg', // Generic sedan front
      'https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg', // Interior
      'https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg'  // Generic back
    ],
    specs: {
      passengers: 4,
      luggage: 3,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      airConditioning: true
    },
    features: ['Bluetooth', 'USB Charger', 'Air Conditioning', 'Power Windows', 'FM/AM Radio']
  };

  const getServiceLevelColor = (level: string) => {
    switch (level) {
      case 'Premium': return 'bg-gray-900 text-brand-yellow';
      case 'Business': return 'bg-blue-900 text-white';
      case 'Economy': return 'bg-brand-maroon text-white';
      case 'Basic': return 'bg-gray-200 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back
          </button>
          <div className="text-center flex-1 pr-16 md:pr-24">
            <h1 className="text-lg font-black text-gray-900 uppercase tracking-widest truncate">
              {vehicle.makeModel}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Image Carousel */}
        <div className="relative h-64 md:h-[400px] w-full bg-gray-200 overflow-hidden">
          {vehicle.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${vehicle.makeModel} preview ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === currentImageIdx ? 'opacity-100 relative' : 'opacity-0'}`}
            />
          ))}
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-gray-900 flex items-center justify-center rounded-full shadow-lg transition-colors z-10 font-bold"
            onClick={() => setCurrentImageIdx(prev => prev === 0 ? vehicle.images.length - 1 : prev - 1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-gray-900 flex items-center justify-center rounded-full shadow-lg transition-colors z-10 font-bold"
            onClick={() => setCurrentImageIdx(prev => prev === vehicle.images.length - 1 ? 0 : prev + 1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
             {vehicle.images.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setCurrentImageIdx(idx)}
                 className={`w-2.5 h-2.5 rounded-full shadow-sm transition-all ${idx === currentImageIdx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
               />
             ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 py-8">
          <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8 -mt-16 relative z-20 mb-8 max-w-3xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${getServiceLevelColor(vehicle.serviceLevel)}`}>
                    {vehicle.serviceLevel}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider border border-gray-200">
                    {vehicle.classType}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">{vehicle.makeModel}</h2>
              </div>
              <div className="text-left md:text-right bg-gray-50 p-4 border border-gray-100 rounded md:min-w-[160px]">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Estimated Fare</p>
                <div className="flex items-baseline md:justify-end gap-1">
                   <span className="text-lg font-bold text-gray-900">GH₵</span>
                   <span className="text-3xl font-black text-brand-maroon">{vehicle.dailyRate.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Specs */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Specifications</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-100 text-center">
                    <Users className="w-6 h-6 text-gray-400 mb-2" />
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Seats</span>
                    <span className="font-black text-gray-900">{vehicle.specs.passengers} People</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-100 text-center">
                    <Briefcase className="w-6 h-6 text-gray-400 mb-2" />
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Luggage</span>
                    <span className="font-black text-gray-900">{vehicle.specs.luggage} Bags</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-100 text-center">
                    <CarFront className="w-6 h-6 text-gray-400 mb-2" />
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Transmission</span>
                    <span className="font-black text-gray-900">{vehicle.specs.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-100 text-center">
                    {vehicle.specs.airConditioning ? <Wind className="w-6 h-6 text-gray-400 mb-2" /> : <Zap className="w-6 h-6 text-gray-400 mb-2" />}
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">A/C</span>
                    <span className="font-black text-gray-900">{vehicle.specs.airConditioning ? 'Available' : 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-brand-maroon/10 flex items-center justify-center mr-3 shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-maroon font-bold" />
                      </div>
                      <span className="font-bold text-gray-700 text-sm tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <div className="max-w-3xl mx-auto flex gap-4">
            <button 
              onClick={() => navigate('/booking/step-1')}
              className="w-full bg-brand-yellow font-black text-gray-900 py-4 px-8 hover:bg-brand-yellow-hover transition-colors shadow-lg uppercase tracking-widest text-sm flex justify-between items-center"
            >
              <span>Select This Vehicle</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
