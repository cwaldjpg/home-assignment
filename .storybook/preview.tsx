import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import "../src/globals.css";
import jaMessages from "../messages/ja.json";
import enMessages from "../messages/en.json";

const preview: Preview = {
  parameters: {
    locale: 'ja'
  },
  decorators: [
    (Story, { parameters }) => {
      return (
        <NextIntlClientProvider locale={parameters.locale} messages={parameters.locale === 'ja' ? jaMessages: enMessages }>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
