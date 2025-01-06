import { Meta, StoryObj } from '@storybook/react';
import HDSPagination from './HDSPagination';

const meta: Meta<typeof HDSPagination> = {
  title: 'Components/HDSPagination',
  component: HDSPagination,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HDSPagination>;

export const Default: Story = {};
