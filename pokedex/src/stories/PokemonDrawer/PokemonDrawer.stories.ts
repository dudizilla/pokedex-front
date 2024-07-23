import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { PokemonDrawer } from './PokemonDrawer';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Pokemon Drawer',
  component: PokemonDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // args: { onClick: fn() },
} satisfies Meta<typeof PokemonDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    name: 'Charizard',
    number: 6,
    types: ['Fire', 'Flying'],
    image: "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/006.png",
    abilities: ['Blaze', 'Solar Power'],
    base: {
        hp: 78,
        attack: 84,
        defense: 78,
        sp_attack: 109,
        sp_defense: 85,
        speed: 100,
    },
    onClick: fn(),
  },
};

export const Medium: Story = {
  args: {
    name: 'Charizard',
    number: 6,
    types: ['Fire', 'Flying'],
    image: "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/006.png",
    abilities: ['Blaze', 'Solar Power'],
    base: {
        hp: 78,
        attack: 84,
        defense: 78,
        sp_attack: 109,
        sp_defense: 85,
        speed: 100,
    },
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    name: 'Charizard',
    number: 6,
    types: ['Fire', 'Flying'],
    image: "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/006.png",
    abilities: ['Blaze', 'Solar Power'],
    base: {
        hp: 78,
        attack: 84,
        defense: 78,
        sp_attack: 109,
        sp_defense: 85,
        speed: 100,
    },
    onClick: fn(),
  },
};
