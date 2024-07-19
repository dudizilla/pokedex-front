import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Page/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    values: [],
    searchTerm: (event: React.ChangeEvent<HTMLInputElement>) => {},
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    values: [],
    searchTerm: (event: React.ChangeEvent<HTMLInputElement>) => {},
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    values: [],
    searchTerm: (event: React.ChangeEvent<HTMLInputElement>) => {},
  }
};
