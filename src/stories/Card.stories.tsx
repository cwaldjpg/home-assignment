import type { Meta, StoryObj } from "@storybook/react";
import LoginCard from "@/app/[locale]/LoginCard";
import ForgotEmailCard from "@/app/[locale]/forgot-email/ForgotEmailCard";
import Card from "components/Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: ({ onSubmit, ...args }) => (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 pt-16 bg-slate-200">
      <LoginCard onSubmit={() => {}} {...args} />
    </div>
  ),
};

export const EnLogin: Story = {
  parameters: {
    locale: 'en'
  },
  render: ({ onSubmit, ...args }) => (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 pt-16 bg-slate-200">
      <LoginCard onSubmit={() => {}} {...args} />
    </div>
  ),
};


export const ForgotEmail: Story = {
  render: ({ onSubmit, ...args }) => (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 pt-16 bg-slate-200">
      <ForgotEmailCard onSubmit={() => {}} {...args} />
    </div>
  ),
};

export const EnForgotEmail: Story = {
  parameters: {
    locale: 'en'
  },
  render: ({ onSubmit, ...args }) => (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 pt-16 bg-slate-200">
      <ForgotEmailCard onSubmit={() => {}} {...args} />
    </div>
  ),
};