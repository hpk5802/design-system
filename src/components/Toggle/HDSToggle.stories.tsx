import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { userEvent, within } from '@storybook/test';
import HDSToggle from './HDSToggle';

const meta: Meta<typeof HDSToggle> = {
  title: 'Components/HDSToggle',
  component: HDSToggle,
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'Toggle의 Active 상태입니다.',
    },
    handleClick: {
      action: 'Toggle Active',
      description: '토글 Active 변경 이벤트가 발생했을 때 호출됩니다.',
    },
  },
  args: {
    isActive: false,
    handleClick: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof HDSToggle>;

export const Default: Story = {
  args: {
    isActive: false,
  },
  render: function Render(args) {
    const [{ isActive }, updateArgs] = useArgs();

    const handleToggle = () => {
      updateArgs({ isActive: !isActive });
    };

    return (
      <HDSToggle {...args} isActive={isActive} handleClick={handleToggle} />
    );
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 버튼 클릭으로 Switch 토글
  await userEvent.click(canvas.getByRole('switch'));
};
