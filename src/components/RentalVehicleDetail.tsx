import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Briefcase, CarFront, Zap, Wind, Check, Award, ShieldCheck, Route, FileCheck } from 'lucide-react';

export default function RentalVehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Mock Data
  const vehicle = {
    id: id || 'r1',
    makeModel: 'Mercedes-Benz G-Class 2024',
    classType: 'Premium SUV',
    dailyRate: 1500.00,
    durationDays: 3, 
    images: [
      'https://i.ibb.co/5X2DH7NV/Airport-Pickup-8.jpg',
      'https://i.ibb.co/0j6bZk7B/Airport-Pickup-2.jpg',
      'https://i.ibb.co/ymzQTwCS/Resized-2.jpg'
    ],
    specs: {
      engine: '4.0L V8 Biturbo',
      transmission: '9-Speed Automatic',
      passengers: 5,
      luggage: 4,
      fuelType: 'Petrol'
    },
    features: ['Premium Leather Interior', 'Panoramic Sunroof', 'Burmester Surround Sound', 'GPS Navigation', 'Tri-Zone Climate Control', 'Apple CarPlay / Android Auto'],
    badges: ['Executive Choice', 'Wedding Favourite', 'VIP Service'],
    rentalTerms: {
      minPeriod: '24 Hours Minimum',
      fuelPolicy: 'Full-to-Full',
      requirements: 'Valid International or Ghanaian Driver\'s Licence'
    }
  };

  return (
    <main className="flex-grow bg-white pb-24">
      
      {/* Cinematic Header/Carousel */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-gray-900 overflow-hidden">
         {/* Top NavBar overlay */}
        <div className="absolute top-0 left-0 w-full z-40 bg-gradient-to-b from-black/70 to-transparent pt-6 pb-12 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors border border-white/20">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>

        {vehicle.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${vehicle.makeModel} showcase ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${idx === currentImageIdx ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-105'}`}
          />
        ))}

        {/* Gradient Bottom overlay for text readability */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-gray-900 to-transparent z-10 flex flex-col justify-end px-6 md:px-12 pb-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
               <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.badges.map(badge => (
                      <span key={badge} className="px-3 py-1 bg-brand-yellow/90 backdrop-blur text-gray-900 text-xs font-black uppercase tracking-wider">
                        <Award className="w-3 h-3 inline mr-1 -mt-0.5" />
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
                    {vehicle.makeModel}
                  </h1>
                  <p className="text-xl text-gray-300 font-bold uppercase tracking-widest mt-2">
                    {vehicle.classType}
                  </p>
               </div>

               <div className="bg-black/40 backdrop-blur-md border border-white/20 p-6 md:min-w-[240px] shadow-2xl">
                 <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">Daily Rental</p>
                 <div className="flex items-baseline gap-1 text-white">
                    <span className="text-xl font-bold">GH₵</span>
                    <span className="text-5xl font-black tracking-tight">{vehicle.dailyRate.toLocaleString()}</span>
                 </div>
               </div>
            </div>
        </div>
        
        {/* Carousel Controls */}
        <button 
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white items-center justify-center rounded-full shadow-lg transition-colors z-20 border border-white/20"
          onClick={() => setCurrentImageIdx(prev => prev === 0 ? vehicle.images.length - 1 : prev - 1)}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white items-center justify-center rounded-full shadow-lg transition-colors z-20 border border-white/20"
          onClick={() => setCurrentImageIdx(prev => prev === vehicle.images.length - 1 ? 0 : prev + 1)}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
           {vehicle.images.map((_, idx) => (
             <button 
               key={idx}
               onClick={() => setCurrentImageIdx(idx)}
               className={`h-2 rounded-full shadow-sm transition-all duration-300 ${idx === currentImageIdx ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/50 hover:bg-white/90'}`}
             />
           ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Specs & Features */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Main Specs */}
          <section>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Core Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
                <CarFront className="w-8 h-8 text-brand-maroon mb-3" />
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 text-center">Engine</span>
                <span className="font-black text-gray-900 text-center">{vehicle.specs.engine}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
                <Users className="w-8 h-8 text-brand-maroon mb-3" />
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 text-center">Capacity</span>
                <span className="font-black text-gray-900 text-center">{vehicle.specs.passengers} Adults</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
                <Briefcase className="w-8 h-8 text-brand-maroon mb-3" />
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 text-center">Luggage</span>
                <span className="font-black text-gray-900 text-center">{vehicle.specs.luggage} Large Bags</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50">
               <Zap className="w-8 h-8 text-brand-maroon mb-3" />
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 text-center">Transmission</span>
                <span className="font-black text-gray-900 text-center">{vehicle.specs.transmission}</span>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Vehicle Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center mr-4 shrink-0">
                    <Check className="w-4 h-4 text-brand-maroon font-bold" />
                  </div>
                  <span className="font-bold text-gray-900 uppercase tracking-widest text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rental Terms */}
          <section>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Rental Conditions</h2>
            <ul className="space-y-6 bg-gray-50 p-8 border border-gray-200">
               <li className="flex items-start">
                 <Clock className="w-5 h-5 text-gray-500 mr-4 mt-0.5" />
                 <div>
                   <span className="font-bold text-gray-900 block uppercase tracking-wider text-sm mb-1">Minimum Rental Period</span>
                   <span className="text-gray-600">{vehicle.rentalTerms.minPeriod}</span>
                 </div>
               </li>
               <li className="flex items-start">
                 <Wind className="w-5 h-5 text-gray-500 mr-4 mt-0.5" />
                 <div>
                   <span className="font-bold text-gray-900 block uppercase tracking-wider text-sm mb-1">Fuel Policy</span>
                   <span className="text-gray-600">{vehicle.rentalTerms.fuelPolicy}</span>
                 </div>
               </li>
               <li className="flex items-start">
                 <FileCheck className="w-5 h-5 text-gray-500 mr-4 mt-0.5" />
                 <div>
                   <span className="font-bold text-gray-900 block uppercase tracking-wider text-sm mb-1">Driver Requirements (Self-Drive)</span>
                   <span className="text-gray-600">{vehicle.rentalTerms.requirements}</span>
                 </div>
               </li>
            </ul>
          </section>

        </div>

        {/* Right Column: Sticky Pricing & CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-gray-200 shadow-2xl p-8">
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">Booking Summary</h3>
            
            <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center text-sm">
                 <span className="font-bold text-gray-500">Daily Rate</span>
                 <span className="font-bold text-gray-900">GH₵ {vehicle.dailyRate.toLocaleString()}</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="font-bold text-gray-500">Duration</span>
                 <span className="font-bold text-gray-900">{vehicle.durationDays} Days</span>
               </div>
               <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                 <span className="font-black text-gray-900 uppercase tracking-wider text-sm">Total Estimate</span>
                 <span className="font-black text-brand-maroon text-2xl">GH₵ {(vehicle.dailyRate * vehicle.durationDays).toLocaleString()}</span>
               </div>
               <p className="text-xs text-gray-400 mt-2 text-right italic">* Excludes optional extras & insurance</p>
            </div>

            <button 
              onClick={() => navigate('/booking/step-1')}
              className="w-full bg-brand-yellow font-black text-gray-900 py-5 px-8 hover:bg-brand-yellow-hover transition-colors shadow-lg uppercase tracking-widest text-sm flex justify-center items-center group"
            >
              <span>Reserve This Vehicle</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-6 flex items-center justify-center text-xs text-gray-500 uppercase tracking-wider font-bold">
               <ShieldCheck className="w-4 h-4 mr-2" /> Secure Booking Guarantee
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
