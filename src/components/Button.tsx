interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, className, children, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={` bg-linear-65 from-primary to-secondary py-2 px-4 rounded-md hover:bg-linear-35 hover:from-secondary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer font-semibold ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;