import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Shield className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Privacy Policy</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            How we collect, use, and protect your personal data.
          </p>
          <p className="text-sm opacity-70 mt-6 uppercase tracking-widest font-bold">Effective Date: May 26, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 prose max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:uppercase prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed prose-li:text-gray-600 prose-li:font-medium">
          
          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2>Data We Collect</h2>
            <p>
              XTASS collects information to provide better services to all our users. The types of personal data we collect include:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
              <li><strong>Verification Data:</strong> Copies of government-issued IDs for car rentals and security purposes.</li>
              <li><strong>Location Data:</strong> GPS data from your mobile device or our fleet vehicles during an active trip.</li>
              <li><strong>Payment Information:</strong> Credit card details and billing addresses (processed securely by third-party payment gateways).</li>
            </ul>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2>How We Use Your Data</h2>
            <p>We process your data strictly to facilitate, manage, and improve our transport services. Specifically, your data is used to:</p>
            <ul>
              <li>Process your reservations and communicate booking confirmations.</li>
              <li>Coordinate pickups with your designated chauffeur.</li>
              <li>Process secure payments and issue refunds.</li>
              <li>Enhance passenger security and respond to emergency incidents via GPS monitoring.</li>
            </ul>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2>Data Storage &amp; Security</h2>
            <p>
              We prioritize the security of your personal information. All sensitive data is encrypted in transit and at rest using industry-standard protocols. We store your data on secure cloud servers and restrict access to authorized personnel only. Financial data is never stored locally on our servers.
            </p>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2>Your Rights</h2>
            <p>
              In compliance with the Ghana Data Protection Act (Act 843), you hold the following rights regarding your personal data:
            </p>
            <ul>
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request the correction of inaccurate or incomplete data.</li>
              <li>The right to request the deletion of your personal data when it is no longer necessary for the purposes collected.</li>
              <li>The right to withdraw consent for marketing communications.</li>
            </ul>
          </div>

          <div>
            <h2>Contact for Data Queries</h2>
            <p>
              If you have any questions, concerns, or wish to exercise your data rights, please contact our Data Protection Officer (DPO):
            </p>
            <p className="font-bold text-brand-maroon text-lg mt-4">dpo@xtass.com</p>
          </div>

        </div>
      </section>
    </main>
  );
}
