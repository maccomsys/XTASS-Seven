import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, Users, ChevronRight, Download, CarFront } from 'lucide-react';

interface Booking {
  id: string;
  type: string;
  status: 'Upcoming' | 'Active' | 'Completed' | 'Cancelled';
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
  serviceLevel: string;
}

const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'XTA-12345',
    type: 'Scheduled Pickup',
    status: 'Upcoming',
    pickup: 'Kotoka International Airport (ACC)',
    dropoff: 'Kempinski Hotel Gold Coast City',
    date: '15/10/2026',
    time: '10:00 AM',
    passengers: 2,
    serviceLevel: 'Business Class'
  },
  {
    id: 'XTA-12346',
    type: 'Instant Ride',
    status: 'Active',
    pickup: 'Accra Mall',
    dropoff: 'Osu Oxford Street',
    date: '26/05/2026',
    time: '02:30 PM',
    passengers: 1,
    serviceLevel: 'Standard'
  },
  {
    id: 'XTA-09876',
    type: 'Car Rental',
    status: 'Completed',
    pickup: 'XTASS HQ, East Legon',
    dropoff: 'XTASS HQ, East Legon',
    date: '10/05/2026',
    time: '09:00 AM',
    passengers: 4,
    serviceLevel: 'Premium SUV'
  },
  {
    id: 'XTA-55555',
    type: 'Scheduled Pickup',
    status: 'Cancelled',
    pickup: 'Labadi Beach Hotel',
    dropoff: 'Kotoka International Airport (ACC)',
    date: '01/05/2026',
    time: '06:00 AM',
    passengers: 2,
    serviceLevel: 'First Class'
  }
];

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Active' | 'Completed' | 'Cancelled'>('Upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Upcoming', 'Active', 'Completed', 'Cancelled'] as const;

  const filteredBookings = useMemo(() => {
    return MOCK_BOOKINGS.filter(b => {
      const matchesTab = b.status === activeTab;
      const matchesSearch = 
        b.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
        b.pickup.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.dropoff.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const emptyStateMessages = {
    Upcoming: 'No upcoming bookings. Ready to plan your next trip?',
    Active: 'You have no active rides or rentals at the moment.',
    Completed: 'You haven\'t completed any trips with us yet.',
    Cancelled: 'No cancelled bookings to show.'
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-brand-maroon pt-16 pb-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
            My Bookings
          </h1>
          <p className="text-brand-yellow/90 text-lg font-medium max-w-2xl">
            Manage your rides, track history, and modify upcoming reservations.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 -mt-6 relative z-20">
        <div className="bg-white shadow-xl border border-gray-100 rounded-none overflow-hidden">
          
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50 sticky top-0 z-10 w-full no-scrollbar">
            {tabs.map((tab) => {
              const count = MOCK_BOOKINGS.filter(b => b.status === tab).length;
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center whitespace-nowrap px-6 py-4 font-bold text-sm transition-colors border-b-2 ${
                    isActive 
                      ? 'border-brand-maroon text-brand-maroon bg-white' 
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-brand-maroon text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="relative max-w-xl">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <Search className="h-5 w-5 text-gray-400" />
               </div>
               <input
                 type="text"
                 className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                 placeholder="Search by Booking ID, location, or ride type"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
          </div>

          {/* Booking List */}
          <div className="p-6 bg-gray-50/50 min-h-[400px]">
            {filteredBookings.length > 0 ? (
              <div className="space-y-6">
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6 flex flex-col md:flex-row gap-6">
                      
                      {/* Left: Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">{booking.id}</h3>
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1">
                              {booking.type}
                            </span>
                          </div>
                          <span className={`px-2.5 py-1 pt-1.5 text-xs font-bold uppercase tracking-wider border flex items-center ${getStatusColor(booking.status)}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-75"></span>
                            {booking.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs text-gray-500 font-bold uppercase mb-0.5">Route</p>
                              <p className="text-sm font-medium text-gray-900">{booking.pickup}</p>
                              <p className="text-gray-400 text-xs my-0.5">↓</p>
                              <p className="text-sm font-medium text-gray-900">{booking.dropoff}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Calendar className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{booking.date} at {booking.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{booking.passengers} Passenger{booking.passengers > 1 ? 's' : ''}</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <CarFront className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{booking.serviceLevel}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="md:w-48 lg:w-56 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 space-y-3">
                        {booking.status === 'Upcoming' && (
                          <>
                            <Link to={`/booking-detail/${booking.id}`} className="w-full text-center bg-brand-maroon font-bold text-white py-2.5 px-4 text-sm hover:bg-brand-maroon-hover transition-colors inline-block">
                              View Booking
                            </Link>
                            <Link to={`/modify-booking/${booking.id}`} className="w-full text-center border-2 border-gray-200 font-bold text-gray-900 py-2 px-4 text-sm hover:border-brand-maroon transition-colors inline-block">
                              Modify Booking
                            </Link>
                            <Link to={`/cancel-booking/${booking.id}`} className="w-full text-center font-bold text-red-600 text-sm hover:underline mt-2 inline-block">
                              Cancel Booking
                            </Link>
                          </>
                        )}
                        {booking.status === 'Active' && (
                          <Link to={`/booking-detail/${booking.id}`} className="w-full text-center bg-brand-maroon font-bold text-white py-2.5 px-4 text-sm hover:bg-brand-maroon-hover transition-colors inline-flex items-center justify-center group">
                            View Booking
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                        {booking.status === 'Completed' && (
                          <>
                            <Link to={`/booking-detail/${booking.id}`} className="w-full text-center bg-brand-maroon font-bold text-white py-2.5 px-4 text-sm hover:bg-brand-maroon-hover transition-colors inline-block">
                              View Booking
                            </Link>
                            <Link to={`/trip-receipt`} className="w-full text-center border-2 border-gray-200 font-bold text-gray-900 py-2 px-4 text-sm hover:border-brand-maroon transition-colors inline-flex items-center justify-center">
                              <Download className="w-4 h-4 mr-1.5" />
                              Receipt
                            </Link>
                          </>
                        )}
                        {booking.status === 'Cancelled' && (
                          <Link to={`/booking-detail/${booking.id}`} className="w-full text-center border-2 border-gray-200 font-bold text-gray-900 py-2.5 px-4 text-sm hover:border-gray-300 bg-gray-50 transition-colors inline-block">
                            View Booking
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                  <CarFront className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Bookings Found</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  {searchQuery ? 'No results matched your search criteria. Try a different term or clear the search.' : emptyStateMessages[activeTab]}
                </p>
                {!searchQuery && (
                   <Link to="/start-reservation" className="inline-block bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider">
                     Book a Ride
                   </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
