import { IconProps } from "../types";

export const FacebookIcon = ({
  size = 16,
  color = "#1A1A1A",
  className = "",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.62891 9.625H5.57812V15.75H2.84375V9.625H0.601562V7.10938H2.84375V5.16797C2.84375 2.98047 4.15625 1.75 6.15234 1.75C7.10938 1.75 8.12109 1.94141 8.12109 1.94141V4.10156H7C5.90625 4.10156 5.57812 4.75781 5.57812 5.46875V7.10938H8.01172L7.62891 9.625Z"
        fill={color}
      />
    </svg>
  );
};
