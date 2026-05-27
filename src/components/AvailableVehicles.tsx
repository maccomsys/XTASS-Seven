import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CarFront, Star, Clock, ChevronDown, Filter, ChevronLeft } from 'lucide-react';

interface Vehicle {
  id: string;
  classType: string; // Sedan, SUV, Van
  serviceLevel: string; // Premium, Business, Economy, Basic
  makeModel: string;
  driverName: string;
  rating: number;
  eta: string;
  fareEstimate: number;
  featured: boolean;
}

const MOCK_VEHICLES: Vehicle[] = [
  { id: 'v1', classType: 'Sedan', serviceLevel: 'Economy', makeModel: 'Toyota Corolla', driverName: 'Kwame', rating: 4.8, eta: '~5 mins away', fareEstimate: 45.50, featured: true },
  { id: 'v2', classType: 'Sedan', serviceLevel: 'Premium', makeModel: 'Mercedes-Benz E-Class', driverName: 'Osei', rating: 4.9, eta: '~12 mins away', fareEstimate: 120.00, featured: true },
  { id: 'v3', classType: 'SUV', serviceLevel: 'Business', makeModel: 'Toyota Prado', driverName: 'Daniel', rating: 4.7, eta: '~8 mins away', fareEstimate: 150.00, featured: false },
  { id: 'v4', classType: 'Sedan', serviceLevel: 'Basic', makeModel: 'Hyundai Elantra', driverName: 'Ama', rating: 4.6, eta: '~3 mins away', fareEstimate: 35.00, featured: false },
  { id: 'v5', classType: 'Van', serviceLevel: 'Economy', makeModel: 'Nissan Urvan', driverName: 'Emmanuel', rating: 4.5, eta: '~15 mins away', fareEstimate: 80.00, featured: false },
];

