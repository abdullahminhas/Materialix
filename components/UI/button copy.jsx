import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../lib/utiles';

const Button = ({ variant = 'filled', size = 'medium', children, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    filled: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
  };

  const buttonClass = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size]
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outline']),
  size: PropTypes.oneOf(['small', 'medium']),
  children: PropTypes.node.isRequired,
};

export default Button;
