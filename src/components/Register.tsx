import { useState, useEffect } from 'react';
import { Eye, EyeOff, Loader2, Check, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [fullName, setFullName] = useState('Kwame Nkrumah');
  const [email, setEmail] = useState('kwame@example.com');
  const [phone, setPhone] = useState('0241234567');
  const [password, setPassword] = useState('StrongPass1!');
  const [confirmPassword, setConfirmPassword] = useState('StrongPass1!');
  const [agreeTerms, setAgreeTerms] = useState(true);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation States
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  // Real-time validation
  useEffect(() => {
    if (fullName) setNameError(fullName.length < 2 ? 'Name must be at least 2 characters.' : '');
    if (email) setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Enter a valid email address.' : '');
    if (phone) setPhoneError(!/^\d{10}$/.test(phone) ? 'Phone must be exactly 10 digits.' : '');
    
    if (password) {
      const isStrong = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
      setPasswordError(isStrong ? '' : 'Must be 8+ chars, 1 uppercase, 1 number, 1 special char.');
    }
    
    if (confirmPassword) setConfirmPasswordError(password !== confirmPassword ? 'Passwords do not match.' : '');
  }, [fullName, email, phone, password, confirmPassword]);

  const isValidName = fullName.length >= 2;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = /^\d{10}$/.test(phone);
  const isValidPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const isPasswordsMatch = confirmPassword.length > 0 && password === confirmPassword;

  const isFormValid = isValidName && isValidEmail && isValidPhone && isValidPassword && isPasswordsMatch && agreeTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsLoading(true);

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/verify-otp');
    }, 1500);
  };

  const ValidIcon = ({ valid, value, error }: { valid: boolean, value: string, error: string }) => {
    if (!value) return null;
    return valid ? <Check className="w-5 h-5 text-green-500 absolute right-4 top-[42px]" /> : null;
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 md:p-10 shadow-2xl border border-gray-100">
        
        <div className="mb-8 overflow-hidden">
          <h1 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Create Account</h1>
          <p className="text-gray-500 font-medium">Join XTASS for a premium travel experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div className="relative">
            <label className="block text-sm font-bold text-gray-900 mb-1 uppercase tracking-wider">Full Name</label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isLoading}
              className={`w-full border-2 rounded p-3 text-sm focus:outline-none transition-colors ${nameError ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100`} 
              placeholder="e.g. John Doe" 
            />
            {nameError && <p className="text-xs text-red-600 mt-1 font-bold">{nameError}</p>}
            <ValidIcon valid={isValidName} value={fullName} error={nameError} />
          </div>

          <div className="relative">
            <label className="block text-sm font-bold text-gray-900 mb-1 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className={`w-full border-2 rounded p-3 text-sm focus:outline-none transition-colors ${emailError ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100`} 
              placeholder="john@example.com" 
            />
            {emailError && <p className="text-xs text-red-600 mt-1 font-bold">{emailError}</p>}
            <ValidIcon valid={isValidEmail} value={email} error={emailError} />
          </div>

          <div className="relative">
            <label className="block text-sm font-bold text-gray-900 mb-1 uppercase tracking-wider">Phone Number</label>
            <div className="flex">
              <div className="bg-gray-100 border-2 border-r-0 border-gray-200 rounded-l p-3 text-sm font-bold text-gray-600">
                +233
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
                className={`w-full border-2 rounded-r p-3 text-sm focus:outline-none transition-colors ${phoneError ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100`} 
                placeholder="024 123 4567" 
              />
            </div>
            {phoneError && <p className="text-xs text-red-600 mt-1 font-bold">{phoneError}</p>}
            <ValidIcon valid={isValidPhone} value={phone} error={phoneError} />
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Password</label>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="text-gray-500 hover:text-brand-maroon text-xs font-bold flex items-center gap-1 disabled:opacity-50 transition-colors uppercase tracking-wider"
              >
                {showPassword ? 'Hide' : 'Show'} 
                {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              </button>
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className={`w-full border-2 rounded p-3 text-sm focus:outline-none transition-colors pr-10 ${passwordError ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100`} 
              placeholder="Create a strong password" 
            />
            {passwordError && <p className="text-xs text-red-600 mt-1 font-bold">{passwordError}</p>}
            <ValidIcon valid={isValidPassword} value={password} error={passwordError} />
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Confirm Password</label>
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
                className="text-gray-500 hover:text-brand-maroon text-xs font-bold flex items-center gap-1 disabled:opacity-50 transition-colors uppercase tracking-wider"
              >
                {showConfirmPassword ? 'Hide' : 'Show'} 
                {showConfirmPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              </button>
            </div>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              className={`w-full border-2 rounded p-3 text-sm focus:outline-none transition-colors pr-10 ${confirmPasswordError ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100`} 
              placeholder="Confirm your password" 
            />
            {confirmPasswordError && <p className="text-xs text-red-600 mt-1 font-bold">{confirmPasswordError}</p>}
             <ValidIcon valid={isPasswordsMatch} value={confirmPassword} error={confirmPasswordError} />
          </div>

          <div className="flex items-start gap-3 mt-2">
            <input 
              type="checkbox" 
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              disabled={isLoading}
              className="mt-1 w-5 h-5 text-brand-maroon focus:ring-brand-maroon border-gray-300 rounded-sm disabled:opacity-50 cursor-pointer"
            />
            <label htmlFor="agreeTerms" className="text-sm text-gray-600 font-medium select-none cursor-pointer">
              I agree to the <Link to="/terms-conditions" target="_blank" className="font-bold text-brand-maroon hover:underline">Terms &amp; Conditions</Link> and <Link to="/privacy-policy" target="_blank" className="font-bold text-brand-maroon hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <button 
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full py-4 mt-2 bg-brand-maroon hover:bg-brand-maroon-hover rounded text-white font-bold uppercase tracking-wider text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Create Account'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 font-medium border-t border-gray-100 pt-6">
          Already have an account? <Link to="/signin" className="text-brand-maroon font-bold hover:underline uppercase tracking-wider ml-1">Sign In</Link>
        </p>

      </div>
    </main>
  );
}
