import type { Meta, StoryObj } from '@storybook/react';
import { TypeTag } from './TypeTag';

const meta = {
  title: 'Example/Type Tag',
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
  },
};

export const Fighting: Story = {
  args: {
    type: 'fighting',
    label: 'Fighting',
  },
};

export const Flying: Story = {
  args: {
    type: 'flying',
    label: 'Flying',
  },
};

export const Ground: Story = {
  args: {
    type: 'ground',
    label: 'Ground',
  },
};

export const Poison: Story = {
  args: {
    type: 'poison',
    label: 'Poison',
  },
};

export const Rock: Story = {
  args: {
    type: 'rock',
    label: 'Rock',
  },
};

export const Bug: Story = {
  args: {
    type: 'bug',
    label: 'Bug',
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
    label: 'Ghost',
  },
};

export const Steel: Story = {
  args: {
    type: 'steel',
    label: 'Steel',
  },
};

export const Fire: Story = {
  args: {
    type: 'fire',
    label: 'Fire',
  },
};

export const Water: Story = {
  args: {
    type: 'water',
    label: 'Water',
  },
};

export const Grass: Story = {
  args: {
    type: 'grass',
    label: 'Grass',
  },
};

export const Electric: Story = {
  args: {
    type: 'electric',
    label: 'Electric',
  },
};

export const Psychic: Story = {
  args: {
    type: 'psychic',
    label: 'Psychic',
  },
};

export const Ice: Story = {
  args: {
    type: 'ice',
    label: 'Ice',
  },
};

export const Dragon: Story = {
  args: {
    type: 'dragon',
    label: 'Dragon',
  },
};

export const Dark: Story = {
  args: {
    type: 'dark',
    label: 'Dark',
  },
};

export const Fairy: Story = {
  args: {
    type: 'fairy',
    label: 'Fairy',
  },
};
