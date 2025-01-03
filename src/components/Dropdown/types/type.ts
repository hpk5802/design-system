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
    bottom: '105%',
    left: 0,
  },
  top_right: {
    bottom: '105%',
    right: 0,
  },
  top_center: {
    bottom: '105%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom_left: {
    top: '105%',
    left: 0,
  },
  bottom_right: {
    top: '105%',
    right: 0,
  },
  bottom_center: {
    top: '105%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  right_bottom: {
    top: 0,
    left: '105%',
  },
  right_center: {
    top: '50%',
    left: '105%',
    transform: 'translateY(-50%)',
  },
  right_top: {
    bottom: 0,
    left: '105%',
  },
  left_bottom: {
    top: 0,
    right: '105%',
  },
  left_center: {
    top: '50%',
    right: '105%',
    transform: 'translateY(-50%)',
  },
  left_top: {
    bottom: 0,
    right: '105%',
  },
};

export type Position = keyof typeof positionMap;
