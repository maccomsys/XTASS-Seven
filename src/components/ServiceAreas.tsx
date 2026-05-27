import { MapPin, Plane, Globe, Map as MapIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceAreas() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">XTASS Service Areas</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Seamless premium mobility across Ghana's major cities and aviation hubs.
          </p>
        </div>
      </section>

      {/* Airports Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex items-center mb-8">
          <Plane className="w-8 h-8 text-brand-maroon mr-4" />
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Airport Operations</h2>
        </div>
        <p className="text-lg text-gray-600 mb-10 font-medium">
          We provide dedicated on-site services, instant dispatch, and priority pre-booking at all six operational passenger airports in Ghana.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { code: 'ACC', name: 'Kotoka International Airport', city: 'Accra', region: 'Greater Accra Region' },
            { code: 'KMS', name: 'Kumasi International Airport', city: 'Kumasi', region: 'Ashanti Region' },
            { code: 'TML', name: 'Tamale International Airport', city: 'Tamale', region: 'Northern Region' },
            { code: 'TKD', name: 'Takoradi Airport', city: 'Sekondi-Takoradi', region: 'Western Region' },
            { code: 'WZA', name: 'Wa Airport', city: 'Wa', region: 'Upper West Region' },
            { code: 'NYI', name: 'Sunyani Airport', city: 'Sunyani', region: 'Bono Region' }
          ].map(airport => (
            <div key={airport.code} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start">
              <div className="w-16 h-16 bg-gray-100 rounded flex flex-col items-center justify-center text-brand-maroon-dark font-black text-xl shrink-0">
                {airport.code}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{airport.name}</h3>
                <p className="text-sm font-bold text-gray-600">{airport.city}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{airport.region}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 w-full h-[400px] rounded flex flex-col items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden group">
          <MapIcon className="w-16 h-16 text-gray-400 mb-4 opacity-50" />
          <p className="text-gray-500 font-bold uppercase tracking-widest px-4 py-2 bg-white/80 rounded">Interactive Map View Placeholder</p>
          <div className="absolute inset-0 bg-brand-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </section>

      {/* City Coverage Section */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-8">
            <MapPin className="w-8 h-8 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Major City Coverage</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 font-medium leading-relaxed">
                Beyond the airports, XTASS operates continuous on-demand and scheduled services across Ghana's primary economic and cultural centers. Our fleet is stationed strategically to ensure rapid response times.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {['Greater Accra Metro', 'Tema Metropolis', 'Greater Kumasi', 'Cape Coast', 'Tamale City Center', 'Sekondi-Takoradi', 'Koforidua', 'Ho'].map(city => (
                  <li key={city} className="flex items-center text-gray-800 font-bold">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                    {city}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-red-50 border-l-4 border-brand-maroon">
                <p className="text-sm text-brand-maroon-dark font-medium">
                  <strong>Note:</strong> We are continuously expanding our operational zones. If your destination is not listed, you can still book a <Link to="/one-way-rental" className="underline font-bold">One-Way Rental</Link> from our major hubs.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-full min-h-[300px] rounded border border-gray-200 shadow-inner p-8 flex items-center justify-center">
               <img src="https://i.ibb.co/Q7qygPGB/Resized-4.jpg" alt="Accra Cityscape" className="w-full h-full object-cover rounded shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Africa Expansion Section */}
      <section className="bg-brand-maroon-dark text-white py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Globe className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-6 tracking-tight uppercase">XTASS Continental Expansion</h2>
          <p className="text-xl opacity-90 font-medium leading-relaxed mb-10">
            Our vision extends beyond Ghana. We are actively laying the groundwork to bring the XTASS standard of premium, secure mobility to key diplomatic and commercial hubs across the African continent.
          </p>
          <button className="px-8 py-3 border-2 border-brand-yellow text-brand-yellow font-bold uppercase tracking-widest text-sm hover:bg-brand-yellow hover:text-brand-maroon-dark transition-colors inline-flex items-center">
            Read Our Vision Statement <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

    </main>
  );
}
