import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, CarFront, ChevronRight, Star } from 'lucide-react';

interface VehicleCard {
  id: string;
  name: string;
  class: string;
  rate: number;
}

const MOCK_RECENT: VehicleCard[] = [
  { id: 'v1', name: 'Toyota Corolla', class: 'Economy', rate: 45.50 },
  { id: 'v2', name: 'Mercedes-Benz E-Class', class: 'Premium', rate: 120.00 },
  { id: 'r1', name: 'Mercedes-Benz G-Class 2024', class: 'Premium SUV', rate: 1500.00 }
];

const MOCK_FAVS: VehicleCard[] = [
  { id: 'v2', name: 'Mercedes-Benz E-Class', class: 'Premium', rate: 120.00 },
  { id: 'v3', name: 'Toyota Prado', class: 'Business', rate: 150.00 }
];

export default function RecentlyViewed() {
  const [favorites, setFavorites] = useState<VehicleCard[]>(MOCK_FAVS);
  const [recent] = useState<VehicleCard[]>(MOCK_RECENT);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  const EmptyState = ({ type }: { type: 'recent' | 'fav' }) => (
    <div className="bg-white border border-gray-200 p-12 text-center shadow-sm">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
        {type === 'recent' ? <Clock className="w-10 h-10 text-gray-300" /> : <Heart className="w-10 h-10 text-gray-300" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {type === 'recent' ? 'No Recently Viewed Vehicles' : 'No Favourites Saved'}
      </h3>
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
        {type === 'recent' 
          ? 'Start browsing our fleet to see your history here.' 
          : 'Tap the heart icon on any vehicle to save it for later quick access.'}
      </p>
      <Link 
        to="/available-vehicles"
        className="inline-flex items-center bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider shadow-sm"
      >
        Browse Fleet
      </Link>
    </div>
  );

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      <div className="bg-brand-maroon py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">Saved & History</h1>
          <p className="text-gray-200 font-medium text-lg">Pick up right where you left off.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 -mt-8 relative z-20 space-y-12">
        
        {/* Favourites Section */}
        <section>
          <div className="flex items-center mb-6">
            <Heart className="w-6 h-6 text-brand-maroon mr-3 fill-current" />
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Your Favourites</h2>
          </div>
          
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map(vehicle => (
                <div key={vehicle.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative group">
                  <button 
                    onClick={() => removeFavorite(vehicle.id)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart className="w-4 h-4 text-brand-maroon fill-current" />
                  </button>
                  
                  <div className="h-32 bg-gray-100 flex items-center justify-center border-b border-gray-200">
                    <CarFront className="w-12 h-12 text-gray-300" />
                  </div>
                  
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">{vehicle.class}</span>
                    <h3 className="font-black text-gray-900 text-lg uppercase truncate mb-3">{vehicle.name}</h3>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-0.5">Est. Rate</span>
                        <span className="font-black text-brand-maroon text-lg">GH₵ {vehicle.rate.toFixed(2)}</span>
                      </div>
                      <Link to={`/vehicle-detail/${vehicle.id}`} className="w-8 h-8 bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState type="fav" />
          )}
        </section>

        {/* Recently Viewed Section */}
        <section>
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-gray-500 mr-3" />
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest">Recently Viewed</h2>
          </div>
          
          {recent.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map(vehicle => (
                <div key={vehicle.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
                  
                  <div className="h-32 bg-gray-100 flex items-center justify-center border-b border-gray-200">
                    <CarFront className="w-12 h-12 text-gray-300" />
                  </div>
                  
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">{vehicle.class}</span>
                    <h3 className="font-black text-gray-900 text-lg uppercase truncate mb-3">{vehicle.name}</h3>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-0.5">Est. Rate</span>
                        <span className="font-black text-brand-maroon text-lg">GH₵ {vehicle.rate.toFixed(2)}</span>
                      </div>
                      <Link to={`/vehicle-detail/${vehicle.id}`} className="text-xs font-bold text-gray-900 uppercase tracking-wider underline hover:text-brand-maroon transition-colors py-2">
                        View Again
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState type="recent" />
          )}
        </section>

      </div>
    </main>
  );
}
