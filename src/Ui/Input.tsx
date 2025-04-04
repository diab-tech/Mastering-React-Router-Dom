import { useState } from "react";
import "../Ui/input.css";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // type: string;
  // id: string;
  // name: string;
  label: string;
}

const Input = ({ type, id, name, label, value, onChange, ...rest }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);
  console.log(value);
  return (
    <div className="input-wrapper">
      <input
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value !== "")}
        type={type}
        id={id}
        name={name}
        {...rest}
      />
      <label className={value || isFocused ? "floating" : ""}>{label}</label>
    </div>
  );
};

export default Input;
