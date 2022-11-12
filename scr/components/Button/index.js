import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder26: "rounded-radius26975",
  RoundedBorder5: "rounded-radius5",
  RoundedBorder21: "rounded-radius2182",
};
const variants = {
  GradientPinkA100Deeppurple800: "bg-gradient  text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_901",
  icbFillBluegray100: "bg-bluegray_100",
};
const sizes = {
  sm: "lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[6px]",
  md: "lg:p-[10px] xl:p-[13px] 2xl:p-[15px] p-[16px] 3xl:p-[18px]",
  lg: "lg:p-[12px] xl:p-[16px] 2xl:p-[18px] p-[19px] 3xl:p-[21px]",
  smIcn: "lg:p-[15px] xl:p-[18px] 2xl:p-[21px] p-[22px] 3xl:p-[25px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder26",
    "RoundedBorder5",
    "RoundedBorder21",
  ]),
  variant: PropTypes.oneOf([
    "GradientPinkA100Deeppurple800",
    "FillWhiteA700",
    "icbFillBluegray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "GradientPinkA100Deeppurple800",
  size: "lg",
};

export { Button };
