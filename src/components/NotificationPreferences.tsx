import { useState } from 'react';
import { Bell, Smartphone, Mail, Info, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function NotificationPreferences() {
  const [showToast, setShowToast] = useState(false);

  // States
  const [bookingEmail, setBookingEmail] = useState(true);
  const [bookingSms, setBookingSms] = useState(true);
  const [bookingInApp, setBookingInApp] = useState(true);

  const [driverEmail, setDriverEmail] = useState(false);
  const [driverSms, setDriverSms] = useState(false);
  const [driverInApp, setDriverInApp] = useState(true);

  const [reminderEmail, setReminderEmail] = useState(true);
  const [reminderSms, setReminderSms] = useState(true);
  const [reminderInApp, setReminderInApp] = useState(true);

  const [emergencySms, setEmergencySms] = useState(true);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const Toggle = ({ checked, onChange, disabled = false, label }: { checked: boolean, onChange: (c: boolean) => void, disabled?: boolean, label: string }) => (
    <label className={`flex items-center space-x-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className={`relative inline-flex h-6 w-11 shrink-0 items-center justify-center transition-colors focus:outline-none rounded-full ${checked ? 'bg-brand-maroon' : 'bg-gray-200'}`}>
        <span className={`absolute left-0.5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`}></span>
      </div>
      <span className="text-sm font-bold text-gray-900">{label}</span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => !disabled && onChange(e.target.checked)} />
    </label>
  );

  return (
    <main className="flex-grow bg-gray-50 pb-24 relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold text-sm tracking-wide">Notification preferences saved.</span>
        </div>
      )}

      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Notifications
            </h1>
            <p className="text-gray-300 font-medium">Control how and when we contact you about your trips.</p>
          </div>
          <button 
            onClick={handleSave}
            className="mt-6 md:mt-0 bg-brand-yellow text-gray-900 font-bold py-3 px-8 uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors shadow-lg"
          >
            Save Preferences
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20 space-y-6">
        
        {/* Booking Updates */}
        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0">
              <Info className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-1">Booking Updates</h2>
              <p className="text-sm text-gray-500">Confirmations, modifications, and cancellations.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <Toggle checked={bookingEmail} onChange={setBookingEmail} label="Email" />
            <Toggle checked={bookingSms} onChange={setBookingSms} label="SMS" />
            <Toggle checked={bookingInApp} onChange={setBookingInApp} label="In-App" />
          </div>
        </div>

        {/* Driver Updates */}
        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0">
              <Smartphone className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-1">Driver Updates</h2>
              <p className="text-sm text-gray-500">Driver assigned, driver arrived, and trip started.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <Toggle checked={driverEmail} onChange={setDriverEmail} label="Email" />
            <Toggle checked={driverSms} onChange={setDriverSms} label="SMS" />
            <Toggle checked={driverInApp} onChange={setDriverInApp} label="In-App (Recommended)" />
          </div>
        </div>

        {/* Trip Reminders */}
        <div className="bg-white shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 shrink-0">
              <Bell className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-1">Trip Reminders</h2>
              <p className="text-sm text-gray-500">24-hour pre-trip reminders so you are always prepared.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <Toggle checked={reminderEmail} onChange={setReminderEmail} label="Email" />
            <Toggle checked={reminderSms} onChange={setReminderSms} label="SMS" />
            <Toggle checked={reminderInApp} onChange={setReminderInApp} label="In-App" />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white shadow-xl border border-red-200 overflow-hidden relative p-6 md:p-8">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
          <div className="flex items-start mb-6 pl-2">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-4 shrink-0">
              <ShieldAlert className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-1">Emergency Contacts</h2>
              <p className="text-sm text-gray-500">Automatically send trip progress links to your saved emergency contacts.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100 pl-2">
            <Toggle checked={emergencySms} onChange={setEmergencySms} label="SMS Alerts" />
          </div>
        </div>

      </section>
    </main>
  );
}
