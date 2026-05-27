import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle } from 'lucide-react';

export default function PostLoginVerification() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'verified'>('verifying');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('verified');
      setTimeout(() => {
        // Mock navigation to Customer Home Dashboard
        navigate('/dashboard'); 
      }, 500); // Small wait before transition
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center font-sans">
      <div className="text-center group">
        <div className="mb-8 flex justify-center">
          {status === 'verifying' ? (
            <Loader2 className="w-16 h-16 text-brand-maroon animate-spin" />
          ) : (
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          )}
        </div>
        
        <h2 className={`font-black uppercase tracking-widest transition-colors duration-300 text-xl
          ${status === 'verified' ? 'text-green-600' : 'text-gray-900'}
        `}>
          {status === 'verifying' ? 'Verifying Identity...' : 'Verified!'}
        </h2>
        
        {status === 'verifying' && (
          <p className="text-gray-500 font-medium text-sm mt-3 animate-pulse">
            Securely authenticating your session
          </p>
        )}
      </div>
    </main>
  );
}
