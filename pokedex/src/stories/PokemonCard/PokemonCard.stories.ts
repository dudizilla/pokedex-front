import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PokemonCard } from './PokemonCard';

const meta = {
  title: 'Components/PokemonCard',
  component: PokemonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof PokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    number: 1,
    pokemon: 'Bulbasaur',
    types: ['grass', 'poison'],
    image: 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png',
    onClick: fn(),
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    number: 1,
    pokemon: 'Bulbasaur',
    types: ['grass', 'poison'],
    image: 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png',
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    number: 1,
    pokemon: 'Bulbasaur',
    types: ['grass', 'poison'],
    image: 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png',
    onClick: fn(),
  },
};
