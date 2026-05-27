import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';

export default function DriverSetupPassword() {
    const [password, setPassword] = useState('NewPass123!');
    const [confirmPassword, setConfirmPassword] = useState('NewPass123!');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [strength, setStrength] = useState<'Weak' | 'Fair' | 'Strong'>('Fair');
    
    const navigate = useNavigate();

    // Check strength basic logic
    useEffect(() => {
        if (password.length === 0) setStrength('Weak');
        else if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) setStrength('Strong');
        else if (password.length >= 8) setStrength('Fair');
        else setStrength('Weak');
    }, [password]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (strength === 'Weak') {
             alert('Password is too weak. Must be 8+ characters, with uppercase, number, and special character.');
             return;
        }
        alert('Password successfully set!');
        navigate('/driver/dashboard'); // Navigate to dashboard
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-8">
                     <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">XTASS <span className="text-brand-maroon">DRIVER</span></h2>
                </div>
                
                <div className="bg-white py-8 px-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-4 border-gray-900 sm:px-10">
                    <div className="mb-6 border-b-2 border-gray-200 pb-4 text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                             <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h1 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                            Secure Your Account
                        </h1>
                        <p className="text-gray-600 font-medium text-sm leading-relaxed">
                            Welcome to XTASS Driver App. For your security, please set a new permanent password before continuing.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                             <label htmlFor="password" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">New Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 bg-gray-50 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-white transition-colors sm:text-sm pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-900"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            
                            {/* Strength Indicator */}
                            {password && (
                                <div className="mt-3 flex items-center gap-2">
                                    <div className="flex-1 flex gap-1 h-2">
                                        <div className={`flex-1 ${strength === 'Weak' || strength === 'Fair' || strength === 'Strong' ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                                        <div className={`flex-1 ${strength === 'Fair' || strength === 'Strong' ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
                                        <div className={`flex-1 ${strength === 'Strong' ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                                        strength === 'Weak' ? 'text-red-600' : strength === 'Fair' ? 'text-yellow-600' : 'text-green-600'
                                    }`}>
                                        {strength}
                                    </span>
                                </div>
                            )}
                            <p className="text-[10px] text-gray-500 uppercase font-bold mt-2">Required: 8+ chars, 1 uppercase, 1 number, 1 special char.</p>
                        </div>

                        <div>
                             <label htmlFor="confirm-password" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    id="confirm-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 bg-gray-50 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-white transition-colors sm:text-sm pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-900"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                        
                        {(password && confirmPassword && password !== confirmPassword) && (
                            <div className="text-red-600 text-xs font-black uppercase tracking-widest flex items-center">
                                <AlertCircle className="w-3 h-3 mr-1" /> Passwords do not match
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-widest text-white bg-gray-900 hover:bg-gray-800 shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-y-1 transition-all"
                            >
                                Set Password & Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
