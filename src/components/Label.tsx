import React from 'react';

interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium text-space-cadet mb-1 ${className}`}>
            {children}
        </label>
    );
};

export default Label;