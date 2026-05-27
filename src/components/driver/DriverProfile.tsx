import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DriverLayout from './DriverLayout';
import { User, Mail, Phone, MapPin, Briefcase, Calendar, ShieldCheck, FileText, AlertTriangle, Edit2, LogOut, Save, Camera } from 'lucide-react';

export default function DriverProfile() {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [emergencyContact, setEmergencyContact] = useState('Sarah Annan (Wife) - 050 999 8888');
    const [savedToast, setSavedToast] = useState(false);
    const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);

    const handleSave = () => {
        setIsEditing(false);
        setSavedToast(true);
        setTimeout(() => setSavedToast(false), 3000);
    };

    const handleSignOut = () => {
        navigate('/driver/login');
    };

    return (
        <DriverLayout>
            {/* Toast */}
            {savedToast && (
                <div className="fixed top-20 right-4 sm:right-8 bg-green-600 text-white px-6 py-4 border-2 border-green-800 shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-50 animate-fade-in flex items-center">
                    <Save className="w-5 h-5 mr-3" />
                    <span className="font-black uppercase tracking-widest text-sm">Profile Updated</span>
                </div>
            )}

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-12 relative">
                 <div className="mb-8 border-b-4 border-gray-900 pb-4 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            My Profile
                        </h1>
                        <p className="text-gray-500 font-medium mt-2">View and manage your driver profile details.</p>
                    </div>
                    <div>
                         {!isEditing ? (
                             <button onClick={() => setIsEditing(true)} className="flex items-center text-xs font-black uppercase tracking-widest bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                                 <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
                             </button>
                         ) : (
                             <button onClick={handleSave} className="flex items-center text-xs font-black uppercase tracking-widest bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors">
                                 <Save className="w-4 h-4 mr-2" /> Save Changes
                             </button>
                         )}
                    </div>
                </div>

                <div className="space-y-8">
                     {/* Personal Details */}
                     <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden">
                         <div className="bg-gray-100 p-8 md:w-1/3 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-gray-900 relative">
                              <div className="relative w-32 h-32 bg-gray-300 border-4 border-white shadow-lg mb-4 rounded-full overflow-hidden group hover:opacity-90 transition-opacity">
                                  <img src="https://i.ibb.co/PsknGR3p/Airport-Pickup-9.jpg" alt="Driver Profile" className="w-full h-full object-cover" />
                                  {isEditing && (
                                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer">
                                          <Camera className="w-8 h-8 text-white" />
                                      </div>
                                  )}
                              </div>
                              <h2 className="text-xl font-black text-gray-900 text-center">KOFI ANNAN</h2>
                              <span className="flex items-center mt-2 text-yellow-500 font-black">
                                  4.8 <StarIcon className="w-4 h-4 ml-1 fill-current" />
                              </span>
                              <span className="bg-green-100 text-green-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-green-800 mt-2">Active Employee</span>
                         </div>
                         <div className="p-8 md:w-2/3">
                              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 pb-2 border-b-2 border-gray-100">Personal Details</h3>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                  <div>
                                      <div className="flex items-center text-gray-400 mb-1">
                                          <User className="w-4 h-4 mr-2" />
                                          <span className="text-[10px] uppercase font-bold tracking-widest">Full Legal Name <span className="text-red-500">*</span></span>
                                      </div>
                                      <p className="font-black text-gray-900">Kofi Osei Annan <span className="text-[10px] text-gray-400 ml-2 font-medium">(Read-only)</span></p>
                                  </div>
                                  <div>
                                      <div className="flex items-center text-gray-400 mb-1">
                                          <Phone className="w-4 h-4 mr-2" />
                                          <span className="text-[10px] uppercase font-bold tracking-widest">Phone Number <span className="text-red-500">*</span></span>
                                      </div>
                                      <p className="font-black text-gray-900">+233 50 123 4567 <span className="text-[10px] text-gray-400 ml-2 font-medium">(Read-only)</span></p>
                                  </div>
                                  <div>
                                      <div className="flex items-center text-gray-400 mb-1">
                                          <Mail className="w-4 h-4 mr-2" />
                                          <span className="text-[10px] uppercase font-bold tracking-widest">Email Address <span className="text-red-500">*</span></span>
                                      </div>
                                      <p className="font-black text-gray-900">kofi.annan@xtass.com <span className="text-[10px] text-gray-400 ml-2 font-medium">(Read-only)</span></p>
                                  </div>
                                  <div>
                                      <div className="flex items-center text-gray-400 mb-1">
                                          <MapPin className="w-4 h-4 mr-2" />
                                          <span className="text-[10px] uppercase font-bold tracking-widest">Home City <span className="text-red-500">*</span></span>
                                      </div>
                                      <p className="font-black text-gray-900">Accra, Greater Accra <span className="text-[10px] text-gray-400 ml-2 font-medium">(Read-only)</span></p>
                                  </div>
                              </div>

                              <div className="border-t-2 border-gray-100 pt-6">
                                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Emergency Contact</label>
                                  {isEditing ? (
                                      <input 
                                          type="text" 
                                          value={emergencyContact}
                                          onChange={(e) => setEmergencyContact(e.target.value)}
                                          className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900"
                                      />
                                  ) : (
                                      <p className="font-black text-gray-900 border-2 border-transparent p-3 bg-gray-50">{emergencyContact}</p>
                                  )}
                              </div>
                         </div>
                     </div>

                     {/* Employment Details */}
                     <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                         <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest flex items-center mb-6 pb-4 border-b-2 border-gray-200">
                             <Briefcase className="w-6 h-6 mr-3 text-red-600" /> Employment Info (Read-Only)
                         </h3>

                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                              <div>
                                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Employee ID</span>
                                  <p className="font-mono font-black text-lg text-brand-maroon">XT-DVR-0921</p>
                              </div>
                              <div>
                                  <div className="flex items-center text-gray-400 mb-1">
                                      <Calendar className="w-4 h-4 mr-2" />
                                      <span className="text-[10px] uppercase font-bold tracking-widest">Start Date</span>
                                  </div>
                                  <p className="font-black text-gray-900">October 15, 2022</p>
                              </div>
                              <div>
                                  <div className="flex items-center text-gray-400 mb-1">
                                      <ShieldCheck className="w-4 h-4 mr-2" />
                                      <span className="text-[10px] uppercase font-bold tracking-widest">Authorised Service Levels</span>
                                  </div>
                                  <div className="flex gap-2 flex-wrap mt-1">
                                      <span className="bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">Premium</span>
                                      <span className="bg-gray-200 text-gray-900 text-[10px] font-black uppercase tracking-widest px-2 py-1">Business</span>
                                  </div>
                              </div>
                         </div>
                     </div>
                     
                     {/* Sign Out Action */}
                     <div className="flex justify-center pt-8 border-t-2 border-gray-200">
                          <button 
                            onClick={() => setShowSignOutConfirm(true)}
                            className="flex items-center justify-center text-sm font-black uppercase tracking-widest text-brand-maroon hover:text-red-800 transition-colors"
                          >
                              <LogOut className="w-5 h-5 mr-2" /> Sign out of Driver App
                          </button>
                     </div>
                </div>
            </div>

            {/* Sign Out Confirm Modal */}
            {showSignOutConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setShowSignOutConfirm(false)}></div>
                    <div className="bg-white border-4 border-gray-900 shadow-2xl relative z-10 w-full max-w-sm p-6 text-center">
                        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-2">Sign Out?</h2>
                        <p className="text-sm font-bold text-gray-600 mb-6">You will not receive trip assignments while signed out.</p>
                        <div className="flex gap-4">
                            <button onClick={() => setShowSignOutConfirm(false)} className="flex-1 border-2 border-gray-300 py-3 text-sm font-black uppercase tracking-widest text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                                Cancel
                            </button>
                            <button onClick={handleSignOut} className="flex-1 bg-brand-maroon text-white border-2 border-transparent py-3 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(153,27,27,1)] hover:shadow-none hover:translate-y-1 transition-all">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DriverLayout>
    );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

