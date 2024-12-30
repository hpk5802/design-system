import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import HDSButton from "./HDSButton";
import { radiusMap, sizeMap } from "./types/type";

const meta: Meta<typeof HDSButton> = {
  title: "Component/HDSButton",
  component: HDSButton,
  argTypes: {
    block: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: Object.keys(sizeMap),
    },
    backgroundColor: { control: "color" },
    radius: {
      control: { type: "select" },
      options: Object.keys(radiusMap),
    },
    outlined: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    handleClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof HDSButton>;

export const Default: Story = {
  args: {
    children: "Button",
    block: false,
    size: "md",
    backgroundColor: "#000",
    color: "#fff",
    radius: "none",
    outlined: false,
    disabled: false,
  },
};
