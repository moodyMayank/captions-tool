interface InputProps {
  placeholder?: string;
  type?: string;
  inputBoxName: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  maxLength?: number;
}

const Input = ({
  placeholder = "Enter text here",
  type = "text",
  inputBoxName,
  onChange,
  value,
  maxLength = 200,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={inputBoxName}
      onChange={onChange}
      value={value}
      className={
        "w-full border active:border-purple-500 rounded p-2 text-lg my-2"
      }
      maxLength={maxLength}
    />
  );
};

export default Input;
