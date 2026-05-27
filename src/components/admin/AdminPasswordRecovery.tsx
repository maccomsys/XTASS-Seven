import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function AdminPasswordRecovery() {
  const [email, setEmail] = useState('admin@xtass.com');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-700">
            <ShieldCheck className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">
          Admin Recovery
        </h2>
        <p className="mt-2 text-center text-sm font-medium text-gray-400">
          Request a password reset for your admin account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          
          {submitted ? (
            <div className="text-center py-4">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900 mb-2 uppercase tracking-wide">
                Check Your Email
              </h3>
              <p className="text-sm text-gray-500 font-medium mb-8">
                Reset instructions have been sent to your admin email address.
              </p>
              <Link
                to="/admin/login"
                className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded shadow-sm text-sm font-bold uppercase tracking-widest text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors"
              >
                Return to Login
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="email">
                  Admin Email Address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full pl-10 pr-4 py-3 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-maroon focus:border-brand-maroon font-medium text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded shadow-sm text-sm font-black uppercase tracking-widest text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
                >
                  Send Reset Instructions
                </button>
              </div>

              <div className="mt-6 text-center">
                 <Link to="/admin/login" className="inline-flex items-center font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest text-xs">
                   <ArrowLeft className="w-4 h-4 mr-2" />
                   Back to Login
                 </Link>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
