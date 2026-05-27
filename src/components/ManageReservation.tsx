import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Clock, Search, AlertCircle, Phone, Wrench, FileText, XCircle, Edit3 } from 'lucide-react';

export default function ManageReservation() {
  const [selectedType, setSelectedType] = useState<'active' | 'upcoming' | null>(null);
  const [searchState, setSearchState] = useState<'idle' | 'found' | 'not-found'>('idle');

  const [bookingId, setBookingId] = useState('');
  const [phoneOrName, setPhoneOrName] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingId || !phoneOrName) return;
    
    // Mock lookup logic: if booking ID contains '000', not found. Otherwise, found.
    if (bookingId.includes('000')) {
      setSearchState('not-found');
    } else {
      setSearchState('found');
    }
  };

  const resetSearch = () => {
    setSearchState('idle');
    setBookingId('');
    setPhoneOrName('');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Header Section */}
      <section className="bg-brand-maroon pb-20 pt-16 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase max-w-2xl">
            View, Modify, or Cancel Reservation
          </h1>
          <Link to="/start-reservation" className="text-brand-yellow hover:text-white transition-colors font-bold mt-4 md:mt-0 underline underline-offset-4 decoration-2">
            or Reserve a Vehicle
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        
        {/* Type Selector (Only show if idle) */}
        {searchState === 'idle' && (
          <div className="bg-white rounded-none shadow-xl border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Which of these describes your situation?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Active Rental */}
              <button 
                onClick={() => setSelectedType('active')}
                className={`flex flex-col items-center text-center p-8 border-2 transition-all ${
                  selectedType === 'active' 
                    ? 'border-brand-maroon bg-red-50/30 ring-1 ring-brand-maroon' 
                    : 'border-gray-200 hover:border-brand-maroon/50 bg-white'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${selectedType === 'active' ? 'bg-brand-maroon text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <Car className="w-8 h-8" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${selectedType === 'active' ? 'text-brand-maroon' : 'text-gray-900'}`}>Active Rental</h3>
                <p className="text-sm font-medium text-gray-500">I am currently using an XTASS vehicle.</p>
              </button>

              {/* Card 2: Upcoming Reservation */}
              <button 
                onClick={() => setSelectedType('upcoming')}
                className={`flex flex-col items-center text-center p-8 border-2 transition-all ${
                  selectedType === 'upcoming' 
                    ? 'border-brand-maroon bg-red-50/30 ring-1 ring-brand-maroon' 
                    : 'border-gray-200 hover:border-brand-maroon/50 bg-white'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${selectedType === 'upcoming' ? 'bg-brand-maroon text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${selectedType === 'upcoming' ? 'text-brand-maroon' : 'text-gray-900'}`}>Upcoming Reservation</h3>
                <p className="text-sm font-medium text-gray-500">I have an upcoming reservation.</p>
              </button>
            </div>

            {/* Forms based on selection */}
            {selectedType && (
              <div className="mt-12 pt-10 border-t border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {selectedType === 'active' ? 'Locate your active rental' : 'Find your reservation'}
                </h3>
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Booking ID (XTA-XXXXX)</label>
                      <input 
                        type="text" 
                        required
                        value={bookingId}
                        onChange={(e) => setBookingId(e.target.value)}
                        placeholder="e.g. XTA-12345" 
                        className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" 
                      />
                    </div>
                    {selectedType === 'active' ? (
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={phoneOrName}
                          onChange={(e) => setPhoneOrName(e.target.value)}
                          placeholder="Used during booking" 
                          className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" 
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Last Name or Phone</label>
                        <input 
                          type="text" 
                          required
                          value={phoneOrName}
                          onChange={(e) => setPhoneOrName(e.target.value)}
                          placeholder="To verify ownership" 
                          className="w-full border-gray-300 rounded-none shadow-sm focus:border-brand-maroon focus:ring-brand-maroon p-3 outline-none" 
                        />
                      </div>
                    )}
                  </div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-8 bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 font-bold py-4 transition-colors shadow-sm inline-flex items-center justify-center"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    {selectedType === 'active' ? 'Find My Rental' : 'Find Reservation'}
                  </button>
                  <p className="text-xs text-gray-500 mt-4">
                    Hint: Enter "000" in Booking ID to see the "Not Found" state test.
                  </p>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Found State */}
        {searchState === 'found' && (
          <div className="bg-white rounded-none shadow-xl border border-gray-100 p-8 md:p-12 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Reservation Found</h2>
            
            <div className="bg-gray-50 border border-gray-200 p-6 text-left max-w-2xl mx-auto my-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-brand-maroon text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Scheduled Pickup</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{bookingId.toUpperCase()}</h3>
                </div>
                <span className="text-sm font-bold text-green-600 border border-green-600 px-3 py-1 bg-green-50">CONFIRMED</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-1/2">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Pick-up</p>
                    <p className="text-sm font-medium text-gray-900">Kotoka International Airport (ACC)</p>
                    <p className="text-xs text-gray-500">Thu, 15 Oct 2026 • 10:00 AM</p>
                  </div>
                  <div className="w-1/2 pl-4 border-l border-gray-200">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Drop-off</p>
                    <p className="text-sm font-medium text-gray-900">Kempinski Hotel Gold Coast City</p>
                  </div>
                </div>
              </div>
            </div>
            
            {selectedType === 'active' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Link to={`/booking-detail/${bookingId}`} className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-brand-maroon hover:text-brand-maroon transition-colors group">
                  <FileText className="w-8 h-8 mb-3 text-gray-400 group-hover:text-brand-maroon" />
                  <span className="font-bold text-sm uppercase tracking-wider">View Full Details</span>
                </Link>
                <button className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-brand-maroon hover:text-brand-maroon transition-colors group">
                  <Wrench className="w-8 h-8 mb-3 text-gray-400 group-hover:text-brand-maroon" />
                  <span className="font-bold text-sm uppercase tracking-wider">Report Issue</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-brand-maroon hover:text-brand-maroon transition-colors group">
                  <Phone className="w-8 h-8 mb-3 text-gray-400 group-hover:text-brand-maroon" />
                  <span className="font-bold text-sm uppercase tracking-wider">Contact Support</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Link to={`/booking-detail/${bookingId}`} className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-brand-maroon hover:text-brand-maroon transition-colors group">
                  <FileText className="w-8 h-8 mb-3 text-gray-400 group-hover:text-brand-maroon" />
                  <span className="font-bold text-sm uppercase tracking-wider">View Full Details</span>
                </Link>
                <Link to={`/modify-booking/${bookingId}`} className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-brand-yellow hover:bg-brand-yellow/10 transition-colors group">
                  <Edit3 className="w-8 h-8 mb-3 text-gray-400 group-hover:text-brand-yellow-dark" />
                  <span className="font-bold text-sm uppercase tracking-wider text-gray-900">Modify Reservation</span>
                </Link>
                <Link to={`/cancel-booking/${bookingId}`} className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-red-600 hover:bg-red-50 transition-colors group">
                  <XCircle className="w-8 h-8 mb-3 text-gray-400 group-hover:text-red-500" />
                  <span className="font-bold text-sm uppercase tracking-wider text-gray-900 group-hover:text-red-600">Cancel Reservation</span>
                </Link>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <button onClick={resetSearch} className="text-gray-500 hover:text-brand-maroon font-bold text-sm underline underline-offset-4">
                Look up a different booking
              </button>
            </div>
          </div>
        )}

        {/* Not Found State */}
        {searchState === 'not-found' && (
          <div className="bg-white rounded-none shadow-xl border border-gray-100 p-8 md:p-12 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No reservation found</h2>
            <p className="text-gray-600 font-medium mb-8 max-w-md mx-auto">
              We couldn't locate a reservation for "<strong className="text-gray-900">{bookingId}</strong>". Please double-check your details and try again.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={resetSearch}
                className="px-8 py-3 bg-brand-maroon text-white font-bold hover:bg-brand-maroon-hover transition-colors"
              >
                Try Again
              </button>
              <Link to="/contact" className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-bold hover:border-gray-400 hover:bg-gray-50 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}
