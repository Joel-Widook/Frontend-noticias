import { IconProps } from "../../../types/index";

export const TikTokIcon = ({
  size = 16,
  color = "#424242",
  className = "",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M11.9936 0H9.23138V10.8985C9.23138 12.1971 8.16901 13.2638 6.84691 13.2638C5.52481 13.2638 4.46242 12.1971 4.46242 10.8985C4.46242 9.6232 5.50121 8.57969 6.7761 8.53333V5.79711C3.96664 5.84347 1.7002 8.09276 1.7002 10.8985C1.7002 13.7276 4.01385 16 6.87053 16C9.72716 16 12.0408 13.7044 12.0408 10.8985V5.31013C13.0796 6.05218 14.3545 6.49276 15.7002 6.51596V3.77971C13.6226 3.71015 11.9936 2.04058 11.9936 0Z"
        fill={color}
      />
    </svg>
  );
};
