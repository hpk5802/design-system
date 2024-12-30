import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
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
} from "./types/type";

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
  display: ${(props) => (props.block ? "flex" : "inline-flex")};
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.block ? "100%" : "auto")};
  padding: ${(props) => (props.onlyIcon ? "0" : sizeMap[props.size].padding)};
  border: ${(props) =>
    props.outlined ? `1px solid ${props.colorScheme.backgroundColor}` : "none"};
  border-radius: ${(props) => radiusMap[props.radius]};
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.colorScheme.backgroundColor};
  font-size: ${(props) => sizeMap[props.size].fontSize};
  color: ${(props) =>
    props.outlined
      ? props.colorScheme.backgroundColor
      : props.colorScheme.color};
  text-align: center;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.colorScheme.hover};
  }

  &:disabled {
    background-color: ${(props) => props.colorScheme.disabled};
    cursor: not-allowed;
  }

  & > svg,
  & > img {
    width: ${(props) => sizeIconMap[props.size]}px;
    height: ${(props) => sizeIconMap[props.size]}px;
    margin-right: ${(props) =>
      props.iconPosition === "left" && !props.onlyIcon ? "8px" : "0"};
    margin-left: ${(props) =>
      props.iconPosition === "right" && !props.onlyIcon ? "8px" : "0"};
  }
`;

function HDSButton({
  children,
  block = false,
  size = "md",
  colorScheme = "primaryButton",
  radius = "none",
  outlined = false,
  disabled = false,
  icon,
  iconPosition = "left",
  onlyIcon = false,
  handleClick,
}: PropsWithChildren<HDSButtonProps>) {
  const renderIcon = () => {
    if (icon && typeof icon === "string") {
      return <img src={icon} alt='icon' />;
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
      {iconPosition === "left" && renderIcon()}
      {!onlyIcon && children}
      {iconPosition === "right" && renderIcon()}
    </StyledButton>
  );
}

export default HDSButton;
