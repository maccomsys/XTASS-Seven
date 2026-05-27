import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function DriverPasswordRecovery() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
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
                            Password Reset
                        </h1>
                    </div>

                    {isSubmitted ? (
                        <div className="text-center py-4">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-2">Instructions Sent</h3>
                            <p className="text-sm text-gray-600 font-medium mb-8 leading-relaxed">
                                Password reset instructions have been sent to your registered phone number.
                            </p>
                            <Link to="/driver/login" className="w-full flex justify-center py-4 px-4 text-sm font-black uppercase tracking-widest text-gray-900 bg-gray-100 hover:bg-gray-200 border-2 border-gray-900 transition-colors">
                                Return to Login
                            </Link>
                        </div>
                    ) : (
                        <>
                            <p className="text-gray-500 font-medium mt-1 text-sm mb-6">
                                Enter your admin-registered phone number to receive a secure reset link.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Registered Phone Number</label>
                                    <div className="mt-1">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="+233 50 123 4567"
                                            className="appearance-none block w-full px-4 py-4 border-2 border-gray-200 bg-gray-50 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 focus:bg-white transition-colors sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black uppercase tracking-widest text-white bg-gray-900 hover:bg-gray-800 shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-y-1 transition-all"
                                    >
                                        Send Reset Instructions
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 flex items-center justify-center border-t-2 border-gray-200 pt-6">
                                <Link to="/driver/login" className="text-xs font-black text-gray-500 uppercase tracking-widest hover:text-brand-maroon transition-colors flex items-center">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