export default function AvailableVehicles() {
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  
  // Sort
  const [sortOption, setSortOption] = useState<'Featured' | 'PriceLowHigh' | 'PriceHighLow'>('Featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleFilter = (type: 'class' | 'level', value: string) => {
    if (type === 'class') {
      setSelectedClasses(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    } else {
      setSelectedLevels(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    }
  };

  const filteredAndSortedVehicles = useMemo(() => {
    let result = MOCK_VEHICLES.filter(v => {
      const classMatch = selectedClasses.length === 0 || selectedClasses.includes(v.classType);
      const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(v.serviceLevel);
      return classMatch && levelMatch;
    });

    result.sort((a, b) => {
      if (sortOption === 'Featured') {
        if (a.featured === b.featured) return a.fareEstimate - b.fareEstimate; // Fallback sort by price
        return a.featured ? -1 : 1;
      }
      if (sortOption === 'PriceLowHigh') {
        return a.fareEstimate - b.fareEstimate;
      }
      if (sortOption === 'PriceHighLow') {
        return b.fareEstimate - a.fareEstimate;
      }
      return 0;
    });

    return result;
  }, [selectedClasses, selectedLevels, sortOption]);

  const FilterChip = ({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) => (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border-2 ${
        selected ? 'bg-brand-maroon text-white border-brand-maroon' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header Area */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back
          </Link>
          <div className="text-center flex-1 pr-6">
            <h1 className="text-lg font-black text-gray-900 uppercase tracking-widest">Available Rides</h1>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-gray-50 border-t border-gray-200 py-3">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider mr-2 shrink-0">
                <Filter className="w-4 h-4 mr-1" />
                Class:
              </div>
              {['Sedan', 'SUV', 'Van'].map(c => (
                <FilterChip key={c} label={c} selected={selectedClasses.includes(c)} onClick={() => toggleFilter('class', c)} />
              ))}
              
              <div className="w-px h-6 bg-gray-300 mx-2 shrink-0"></div>
              
              <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider mr-2 shrink-0">
                Level:
              </div>
              {['Basic', 'Economy', 'Business', 'Premium'].map(l => (
                <FilterChip key={l} label={l} selected={selectedLevels.includes(l)} onClick={() => toggleFilter('level', l)} />
              ))}
            </div>
          </div>
        </div>

        {/* Sort Bar */}
        <div className="bg-white border-t border-gray-200 py-3 relative">
          <div className="max-w-4xl mx-auto px-4 md:px-6 flex justify-between items-center text-sm font-bold">
            <span className="text-gray-500 uppercase tracking-wider text-xs">
              {filteredAndSortedVehicles.length} Vehicles Found
            </span>
            <div className="relative">
              <button 
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center text-gray-900 uppercase tracking-wider"
              >
                Sort: {sortOption === 'Featured' ? 'Featured' : sortOption === 'PriceLowHigh' ? 'Price: Low to High' : 'Price: High to Low'}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 z-50">
                  <button onClick={() => {setSortOption('Featured'); setShowSortDropdown(false);}} className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-50 ${sortOption === 'Featured' ? 'text-brand-maroon' : 'text-gray-700'}`}>Featured</button>
                  <button onClick={() => {setSortOption('PriceLowHigh'); setShowSortDropdown(false);}} className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-50 ${sortOption === 'PriceLowHigh' ? 'text-brand-maroon' : 'text-gray-700'}`}>Price: Low to High</button>
                  <button onClick={() => {setSortOption('PriceHighLow'); setShowSortDropdown(false);}} className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-50 ${sortOption === 'PriceHighLow' ? 'text-brand-maroon' : 'text-gray-700'}`}>Price: High to Low</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 animate-pulse">
                <div className="w-24 h-24 bg-gray-200 shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-200 w-1/4"></div>
                  <div className="h-6 bg-gray-200 w-1/2"></div>
                  <div className="h-4 bg-gray-200 w-1/3"></div>
                </div>
                <div className="sm:w-32 flex flex-col justify-between items-end space-y-4">
                   <div className="h-8 bg-gray-200 w-full"></div>
                   <div className="h-10 bg-gray-200 w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredAndSortedVehicles.length > 0 ? (
          <div className="space-y-6">
            {filteredAndSortedVehicles.map(vehicle => (
              <div key={vehicle.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row overflow-hidden relative">
                
                {/* Image Placeholder */}
                <div className="bg-gray-100 w-full md:w-48 h-40 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 shrink-0 relative">
                  {vehicle.featured && (
                    <div className="absolute top-2 left-2 bg-brand-maroon text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 z-10">
                      Recommended
                    </div>
                  )}
                  <CarFront className="w-16 h-16 text-gray-300" />
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        {vehicle.serviceLevel} — {vehicle.classType}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-gray-900 mb-2 truncate">
                      {vehicle.makeModel}
                    </h2>
                    
                    <div className="flex items-center text-sm text-gray-600 space-x-4 mb-4">
                      <span className="flex items-center font-bold">
                        {vehicle.driverName} • <Star className="w-4 h-4 text-brand-yellow ml-1 mr-0.5 fill-current" /> {vehicle.rating}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" /> {vehicle.eta}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action/Price */}
                <div className="p-6 md:w-56 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-100 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center">
                  <div className="text-left md:text-right mb-0 md:mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Est. Fare</p>
                    <p className="text-2xl font-black text-gray-900 mt-1">GH₵ {vehicle.fareEstimate.toFixed(2)}</p>
                  </div>
                  <Link 
                    to={`/vehicle-detail/${vehicle.id}`} 
                    className="bg-brand-maroon text-white font-bold py-3 px-6 text-sm uppercase tracking-wider hover:bg-brand-maroon-hover transition-colors w-auto md:w-full text-center"
                  >
                    Select
                  </Link>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CarFront className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Vehicles Found</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              We couldn't find any vehicles matching your current filter selection. Try adjusting the class or service level.
            </p>
            <button 
              onClick={() => {setSelectedClasses([]); setSelectedLevels([]);}}
              className="inline-flex items-center bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        )}

      </section>
    </main>
  );
}
