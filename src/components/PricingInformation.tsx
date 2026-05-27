import { ShieldCheck, CreditCard, Receipt, CheckCircle, Info } from 'lucide-react';

export default function PricingInformation() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">XTASS Pricing Policy</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Transparent, all-inclusive pricing. What you see is exactly what you pay.
          </p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 -mt-10 relative z-10">
        <div className="bg-white rounded-none shadow-xl border border-gray-100 p-8 md:p-12 mb-12">
          <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
            <ShieldCheck className="w-12 h-12 text-brand-yellow mr-6 shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Zero-Hidden-Fees Guarantee</h2>
              <p className="text-lg text-gray-600 mt-2 font-medium">We believe in complete financial transparency for every journey.</p>
            </div>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Fixed & Final Fares</h3>
                <p className="text-gray-600 mt-1">The price calculated and shown at the time of booking is final. It covers fuel, driver, tolls, and standard service expectations.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">No Peak Pricing Surges</h3>
                <p className="text-gray-600 mt-1">We do not employ dynamic "surge" pricing during rain, rush hour, or holidays. Your rate remains predictable.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">No Advance Booking Fees</h3>
                <p className="text-gray-600 mt-1">Scheduling a ride for next week costs the same as demanding a ride right now. We do not penalize you for planning ahead.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">No Cancellation Penalty (24h)</h3>
                <p className="text-gray-600 mt-1">Full refunds are provided for cancellations made up to 24 hours prior to your scheduled pickup time.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Two Columns: Payment & Receipts */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Payment Methods */}
          <div className="bg-white p-8 border border-gray-200 shadow-sm border-t-4 border-t-brand-maroon">
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-6 text-brand-maroon">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Accepted Payments</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 font-medium pb-4 border-b border-gray-100">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div> Credit Cards (Visa, Mastercard, AMEX)
              </li>
              <li className="flex items-center text-gray-700 font-medium pb-4 border-b border-gray-100">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div> Debit Cards
              </li>
              <li className="flex items-center text-gray-700 font-medium pb-4 border-b border-gray-100">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div> Mobile Money (MTN, Vodafone, AirtelTigo)
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div> Corporate Invoicing (Approved accounts)
              </li>
            </ul>
            <div className="mt-6 flex items-start text-sm text-gray-500">
              <Info className="w-4 h-4 mr-2 shrink-0 mt-0.5" /> All payments are securely processed via industry-leading encrypted gateways.
            </div>
          </div>

          {/* Receipts Structure */}
          <div className="bg-white p-8 border border-gray-200 shadow-sm border-t-4 border-t-brand-maroon">
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mb-6 text-brand-maroon">
              <Receipt className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Invoices & Receipts</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We ensure you have complete records for your personal or corporate accounting needs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-700">
                <div className="w-6 h-6 bg-brand-maroon/10 text-brand-maroon font-bold text-xs rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">1</div>
                <span><strong className="font-bold">Instant Confirmation:</strong> Sent to your email immediately upon booking.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <div className="w-6 h-6 bg-brand-maroon/10 text-brand-maroon font-bold text-xs rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">2</div>
                <span><strong className="font-bold">Final Receipt:</strong> Auto-generated and emailed immediately after trip completion.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <div className="w-6 h-6 bg-brand-maroon/10 text-brand-maroon font-bold text-xs rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">3</div>
                <span><strong className="font-bold">Account Storage:</strong> All historical receipts are securely stored in your XTASS customer account.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
