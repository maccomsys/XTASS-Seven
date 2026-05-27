import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Clock, CarFront, Wind, BatteryCharging, Wifi, MessageSquareText, ShieldCheck } from 'lucide-react';

export default function DriverDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock Data
  const driver = {
    id: id || 'd1',
    firstName: 'Kwame',
    lastName: 'Mensah',
    rating: 4.8,
    tripsCompleted: 1240,
    joinDate: 'Jan 2024',
    eta: '~8 minutes away',
    vehicle: {
      makeModel: 'Toyota Corolla',
      class: 'Economy',
      year: '2020',
      plate: 'GR-1234-20',
      color: 'Silver',
      amenities: ['Air Conditioning', 'Bottled Water', 'Phone Charger']
    }
  };

  const AmenityIcon = ({ label }: { label: string }) => {
    switch(label) {
      case 'Air Conditioning': return <Wind className="w-4 h-4 mr-1.5" />;
      case 'Phone Charger': return <BatteryCharging className="w-4 h-4 mr-1.5" />;
      case 'Wi-Fi': return <Wifi className="w-4 h-4 mr-1.5" />;
      default: return <ShieldCheck className="w-4 h-4 mr-1.5" />;
    }
  }

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back
          </button>
          <div className="text-center flex-1 pr-16 md:pr-24">
             <h1 className="text-lg font-black text-gray-900 uppercase tracking-widest truncate">
              Driver Assigned
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
        
        {/* ETA Banner */}
        <div className="bg-blue-50 border border-blue-200 p-4 flex items-center justify-center mb-8 shadow-sm">
          <Clock className="w-5 h-5 text-blue-600 mr-2 animate-pulse" />
          <span className="font-black text-blue-900 uppercase tracking-widest">{driver.eta}</span>
        </div>

        {/* Driver Profile */}
        <div className="bg-white shadow-xl border border-gray-100 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-maroon"></div>
          
          <div className="w-32 h-32 bg-gray-100 rounded-full border-4 border-white shadow-md flex items-center justify-center relative shrink-0 overflow-hidden">
             {/* Fallback to Initials */}
             <span className="text-4xl font-black text-gray-400 tracking-tighter">
               {driver.firstName[0]}{driver.lastName[0]}
             </span>
             <img 
                src={"https://i.ibb.co/HTVggwbD/Airport-Pickup-5.jpg"} 
                alt="Driver profile placeholder" 
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
          </div>

          <div className="flex-1 text-center md:text-left pt-2">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
              {driver.firstName} {driver.lastName}
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
               <span className="flex items-center font-bold text-gray-900">
                 <Star className="w-5 h-5 text-brand-yellow mr-1 fill-current" />
                 {driver.rating}
               </span>
               <span className="text-gray-300">|</span>
               <span className="flex items-center text-sm font-bold text-gray-600 uppercase tracking-wider">
                 <ShieldCheck className="w-4 h-4 text-green-500 mr-1.5" />
                 {driver.tripsCompleted.toLocaleString()} Trips
               </span>
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
               XTASS Professional Driver Since {driver.joinDate}
            </p>
          </div>

          <div className="md:absolute md:top-8 md:right-8">
            <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors text-gray-700" title="Contact Driver">
              <MessageSquareText className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Assigned Vehicle */}
        <div className="bg-white shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center mb-6 border-b border-gray-100 pb-4">
            <CarFront className="w-6 h-6 text-brand-maroon mr-3" />
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest">Assigned Vehicle</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Make / Model</p>
              <p className="text-lg font-black text-gray-900">{driver.vehicle.makeModel}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Registration Plate</p>
              <div className="inline-block bg-yellow-400 px-3 py-1 border-2 border-black font-mono font-bold text-black tracking-widest">
                {driver.vehicle.plate}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Vehicle Class</p>
              <span className="inline-block bg-brand-maroon text-white px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
                {driver.vehicle.class}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Color / Year</p>
              <p className="font-bold text-gray-700">{driver.vehicle.color} • {driver.vehicle.year}</p>
            </div>
          </div>

          {/* Amenities */}
          <div>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Provided Amenities</p>
             <div className="flex flex-wrap gap-3">
               {driver.vehicle.amenities.map(amenity => (
                 <div key={amenity} className="flex items-center bg-gray-50 border border-gray-200 px-3 py-2 text-sm font-bold text-gray-700">
                    <AmenityIcon label={amenity} />
                    {amenity}
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => navigate('/booking-confirmation')}
          className="w-full bg-brand-yellow font-black text-gray-900 py-4 px-8 hover:bg-brand-yellow-hover transition-colors shadow-lg uppercase tracking-widest text-sm text-center"
        >
          Confirm This Booking
        </button>

      </div>
    </main>
  );
}
