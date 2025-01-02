import { Meta, StoryObj } from "@storybook/react";
import HDSButton from "./HDSButton";
import { colorSchemes, radiusMap, sizeMap } from "./types/type";

const meta: Meta<typeof HDSButton> = {
  title: "Component/HDSButton",
  component: HDSButton,
  argTypes: {
    block: {
      control: { type: "boolean" },
      description:
        "true일 경우, 버튼이 블록 레벨 요소로 표시됩니다. 부모 요소의 너비를 100% 차지합니다.",
    },
    size: {
      control: { type: "select" },
      options: Object.keys(sizeMap),
      description:
        "버튼의 크기를 설정합니다. 옵션: 'xs', 'sm', 'md', 'lg', 'xl'",
    },
    colorScheme: {
      control: { type: "select" },
      options: Object.keys(colorSchemes),
      description: "버튼 색상 조합을 선택하세요.",
    },
    radius: {
      control: { type: "select" },
      options: Object.keys(radiusMap),
      description:
        "버튼의 모서리 둥글기(radius)를 설정합니다. 옵션은 'none'부터 'round'까지 설정하실 수 있습니다.",
    },
    outlined: {
      control: { type: "boolean" },
      description:
        "true일 경우, 버튼이 bg 대신 테두리만 있는 아웃라인 스타일로 표시됩니다.",
    },
    disabled: {
      control: { type: "boolean" },
      escription:
        "true일 경우, 버튼이 비활성화되어 클릭할 수 없으며, 비활성화된 스타일이 적용됩니다.",
    },
    icon: {
      control: "text",
      description: "버튼에 표시할 아이콘 또는 아이콘의 경로",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "아이콘의 위치 (왼쪽 또는 오른쪽)",
    },
    onlyIcon: {
      control: { type: "boolean" },
      description: "true일 경우, 버튼에 텍스트 없이 아이콘만 표시합니다.",
    },
    handleClick: {
      action: "clicked",
      description: "버튼을 클릭했을 때 발생하는 액션입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HDSButton>;

export const Default: Story = {
  args: {
    children: "Button",
    block: false,
    size: "md",
    colorScheme: "defaultButton",
    radius: "none",
    outlined: false,
    disabled: false,
    icon: "/public/ic_setting.svg",
    iconPosition: "left",
    onlyIcon: false,
  },
};
