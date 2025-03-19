interface CustomButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const CustomButton = ({
  label,
  onClick,
  disabled = false,
  className = "",
}: CustomButtonProps) => {
  return (
    <button
      className={`text-white bg-black border-black h-12 py-4 px-2 flex items-center justify-center w-full text-center rounded cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)] disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
