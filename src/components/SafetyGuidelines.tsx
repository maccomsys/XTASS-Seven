import { ShieldCheck, UserCheck, Car, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SafetyGuidelines() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">XTASS Safety Standards</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Your safety is our highest priority. Discover the rigorous standards we maintain for our fleet and personnel.
          </p>
        </div>
      </section>

      {/* Driver Vetting */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-10">
            <UserCheck className="w-10 h-10 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Driver Vetting &amp; Monitoring</h2>
          </div>
          <p className="text-lg text-gray-600 mb-10 font-medium">
            Every XTASS driver undergoes a comprehensive 5-step verification process before they ever take the wheel.
          </p>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-maroon text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded border border-gray-200 shadow-sm ml-4 md:ml-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Criminal Background Check</h3>
                <p className="text-gray-600">All drivers must pass a thorough criminal background verification through national security protocols.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-maroon text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded border border-gray-200 shadow-sm ml-4 md:ml-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Driving Record Review</h3>
                <p className="text-gray-600">Past driving history is reviewed extensively for infractions and accident records.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-maroon text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded border border-gray-200 shadow-sm ml-4 md:ml-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Identity Document Checks</h3>
                <p className="text-gray-600">A physical and digital verification of the applicant's National ID or Passport is mandated.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-maroon text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded border border-gray-200 shadow-sm ml-4 md:ml-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Interview</h3>
                <p className="text-gray-600">A face-to-face interview with the XTASS HR and Operations team evaluates professionalism and attitude.</p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-maroon text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded border border-gray-200 shadow-sm ml-4 md:ml-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">XTASS Orientation</h3>
                <p className="text-gray-600">The final step is completing intensive training in customer service excellence, safety protocols, and premium vehicle care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-10">
            <Car className="w-10 h-10 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">6-Point Vehicle Inspection</h2>
          </div>
          <p className="text-lg text-gray-600 mb-10 font-medium">
            Our fleet represents prestige and reliability. Every vehicle must pass this rigorous checklist before it is cleared for any requested service.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '01', title: 'Brakes', desc: 'Full mechanical brake inspection completed.' },
              { id: '02', title: 'Tyres', desc: 'Checked for pressure, condition, and safe tread depth.' },
              { id: '03', title: 'Engine Condition', desc: 'Fluid levels and engine performance inspection completed.' },
              { id: '04', title: 'Seatbelts', desc: 'Every passenger and driver seatbelt tested for safety.' },
              { id: '05', title: 'Lighting Systems', desc: 'All interior and exterior lighting fully functional.' },
              { id: '06', title: 'Overall Presentation', desc: 'Vehicle must be immaculately clean and well-presented.' }
            ].map(item => (
              <div key={item.id} className="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-yellow font-black text-3xl mb-4 opacity-50">{item.id}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" /> {item.title}
                </h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Safety Features */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex items-center mb-10">
            <ShieldCheck className="w-10 h-10 text-brand-maroon mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Customer Safety Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-maroon-dark text-white p-8 shadow-xl border-t-4 border-t-brand-yellow">
              <AlertCircle className="w-10 h-10 text-brand-yellow mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Driver Pre-Arrival Info</h3>
              <p className="text-white/90 font-medium leading-relaxed">
                Before your trip begins, we provide you with complete transparency. You will receive the driver's name, their verified photo, and the vehicle's registration details so you can identify your transport securely.
              </p>
            </div>
            <div className="bg-brand-maroon text-white p-8 shadow-xl border-t-4 border-t-brand-yellow">
              <Phone className="w-10 h-10 text-brand-yellow mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Dedicated Support</h3>
              <p className="text-white/90 font-medium leading-relaxed mb-6">
                Our support team is available via phone, chat, or email at any point during your trip. If you feel unsafe or experience an issue, we are always on standby.
              </p>
              <Link to="/emergency" className="inline-flex items-center text-brand-maroon-dark bg-brand-yellow px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors">
                View Emergency Contacts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
