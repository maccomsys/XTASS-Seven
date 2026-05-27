import { useState, useEffect, useRef } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(60);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTimer, setLockoutTimer] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const maskedPhone = '+233 *** *** 789'; // Mock masked phone

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

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

  useEffect(() => {
    // Auto submit if all 6 digits are filled
    if (otp.every(digit => digit !== '') && lockoutTimer === 0 && !isLoading) {
      handleVerify();
    }
  }, [otp]);

  const handleChange = (index: number, value: string) => {
    if (lockoutTimer > 0) return;
    
    // Allow only single numeric digit
    if (!/^\d*$/.test(value)) return;

    if (value.length > 1) {
      // Handle paste
      const pastedData = value.slice(0, 6).split('');
      const newOtp = [...otp];
      pastedData.forEach((char, i) => {
        if (index + i < 6) newOtp[index + i] = char;
      });
      setOtp(newOtp);
      // Focus the next empty input or the last one
      const nextIndex = Math.min(index + pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
    } else {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto advance
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move focus back on delete if input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (countdown > 0 || lockoutTimer > 0) return;
    setCountdown(60);
    setError('');
    // Mock resend logic
  };

  const handleVerify = () => {
    if (lockoutTimer > 0) return;
    
    const code = otp.join('');
    if (code.length !== 6) return;

    setIsLoading(true);
    setError('');

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      
      const newAttempts = failedAttempts + 1;
      setFailedAttempts(newAttempts);
      
      if (newAttempts >= 5) {
        setLockoutTimer(60);
        setError('Too many incorrect attempts. Please wait 60 seconds.');
      } else {
        // Mock wrong code for demonstration if it's not "123456"
        if (code === '123456') {
          navigate('/'); // Success redirect
        } else {
          setError('Incorrect verification code. Please try again.');
          setOtp(['', '', '', '', '', '']);
          inputRefs.current[0]?.focus();
        }
      }
    }, 1000);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-2xl border border-gray-100">
        
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Verify Your Identity</h1>
          <p className="text-gray-500 font-medium text-sm leading-relaxed">
            We've sent a 6-digit one-time code to 
            <span className="block font-bold text-gray-900 mt-1 tracking-wider">{maskedPhone}</span>
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-bold text-center">
            {error}
          </div>
        )}

        <div className="flex justify-between gap-2 md:gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              maxLength={6} // allow paste
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              disabled={lockoutTimer > 0 || isLoading}
              className={`w-12 h-14 text-center text-xl font-black border-2 rounded ${
                digit ? 'border-brand-maroon text-brand-maroon' : 'border-gray-200 text-gray-900'
              } focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon disabled:bg-gray-100 disabled:text-gray-400 transition-colors`}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={otp.join('').length !== 6 || lockoutTimer > 0 || isLoading}
          className="w-full py-4 mb-6 bg-brand-maroon hover:bg-brand-maroon-hover rounded text-white font-bold uppercase tracking-wider text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : lockoutTimer > 0 ? (
            `Locked out for ${lockoutTimer}s`
          ) : (
            <>Verify Code <ArrowRight className="w-4 h-4 ml-2" /></>
          )}
        </button>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 mb-2">Didn't receive the code?</p>
          <button
            onClick={handleResend}
            disabled={countdown > 0 || lockoutTimer > 0}
            className={`text-sm font-bold transition-colors ${
              (countdown > 0 || lockoutTimer > 0) ? 'text-gray-400 cursor-not-allowed' : 'text-brand-maroon hover:underline'
            }`}
          >
            {countdown > 0 ? `Resend Code in ${countdown}s` : 'Resend Code Now'}
          </button>
        </div>

      </div>
    </main>
  );
}
