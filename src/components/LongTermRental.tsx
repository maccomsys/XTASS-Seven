import { Link, useNavigate } from 'react-router-dom';
import { 
  CalendarDays, 
  Infinity as InfinityIcon, 
  Map, 
  MapPin, 
  User, 
  Briefcase 
} from 'lucide-react';

export default function LongTermRental() {
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking/step-1');
  };

  const heroStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden" style={heroStyle}>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-brand-yellow text-brand-maroon-dark font-bold text-sm uppercase tracking-wider animate-pulse shadow-sm">
                Inventory is limited. Reserve now to lock in your rate.
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight shadow-sm" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Take Advantage of Weekly &amp; Monthly Rates
              </h1>
              <p className="text-lg md:text-xl max-w-lg opacity-90 font-medium leading-relaxed">
                Experience premium mobility with Ghana's most reliable fleet. Our long-term rentals offer unparalleled flexibility for corporate missions, seasonal visits, and personal relocations.
              </p>
            </div>
            
            {/* Reservation Form Card */}
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-none shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-brand-maroon mb-6">Start a Long-Term Reservation</h3>
              <form className="space-y-4" onSubmit={handleBookingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 block">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                      <input 
                        type="text" 
                        defaultValue="Accra Main Branch"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none focus:border-brand-maroon outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 block">Rental Type</label>
                    <select defaultValue="Monthly (30+ Days)" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:border-brand-maroon outline-none bg-white text-sm">
                      <option value="Monthly (30+ Days)">Monthly (30+ Days)</option>
                      <option value="Weekly (7-28 Days)">Weekly (7-28 Days)</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 block">Start Date</label>
                    <input 
                      type="date"
                      defaultValue="2025-07-01"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:border-brand-maroon outline-none text-sm input-date"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 block">Duration</label>
                    <select defaultValue="1 Month" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:border-brand-maroon outline-none bg-white text-sm">
                      <option value="1 Week">1 Week</option>
                      <option value="2 Weeks">2 Weeks</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3+ Months">3+ Months</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 pb-2">
                  <label className="text-sm font-bold text-gray-700 block">Vehicle Preference</label>
                  <select defaultValue="Executive Sedan" className="w-full px-4 py-3 border border-gray-300 rounded-none focus:border-brand-maroon outline-none bg-white text-sm">
                    <option value="Executive Sedan">Executive Sedan</option>
                    <option value="Luxury SUV">Luxury SUV</option>
                    <option value="Corporate Minivan">Corporate Minivan</option>
                    <option value="Compact Economy">Compact Economy</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-brand-maroon text-white font-bold text-lg hover:bg-brand-maroon-hover active:scale-[0.98] transition-all shadow-lg"
                >
                  Check Long-Term Availability
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center mb-6">
                <CalendarDays className="text-brand-maroon w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-maroon mb-3">28-Day Rates</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Long-term discounted rates apply automatically for all rentals lasting 28 days or longer.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-6">
                <InfinityIcon className="text-brand-yellow w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-maroon mb-3">Unlimited Mileage</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Drive without boundaries. We offer no mileage limits on most of our long-term vehicle classes.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center mb-6">
                <Map className="text-brand-maroon w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-maroon mb-3">Wide Coverage</h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                Access XTASS service hubs and support infrastructure conveniently located across all regions in Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Rental Categories */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-brand-maroon mb-4">Popular Rental Categories</h2>
              <p className="text-lg text-gray-500 font-medium">Explore our meticulously maintained fleet suitable for long-term use.</p>
            </div>
            <button className="px-8 py-3 border-2 border-brand-maroon text-brand-maroon font-bold hover:bg-brand-maroon hover:text-white transition-all whitespace-nowrap">
              View All Rental Vehicles
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sedan */}
            <div className="group cursor-pointer">
              <div className="aspect-[1.5] overflow-hidden bg-gray-100 mb-4 relative shadow-md">
                <img 
                  src="https://i.ibb.co/NnFG4ZN6/Resized-5.jpg" 
                  alt="Modern White Sedan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-brand-yellow text-brand-maroon-dark font-bold text-xs shadow-sm uppercase tracking-wider">
                    Premium Class
                  </span>
                </div>
              </div>
              <h5 className="text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">Executive Sedan</h5>
              <div className="flex items-center space-x-4 mt-2 text-gray-500 font-medium text-sm">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> 5 Seats</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> 2 Large</span>
              </div>
            </div>
            
            {/* SUV */}
            <div className="group cursor-pointer">
              <div className="aspect-[1.5] overflow-hidden bg-gray-100 mb-4 relative shadow-md">
                <img 
                  src="https://i.ibb.co/8g9MphYk/Airport-Pickup-7.jpg" 
                  alt="Modern Black SUV" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-brand-yellow text-brand-maroon-dark font-bold text-xs shadow-sm uppercase tracking-wider">
                    Luxury SUV
                  </span>
                </div>
              </div>
              <h5 className="text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">Luxury All-Terrain SUV</h5>
              <div className="flex items-center space-x-4 mt-2 text-gray-500 font-medium text-sm">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> 7 Seats</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> 4 Large</span>
              </div>
            </div>
            
            {/* Van */}
            <div className="group cursor-pointer">
              <div className="aspect-[1.5] overflow-hidden bg-gray-100 mb-4 relative shadow-md">
                <img 
                  src="https://i.ibb.co/ymzQTwCS/Resized-2.jpg" 
                  alt="Silver Passenger Van" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-brand-yellow text-brand-maroon-dark font-bold text-xs shadow-sm uppercase tracking-wider">
                    Group Travel
                  </span>
                </div>
              </div>
              <h5 className="text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">Corporate Minivan</h5>
              <div className="flex items-center space-x-4 mt-2 text-gray-500 font-medium text-sm">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> 9 Seats</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> 6 Large</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Rent Long-Term */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-brand-maroon text-center mb-20">Why Choose Long-Term with XTASS?</h2>
          <div className="space-y-24">
            
            {/* Reason 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 shadow-2xl overflow-hidden border border-gray-200">
                <img 
                  src="https://i.ibb.co/wh9yvPZb/Airport-Pickup-3.jpg" 
                  alt="Preserve Your Own Vehicle" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <span className="text-brand-yellow-dark font-bold text-sm uppercase tracking-widest block">Efficiency &amp; Care</span>
                <h3 className="text-3xl font-bold text-brand-maroon">Preserve Your Own Vehicle</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Ideal for extended trips or seasonal relocations within Ghana. Avoid excessive wear and tear on your personal luxury car by utilizing our premium fleet for long-distance regional commutes.
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <span className="text-brand-yellow-dark font-bold text-sm uppercase tracking-widest block">Business Solutions</span>
                <h3 className="text-3xl font-bold text-brand-maroon">For Longer Work Projects</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Provide your corporate team with reliable, flexible vehicle hire for assignments spanning several months. We offer consolidated billing and dedicated account management for corporate fleets.
                </p>
              </div>
              <div className="shadow-2xl overflow-hidden border border-gray-200">
                <img 
                  src="https://i.ibb.co/sv5GZPW4/Airport-Pickup-4.jpg" 
                  alt="For Longer Work Projects" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Reason 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 shadow-2xl overflow-hidden border border-gray-200">
                <img 
                  src="https://i.ibb.co/ymzQTwCS/Resized-2.jpg" 
                  alt="Vehicle Service Alternative" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <span className="text-brand-yellow-dark font-bold text-sm uppercase tracking-widest block">Reliability Always</span>
                <h3 className="text-3xl font-bold text-brand-maroon">Vehicle Service Alternative</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Don't let mechanical repairs disrupt your life. We provide high-end, reliable alternatives while your personal vehicle is in the service center for extended maintenance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-brand-maroon text-center mb-16">Compare Rental Types</h2>
          <div className="overflow-x-auto border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-maroon text-white border-b-4 border-brand-yellow">
                  <th className="p-6 font-bold text-lg border-r border-white/20 w-1/4">Feature</th>
                  <th className="p-6 font-bold text-lg border-r border-white/20 w-1/3">Short-Term Rental</th>
                  <th className="p-6 font-bold text-lg bg-brand-maroon-dark w-[41%]">Long-Term Rental</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-sm tracking-widest uppercase text-gray-600 border-r border-gray-200">Flexibility</td>
                  <td className="p-6 text-gray-800 font-medium border-r border-gray-200">Fixed Daily Booking</td>
                  <td className="p-6 font-bold text-brand-maroon bg-red-50/30">High - Extendable Anytime</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-sm tracking-widest uppercase text-gray-600 border-r border-gray-200">Mileage</td>
                  <td className="p-6 text-gray-800 font-medium border-r border-gray-200">Capped Daily Limits</td>
                  <td className="p-6 font-bold text-brand-maroon bg-red-50/30">Unlimited on Most Classes</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-sm tracking-widest uppercase text-gray-600 border-r border-gray-200">Rates</td>
                  <td className="p-6 text-gray-800 font-medium border-r border-gray-200">Standard Market Rates</td>
                  <td className="p-6 font-bold text-brand-maroon bg-red-50/30">Exclusive Weekly/Monthly Discounts</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-sm tracking-widest uppercase text-gray-600 border-r border-gray-200">Minimum Period</td>
                  <td className="p-6 text-gray-800 font-medium border-r border-gray-200">1 Day</td>
                  <td className="p-6 font-bold text-brand-maroon bg-red-50/30">28 Consecutive Days</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-sm tracking-widest uppercase text-gray-600 border-r border-gray-200">Support</td>
                  <td className="p-6 text-gray-800 font-medium border-r border-gray-200">General Assistance</td>
                  <td className="p-6 font-bold text-brand-maroon bg-red-50/30">Dedicated Priority Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  );
}
