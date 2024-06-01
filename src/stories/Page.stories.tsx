import type { Meta } from '@storybook/react';

import LoginPage from '@/app/[locale]/page'
import ForgotEmailPage from '@/app/[locale]/forgot-email/page';

const meta = {
  title: 'Example/Page',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
export const Login = {
  render: () => (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 pt-16 bg-slate-200">
      <LoginPage />
    </div>
  )
}

export const ForgotEmail = {
  render: () => (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 pt-16 bg-slate-200">
      <ForgotEmailPage />
    </div>
  )
}
