import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children: string | React.ReactNode;
  onClick?: () => void;
}

const SIZE = {
  'sm': 'text-sm min-h-10',
  'md': 'text-base min-h-12',
  'lg': 'text-lg min-h-14'
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  size = 'md',
  children,
  onClick
}) => {
  return (
    <button onClick={onClick} className={`${SIZE[size]} ${className}`}>
      {children}
    </button>
  )
}

export default Button