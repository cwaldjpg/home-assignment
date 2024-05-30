import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "utils/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|images|health|favicon.ico).*|)',
  ],
};
