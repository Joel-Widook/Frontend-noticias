import React from "react";

import { IconProps } from "../../../types/index";

export const HamburgerMobileMenuIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#0063AB",
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
      <rect width="24" height="4" rx="2" fill={color} />
      <rect y="10" width="24" height="4" rx="2" fill={color} />
      <rect y="20" width="24" height="4" rx="2" fill={color} />
    </svg>
  );
};

export default HamburgerMobileMenuIcon;
