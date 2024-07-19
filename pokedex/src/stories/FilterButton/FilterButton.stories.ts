import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FilterButton } from './FilterButton';

const meta = {
  title: 'Components/Filter Button',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;
  
export const Small: Story = {
  args: {
    size: 'small',
    values: [],
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    values: [],
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    values: [],
  },
};
