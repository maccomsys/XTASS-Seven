import { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function LivePhotoLogin() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState('');
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let activeStream: MediaStream | null = null;
    
    async function setupCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'user' } 
        });
        setStream(mediaStream);
        activeStream = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err: any) {
        setError('Camera access denied. Please enable camera permissions in your device settings.');
      }
    }

    setupCamera();

    return () => {
      // Cleanup the stream when the component unmounts
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    setIsCapturing(true);
    // Mock processing face recognition
    setTimeout(() => {
      navigate('/verify-otp'); // Assuming Post-Login Verification maps to OTP or similar flow
    }, 2000);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-2xl border border-gray-100 flex flex-col items-center">
        
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Live Photo Login</h1>
          <p className="text-gray-500 font-medium">Capture your face to log in.</p>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded text-center text-sm font-medium mb-6">
            {error}
          </div>
        ) : (
          <div className="relative w-64 h-64 mb-8 overflow-hidden rounded-full border-4 border-brand-maroon shadow-lg bg-gray-900">
            {/* Camera Viewfinder */}
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
              muted
            />
            {/* Face Alignment Guide */}
            <div className="absolute inset-0 border-[8px] border-black/20 rounded-full z-10 pointer-events-none"></div>
            
            {isCapturing && (
              <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-20 transition-all">
                <RefreshCw className="w-8 h-8 text-brand-maroon animate-spin mb-2" />
                <span className="font-bold text-brand-maroon text-sm uppercase tracking-widest">Verifying...</span>
              </div>
            )}
          </div>
        )}

        <div className="w-full flex justify-center mb-6">
          <button 
            onClick={handleCapture}
            disabled={!!error || isCapturing}
            className="w-20 h-20 bg-brand-maroon text-white rounded-full flex items-center justify-center hover:bg-brand-maroon-hover transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            title="Capture Photo"
          >
            <Camera className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <Link 
          to="/signin" 
          className="text-sm font-bold text-gray-500 hover:text-brand-maroon flex items-center mt-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Switch to Password Login
        </Link>
      </div>
    </main>
  );
}
