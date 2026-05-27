import { FileText, Building2, Car, User } from 'lucide-react';

export default function LicensingInformation() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <FileText className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Licensing Information</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Official company registration and transport licensing details for XTASS.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        
        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Company Registration */}
          <div className="p-8 md:p-10 border-b border-gray-200 flex flex-col md:flex-row md:items-start">
            <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center shrink-0 mb-6 md:mb-0 md:mr-8 border border-gray-200">
              <Building2 className="w-8 h-8 text-brand-maroon" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">Company Registration</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Registration Number</p>
                  <p className="font-bold text-gray-900">CS289212023</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Registered Entity</p>
                  <p className="font-bold text-gray-900">Executive Transport &amp; Security Services Ltd.</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Registered Address</p>
                  <p className="text-gray-600 font-medium">14 Independence Avenue, Ridge, Accra, Greater Accra Region, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Licence */}
          <div className="p-8 md:p-10 border-b border-gray-200 flex flex-col md:flex-row md:items-start bg-gray-50/50">
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0 mb-6 md:mb-0 md:mr-8 border border-gray-200">
              <Car className="w-8 h-8 text-brand-maroon" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">Transport Licence</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Licence Number</p>
                  <p className="font-bold text-gray-900">TCP-AA-4099-23</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Issuing Authority</p>
                  <p className="text-gray-600 font-medium">Ghana Road Transport Coordinating Council (GRTCC)</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Classification</p>
                  <p className="text-gray-600 font-medium">Premium Commercial Fleet Operations &amp; Intercity Travel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Driver Licensing */}
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-start">
            <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center shrink-0 mb-6 md:mb-0 md:mr-8 border border-gray-200">
              <User className="w-8 h-8 text-brand-maroon" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">Driver Licensing</h2>
              <p className="text-gray-600 font-medium mb-6 leading-relaxed">
                All XTASS drivers are subjected to continuous licensing verification to ensure maximum regulatory compliance and passenger safety.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 border-l-4 border-brand-maroon">
                  <p className="font-bold text-gray-900 mb-1">Licence Types Accepted</p>
                  <p className="text-sm text-gray-600 font-medium">Drivers must possess a valid Ghanaian driving licence specifically authorized for the relevant commercial vehicle class they operate.</p>
                </div>
                <div className="bg-gray-50 p-4 border-l-4 border-brand-yellow">
                  <p className="font-bold text-gray-900 mb-1">Expiry Monitoring System</p>
                  <p className="text-sm text-gray-600 font-medium">Our administrative platform automatically tracks driver licence expiry dates and restricts platform access 30 days prior to expiration until renewal is verified.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}
