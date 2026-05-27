import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldAlert, KeyRound } from 'lucide-react';

export default function DriverLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate checking if first-time login
        const isTemporary = false; // Mock toggle
        if (isTemporary) {
            navigate('/driver/setup-password');
        } else {
            navigate('/driver/dashboard'); // Navigate to dashboard
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-8">
                     <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">XTASS <span className="text-brand-maroon">DRIVER</span></h2>
                </div>
                
                <div className="bg-white py-8 px-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-4 border-gray-900 sm:px-10">
                    <div className="mb-6 border-b-2 border-gray-200 pb-4">
                        <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight flex items-center">
                            <KeyRound className="w-6 h-6 mr-3 text-red-600" />
                            Driver Gateway
                        </h1>
                        <p className="text-gray-500 font-medium mt-1 text-sm">Secure access for employed XTASS drivers.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Registered Phone Number</label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    defaultValue="+233 50 123 4567"
                                    className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 bg-gray-50 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-white transition-colors sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                             <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                            </div>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    defaultValue="temp-pass-123"
                                    className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 bg-gray-50 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-white transition-colors sm:text-sm pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-900"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <Eye className="h-5 w-5" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-widest text-white bg-gray-900 hover:bg-gray-800 shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-y-1 transition-all"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 flex items-center justify-center border-t-2 border-gray-200 pt-6">
                        <Link to="/driver/forgot-password" className="text-xs font-black text-gray-500 uppercase tracking-widest hover:text-brand-maroon transition-colors">
                            Forgot your password?
                        </Link>
                    </div>

                    <div className="mt-6 bg-red-50 p-4 border border-red-200 flex items-start">
                         <ShieldAlert className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                         <p className="text-[10px] uppercase font-bold text-red-800 leading-relaxed tracking-wider">
                             Driver accounts are created exclusively by XTASS administrators. There is no self-registration option. If you are a new employee, please use the temporary credentials provided by the operations team.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
