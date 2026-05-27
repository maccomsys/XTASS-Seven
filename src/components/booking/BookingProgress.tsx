import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookingProgressProps {
  currentStep: number;
  totalPrice?: number;
}

export default function BookingProgress({ currentStep, totalPrice }: BookingProgressProps) {
  const steps = [
    { num: 1, label: 'Trip Details', path: '/booking/step-1' },
    { num: 2, label: 'Location & Schedule', path: '/booking/step-2' },
    { num: 3, label: 'Choose a Vehicle', path: '/booking/step-3' },
    { num: 4, label: 'Optional Extras', path: '/booking/step-4' },
    { num: 5, label: 'Review & Reserve', path: '/booking/step-5' }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row md:items-center justify-between">
        
        <div className="flex-1 w-full overflow-x-auto no-scrollbar">
          <ul className="flex items-center min-w-max">
            {steps.map((step, index) => {
              const isActive = currentStep === step.num;
              const isCompleted = currentStep > step.num;

              return (
                <li key={step.num} className="flex items-center flex-shrink-0">
                  <div className="flex items-center">
                    {isCompleted ? (
                      <Link 
                        to={step.path}
                        className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer shrink-0"
                      >
                        <Check className="w-5 h-5" />
                      </Link>
                    ) : (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border-2 
                        ${isActive ? 'border-brand-maroon bg-brand-maroon text-white' : 'border-gray-300 text-gray-400 bg-white'}`}
                      >
                        {step.num}
                      </div>
                    )}
                    <span 
                      className={`ml-3 text-sm font-bold uppercase tracking-wider 
                        ${isActive ? 'text-brand-maroon' : isCompleted ? 'text-gray-900 cursor-pointer pointer-events-auto hover:text-brand-maroon' : 'text-gray-400'}`}
                    >
                      {isCompleted ? <Link to={step.path}>{step.label}</Link> : step.label}
                    </span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-px mx-4 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        
        {totalPrice !== undefined && (
          <div className="mt-4 md:mt-0 flex items-center md:ml-8 shrink-0 bg-gray-50 px-4 py-2 rounded border border-gray-200">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-3">Estimated Total</span>
            <span className="text-xl font-black text-brand-maroon">GH₵{totalPrice.toFixed(2)}<span className="text-sm font-medium text-gray-500">/day</span></span>
          </div>
        )}
        
      </div>
    </div>
  );
}
