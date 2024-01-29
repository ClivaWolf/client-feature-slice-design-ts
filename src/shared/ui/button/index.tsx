import React from 'react';

interface ButtonProps {
 onClick?: () => void;
 children?: React.ReactNode;
 className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
 return (
    <button onClick={onClick} className={`${className? className : ''}bg-ac text-tx hover:bg-acd`}>
      {children}
    </button>
 );
};

export default Button;