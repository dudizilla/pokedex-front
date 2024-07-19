import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'Components/Search Bar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
      size: 'small',
      placeholder: 'Search',
    },
  };

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Search',
  },
};

export const Large: Story = {
    args: {
      size: 'large',
      placeholder: 'Search',
    },
  };