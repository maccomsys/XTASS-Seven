import { Settings, CheckCircle2 } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Settings className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Cookie Policy</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            How XTASS uses cookies to improve your digital experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 prose max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:uppercase prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed">
          
          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-brand-maroon" /> Essential Cookies</h2>
            <p>
              These cookies are strictly necessary for the XTASS platform to function securely. They enable core functionalities such as user authentication, booking session continuity, and secure payment processing. Because these are critical to the platform's operation, they cannot be disabled in our systems.
            </p>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-brand-maroon" /> Analytics Cookies</h2>
            <p>
              Used to understand how visitors interact with our site. We collect aggregated, anonymous data regarding page views, time spent on site, and journey paths. This helps us optimize our layout, improve the booking process, and eliminate technical friction points.
            </p>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2 className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-brand-maroon" /> Preference Cookies</h2>
            <p>
              Preference cookies allow the platform to remember your specific settings and choices, such as your preferred currency, language selection, or past vehicle selections, enabling a faster and more personalized booking experience on your next visit.
            </p>
          </div>

          <div className="mb-12 pb-12 border-b border-gray-100">
            <h2>Browser Settings Guidance</h2>
            <p>
              You can manage, block, or delete cookies directly through your web browser settings. Please note that disabling Essential Cookies may result in the inability to log into your account, book a vehicle, or access certain security-dependent features of the XTASS platform.
            </p>
          </div>

          <div>
            <h2>Opt-Out Instructions</h2>
            <p>
              If you wish to opt-out of non-essential cookies (Analytics and Preference), you can configure your preferences via the cookie banner displayed upon your first visit, or adjust your device’s browser settings to reject cookies from our domain.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
