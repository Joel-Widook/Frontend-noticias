import { IconProps } from "../../../types/index";

export const TwitterXIcon = ({
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
        d="M13.1009 0.75H15.5544L10.1943 6.89205L16.5 15.25H11.5627L7.69566 10.1809L3.27087 15.25H0.81595L6.54904 8.68038L0.5 0.75H5.56262L9.05811 5.38331L13.1009 0.75ZM12.2399 13.7777H13.5993L4.82392 2.14497H3.36506L12.2399 13.7777Z"
        fill={color}
      />
    </svg>
  );
};
