export type ColorScheme = {
  color: string;
  backgroundColor: string;
  hover: string;
  disabled: string;
};

export const colorSchemes = {
  primaryButton: {
    color: '#fff',
    backgroundColor: '#007BFF',
    hover: '#0056b3',
    disabled: '#A0C4FF',
  },
  secondaryButton: {
    color: '#fff',
    backgroundColor: '#6c757d',
    hover: '#5a6268',
    disabled: '#d6d8db',
  },
  warningButton: {
    color: '#fff',
    backgroundColor: '#ffc107',
    hover: '#e0a800',
    disabled: '#f8d7da',
  },
  successButton: {
    color: '#fff',
    backgroundColor: '#28A745',
    hover: '#218838',
    disabled: '#A9D6A2',
  },
  dangerButton: {
    color: '#fff',
    backgroundColor: '#dc3545',
    hover: '#c82333',
    disabled: '#f8d7da',
  },
  defaultButton: {
    color: '#FFFFFF',
    backgroundColor: '#7d51b5',
    hover: '#9a82b9',
    disabled: '#9483ab',
  },
};

export type ColorSchemes = keyof typeof colorSchemes;

export const sizeMap = {
  xs: { fontSize: '12px', padding: '8px 12px' },
  sm: { fontSize: '14px', padding: '10px 16px' },
  md: { fontSize: '16px', padding: '12px 20px' },
  lg: { fontSize: '18px', padding: '14px 24px' },
  xl: { fontSize: '20px', padding: '16px 28px' },
};

export type Size = keyof typeof sizeMap;

export const radiusMap = {
  xxxs: '2px',
  xxs: '4px',
  xs: '6px',
  sm: '8px',
  md: '10px',
  lg: '12px',
  xl: '16px',
  xxl: '20px',
  round: '50%',
  none: '0',
};

export type Radius = keyof typeof radiusMap;

export type IconPosition = 'left' | 'right';

export const sizeIconMap = {
  xs: 16,
  sm: 17,
  md: 20,
  lg: 24,
  xl: 30,
};
