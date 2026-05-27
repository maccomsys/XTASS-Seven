import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Globe, CarFront, Check, Camera } from 'lucide-react';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('official.xtassone@gmail.com');
  const [phone, setPhone] = useState('+233201234567');
  const [language, setLanguage] = useState('en');
  const [serviceLevel, setServiceLevel] = useState('standard');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      
      setTimeout(() => {
        navigate('/account');
      }, 1500);
    }, 1000);
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24 relative">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold text-sm tracking-wide">Profile updated successfully.</span>
        </div>
      )}

      {/* Header */}
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
            Edit Profile
          </h1>
          <p className="text-gray-300 font-medium">Update your personal information and preferences.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="bg-white shadow-xl border border-gray-100 p-8">
          
          <form onSubmit={handleSave} className="space-y-8">
            
            {/* Photo Upload */}
            <div className="flex flex-col items-center pb-8 border-b border-gray-100">
              <div 
                className="w-28 h-28 bg-brand-maroon rounded-full relative cursor-pointer group mb-4 overflow-hidden"
                onClick={handleImageClick}
              >
                {profileImage ? (
                  <img src={profileImage} alt="Profile preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-black text-white">JD</div>
                )}
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
              <button 
                type="button" 
                onClick={handleImageClick}
                className="text-brand-maroon font-bold text-sm hover:underline"
              >
                Change Profile Photo
              </button>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-100">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Language Preference</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm appearance-none font-medium"
                  >
                    <option value="en">English (UK)</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Default Service Level</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CarFront className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    value={serviceLevel} 
                    onChange={(e) => setServiceLevel(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm appearance-none font-medium"
                  >
                    <option value="standard">Standard Class</option>
                    <option value="business">Business Class</option>
                    <option value="first">First Class</option>
                    <option value="suv">Premium SUV</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 py-4 font-bold text-sm tracking-wider uppercase transition-colors bg-brand-maroon text-white hover:bg-brand-maroon-hover flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/account')}
                disabled={isSaving}
                className="sm:w-48 py-4 border-2 border-gray-200 text-gray-900 font-bold text-center text-sm tracking-wider uppercase hover:border-gray-900 transition-colors bg-white disabled:opacity-70"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}
