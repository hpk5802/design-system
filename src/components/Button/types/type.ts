export const sizeMap = {
  xs: { fontSize: "12px", padding: "8px 12px" },
  sm: { fontSize: "14px", padding: "10px 16px" },
  md: { fontSize: "16px", padding: "12px 20px" },
  lg: { fontSize: "18px", padding: "14px 24px" },
  xl: { fontSize: "20px", padding: "16px 28px" },
};

export type Size = keyof typeof sizeMap;

export const radiusMap = {
  xxxs: "2px",
  xxs: "4px",
  xs: "6px",
  sm: "8px",
  md: "10px",
  lg: "12px",
  xl: "16px",
  xxl: "20px",
  round: "50%",
  none: "0",
};

export type Radius = keyof typeof radiusMap;
