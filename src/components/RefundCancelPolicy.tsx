import { RefreshCcw, DollarSign, Calendar, Clock } from 'lucide-react';

export default function RefundCancelPolicy() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <RefreshCcw className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Refund &amp; Cancellation</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Clear, transparent policies for changes and cancellations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        
        {/* General Statement */}
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-brand-yellow mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">General Policy Principle</h2>
          <div className="space-y-4">
            <p className="text-gray-600 font-medium text-lg border-l-4 border-brand-maroon pl-4">
              Cancellations made well in advance are generally free of charge.
            </p>
            <p className="text-gray-600 font-medium text-lg border-l-4 border-gray-300 pl-4">
              Cancellations made close to the scheduled pickup time may incur a modest fee to compensate our drivers.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Instant Ride */}
          <div className="bg-white p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-brand-maroon mr-4" />
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Instant Ride Policy</h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              For on-demand or immediate dispatch bookings, you may cancel free of charge <strong>until a driver accepts the assignment</strong> and begins travelling to your location. Once a driver is en route, a standard cancellation fee equivalent to the base pickup fare will apply.
            </p>
          </div>

          {/* Scheduled Pickup & Airport */}
          <div className="bg-white p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <Calendar className="w-8 h-8 text-brand-maroon mr-4" />
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Scheduled Pickup Policy</h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              For pre-booked rides and airport transfers, cancellations made <strong>at least 12 hours</strong> prior to the scheduled pickup time are fully refunded. Cancellations made within 12 hours of the pickup time will incur a fee equivalent to 50% of the total estimated fare to compensate for the reserved blocks in the driver's schedule.
            </p>
          </div>

          {/* Car Rental */}
          <div className="bg-white p-8 border border-gray-200">
            <div className="flex items-center mb-4">
              <RefreshCcw className="w-8 h-8 text-brand-maroon mr-4" />
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Car Rental Policy</h2>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              For Self-Drive and Chauffeured Car Rentals, cancellations made <strong>before operational confirmation</strong> are free. Once confirmed, cancellations made more than 48 hours prior to pickup are fully refunded. Cancellations within 48 hours incur a partial fee equal to a one-day rental rate.
            </p>
          </div>

          {/* Refund Processing */}
          <div className="bg-gray-100 p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Refund Processing</h3>
              </div>
              <p className="text-gray-600 font-medium max-w-xl">
                Refunds are processed within 3–5 business days where applicable. Please note that approved refund amounts are strictly returned to the original payment method used during booking.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
