import React from "react";

import { IconProps } from "../../../types/index";

export const WifiIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 20H12.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16.1538C9.27547 15.4194 10.7745 15 12.3333 15C13.8922 15 15.3912 15.4194 16.6667 16.1538"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12.5C6.98912 11.3648 9.32566 10.75 11.7778 10.75C14.2299 10.75 16.5664 11.3648 18.5556 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 8.84615C4.52316 7.04121 8.15512 6 12 6C15.8449 6 19.4768 7.04121 22.5 8.84615"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WifiIcon;
