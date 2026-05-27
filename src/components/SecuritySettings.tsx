import { useState } from 'react';
import { ShieldCheck, Key, Smartphone, Monitor, ShieldAlert, CheckCircle2, Lock, LogOut, AlertTriangle, X } from 'lucide-react';

interface Session {
  id: string;
  device: string;
  lastActive: string;
  location: string;
  isCurrent: boolean;
}

const INITIAL_SESSIONS: Session[] = [
  { id: '1', device: 'MacBook Pro - Safari', lastActive: 'Active now', location: 'Accra, Ghana', isCurrent: true },
  { id: '2', device: 'iPhone 13 - XTASS App', lastActive: '2 hours ago', location: 'Kumasi, Ghana', isCurrent: false }
];

export default function SecuritySettings() {
  // Password State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordToast, setPasswordToast] = useState(false);

  // 2FA State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);

  // Sessions State
  const [sessions, setSessions] = useState<Session[]>(INITIAL_SESSIONS);

  // Delete Account State
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate save
    setPasswordToast(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPasswordToast(false), 3000);
  };

  const handleTwoFactorToggle = () => {
    setShowTwoFactorModal(true);
  };

  const confirmTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    setShowTwoFactorModal(false);
  };

  const handleSignOutSession = (id: string) => {
    setSessions(sessions.filter(s => s.id !== id));
  };

  const handleSignOutAll = () => {
    setSessions(sessions.filter(s => s.isCurrent));
    // In reality this would log them out of everything
    alert("Signed out of all other devices.");
  };

  const handleDeleteAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deletePassword) return;
    alert("Account permanently deleted. Redirecting to home...");
    window.location.href = '/';
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24 relative">
      
      {/* Toast Notification */}
      {passwordToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold text-sm tracking-wide">Password updated successfully.</span>
        </div>
      )}

      {/* Two Factor Confirmation Modal */}
      {showTwoFactorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowTwoFactorModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              <div className="w-12 h-12 bg-brand-maroon/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-brand-maroon" />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-2">
                {twoFactorEnabled ? 'Disable 2FA?' : 'Enable 2FA?'}
              </h3>
              <p className="text-gray-600 mb-8">
                {twoFactorEnabled 
                  ? "Disabling Two-Factor Authentication will make your account less secure. You will only need your password to sign in."
                  : "Enabling Two-Factor Authentication provides an extra layer of security. You will need to enter an OTP code sent to your phone when signing in."
                }
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={confirmTwoFactorToggle}
                  className="flex-1 bg-brand-maroon text-white font-bold py-3 uppercase tracking-wider text-sm hover:bg-brand-maroon-hover transition-colors"
                >
                  Confirm
                </button>
                <button 
                  onClick={() => setShowTwoFactorModal(false)}
                  className="flex-1 bg-white border-2 border-gray-200 text-gray-900 font-bold py-3 uppercase tracking-wider text-sm hover:border-gray-900 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200 border-t-4 border-red-600">
            <button 
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-2">
                Delete Account
              </h3>
              <p className="text-gray-600 mb-6">
                This action is permanent and cannot be undone. All your trip history, saved settings, and data will be permanently erased. Please enter your password to confirm.
              </p>
              
              <form onSubmit={handleDeleteAccount}>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Password</label>
                  <input 
                    type="password" 
                    value={deletePassword} 
                    onChange={(e) => setDeletePassword(e.target.value)}
                    required
                    className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                <div className="flex gap-4">
                  <button 
                    type="submit"
                    className="flex-1 bg-red-600 text-white font-bold py-3 uppercase tracking-wider text-sm hover:bg-red-700 transition-colors"
                  >
                    Delete Forever
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}


      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Security Settings
            </h1>
            <p className="text-gray-300 font-medium">Protect your account and manage active sessions.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20 space-y-8">
        
        {/* Change Password */}
        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 flex items-center">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4">
              <Key className="w-5 h-5 text-gray-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Change Password</h2>
          </div>
          
          <div className="p-6 md:p-8">
            <form onSubmit={handlePasswordSave} className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Current Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="password" 
                    value={currentPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">New Password *</label>
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
                <p className="text-xs text-gray-500 font-medium">8+ characters, 1 uppercase, 1 number, 1 special character.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Confirm New Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="bg-brand-maroon text-white font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-brand-maroon-hover transition-colors">
                  Save Password
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 2FA */}
        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4">
                <ShieldCheck className={`w-5 h-5 ${twoFactorEnabled ? 'text-green-500' : 'text-gray-500'}`} />
              </div>
              <div>
                <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Two-Factor Auth</h2>
                <p className="text-sm text-gray-500 mt-1">Requires an OTP code on every login for extra security.</p>
              </div>
            </div>
            <button 
              onClick={handleTwoFactorToggle}
              className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center justify-center transition-colors focus:outline-none`}
            >
              <span className={`absolute flex h-8 w-14 rounded-full transition-colors ${twoFactorEnabled ? 'bg-green-500' : 'bg-gray-200'}`}></span>
              <span className={`absolute left-0 inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition-transform ${twoFactorEnabled ? 'translate-x-7' : 'translate-x-1'}`}></span>
            </button>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4">
                <Monitor className="w-5 h-5 text-gray-500" />
              </div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Active Sessions</h2>
            </div>
            {sessions.length > 1 && (
              <button 
                onClick={handleSignOutAll}
                className="text-sm font-bold text-red-600 hover:text-red-700 uppercase tracking-wider"
              >
                Sign Out All Devices
              </button>
            )}
          </div>
          
          <div className="divide-y divide-gray-100">
            {sessions.map((session) => (
              <div key={session.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="font-bold text-gray-900 mr-3">{session.device}</h3>
                    {session.isCurrent && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">This Device</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {session.location} • {session.lastActive}
                  </p>
                </div>
                {!session.isCurrent && (
                  <button 
                    onClick={() => handleSignOutSession(session.id)}
                    className="flex items-center justify-center px-4 py-2 border border-gray-200 hover:bg-gray-50 text-sm font-bold text-gray-700 uppercase tracking-wider transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Delete Account */}
        <div className="bg-white shadow-xl border border-red-200 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-2 flex items-center">
                <ShieldAlert className="w-5 h-5 mr-3 text-red-600" />
                Danger Zone
              </h2>
              <p className="text-sm text-gray-500">Permanently delete your XTASS account and all associated data.</p>
            </div>
            <button 
              onClick={() => setShowDeleteModal(true)}
              className="bg-red-50 text-red-600 border border-red-200 font-bold py-3 px-6 text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors whitespace-nowrap"
            >
              Delete Account
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}
