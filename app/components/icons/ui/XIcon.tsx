import { IconProps } from "../../../types/index";

export const XIcon = ({
  size = 20,
  color = "#0063AB",
  className = "",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="0.100586"
        y="17.0713"
        width="24"
        height="4"
        rx="2"
        transform="rotate(-45 0.100586 17.0713)"
        fill={color}
      />
      <rect
        x="2.92871"
        y="0.100586"
        width="24"
        height="4"
        rx="2"
        transform="rotate(45 2.92871 0.100586)"
        fill={color}
      />
    </svg>
  );
};
