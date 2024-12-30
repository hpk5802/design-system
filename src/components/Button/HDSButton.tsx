import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { Radius, radiusMap, Size, sizeMap } from "./types/type";

interface HDSButtonProps {
  block?: boolean;
  size?: Size;
  backgroundColor?: string;
  color?: string;
  radius?: keyof typeof radiusMap;
  outlined?: boolean;
  disabled?: boolean;
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
}>`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  width: ${(props) => (props.block ? "100%" : "auto")};
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => (props.outlined ? `1px solid ${props.color}` : "none")};
  border-radius: ${(props) => radiusMap[props.radius]};
  transition: opacity 0.2s ease;
  padding: ${(props) => sizeMap[props.size].padding};
  font-size: ${(props) => sizeMap[props.size].fontSize};
  box-sizing: "border-box";
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
  handleClick,
}: PropsWithChildren<HDSButtonProps>) {
  return (
    <StyledButton
      block={block}
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      radius={radius}
      outlined={outlined}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
}

export default HDSButton;
