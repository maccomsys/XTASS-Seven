import { ShieldCheck, Truck, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';

export default function ComplianceSafetyPolicy() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ShieldCheck className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Compliance &amp; Safety</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Our stringent regulatory commitments and operational safety protocols.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        
        {/* Regulatory Compliance */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-l-4 border-brand-maroon mb-8">
          <div className="flex items-center mb-6">
            <FileCheck className="w-8 h-8 text-brand-maroon mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Regulatory Compliance</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-600" /> DVLA Compliance</h3>
              <p className="text-gray-600 font-medium ml-7">All vehicles in the XTASS fleet maintain absolute compliance with the Driver and Vehicle Licensing Authority (DVLA) regulations regarding commercial vehicle registration and roadworthiness.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-600" /> Driver Licensing</h3>
              <p className="text-gray-600 font-medium ml-7">Every employed chauffeur holds a valid Ghanaian driving licence specifically endorsed for the class of vehicle they are assigned to operate.</p>
            </div>
          </div>
        </div>

        {/* Vehicle Standards */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-l-4 border-gray-800 mb-8">
          <div className="flex items-center mb-6">
            <Truck className="w-8 h-8 text-gray-800 mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Vehicle Standards</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roadworthiness Certificate</h3>
              <p className="text-gray-600 font-medium text-sm">A valid, up-to-date roadworthiness certificate is mandatory before any vehicle is cleared for active service on the XTASS platform.</p>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maintenance Schedule</h3>
              <p className="text-gray-600 font-medium text-sm">Our vehicles undergo strict, regular scheduled inspections by certified mechanics to ensure brakes, tyres, and engine systems exceed minimum safety thresholds.</p>
            </div>
          </div>
        </div>

        {/* Emergency Procedures */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-l-4 border-brand-yellow">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-brand-yellow mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Emergency Procedures</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Customer Protocol</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 font-medium">
                <li>Ensure immediate personal safety.</li>
                <li>Follow the driver's emergency instructions.</li>
                <li>If necessary, contact local emergency services (191/193).</li>
                <li>Call the 24/7 XTASS Emergency Line when safe.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Driver Protocol</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 font-medium">
                <li>Secure the vehicle and ensure passenger safety.</li>
                <li>Deploy warning triangles and safety equipment.</li>
                <li>Immediately dispatch an alert to the XTASS Security Center.</li>
                <li>Assist passengers while awaiting replacement transport or authorities.</li>
              </ol>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
