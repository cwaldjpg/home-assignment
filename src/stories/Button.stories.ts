import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@/components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small button",
  },
};
