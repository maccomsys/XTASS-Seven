import { ShieldAlert, Users, Car, XOctagon } from 'lucide-react';

export default function InsuranceCoverage() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ShieldAlert className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Insurance Coverage</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Understanding the protection provided for our passengers and vehicles.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Passenger Insurance */}
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-brand-maroon">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 mr-4 shrink-0">
                <Users className="w-6 h-6 text-brand-maroon" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Passenger Coverage</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Coverage Scope</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">Passengers are fully covered under commercial liability provisions while seated in an XTASS vehicle during an active, booked trip. Coverage extends from the moment you enter the vehicle until you safely exit at your destination.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Claim Process</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">In the rare event of an incident, passengers must report it immediately to the XTASS Emergency Line. Our legal and support team will provide a direct liaison to initiate the claim process with our insurers.</p>
              </div>
            </div>
          </div>

          {/* Vehicle Insurance */}
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 mr-4 shrink-0">
                <Car className="w-6 h-6 text-gray-800" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Fleet Coverage</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Third-Party Liability</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">Every vehicle operating on the XTASS platform carries, at an absolute minimum, mandatory third-party liability insurance covering third-party bodily injury and property damage.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">All Premium, Business Class, and Luxury SUV models in our corporate fleet are protected by comprehensive insurance, covering vehicle damage resulting from accidents, fire, theft, or vandalism.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Exclusions */}
        <div className="bg-red-50 p-8 md:p-12 shadow-xl border border-red-100">
          <div className="flex items-center justify-center lg:justify-start mb-8 text-center lg:text-left">
            <XOctagon className="w-10 h-10 text-red-600 mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Strict Insurance Exclusions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-center lg:text-left">
            <div className="bg-white p-6 border border-red-100 shadow-sm">
              <h3 className="font-bold text-red-800 mb-2">Personal Belongings</h3>
              <p className="text-red-900/80 font-medium text-sm leading-relaxed">Items left behind, lost, or damaged inside the vehicle are NOT covered under standard XTASS policies unless a specific Personal Effects insurance add-on was purchased prior to the trip.</p>
            </div>
            <div className="bg-white p-6 border border-red-100 shadow-sm">
              <h3 className="font-bold text-red-800 mb-2">Pre-Existing Conditions</h3>
              <p className="text-red-900/80 font-medium text-sm leading-relaxed">Any medical conditions existing prior to travel, or vehicular damage documented before a Self-Drive rental checkout, are strictly excluded from all insurance claims.</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
