import { PropsWithChildren } from "react";

interface HDSButtonProps {
  size: "small" | "medium" | "large";
  backgroundColor: "string";
}

function HDSButton({
  children,
  size,
  backgroundColor,
}: PropsWithChildren<HDSButtonProps>) {
  return <button style={{ backgroundColor }}>{children}</button>;
}

export default HDSButton;
