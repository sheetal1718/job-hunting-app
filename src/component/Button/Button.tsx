import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  direction: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  direction,
  ...props
}) => {
  const mode = primary
    ? "search-button--primary"
    : ".search-button--secondary";
  return (
    <button
      type="submit"
      className={[
        "search-button",
        `search-button--${size}`,
        `search-button--${direction}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
