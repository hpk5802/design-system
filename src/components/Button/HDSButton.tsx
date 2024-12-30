import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import {
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
  backgroundColor?: string;
  color?: string;
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
  backgroundColor: string;
  color: string;
  radius: Radius;
  outlined: boolean;
  disabled: boolean;
  iconPosition: IconPosition;
  onlyIcon: boolean;
}>`
  position: relative;
  display: ${(props) => (props.block ? "flex" : "inline-flex")};
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.block ? "100%" : "auto")};
  padding: ${(props) => (props.onlyIcon ? "0" : sizeMap[props.size].padding)};
  border: ${(props) => (props.outlined ? `1px solid ${props.color}` : "none")};
  border-radius: ${(props) => radiusMap[props.radius]};
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.backgroundColor};
  font-size: ${(props) => sizeMap[props.size].fontSize};
  color: ${(props) => props.color};
  text-align: center;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
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
  backgroundColor = "#fff",
  color = "#000",
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
      backgroundColor={backgroundColor}
      color={color}
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
