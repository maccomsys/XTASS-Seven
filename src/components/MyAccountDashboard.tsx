import { Link } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  History, 
  Users, 
  PhoneCall, 
  CreditCard, 
  MapPin, 
  Bell, 
  ShieldCheck, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Edit3
} from 'lucide-react';

export default function MyAccountDashboard() {
  const currentDate = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' });

  const navItems = [
    { label: 'My Bookings', icon: Calendar, path: '/my-bookings' },
    { label: 'Trip History', icon: History, path: '/trip-history' },
    { label: 'Saved Passengers', icon: Users, path: '/saved-passengers' },
    { label: 'Emergency Contacts', icon: PhoneCall, path: '/emergency-contacts' },
    { label: 'Saved Payment Methods', icon: CreditCard, path: '/saved-payment-methods' },
    { label: 'Saved Locations', icon: MapPin, path: '/saved-locations' },
    { label: 'Notification Preferences', icon: Bell, path: '/notification-preferences' },
    { label: 'Security Settings', icon: ShieldCheck, path: '/security-settings' },
    { label: 'Help & Support', icon: HelpCircle, path: '/account' }, // placeholder
  ];

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              My Account
            </h1>
            <p className="text-gray-300 font-medium">Manage your personal details and settings.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12 -mt-12 relative z-20 space-y-6">
        
        {/* Profile Header Card */}
        <div className="bg-white shadow-xl border border-gray-100 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
          
          <div className="w-24 h-24 bg-brand-maroon rounded-full flex items-center justify-center text-white text-3xl font-black shrink-0 relative">
            JD
            <Link to="/profile-edit" className="absolute bottom-0 right-0 bg-brand-yellow p-1.5 rounded-full text-gray-900 border-2 border-white hover:scale-110 transition-transform">
              <Edit3 className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex-1 text-center sm:text-left pt-2">
            <h2 className="text-2xl font-black text-gray-900 leading-tight">John Doe</h2>
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <p>official.xtassone@gmail.com</p>
              <p>+233 20 123 4567</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-3">
                Member since {currentDate}
              </p>
            </div>
          </div>
          
          <div className="hidden sm:block">
             <Link to="/profile-edit" className="border-2 border-gray-200 text-gray-900 font-bold px-4 py-2 text-sm uppercase tracking-wider hover:border-gray-900 transition-colors">
               Edit Profile
             </Link>
          </div>
          <div className="sm:hidden block w-full mt-4">
             <Link to="/profile-edit" className="border-2 border-gray-200 text-gray-900 font-bold px-4 py-3 text-sm uppercase tracking-wider w-full text-center block focus:bg-gray-50 active:bg-gray-100">
               Edit Profile
             </Link>
          </div>
        </div>

        {/* Navigation Rows */}
        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-maroon/10 transition-colors">
                      <item.icon className="w-5 h-5 text-gray-500 group-hover:text-brand-maroon transition-colors" />
                    </div>
                    <span className="font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-maroon group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
            <li>
              <button 
                className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors group text-left"
                onClick={() => {
                  if(window.confirm('Are you sure you want to sign out?')) {
                    window.location.href = '/signin';
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-100 transition-colors">
                    <LogOut className="w-5 h-5 text-red-500 transition-colors" />
                  </div>
                  <span className="font-bold text-red-600">Sign Out</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
