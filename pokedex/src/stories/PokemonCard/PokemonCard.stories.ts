import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PokemonCard } from './PokemonCard';

const meta = {
  title: 'Example/PokemonCard',
  component: PokemonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    number: '001',
    pokemon: 'Bulbasaur',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    number: '001',
    pokemon: 'Bulbasaur',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    number: '001',
    pokemon: 'Bulbasaur',
  },
};
