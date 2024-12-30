import HDSButton from "./HDSButton";

const meta = {
  title: "Component/HDSButton",
  component: HDSButton,
  argTypes: {
    size: { type: "select", options: ["small", "medium", "large"] },
    backgroundColor: { control: "color" },
  },
};

export default meta;

export const Primary = {
  args: {
    children: "Button",
  },
};
