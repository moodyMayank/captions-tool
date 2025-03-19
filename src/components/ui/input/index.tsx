interface InputProps {
  placeholder?: string;
  type?: string;
  inputBoxName: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  placeholder = "Enter text here",
  type = "text",
  inputBoxName,
  onChange,
  value,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={inputBoxName}
      onChange={onChange}
      value={value}
      className={
        "w-full border active:border-purple-500 rounded p-2 text-lg my-4"
      }
    />
  );
};

export default Input;
