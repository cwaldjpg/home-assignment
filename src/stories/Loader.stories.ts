import type { Meta, StoryObj } from "@storybook/react";
import Loader from "components/Loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {};
