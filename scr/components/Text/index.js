import React from "react";
const variantClasses = {
  h1: "font-bold 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-[9px]",
  h2: "font-light lg:text-[27px] xl:text-[34px] 2xl:text-[38px] text-[40px] 3xl:text-[46px]",
  h3: "font-normal lg:text-[22px] xl:text-[28px] 2xl:text-[32px] text-[33.41px] 3xl:text-[38px]",
  h4: "font-bold lg:text-[19px] xl:text-[24px] 2xl:text-[27px] text-[28.78px] 3xl:text-[33px]",
  h5: "font-bold lg:text-[19px] xl:text-[23px] 2xl:text-[26px] text-[28px] 3xl:text-[32px]",
  h6: "font-bold lg:text-[16px] xl:text-[20px] 2xl:text-[23px] text-[24px] 3xl:text-[27px]",
  body1:
    "font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] text-[21px] 3xl:text-[24px]",
  body2:
    "font-bold lg:text-[13px] xl:text-[17px] 2xl:text-[19px] text-[20px] 3xl:text-[23px]",
  body3:
    "lg:text-[12px] xl:text-[15px] 2xl:text-[17px] text-[18px] 3xl:text-[20px]",
  body4:
    "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] text-[16px] 3xl:text-[18px]",
  body5:
    "xl:text-[11px] 2xl:text-[13px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body6:
    "xl:text-[10px] 2xl:text-[11px] text-[12px] 3xl:text-[13px] lg:text-[8px]",
  body7:
    "font-normal text-[10px] 3xl:text-[11px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
