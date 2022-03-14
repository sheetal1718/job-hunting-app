import React from "react";

import "./input.css";

export interface InputProps {
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  name: string
}

export const Input: React.FC<InputProps> = ({
  size,
  onChange,
  placeholder,
  required,
  name,
}) => (
  <input
    className={[`input input-${size}`].join("")}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
    required={required}
  />
);
