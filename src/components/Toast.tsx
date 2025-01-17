import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

type ToastProps = {
  message: string;
  type: ToastType;
  onClose: () => void;
};

const toastStyles = {
  success: 'bg-green-100 border-green-500 text-green-900',
  error: 'bg-red-100 border-red-500 text-red-900',
  info: 'bg-blue-100 border-blue-500 text-blue-900',
  warning: 'bg-yellow-100 border-yellow-500 text-yellow-900',
};

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg border-l-4 shadow-md ${toastStyles[type]}`}>
      <div className="flex items-center justify-between">
        <p className="mr-8">{message}</p>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}