import React from 'react';

interface InputProps {
    type: string;
    name: string;
    value: string;
    className?: string;
    handleChange?: (e: any) => void;

}

const Input: React.FC<InputProps> = ({ type, name, value, className, handleChange }) => {

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-space-cadet ${className}`}
        />
    );
};

export default Input;