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
    label: '메뉴메뉴메뉴메뉴메뉴',
    size: 'md',
    options: defaultOptions,
    position: 'bottom_center',
  },
};
