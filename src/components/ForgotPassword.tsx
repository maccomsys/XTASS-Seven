import { useState } from 'react';
import { Loader2, KeyRound, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState('kwame@example.com');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) return;

    setIsLoading(true);

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="flex-grow flex flex-col items-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-2xl border border-gray-100 mt-12">
        
        {!isSuccess ? (
          <>
            <div className="mb-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-200">
                <KeyRound className="w-8 h-8 text-brand-maroon" />
              </div>
              <h1 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Forgot Password?</h1>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                Enter your registered email address or phone number and we'll send you instructions to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Email or Phone</label>
                <input 
                  type="text" 
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  disabled={isLoading}
                  className="w-full border-2 border-gray-200 rounded p-4 text-sm font-medium focus:outline-none focus:border-brand-maroon focus:ring-0 disabled:bg-gray-50 transition-colors placeholder:font-normal placeholder:text-gray-400" 
                  placeholder="e.g. john@example.com or 0241234567" 
                />
              </div>

              <button 
                type="submit"
                disabled={!identifier.trim() || isLoading}
                className="w-full py-4 bg-brand-maroon hover:bg-brand-maroon-hover rounded text-white font-bold uppercase tracking-wider text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Reset Link'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4 text-center flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">Request Sent!</h2>
            <p className="text-gray-600 font-medium mb-8">
              Reset instructions sent. Please check your email or phone for the next steps.
            </p>
          </div>
        )}

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <Link to="/signin" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-brand-maroon transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Login
          </Link>
        </div>

      </div>
    </main>
  );
}
