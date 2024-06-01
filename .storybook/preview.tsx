import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import "../src/globals.css";
import messages from "../messages/en.json";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <NextIntlClientProvider locale="en" messages={messages}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
