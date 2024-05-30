import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "utils/config";

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
