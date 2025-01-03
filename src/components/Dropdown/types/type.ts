export type Trigger = 'hover' | 'click';

export const sizeMap = {
  xs: '50px',
  sm: '70px',
  md: '120px',
  lg: '170px',
  xl: '200px',
  xxl: '250px',
};

export type Size = keyof typeof sizeMap;

export type Option = {
  label: string;
  disabled?: boolean;
  handler: () => void;
};

export type Options = Option[];

export const positionMap = {
  top_left: {
    bottom: '100%',
    left: 0,
  },
  top_right: {
    bottom: '100%',
    right: 0,
  },
  top_center: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom_left: {
    top: '100%',
    left: 0,
  },
  bottom_right: {
    top: '100%',
    right: 0,
  },
  bottom_center: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  right_bottom: {
    top: 0,
    left: '100%',
  },
  right_center: {
    top: '50%',
    left: '100%',
    transform: 'translateY(-50%)',
  },
  right_top: {
    bottom: 0,
    left: '100%',
  },
  left_bottom: {
    top: 0,
    right: '100%',
  },
  left_center: {
    top: '50%',
    right: '100%',
    transform: 'translateY(-50%)',
  },
  left_top: {
    bottom: 0,
    right: '100%',
  },
};

export type Position = keyof typeof positionMap;
