import createMiddleware from "next-intl/middleware";
import { locales } from "utils/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "ja",
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ja|en)/:path*"],
};
