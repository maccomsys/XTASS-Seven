import { Briefcase, FileText, CheckCircle2 } from 'lucide-react';

export default function DriverAgreement() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Briefcase className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Driver Agreement</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Professional obligations, standards, and conduct required of all XTASS personnel.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 prose max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:uppercase prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed prose-li:text-gray-600 prose-li:font-medium">
          
          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="flex items-center"><FileText className="w-6 h-6 mr-3 text-brand-maroon" /> Code of Conduct</h2>
            <p>
              As a representative of XTASS, the driver agrees to maintain the highest levels of professionalism. This includes adhering to our strict uniform policy, avoiding inappropriate conversation with VIP clients, maintaining absolute passenger confidentiality, and treating all customers, staff, and road users with respect. Discrimination, harassment, or verbal abuse in any form is prohibited.
            </p>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="flex items-center"><FileText className="w-6 h-6 mr-3 text-brand-maroon" /> Vehicle Care Standards</h2>
            <p>
              The driver is responsible for the daily assessment and preservation of their assigned fleet vehicle. Responsibilities include:
            </p>
            <ul>
              <li>Conducting the pre-trip and post-trip 6-point visual and mechanical inspection.</li>
              <li>Ensuring the interior and exterior remain immaculately clean throughout the shift.</li>
              <li>Immediately reporting any dashboard warning lights, unusual sounds, or cosmetic damage to the dispatch team.</li>
              <li>Strictly enforcing the non-smoking policy inside the vehicle at all times.</li>
            </ul>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-brand-maroon" /> Service Quality Standards</h2>
            <p>
              To maintain XTASS's premium service reputation, drivers must utilize authorized navigation tools to ensure the most efficient and safe route. Drivers are expected to open doors for passengers, offer assistance with luggage, maintain appropriate cabin temperature per client request, and ensure a smooth, defensive driving style without exceeding regulatory speed limits.
            </p>
          </div>

          <div>
            <h2 className="text-red-700">Termination Conditions</h2>
            <p>
              XTASS reserves the right to immediately terminate employment and restrict platform access under circumstances including, but not limited to:
            </p>
            <ul>
              <li>Driving under the influence of alcohol, narcotics, or unprescribed medications.</li>
              <li>Involvement in at-fault road accidents resulting from reckless driving or verifiable distraction.</li>
              <li>Unauthorized use of the company vehicle for personal errands or off-platform transportation of unregistered passengers.</li>
              <li>Consistent failure to meet internal customer rating thresholds or multiple reports of unprofessional behaviour.</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
