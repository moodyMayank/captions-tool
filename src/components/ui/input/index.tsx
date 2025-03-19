interface InputProps {
  placeholder?: string;
  type?: string;
  inputBoxName: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  placeholder = "Enter text here",
  type = "text",
  inputBoxName,
  onChange,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={inputBoxName}
      onChange={onChange}
      className={"w-full border border-amber-500 rounded p-4 text-lg my-4"}
    />
  );
};

export default Input;
