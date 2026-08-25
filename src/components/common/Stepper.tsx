import React from 'react';
import { Check } from 'lucide-react';

interface StepperProps {
  currentStep: 1 | 2 | 3 | 4;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Crop Info' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Photos' },
    { number: 4, label: 'Review' },
  ];

  return (
    <div className="bg-white py-3 px-4 border-b border-gray-100 shrink-0">
      <div className="flex items-center justify-between relative max-w-xs mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 right-4 top-3 h-0.5 bg-gray-200 -z-0">
          <div 
            className="h-full bg-emerald-600 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div key={step.number} className="flex flex-col items-center relative z-10">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors ${
                  isCompleted
                    ? 'bg-emerald-600 text-white'
                    : isCurrent
                    ? 'bg-emerald-600 text-white ring-4 ring-emerald-100'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.number}
              </div>
              <span className={`text-[10px] mt-1 ${isCurrent ? 'font-medium text-emerald-800' : 'text-gray-400'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
