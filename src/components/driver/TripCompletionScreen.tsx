import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DriverLayout from './DriverLayout';
import { CheckCircle2, Receipt, Star, MessageSquare } from 'lucide-react';

export default function TripCompletionScreen() {
    const navigate = useNavigate();
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Increment earnings in a real app
        navigate('/driver/dashboard');
    };

    return (
        <DriverLayout>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-12">
                <div className="bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-center p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <CheckCircle2 className="w-32 h-32" />
                    </div>
                    
                    <div className="flex justify-center mb-4 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-green-100 border-4 border-green-500 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight relative z-10">Trip Completed</h1>
                    <p className="text-brand-maroon font-mono font-bold mt-2 mb-6 block relative z-10">Booking ID: XTA-1090</p>
                    
                    <div className="bg-gray-50 border-2 border-gray-200 p-6 text-left relative z-10">
                        <h2 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center mb-4 border-b-2 border-gray-200 pb-2">
                            <Receipt className="w-4 h-4 mr-2" /> Fare Summary
                        </h2>
                        
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-bold text-gray-600">Base Fare</span>
                                <span className="font-black text-gray-900">GH₵ 100.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-bold text-gray-600">Wait Time (5 mins)</span>
                                <span className="font-black text-gray-900">GH₵ 5.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-bold text-gray-600">Airport Toll</span>
                                <span className="font-black text-gray-900">GH₵ 15.00</span>
                            </div>
                        </div>
                        
                        <div className="border-t-2 border-gray-900 pt-4 flex justify-between items-center">
                            <span className="font-black text-gray-900 uppercase tracking-widest text-sm">Your Earnings</span>
                            <span className="font-black text-brand-maroon text-2xl tracking-wider">GH₵ 120.00</span>
                        </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 text-left relative z-10 flex">
                         <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest leading-relaxed">
                            An official receipt has been sent automatically to the customer's registered email address.
                         </span>
                    </div>
                </div>

                <div className="bg-white border-4 border-gray-900 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-2 flex items-center">
                        <Star className="w-6 h-6 text-yellow-500 mr-2" /> Rate Passenger
                    </h2>
                    <p className="text-sm font-medium text-gray-500 mb-6">How was your experience with Sandra O.?</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-center gap-2">
                             {[1, 2, 3, 4, 5].map((star) => (
                                 <button
                                     key={star}
                                     type="button"
                                     onClick={() => setRating(star)}
                                     onMouseEnter={() => setRating(star)}
                                     className="focus:outline-none transition-transform hover:scale-110"
                                 >
                                     <Star className={`w-10 h-10 ${rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                 </button>
                             ))}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center mb-2">
                                <MessageSquare className="w-4 h-4 mr-2" /> Optional Feedback
                            </label>
                            <textarea 
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={3}
                                placeholder="Any additional comments about the trip..."
                                className="w-full px-4 py-3 border-2 border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-600 transition-colors text-sm font-bold text-gray-900 resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-4 px-6 bg-gray-900 border-2 border-transparent text-white font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(220,38,38,1)] hover:shadow-none hover:translate-y-1 hover:bg-gray-800 transition-all text-center"
                        >
                            Return to Dashboard
                        </button>
                    </form>
                </div>
            </div>
        </DriverLayout>
    );
}
