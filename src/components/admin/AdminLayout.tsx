import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, CalendarDays, Activity, CarFront, Users, 
  FileText, Settings, LogOut, Menu, X, Bell, ChevronDown, 
  ChevronRight, MapPin, DollarSign, LifeBuoy, FileCode2,
  List, MessageSquare, CreditCard, Clock, Map, PhoneCall, Link2
} from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  href?: string;
  icon: any;
  badge?: number;
  subItems?: { name: string; href: string }[];
}

export default function AdminLayout({ children }: Props) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    'Live Operations': true,
    'Reservations': true
  });

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const navigation: NavItem[] = [
    { name: 'Dashboard Overview', href: '/admin/dashboard', icon: LayoutDashboard },
    { 
      name: 'Live Operations', 
      icon: Activity, 
      badge: 3,
      subItems: [
        { name: 'Operations Dashboard', href: '/admin/operations/live' },
        { name: 'Active Trips Map', href: '/admin/operations/map' },
      ]
    },
    { 
      name: 'Reservations', 
      icon: CalendarDays,
      subItems: [
        { name: 'All Reservations', href: '/admin/reservations' },
        { name: 'Create Reservation', href: '/admin/reservations/create' },
      ]
    },
    { 
      name: 'Customers & Users', 
      icon: Users,
      subItems: [
        { name: 'All Customers', href: '/admin/customers' },
      ]
    },
    { 
      name: 'Driver Management', 
      icon: PhoneCall,
      subItems: [
        { name: 'Driver Roster', href: '/admin/drivers' },
        { name: 'Add Driver', href: '/admin/drivers/add' },
        { name: 'Driver Earnings', href: '/admin/drivers/earnings' },
      ]
    },
    { 
      name: 'Fleet Management', 
      icon: CarFront,
      subItems: [
        { name: 'Fleet Overview', href: '/admin/fleet' },
        { name: 'Add Vehicle', href: '/admin/fleet/add' },
        { name: 'Vehicle Pricing', href: '/admin/fleet/pricing' },
      ]
    },
    { 
      name: 'Locations & Rates', 
      icon: MapPin,
      subItems: [
        { name: 'All Locations', href: '/admin/locations' },
        { name: 'Add Location', href: '/admin/locations/add' },
        { name: 'Rate Dashboard', href: '/admin/rates' },
      ]
    },
    { 
      name: 'Financials & Payments', 
      icon: CreditCard,
      subItems: [
        { name: 'All Transactions', href: '/admin/payments' },
        { name: 'Revenue Report', href: '/admin/reports/revenue' },
      ]
    },
    { 
      name: 'Content & CMS', 
      icon: FileCode2,
      subItems: [
        { name: 'Homepage Editor', href: '/admin/content/homepage' },
        { name: 'Vehicle Pages', href: '/admin/content/vehicles' },
        { name: 'Service Pages', href: '/admin/content/services' },
        { name: 'Articles & Blog', href: '/admin/content/articles' },
        { name: 'Deals & Offers', href: '/admin/content/deals' },
        { name: 'FAQs', href: '/admin/content/faqs' },
        { name: 'Policies', href: '/admin/content/policies' },
      ]
    },
    { 
      name: 'Analytics & Reports', 
      icon: FileText,
      subItems: [
        { name: 'Booking Report', href: '/admin/reports/bookings' },
        { name: 'Fleet Utilisation', href: '/admin/reports/fleet' },
        { name: 'Customer Analytics', href: '/admin/reports/customers' },
        { name: 'Driver Performance', href: '/admin/reports/drivers' },
      ]
    },
    { 
      name: 'Support & Tickets', 
      icon: LifeBuoy,
      subItems: [
        { name: 'Helpdesk Tickets', href: '/admin/tickets' },
      ]
    },
    { 
      name: 'System Logs', 
      icon: Clock,
      subItems: [
        { name: 'System Events', href: '/admin/logs/system' },
        { name: 'Activity Log', href: '/admin/logs/activity' },
      ]
    },
    { 
      name: 'Settings & Config', 
      icon: Settings,
      subItems: [
        { name: 'General Settings', href: '/admin/settings/general' },
        { name: 'Security & Auth', href: '/admin/settings/security' },
        { name: 'Emails & Templates', href: '/admin/settings/emails' },
        { name: 'SMS Templates', href: '/admin/settings/sms' },
        { name: 'Payment Display', href: '/admin/settings/payments' },
        { name: 'Supported Airports', href: '/admin/settings/airports' },
        { name: 'Cancellation Policy', href: '/admin/settings/cancellation' },
        { name: 'Booking Rules', href: '/admin/settings/booking-rules' },
        { name: 'Extras Configuration', href: '/admin/settings/extras' },
        { name: 'Sitemap Overview', href: '/admin/settings/sitemap' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col`}>
        <div className="h-16 flex items-center justify-between px-4 bg-black">
          <Link to="/admin/dashboard" className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-2">
            <img src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png" alt="XTASS Logo" className="h-6 w-auto invert brightness-0" style={{ filter: 'invert(1)' }} />
            <span className="text-brand-yellow text-sm font-bold bg-white/10 px-2 py-0.5 rounded">Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 custom-scrollbar lg:pb-24">
          <nav className="px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = item.href ? location.pathname.startsWith(item.href) : false;
              const hasActiveChild = item.subItems?.some(sub => location.pathname.startsWith(sub.href));
              const isOpen = openMenus[item.name] || hasActiveChild;

              if (item.subItems) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`w-full group flex items-center justify-between px-3 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors ${
                        hasActiveChild ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className={`mr-3 h-5 w-5 ${hasActiveChild ? 'text-brand-yellow' : 'text-gray-500 group-hover:text-gray-300'}`} />
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center">
                        {item.badge && (
                          <span className="bg-red-500 text-white mr-2 py-0.5 px-2 text-[10px] font-black rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-1 space-y-1 pl-11">
                        {item.subItems.map(subItem => {
                          const isSubActive = location.pathname === subItem.href || location.pathname.startsWith(`${subItem.href}/`);
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                                isSubActive ? 'bg-brand-maroon text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href!}
                  className={`group flex items-center px-3 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-colors ${
                    isActive ? 'bg-brand-maroon text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`} />
                  <span className="flex-1 truncate">{item.name}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white ml-2 py-0.5 px-2 text-[10px] font-black rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 bg-gray-800 border-t border-gray-700">
           <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-maroon flex items-center justify-center text-white font-black text-xs">
                AD
              </div>
              <div className="ml-3">
                 <p className="text-sm font-bold text-white uppercase">System Admin</p>
                 <p className="text-xs text-gray-400">admin@xtass.com</p>
              </div>
           </div>
           <Link to="/admin/login" className="flex items-center text-gray-400 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
           </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Top Header */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 shadow-sm sticky top-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-900 focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end">
             <button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none relative">
               <Bell className="w-6 h-6" />
               <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 20px;
        }
      `}} />
    </div>
  );
}
