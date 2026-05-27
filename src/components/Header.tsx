import { ChevronDown, ChevronRight, Eye, Menu, Phone, X, Car, CalendarCheck, Shield, HelpCircle, LifeBuoy, Info, Contact, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'register'>('signin');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Desktop Menu States
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [servicesTab, setServicesTab] = useState<'ride' | 'rental' | 'special'>('ride');
  
  // Mobile Menu States
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const location = useLocation();

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (dropdown: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100 relative z-50 bg-white">
        <div className="mx-auto max-w-[80rem] px-4 py-3 flex items-center justify-between">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src="https://i.ibb.co/6JVrf2Bt/XTASS-Logo.png"
              alt="XTASS Logo"
              className="h-10 md:h-12 w-auto cursor-pointer"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Phone Info */}
            <div className="flex items-center gap-3 group">
              <div className="bg-brand-maroon/10 p-2 rounded-full text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Call Us
                </span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-brand-maroon transition-colors duration-300">
                  00233 123 456 789
                </span>
              </div>
            </div>

            {/* Auth Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className="flex items-center gap-1 text-sm font-bold text-gray-800 hover:text-brand-maroon transition-colors"
                title="Open Auth Menu"
              >
                Sign In | Register{' '}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isAuthOpen ? 'rotate-180 text-brand-maroon' : ''
                  }`}
                />
              </button>

              {isAuthOpen && (
                <>
                  <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsAuthOpen(false)} />
                  <div className="absolute right-0 top-full mt-4 w-[700px] z-50 bg-white border border-gray-100 shadow-2xl rounded-sm flex overflow-hidden animate-in fade-in slide-in-from-top-2">
                    <div className="w-5/12 bg-gray-50 p-6 border-r border-gray-100 flex flex-col">
                      <h3 className="text-lg font-bold text-brand-maroon mb-2">
                        {authTab === 'signin' ? 'Welcome Back!' : 'New to XTASS? Create an account'}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Manage your trips, save your favourite vehicles, and book faster.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-3 mb-8">
                        <li className="flex items-center gap-2">
                          <div className="bg-brand-yellow/20 p-1 rounded font-bold text-brand-maroon">✓</div>{' '}
                          Manage your bookings easily
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="bg-brand-yellow/20 p-1 rounded font-bold text-brand-maroon">✓</div>{' '}
                          Track driver & ride status
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="bg-brand-yellow/20 p-1 rounded font-bold text-brand-maroon">✓</div>{' '}
                          Secure payment saving
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <p className="text-xs font-semibold text-gray-800 mb-1">
                          {authTab === 'signin' ? 'Don\'t have an account?' : 'Already have an account?'}
                        </p>
                        <button
                          onClick={() => setAuthTab(authTab === 'signin' ? 'register' : 'signin')}
                          className="text-sm font-bold text-brand-maroon hover:underline"
                        >
                          {authTab === 'signin' ? 'Create Account >' : 'Sign In >'}
                        </button>
                      </div>
                    </div>
                    <div className="w-7/12 p-6 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold">
                          {authTab === 'signin' ? 'Sign In to XTASS' : 'Register'}
                        </h2>
                        <Link to={authTab === 'signin' ? "/signin" : "/register"} onClick={() => setIsAuthOpen(false)} className="text-xs font-bold text-gray-500 hover:text-brand-maroon underline">
                          Open Full Page
                        </Link>
                      </div>
                      {authTab === 'signin' ? (
                        <form className="flex flex-col gap-4 text-sm" onSubmit={(e) => e.preventDefault()}>
                          <div>
                            <label className="block text-gray-700 mb-1 font-medium">Email or Phone Number</label>
                            <input type="text" className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all" placeholder="Enter your email or phone" />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <label className="text-gray-700 font-medium">Password</label>
                              <button type="button" className="text-brand-maroon text-xs font-bold flex items-center gap-1 hover:underline">
                                Show <Eye className="w-3 h-3" />
                              </button>
                            </div>
                            <input type="password" className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all" placeholder="••••••••" />
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <input type="checkbox" id="keepSignedIn" className="accent-brand-maroon w-4 h-4 rounded-sm border-gray-300 cursor-pointer" />
                            <label htmlFor="keepSignedIn" className="text-gray-600 font-medium cursor-pointer">Keep me signed in</label>
                          </div>
                          <button className="w-full py-3 mt-1 bg-brand-maroon text-white font-bold rounded-sm hover:bg-brand-maroon-hover transition-colors shadow-sm">
                            Sign In
                          </button>
                          
                          <div className="flex items-center gap-4 my-2">
                            <div className="h-px bg-gray-200 flex-1" />
                            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">OR</span>
                            <div className="h-px bg-gray-200 flex-1" />
                          </div>
                          
                          <button type="button" className="w-full py-2.5 border border-gray-300 rounded-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-2">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
                            Continue with Google
                          </button>
                          
                          <Link to="/forgot-password" onClick={() => setIsAuthOpen(false)} className="text-brand-maroon font-bold text-center mt-3 hover:underline">
                            Forgot Password?
                          </Link>
                        </form>
                      ) : (
                        <form className="flex flex-col gap-3 text-sm" onSubmit={(e) => e.preventDefault()}>
                          <div>
                            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
                            <input type="text" className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all" placeholder="John Doe" />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
                            <input type="email" className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all" placeholder="john@example.com" />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1 font-medium">Password</label>
                            <input type="password" className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all" placeholder="Create a strong password" />
                          </div>
                          <button className="w-full py-3 mt-4 bg-brand-yellow text-brand-maroon font-bold rounded-sm hover:bg-brand-yellow-hover transition-colors shadow-sm">
                            Create Account
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link to="/start-reservation" className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-maroon tracking-wide font-bold px-7 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-brand-maroon rounded-full hover:bg-red-50 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Red Nav Bar (Desktop) */}
      <nav className="hidden md:block bg-brand-maroon relative z-40 shadow-md">
        <div className="mx-auto max-w-[80rem] px-4 flex items-center h-12">
          <div className="flex flex-1 items-center h-full gap-2 lg:gap-4">
            
            {/* Home */}
            <Link 
              to="/" 
              className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center transition-colors border-b-2 ${
                isLinkActive('/') 
                ? 'text-brand-yellow border-brand-yellow' 
                : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="h-full relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button 
                className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center gap-1 transition-colors border-b-2 ${
                  activeDropdown === 'services' || ['/instant-pickup', '/scheduled-pickup', '/airport-transfers', '/one-way-rental', '/long-term-rental', '/weekend-rental', '/group-transportation', '/accessibility'].includes(location.pathname)
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
                }`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex min-w-[500px] border border-gray-100 rounded-b-md animate-in fade-in slide-in-from-top-1 overflow-hidden">
                  <div className="w-2/5 bg-gray-50 flex flex-col">
                    <button 
                      onMouseEnter={() => setServicesTab('ride')}
                      className={`p-4 text-sm font-bold text-left transition-colors relative flex items-center justify-between ${
                        servicesTab === 'ride' ? 'text-brand-maroon bg-white shadow-[inset_3px_0_0_#800020]' : 'text-gray-600 hover:text-brand-maroon hover:bg-gray-100 border-l-[3px] border-transparent'
                      }`}
                    >
                      Ride Pickup
                      {servicesTab === 'ride' && <ChevronRight className="w-4 h-4 text-brand-maroon" />}
                    </button>
                    <button 
                      onMouseEnter={() => setServicesTab('rental')}
                      className={`p-4 text-sm font-bold text-left transition-colors relative flex items-center justify-between ${
                        servicesTab === 'rental' ? 'text-brand-maroon bg-white shadow-[inset_3px_0_0_#800020]' : 'text-gray-600 hover:text-brand-maroon hover:bg-gray-100 border-l-[3px] border-transparent'
                      }`}
                    >
                      Car Rental
                      {servicesTab === 'rental' && <ChevronRight className="w-4 h-4 text-brand-maroon" />}
                    </button>
                    <button 
                      onMouseEnter={() => setServicesTab('special')}
                      className={`p-4 text-sm font-bold text-left transition-colors relative flex items-center justify-between ${
                        servicesTab === 'special' ? 'text-brand-maroon bg-white shadow-[inset_3px_0_0_#800020]' : 'text-gray-600 hover:text-brand-maroon hover:bg-gray-100 border-l-[3px] border-transparent'
                      }`}
                    >
                      Specialised
                      {servicesTab === 'special' && <ChevronRight className="w-4 h-4 text-brand-maroon" />}
                    </button>
                  </div>
                  <div className="w-3/5 p-5 bg-white flex flex-col gap-1.5 min-h-[220px]">
                    {servicesTab === 'ride' && (
                      <>
                        <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-2">Ride Pickup Options</h4>
                        <Link to="/instant-pickup" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Instant Pickup</span>
                           <span className="text-xs text-gray-500 mt-0.5">Book a ride immediately, on-demand</span>
                        </Link>
                        <Link to="/scheduled-pickup" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Scheduled Pickup</span>
                           <span className="text-xs text-gray-500 mt-0.5">Pre-book for future dates</span>
                        </Link>
                        <Link to="/airport-transfers" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Airport Transfers</span>
                           <span className="text-xs text-gray-500 mt-0.5">Reliable connections at all locations</span>
                        </Link>
                      </>
                    )}
                    {servicesTab === 'rental' && (
                      <>
                        <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-2">Car Rental Plans</h4>
                        <Link to="/one-way-rental" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">One-Way Rental</span>
                           <span className="text-xs text-gray-500 mt-0.5">Pick up at A, drop off at B</span>
                        </Link>
                        <Link to="/long-term-rental" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Long-Term Rental</span>
                           <span className="text-xs text-gray-500 mt-0.5">Weekly or monthly discounted rates</span>
                        </Link>
                        <Link to="/weekend-rental" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Weekend Rental</span>
                           <span className="text-xs text-gray-500 mt-0.5">Off-peak weekend specials</span>
                        </Link>
                      </>
                    )}
                    {servicesTab === 'special' && (
                      <>
                        <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-2">Specialised Services</h4>
                        <Link to="/group-transportation" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Group Transportation</span>
                           <span className="text-xs text-gray-500 mt-0.5">Multi-seater vehicles for teams</span>
                        </Link>
                        <Link to="/accessibility" onClick={() => setActiveDropdown(null)} className="flex flex-col px-3 py-2.5 rounded-sm hover:bg-brand-maroon/5 transition-colors group">
                           <span className="text-sm font-bold text-gray-800 group-hover:text-brand-maroon">Accessibility Transport</span>
                           <span className="text-xs text-gray-500 mt-0.5">Inclusive mobility solutions</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Fleet */}
            <Link 
              to="/vehicle-fleet" 
              className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center transition-colors border-b-2 ${
                isLinkActive('/vehicle-fleet') || isLinkActive('/vehicle-comparison')
                ? 'text-brand-yellow border-brand-yellow' 
                : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
              }`}
            >
              Our Fleet
            </Link>

            {/* Reservations Dropdown */}
            <div className="h-full relative" onMouseEnter={() => handleMouseEnter('reservations')} onMouseLeave={handleMouseLeave}>
              <button 
                className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center gap-1 transition-colors border-b-2 ${
                  activeDropdown === 'reservations' || ['/start-reservation', '/manage-reservation', '/my-bookings'].includes(location.pathname)
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
                }`}
              >
                Reservations <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'reservations' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'reservations' && (
                <div className="absolute top-full left-0 bg-white shadow-xl flex flex-col min-w-[260px] border border-gray-100 rounded-b-md animate-in fade-in slide-in-from-top-1 py-2">
                  <Link to="/start-reservation" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors group">
                    <div className="bg-brand-maroon/10 p-2 rounded-full text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-gray-900 group-hover:text-brand-maroon">Start a Reservation</span>
                      <span className="block text-xs text-gray-500">Book your next trip with us</span>
                    </div>
                  </Link>
                  <Link to="/manage-reservation" onClick={() => setActiveDropdown(null)} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors group">
                    <div className="bg-brand-maroon/10 p-2 rounded-full text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-gray-900 group-hover:text-brand-maroon">Manage Reservation</span>
                      <span className="block text-xs text-gray-500">View, modify or cancel bookings</span>
                    </div>
                  </Link>
                  <div className="h-px bg-gray-100 my-1 mx-4" />
                  <Link to="/my-bookings" onClick={() => setActiveDropdown(null)} className="flex items-center px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-brand-maroon hover:bg-gray-50 transition-colors">
                    My Bookings Hub
                  </Link>
                </div>
              )}
            </div>

            {/* Service Areas */}
            <Link 
              to="/service-areas" 
              className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center transition-colors border-b-2 ${
                isLinkActive('/service-areas') 
                ? 'text-brand-yellow border-brand-yellow' 
                : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
              }`}
            >
              Locations
            </Link>
            
            {/* Pricing */}
            <Link 
              to="/pricing" 
              className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center transition-colors border-b-2 ${
                isLinkActive('/pricing') 
                ? 'text-brand-yellow border-brand-yellow' 
                : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
              }`}
            >
              Pricing
            </Link>

            <div className="flex-1" />

            {/* Help / Policies Dropdown */}
            <div className="h-full relative" onMouseEnter={() => handleMouseEnter('help')} onMouseLeave={handleMouseLeave}>
              <button 
                className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center gap-1 transition-colors border-b-2 ${
                  activeDropdown === 'help' || ['/help-support', '/safety-guidelines', '/rental-faqs', '/emergency', '/report-issue'].includes(location.pathname)
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
                }`}
              >
                Help & Info <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'help' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'help' && (
                <div className="absolute top-full right-0 bg-white shadow-xl flex flex-col min-w-[220px] border border-gray-100 rounded-b-md animate-in fade-in slide-in-from-top-1 py-3 px-2">
                  <Link to="/help-support" onClick={() => setActiveDropdown(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-800 hover:text-brand-maroon hover:bg-gray-50 rounded-sm transition-colors">
                    <LifeBuoy className="w-4 h-4 text-gray-400" /> Help & Support
                  </Link>
                  <Link to="/rental-faqs" onClick={() => setActiveDropdown(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-800 hover:text-brand-maroon hover:bg-gray-50 rounded-sm transition-colors">
                    <Info className="w-4 h-4 text-gray-400" /> Rental FAQs
                  </Link>
                  <Link to="/safety-guidelines" onClick={() => setActiveDropdown(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-800 hover:text-brand-maroon hover:bg-gray-50 rounded-sm transition-colors">
                    <Shield className="w-4 h-4 text-gray-400" /> Safety Guidelines
                  </Link>
                  <Link to="/report-issue" onClick={() => setActiveDropdown(null)} className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-800 hover:text-brand-maroon hover:bg-gray-50 rounded-sm transition-colors">
                     <Contact className="w-4 h-4 text-gray-400" /> Report an Issue
                  </Link>
                  <div className="h-px bg-gray-100 my-2 mx-3" />
                  <Link to="/sitemap" onClick={() => setActiveDropdown(null)} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-maroon transition-colors block">
                    Full Site Directory
                  </Link>
                </div>
              )}
            </div>
            
            {/* Careers */}
            <Link 
              to="/careers" 
              className={`h-full px-4 text-[13px] uppercase tracking-wide font-bold flex items-center transition-colors border-b-2 ${
                isLinkActive('/careers') 
                ? 'text-brand-yellow border-brand-yellow' 
                : 'text-white border-transparent hover:text-brand-yellow hover:border-brand-yellow/50'
              }`}
            >
              Careers
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-auto left-0 right-0 bg-white shadow-2xl h-[calc(100vh-65px)] overflow-y-auto w-full z-40 border-t border-gray-100 animate-in slide-in-from-left-full duration-300">
          <div className="flex flex-col px-4 py-6 gap-2">
            
            <Link to="/" onClick={closeMobileMenu} className={`text-lg font-bold p-3 rounded-md transition-colors ${isLinkActive('/') ? 'bg-brand-maroon/5 text-brand-maroon' : 'text-gray-900'}`}>
              Home
            </Link>

            {/* Mobile Services */}
            <div className={`rounded-md overflow-hidden transition-colors ${activeMobileDropdown === 'services' ? 'bg-gray-50' : ''}`}>
              <button 
                onClick={() => toggleMobileDropdown('services')}
                className="w-full flex justify-between items-center p-3 text-lg font-bold text-gray-900"
              >
                Services <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown === 'services' ? 'rotate-180 text-brand-maroon' : 'text-gray-400'}`} />
              </button>
              {activeMobileDropdown === 'services' && (
                <div className="px-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                  <div>
                    <h4 className="text-xs font-black tracking-widest text-brand-maroon uppercase mb-2 border-b border-gray-200 pb-1">Ride Pickup</h4>
                    <div className="flex flex-col gap-1">
                      <Link to="/instant-pickup" onClick={closeMobileMenu} className="py-2 text-[15px] font-medium text-gray-700">Instant Pickup</Link>
                      <Link to="/scheduled-pickup" onClick={closeMobileMenu} className="py-2 text-[15px] font-medium text-gray-700">Scheduled Pickup</Link>
                      <Link to="/airport-transfers" onClick={closeMobileMenu} className="py-2 text-[15px] font-medium text-gray-700">Airport Transfers</Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-widest text-brand-maroon uppercase mb-2 border-b border-gray-200 pb-1">Car Rental</h4>
                    <div className="flex flex-col gap-1">
                      <Link to="/one-way-rental" onClick={closeMobileMenu} className="py-2 text-[15px] font-medium text-gray-700">One-Way Rental</Link>
                      <Link to="/long-term-rental" onClick={closeMobileMenu} className="py-2 text-[15px] font-medium text-gray-700">Long-Term Rental</Link>
                      <Link to="/weekend-rental" onClick={closeMobileMenu} className="py-2 text-[15px] font-medium text-gray-700">Weekend Rental</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/vehicle-fleet" onClick={closeMobileMenu} className={`text-lg font-bold p-3 rounded-md transition-colors ${isLinkActive('/vehicle-fleet') ? 'bg-brand-maroon/5 text-brand-maroon' : 'text-gray-900'}`}>
              Our Fleet
            </Link>

            {/* Mobile Reservations */}
            <div className={`rounded-md overflow-hidden transition-colors ${activeMobileDropdown === 'reservations' ? 'bg-gray-50' : ''}`}>
              <button 
                onClick={() => toggleMobileDropdown('reservations')}
                className="w-full flex justify-between items-center p-3 text-lg font-bold text-gray-900"
              >
                Reservations <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown === 'reservations' ? 'rotate-180 text-brand-maroon' : 'text-gray-400'}`} />
              </button>
              {activeMobileDropdown === 'reservations' && (
                <div className="px-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
                  <Link to="/start-reservation" onClick={closeMobileMenu} className="py-2.5 text-[15px] font-bold text-brand-maroon flex items-center gap-2"><Car className="w-4 h-4"/> Start a Reservation</Link>
                  <Link to="/manage-reservation" onClick={closeMobileMenu} className="py-2.5 text-[15px] font-medium text-gray-700 flex items-center gap-2"><CalendarCheck className="w-4 h-4" /> Manage Reservation</Link>
                  <Link to="/my-bookings" onClick={closeMobileMenu} className="py-2.5 text-[15px] font-medium text-gray-700 flex items-center gap-2"><MapPin className="w-4 h-4" /> My Bookings</Link>
                </div>
              )}
            </div>

            <Link to="/service-areas" onClick={closeMobileMenu} className={`text-lg font-bold p-3 rounded-md transition-colors ${isLinkActive('/service-areas') ? 'bg-brand-maroon/5 text-brand-maroon' : 'text-gray-900'}`}>
              Locations
            </Link>
            
            <Link to="/pricing" onClick={closeMobileMenu} className={`text-lg font-bold p-3 rounded-md transition-colors ${isLinkActive('/pricing') ? 'bg-brand-maroon/5 text-brand-maroon' : 'text-gray-900'}`}>
              Pricing
            </Link>
            
            <Link to="/help-support" onClick={closeMobileMenu} className={`text-lg font-bold p-3 rounded-md transition-colors ${isLinkActive('/help-support') ? 'bg-brand-maroon/5 text-brand-maroon' : 'text-gray-900'}`}>
              Help & Support
            </Link>

            <Link to="/sitemap" onClick={closeMobileMenu} className={`text-lg font-bold p-3 rounded-md transition-colors ${isLinkActive('/sitemap') ? 'bg-brand-maroon/5 text-brand-maroon' : 'text-gray-900'}`}>
              Site Directory
            </Link>

            <div className="mt-8 px-2 border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-500 mb-4 font-medium">Customer Account</p>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/signin" onClick={closeMobileMenu} className="block w-full bg-white border-2 border-brand-maroon text-brand-maroon font-bold py-3 px-4 rounded-sm text-center transition-colors hover:bg-brand-maroon/5">
                  Sign In
                </Link>
                <Link to="/register" onClick={closeMobileMenu} className="block w-full bg-brand-maroon border-2 border-brand-maroon text-white font-bold py-3 px-4 rounded-sm text-center transition-colors hover:bg-brand-maroon-hover hover:border-brand-maroon-hover">
                  Register
                </Link>
              </div>
              <Link to="/start-reservation" onClick={closeMobileMenu} className="block w-full bg-brand-yellow text-brand-maroon font-bold py-4 px-4 rounded-sm text-center transition-colors hover:bg-brand-yellow-hover mt-4 shadow-sm">
                Book a Ride Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
