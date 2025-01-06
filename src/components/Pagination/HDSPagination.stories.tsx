import { Meta, StoryObj } from '@storybook/react';
import HDSPagination from './HDSPagination';

const meta: Meta<typeof HDSPagination> = {
  title: 'Components/HDSPagination',
  component: HDSPagination,
  tags: ['autodocs'],
  argTypes: {
    pageSize: {
      control: 'number',
      description: '페이지네이션 총 페이지 수를 설정합니다.',
    },
    paginationSize: {
      control: 'number',
      description:
        '노출 할 페이지네이션 버튼 수를 설정합니다. 최대값은 10으로 제한됩니다.',
    },
    showFirstAndLastButtons: {
      control: 'boolean',
      description:
        '페이지네이션의 처음과 마지막으로 이동할 수 있는 버튼의 노출 여부를 설정합니다.',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '페이지네이션의 방향을 설정합니다. (vertical | horizontal)',
    },
    onPageChange: {
      action: 'pageChanged',
      description: '페이지 변경 이벤트가 발생했을 때 호출됩니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HDSPagination>;

export const Default: Story = {
  args: {
    pageSize: 24,
    paginationSize: 10,
    showFirstAndLastButtons: false,
    direction: 'horizontal',
  },
};

export const HasFirstAndLastButtons: Story = {
  args: {
    ...Default.args,
    showFirstAndLastButtons: true,
  },
};

export const VerticalPagination: Story = {
  args: {
    ...Default.args,
    direction: 'vertical',
  },
};
