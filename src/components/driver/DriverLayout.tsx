import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, LogOut, UserCircle, Car, Map as MapIcon, X, Wallet, Settings, HelpCircle, History } from 'lucide-react';

export default function DriverLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', path: '/driver/dashboard', icon: MapIcon },
        { name: 'My Profile', path: '/driver/profile', icon: UserCircle },
        { name: 'Trip History', path: '/driver/history', icon: History },
        { name: 'Earnings', path: '/driver/earnings', icon: Wallet },
        { name: 'Assigned Vehicle', path: '/driver/vehicle', icon: Car },
        { name: 'Settings', path: '/driver/settings', icon: Settings },
        { name: 'Support', path: '/driver/support', icon: HelpCircle },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
            {/* Header */}
            <header className="bg-gray-900 border-b-4 border-gray-900 shadow-sm z-30 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 -ml-2 text-gray-300 hover:text-white transition-colors lg:hidden focus:outline-none"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <span className="ml-2 lg:ml-0 text-xl flex items-center gap-2 font-black text-white uppercase tracking-tighter">
                            <img src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png" alt="XTASS Logo" className="h-6 w-auto invert brightness-0" style={{ filter: 'invert(1)' }} />
                            <span className="text-red-500 text-xs">DRIVER</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4 overflow-x-auto">
                        {menuItems.map((item) => (
                             <Link
                                key={item.name}
                                to={item.path}
                                className={`text-[10px] xl:text-xs font-black uppercase tracking-widest pb-1 border-b-2 transition-colors whitespace-nowrap ${
                                    location.pathname.startsWith(item.path) 
                                    ? 'text-white border-red-500' 
                                    : 'text-gray-400 border-transparent hover:text-white hover:border-gray-500'
                                }`}
                             >
                                 {item.name}
                             </Link>
                        ))}
                    </div>

                    <div className="flex items-center">
                        <Link to="/driver/login" className="flex items-center text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
                            <span className="hidden sm:inline mr-2">Sign Out</span>
                            <LogOut className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                 <div className="fixed inset-0 z-40 flex lg:hidden">
                    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white border-r-4 border-gray-900 shadow-2xl overflow-y-auto">
                        <div className="p-4 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
                             <span className="text-xl flex items-center gap-2 font-black text-gray-900 uppercase tracking-tighter">
                                <img src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png" alt="XTASS Logo" className="h-6 w-auto" />
                                <span className="text-brand-maroon text-xs">DRIVER</span>
                            </span>
                            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-900 focus:outline-none">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav className="p-4 space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center p-3 sm:p-4 border-2 transition-all ${
                                        location.pathname.startsWith(item.path)
                                        ? 'border-gray-900 bg-gray-900 text-white shadow-[4px_4px_0_0_rgba(220,38,38,1)]'
                                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                                    }`}
                                >
                                    <item.icon className="h-5 w-5 mr-3" />
                                    <span className="text-xs sm:text-sm font-black uppercase tracking-widest">{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto p-4 border-t-2 border-gray-200">
                             <Link to="/driver/login" className="flex items-center justify-center p-4 text-sm font-black uppercase tracking-widest text-brand-maroon bg-red-50 hover:bg-red-100 transition-colors">
                                <LogOut className="h-5 w-5 mr-2" /> Sign Out
                             </Link>
                        </div>
                    </div>
                 </div>
            )}

            {/* Main Content */}
            <main className="flex-1 w-full bg-gray-100 relative">
                {children}
            </main>
        </div>
    );
}
