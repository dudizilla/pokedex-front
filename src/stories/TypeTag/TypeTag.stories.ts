import type { Meta, StoryObj } from '@storybook/react';
import { TypeTag } from './TypeTag';

const meta = {
  title: 'Components/Type Tag',
  component: TypeTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypeTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: 'normal',
    label: 'Normal',
    size: 'large'
  },
};

export const Fighting: Story = {
  args: {
    type: 'fighting',
    label: 'Fighting',
    size: 'large'
  },
};

export const Flying: Story = {
  args: {
    type: 'flying',
    label: 'Flying',
    size: 'large'
  },
};

export const Ground: Story = {
  args: {
    type: 'ground',
    label: 'Ground',
    size: 'large'
  },
};

export const Poison: Story = {
  args: {
    type: 'poison',
    label: 'Poison',
    size: 'large'
  },
};

export const Rock: Story = {
  args: {
    type: 'rock',
    label: 'Rock',
    size: 'large'
  },
};

export const Bug: Story = {
  args: {
    type: 'bug',
    label: 'Bug',
    size: 'large'
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
    label: 'Ghost',
    size: 'large'
  },
};

export const Steel: Story = {
  args: {
    type: 'steel',
    label: 'Steel',
    size: 'large'
  },
};

export const Fire: Story = {
  args: {
    type: 'fire',
    label: 'Fire',
    size: 'large'
  },
};

export const Water: Story = {
  args: {
    type: 'water',
    label: 'Water',
    size: 'large'
  },
};

export const Grass: Story = {
  args: {
    type: 'grass',
    label: 'Grass',
    size: 'large'
  },
};

export const Electric: Story = {
  args: {
    type: 'electric',
    label: 'Electric',
    size: 'large'
  },
};

export const Psychic: Story = {
  args: {
    type: 'psychic',
    label: 'Psychic',
    size: 'large'
  },
};

export const Ice: Story = {
  args: {
    type: 'ice',
    label: 'Ice',
    size: 'large'
  },
};

export const Dragon: Story = {
  args: {
    type: 'dragon',
    label: 'Dragon',
    size: 'large'
  },
};

export const Dark: Story = {
  args: {
    type: 'dark',
    label: 'Dark',
    size: 'large'
  },
};

export const Fairy: Story = {
  args: {
    type: 'fairy',
    label: 'Fairy',
    size: 'large'
  },
};
