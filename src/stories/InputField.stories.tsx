import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputField from '@/components/InputField'
import { useForm } from 'react-hook-form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  render: function Render(args) {
    const { control } = useForm({
      mode: 'onBlur'
    });
    return (
      <form>
        <InputField control={control} {...args} />
      </form>
    )
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelPlaceholder: Story = {
  args: {
    label: 'Label',
    name: 'field',
    placeholder: 'Label',
  }
}

export const WithError: Story = {
  args: {
    label: 'Label',
    name: 'field',
    placeholder: 'This field has error',
    customError: 'Required'
  }
}

export const CustomRules: Story = {
  args: {
    label: 'Email',
    name: 'field',
    placeholder: 'Input your email',
    rules: {
      required: 'Field required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email',
      },  
    }
  }
}