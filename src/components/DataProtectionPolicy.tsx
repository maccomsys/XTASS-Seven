import { Shield, Database, Lock, UserCheck, FileText } from 'lucide-react';

export default function DataProtectionPolicy() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Database className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Data Protection Policy</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            How we handle your personal data in compliance with the Ghana Data Protection Act.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        
        {/* Compliance Statement */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-brand-maroon mb-8">
          <div className="flex items-center mb-4">
            <Lock className="w-8 h-8 text-brand-maroon mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Compliance Statement</h2>
          </div>
          <p className="text-gray-600 font-medium mb-6 leading-relaxed">
            XTASS operates strictly under the legal framework of the Ghana Data Protection Act (Act 843). We are committed to processing your data lawfully, transparently, and securely.
          </p>
          <div className="bg-gray-50 p-6 border border-gray-200 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Data Controller Reg No.</p>
              <p className="font-bold text-gray-900">DPC-2026-XTA-9981</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Data Protection Officer</p>
              <p className="font-bold text-brand-maroon">dpo@xtass.com</p>
            </div>
          </div>
        </div>

        {/* Data Categories */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-gray-800 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-gray-800 mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Data Categories Processed</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Data</h3>
              <p className="text-gray-600 font-medium">Includes your full name, email address, phone number, physical address, complete booking history, and securely processed payment methods.</p>
            </div>
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Driver Data</h3>
              <p className="text-gray-600 font-medium">Includes formal employment details, valid driving licence records, vehicle assignments, background check results, and historical trip logs.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Usage Data</h3>
              <p className="text-gray-600 font-medium">Includes platform interaction data, device information, and site analytics utilized exclusively to improve our digital booking experience.</p>
            </div>
          </div>
        </div>

        {/* User Rights Section */}
        <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-brand-yellow">
          <div className="flex items-center mb-6">
            <UserCheck className="w-8 h-8 text-brand-yellow mr-4" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Your Data Rights</h2>
          </div>
          
          <p className="text-gray-600 font-medium mb-8 leading-relaxed">
            As a data subject under Ghanaian law, you possess fundamental rights regarding how your personal information is handled by XTASS.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Access</h3>
              <p className="text-sm text-gray-600 font-medium">Customers can formally request a comprehensive copy of all personal data held by XTASS.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Erasure</h3>
              <p className="text-sm text-gray-600 font-medium">Customers can request the permanent deletion of their data when it is no longer required for service provision.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Right to Correction</h3>
              <p className="text-sm text-gray-600 font-medium">Customers can request the immediate correction of any inaccurate or outdated personal records.</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
