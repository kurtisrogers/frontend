import type { sizes } from '@/types/grid';

export const handleLayout = (size: sizes, orientation: "top" | "bottom", spacingType: string) => {
  if (!size) return;

  const handleCheck = (_size: any, position: any) => size === _size && orientation === position;

  const sizes: any = {
    sm: handleCheck('sm', 'top') ? `${spacingType}-sm-top` : handleCheck('sm', 'bottom') ? `${spacingType}-sm-bottom` : `${spacingType}-sm`,
    md: handleCheck('md', 'top') ? `${spacingType}-md-top` : handleCheck('md', 'bottom') ? `${spacingType}-md-bottom` : `${spacingType}-md`,
    lg: handleCheck('lg', 'top') ? `${spacingType}-lg-top` : handleCheck('lg', 'bottom') ? `${spacingType}-lg-bottom` : `${spacingType}-lg`,
    xl: handleCheck('xl', 'top') ? `${spacingType}-xl-top` : handleCheck('xl', 'bottom') ? `${spacingType}-xl-bottom` : `${spacingType}-xl`,
    xxl: handleCheck('xxl', 'top') ? `${spacingType}-xxl-top` : handleCheck('xxl', 'bottom') ? `${spacingType}-xxl-bottom` : `${spacingType}-xxl`,
    default: `${spacingType}-lg`,
  };

  return spacingType[sizes] || spacingType["default"];
}
