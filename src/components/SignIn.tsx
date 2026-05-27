import { Eye, EyeOff, Loader2, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function SignIn() {
  const [identifier, setIdentifier] = useState('johndoe@example.com');
  const [password, setPassword] = useState('Password123!');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTimer, setLockoutTimer] = useState(0);
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const sessionExpired = location.state?.sessionExpired;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (lockoutTimer > 0) {
      timer = setInterval(() => {
        setLockoutTimer(prev => prev - 1);
      }, 1000);
    } else if (failedAttempts >= 5) {
      setFailedAttempts(0); // reset after lockout
    }
    return () => clearInterval(timer);
  }, [lockoutTimer, failedAttempts]);

  const isFormValid = identifier.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTimer > 0) return;
    
    setIsLoading(true);
    setError('');

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      const newAttempts = failedAttempts + 1;
      setFailedAttempts(newAttempts);
      
      if (newAttempts >= 5) {
        setLockoutTimer(60);
        setError('Too many failed attempts. Please try again later.');
      } else {
        setError('Invalid email/phone or password. Please try again.');
      }
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      setIsGoogleLoading(false);
      navigate('/verify-otp'); // Mock redirect to post-login verification
    }, 1500);
  };

  return (
    <main className="flex-grow flex flex-col items-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-2xl border border-gray-100 mt-8">
        
        <div className="mb-8 text-center overflow-hidden">
          <h1 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Customer Login</h1>
          <p className="text-gray-500 font-medium">Access your XTASS account.</p>
        </div>
        
        {sessionExpired && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-bold text-center rounded">
            Your session has expired. Please sign in again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1 uppercase tracking-wider">Email or Phone</label>
            <input 
              type="text" 
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={lockoutTimer > 0 || isLoading || isGoogleLoading}
              className={`w-full border-2 rounded p-3 text-sm focus:outline-none transition-colors ${error ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
              placeholder="e.g. john@example.com or 0241234567" 
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Password</label>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={lockoutTimer > 0 || isLoading || isGoogleLoading}
                className="text-gray-500 hover:text-brand-maroon text-xs font-bold flex items-center gap-1 disabled:opacity-50 uppercase tracking-wider transition-colors"
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'} 
                {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              </button>
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={lockoutTimer > 0 || isLoading || isGoogleLoading}
              className={`w-full border-2 rounded p-3 text-sm focus:outline-none pr-10 transition-colors ${error ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-brand-maroon'} disabled:bg-gray-100 disabled:text-gray-500`} 
              placeholder="Enter your password" 
            />
          </div>

          <div className="flex justify-between items-center mt-1">
            {error ? (
              <p className="text-xs text-red-600 font-bold max-w-[60%] leading-tight">
                {error}
                {failedAttempts > 0 && failedAttempts < 5 && <span className="block opacity-75 mt-0.5">Attempt {failedAttempts} of 5</span>}
              </p>
            ) : (
               <div /> // dummy div for flex-between
            )}
            
            <Link to="/forgot-password" className="text-sm font-bold text-gray-500 hover:text-brand-maroon uppercase tracking-wider transition-colors shrink-0">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit"
            disabled={!isFormValid || lockoutTimer > 0 || isLoading || isGoogleLoading}
            className="w-full py-4 mt-2 bg-brand-maroon hover:bg-brand-maroon-hover rounded text-white font-bold uppercase tracking-wider text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 
             lockoutTimer > 0 ? `Locked out for ${lockoutTimer}s` : 'Login'}
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Or login with</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <div className="flex flex-col gap-4">
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={lockoutTimer > 0 || isLoading || isGoogleLoading}
            className="w-full py-4 border-2 border-gray-200 rounded font-bold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
          >
            {isGoogleLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Sign In
              </>
            )}
          </button>

          <Link 
            to="/live-photo-login"
            className="w-full py-4 border-2 border-brand-maroon/20 bg-brand-maroon/5 rounded font-bold text-brand-maroon hover:bg-brand-maroon/10 transition-colors flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
          >
            <Camera className="w-5 h-5" />
            Live Photo capture
          </Link>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600 font-medium border-t border-gray-100 pt-6">
          Don't have an account? <Link to="/register" className="text-brand-maroon font-bold hover:underline uppercase tracking-wider ml-1">Register</Link>
        </p>

      </div>
    </main>
  );
}
