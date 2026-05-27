import { Users, AlertTriangle, UserCheck, HeartHandshake } from 'lucide-react';

export default function CommunityGuidelines() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Users className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Community Guidelines</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Fostering a safe, respectful environment for both our drivers and our passengers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        
        {/* Customer Guidelines */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-l-4 border-brand-maroon mb-8">
          <div className="flex items-center mb-4">
            <UserCheck className="w-8 h-8 text-brand-maroon mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Customer Guidelines</h2>
          </div>
          <p className="text-gray-600 font-medium mb-4 leading-relaxed">
            We kindly ask all passengers to interact with our drivers and support staff with professionalism and respect.
          </p>
          <ul className="space-y-2 text-gray-600 font-medium list-disc list-inside">
            <li>Refrain from requesting drivers to violate traffic laws (e.g., speeding).</li>
            <li>Maintain a clean environment; do not leave trash in vehicles.</li>
            <li>Respect the driver's focus while navigating heavy traffic or poor weather.</li>
            <li>Abide by the vehicle's seating capacity limitations.</li>
          </ul>
        </div>

        {/* Driver Guidelines */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-l-4 border-brand-yellow mb-8">
          <div className="flex items-center mb-4">
            <HeartHandshake className="w-8 h-8 text-brand-yellow mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Driver Guidelines</h2>
          </div>
          <p className="text-gray-600 font-medium mb-4 leading-relaxed">
            XTASS drivers are the face of our prestige service. They must ensure the passenger's experience is seamless and secure.
          </p>
          <ul className="space-y-2 text-gray-600 font-medium list-disc list-inside">
            <li>Always communicate professionally and clearly.</li>
            <li>Offer assistance with doors and luggage proactively.</li>
            <li>Never initiate overly personal or controversial discussions.</li>
            <li>Prioritize passenger safety over schedule urgency.</li>
          </ul>
        </div>

        {/* Zero Tolerance Policy */}
        <div className="bg-red-50 p-8 md:p-10 shadow-xl border border-red-200">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-700 mr-4" />
            <h2 className="text-2xl font-black text-red-900 uppercase tracking-tight">Zero Tolerance Policy</h2>
          </div>
          <p className="text-red-800 font-medium leading-relaxed">
            XTASS strictly enforces a zero-tolerance policy against any form of physical abuse, verbal harassment, discrimination, or unsafe behaviour on our platform. 
            Any reported violation from either a passenger or a driver will result in immediate investigation, potential permanent disqualification from using XTASS services, and cooperation with local law enforcement if legally warranted.
          </p>
        </div>

      </section>
    </main>
  );
}
