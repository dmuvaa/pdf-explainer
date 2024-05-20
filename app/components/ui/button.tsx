// components/ui/button.tsx
import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, size = 'md', variant = 'primary' }) => {
  const sizeClass = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const variantClass = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={classNames('rounded', sizeClass[size], variantClass[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;