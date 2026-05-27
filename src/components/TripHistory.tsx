import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, CarFront, Filter } from 'lucide-react';

interface TripHistoryEntry {
  id: string;
  dateStr: string; // ISO parsing for sorting, but we'll manually set month-year for display
  monthYear: string;
  time: string;
  pickup: string;
  dropoff: string;
  type: string;
  driver: string;
  status: 'Completed' | 'Cancelled';
  fare: string;
}

const MOCK_HISTORY: TripHistoryEntry[] = [
  {
    id: 'XTA-50001',
    dateStr: '2026-05-20',
    monthYear: 'May 2026',
    time: '14:30 PM',
    pickup: 'Kotoka International Airport (ACC)',
    dropoff: 'Labadi Beach Hotel',
    type: 'Instant Ride',
    driver: 'Kwame',
    status: 'Completed',
    fare: 'GH₵ 120.00'
  },
  {
    id: 'XTA-49902',
    dateStr: '2026-05-02',
    monthYear: 'May 2026',
    time: '09:00 AM',
    pickup: 'Osu Oxford Street',
    dropoff: 'West Hills Mall',
    type: 'Scheduled Pickup',
    driver: 'Emmanuel',
    status: 'Completed',
    fare: 'GH₵ 85.50'
  },
  {
    id: 'XTA-48810',
    dateStr: '2026-04-15',
    monthYear: 'April 2026',
    time: '18:15 PM',
    pickup: 'Kempinski Hotel',
    dropoff: 'Kotoka International Airport (ACC)',
    type: 'Airport Transfer',
    driver: 'Samuel',
    status: 'Cancelled',
    fare: 'GH₵ 0.00'
  },
  {
    id: 'XTA-47005',
    dateStr: '2026-04-05',
    monthYear: 'April 2026',
    time: '08:00 AM',
    pickup: 'XTASS HQ, East Legon',
    dropoff: 'Kumasi City Mall',
    type: 'One-Way Rental',
    driver: 'Unassigned',
    status: 'Completed',
    fare: 'GH₵ 850.00'
  }
];

export default function TripHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [orderDesc, setOrderDesc] = useState(true);

  // Grouped and sorted trips
  const groupedTrips = useMemo(() => {
    let filtered = MOCK_HISTORY.filter(t => {
      const matchesSearch = 
        t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.pickup.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.dropoff.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.driver.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Date filter logic simplified for mock
      let matchesDate = true;
      if (dateFilter === 'this_month') matchesDate = t.dateStr.startsWith('2026-05');
      if (dateFilter === 'last_month') matchesDate = t.dateStr.startsWith('2026-04');
      
      return matchesSearch && matchesDate;
    });

    filtered.sort((a, b) => {
      if (orderDesc) {
        return b.dateStr.localeCompare(a.dateStr);
      } else {
        return a.dateStr.localeCompare(b.dateStr);
      }
    });

    const groups: { monthYear: string; trips: TripHistoryEntry[] }[] = [];
    filtered.forEach(trip => {
      let group = groups.find(g => g.monthYear === trip.monthYear);
      if (!group) {
        group = { monthYear: trip.monthYear, trips: [] };
        groups.push(group);
      }
      group.trips.push(trip);
    });

    return groups;
  }, [searchQuery, dateFilter, orderDesc]);

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-4">
            Trip History
          </h1>
          <p className="text-brand-yellow/90 font-medium max-w-2xl">
            A complete timeline of your past rides and rentals with XTASS.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {/* Filters and Search */}
        <div className="bg-white shadow-sm border border-gray-200 p-4 md:p-6 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by Booking ID, location, ride type, or driver..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:w-auto">
            <div className="relative min-w-[160px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="block w-full pl-9 pr-8 py-3 border border-gray-300 rounded-none bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm appearance-none font-medium"
              >
                <option value="all">All Time</option>
                <option value="this_month">This Month</option>
                <option value="last_month">Last Month</option>
              </select>
            </div>
            <button
              onClick={() => setOrderDesc(!orderDesc)}
              className="px-4 py-3 border border-gray-300 bg-white hover:bg-gray-50 font-medium text-sm transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              {orderDesc ? 'Newest First ↑' : 'Oldest First ↓'}
            </button>
          </div>
        </div>

        {/* Timeline */}
        {groupedTrips.length > 0 ? (
          <div className="space-y-12">
            {groupedTrips.map((group, gIdx) => (
              <div key={gIdx} className="relative">
                {/* Month-Year Divider */}
                <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm py-4 mb-6">
                  <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider pl-4 md:pl-10">
                    {group.monthYear}
                  </h2>
                </div>

                {/* Timeline Items Container */}
                <div className="relative pl-4 md:pl-10 space-y-8">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[15px] md:left-[39px] top-4 bottom-0 w-[2px] bg-gray-200 z-0"></div>

                  {group.trips.map((trip, tIdx) => (
                    <div key={tIdx} className="relative z-10 pl-6 md:pl-8">
                      {/* Timeline Dot */}
                      <div className={`absolute left-[-5px] md:left-[-5px] top-6 w-3 h-3 rounded-full ring-4 ring-gray-50 bg-white border-2 ${trip.status === 'Completed' ? 'border-gray-500' : 'border-red-500'}`}></div>

                      {/* Card Content */}
                      <Link to={`/booking-detail/${trip.id}`} className="block group">
                        <div className="bg-white border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow p-6 flex flex-col md:flex-row gap-6">
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-black text-gray-900 uppercase tracking-wider block mb-1">
                                {trip.id}
                              </span>
                              <span className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider border ${
                                trip.status === 'Completed' ? 'bg-gray-100 text-gray-800 border-gray-200' : 'bg-red-100 text-red-800 border-red-200'
                              }`}>
                                {trip.status}
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <div className="flex items-start">
                                  <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 shrink-0" />
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{trip.pickup}</p>
                                    <p className="text-gray-400 text-xs my-0.5">↓</p>
                                    <p className="text-sm font-medium text-gray-900">{trip.dropoff}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                                  <p className="text-sm text-gray-600">{trip.dateStr} • {trip.time}</p>
                                </div>
                                <div className="flex items-center">
                                  <CarFront className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                                  <p className="text-sm text-gray-600">{trip.type}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="md:w-40 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-4">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase">Driver</p>
                                <p className="text-sm font-medium text-gray-900">{trip.driver}</p>
                            </div>
                            <div className="text-right md:text-left">
                                <p className="text-xs text-gray-500 font-bold uppercase">Fare</p>
                                <p className="text-lg font-black text-gray-900">{trip.fare}</p>
                            </div>
                          </div>

                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 p-12 text-center animate-in fade-in zoom-in duration-500 shadow-sm mt-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trip History is Empty</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              {searchQuery ? 'No past trips matched your search. Try adjusting the filters.' : 'Your trip history is empty. Time to plan your first trip!'}
            </p>
            {!searchQuery && (
              <Link to="/start-reservation" className="inline-block bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider">
                Book a Ride
              </Link>
            )}
          </div>
        )}

      </section>
    </main>
  );
}
