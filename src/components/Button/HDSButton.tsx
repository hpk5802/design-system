import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import {
  ColorScheme,
  colorSchemes,
  ColorSchemes,
  IconPosition,
  Radius,
  radiusMap,
  Size,
  sizeIconMap,
  sizeMap,
} from './types/type';

interface HDSButtonProps {
  block?: boolean;
  size?: Size;
  colorScheme?: ColorSchemes;
  radius?: keyof typeof radiusMap;
  outlined?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode | string;
  iconPosition?: IconPosition;
  onlyIcon?: boolean;
  handleClick: () => void;
}

const StyledButton = styled.button<{
  block: boolean;
  size: Size;
  radius: Radius;
  outlined: boolean;
  disabled: boolean;
  iconPosition: IconPosition;
  onlyIcon: boolean;
  colorScheme: ColorScheme;
}>`
  position: relative;
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  padding: ${({ onlyIcon, size }) => (onlyIcon ? '0' : sizeMap[size].padding)};
  border: ${({ outlined, colorScheme }) =>
    outlined ? `1px solid ${colorScheme.backgroundColor}` : 'none'};
  border-radius: ${({ radius }) => radiusMap[radius]};
  background-color: ${({ outlined, colorScheme }) =>
    outlined ? 'transparent' : colorScheme.backgroundColor};
  font-size: ${({ size }) => sizeMap[size].fontSize};
  color: ${({ outlined, colorScheme }) =>
    outlined ? colorScheme.backgroundColor : colorScheme.color};
  text-align: center;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ colorScheme }) => colorScheme.hover};
  }

  &:disabled {
    background-color: ${({ colorScheme }) => colorScheme.disabled};
    cursor: not-allowed;
  }

  & > svg,
  & > img {
    width: ${({ size }) => sizeIconMap[size]}px;
    height: ${({ size }) => sizeIconMap[size]}px;
    margin-right: ${({ iconPosition, onlyIcon }) =>
      iconPosition === 'left' && !onlyIcon ? '8px' : '0'};
    margin-left: ${({ iconPosition, onlyIcon }) =>
      iconPosition === 'right' && !onlyIcon ? '8px' : '0'};
  }
`;

function HDSButton({
  children,
  block = false,
  size = 'md',
  colorScheme = 'primaryButton',
  radius = 'none',
  outlined = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  onlyIcon = false,
  handleClick,
}: PropsWithChildren<HDSButtonProps>) {
  const renderIcon = () => {
    if (icon && typeof icon === 'string') {
      return <img src={icon} alt="icon" />;
    }
    return icon;
  };
  return (
    <StyledButton
      block={block}
      size={size}
      colorScheme={colorSchemes[colorScheme]}
      radius={radius}
      outlined={outlined}
      disabled={disabled}
      iconPosition={iconPosition}
      onlyIcon={onlyIcon}
      onClick={handleClick}
    >
      {iconPosition === 'left' && renderIcon()}
      {!onlyIcon && children}
      {iconPosition === 'right' && renderIcon()}
    </StyledButton>
  );
}

export default HDSButton;
