import { Meta, StoryObj } from '@storybook/react';
import HDSDropdown from './HDSDropdown';
import { Options, positionMap, sizeMap } from './types/type';
import Center from '../decorators/Center';

const meta: Meta<typeof HDSDropdown> = {
  title: 'Components/HDSDropdown',
  component: HDSDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        iframeHeight: 500,
      },
    },
  },
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      description: '드롭다운 메뉴의 동작 방식을 설정합니다.',
    },
    label: {
      control: 'text',
      description: '드롭다운 메뉴의 이름을 설정합니다.',
    },
    size: {
      control: 'select',
      options: Object.keys(sizeMap),
      description: '드롭다운 메뉴의 최대 크기를 설정합니다.',
    },
    options: {
      control: 'object',
      description:
        '드롭다운 메뉴를 설정합니다. ({label: 메뉴 이름, disabled: 버튼 비활성화, handler: 메뉴 클릭 핸들러})',
    },
    position: {
      control: 'select',
      options: Object.keys(positionMap),
      description: '드롭다운 메뉴의 위치를 설정합니다.',
    },
  },
  args: {},
};

export default meta;

const defaultOptions: Options = [
  { label: 'menu1', disabled: true, handler: () => alert('menu1 selected') },
  { label: 'menu2', handler: () => alert('menu2 selected') },
  {
    label: 'long menu title',
    handler: () => alert('menu3 selected'),
  },
];

type Story = StoryObj<typeof HDSDropdown>;

export const Default: Story = {
  args: {
    trigger: 'hover',
    label: '메뉴',
    size: 'md',
    options: defaultOptions,
    position: 'bottom_center',
  },
};

export const PosBottomLeft: Story = {
  args: {
    ...Default.args,
    label: 'Pos Bottom Left',
    size: 'xxl',
    position: 'bottom_left',
  },
};

export const PosBottomRight: Story = {
  args: {
    ...Default.args,
    label: 'Pos Bottom Right',
    size: 'xxl',
    position: 'bottom_right',
  },
};

export const PosTopCenter: Story = {
  args: {
    ...Default.args,
    label: 'Pos Top Center',
    size: 'xxl',
    position: 'top_center',
  },
};

export const PosTopLeft: Story = {
  args: {
    ...Default.args,
    label: 'Pos Top Left',
    size: 'xxl',
    position: 'top_left',
  },
};

export const PosTopRight: Story = {
  args: {
    ...Default.args,
    label: 'Pos Top Right',
    size: 'xxl',
    position: 'top_right',
  },
};

export const PosLeftCenter: Story = {
  args: {
    ...Default.args,
    label: 'Pos Left Center',
    size: 'xxl',
    position: 'left_center',
  },
};

export const PosLeftTop: Story = {
  args: {
    ...Default.args,
    label: 'Pos Left Top',
    size: 'xxl',
    position: 'left_top',
  },
};

export const PosLeftBottom: Story = {
  args: {
    ...Default.args,
    label: 'Pos Left Bottom',
    size: 'xxl',
    position: 'left_bottom',
  },
};

export const PosRightCenter: Story = {
  args: {
    ...Default.args,
    label: 'Pos Right Center',
    size: 'xxl',
    position: 'right_center',
  },
};

export const PosRightTop: Story = {
  args: {
    ...Default.args,
    label: 'Pos Right Top',
    size: 'xxl',
    position: 'right_top',
  },
};

export const PosRightBottom: Story = {
  args: {
    ...Default.args,
    label: 'Pos Right Bottom',
    size: 'xxl',
    position: 'right_bottom',
  },
};

export const DropdownXsamll: Story = {
  args: {
    ...Default.args,
    size: 'xs',
  },
};

export const DropdownSamll: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const DropdownMediumn: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const DropdownLarge: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const DropdownXlarge: Story = {
  args: {
    ...Default.args,
    size: 'xl',
  },
};

export const DropdownTypeClick: Story = {
  args: {
    ...Default.args,
    trigger: 'click',
  },
};
