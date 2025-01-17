import React from 'react';

type SpinnerProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const sizes = {
  small: 'h-4 w-4',
  medium: 'h-6 w-6',
  large: 'h-8 w-8',
};

export function Spinner({ size = 'medium', className = '' }: SpinnerProps) {
  return (
    <div className={`${sizes[size]} ${className}`}>
      <div className="w-full h-full border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}