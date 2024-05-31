"use client";
import { usePathname, Link } from "@/navigation";
import { useLocale } from "next-intl";
import React from "react";
import { locales } from "utils/config";

type Locale = (typeof locales)[number];
const localeNames: Record<Locale, string> = {
  "en": "English",
  "ja": "日本語",
};

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale()
  return (
    <Link href={pathname} locale={locale !== "ja" ? "ja" : "en"} replace>
      <button>{localeNames[locale]}</button>
    </Link>
  );
};

export default LocaleSwitcher;
