"use client";
import { SubmitHandler } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { create } from "zustand";
import ForgotEmailCard, { ForgotEmailFormValues } from "./ForgotEmailCard";
import { useEffect } from "react";

const useStore = create<{
  user: ForgotEmailFormValues;
  setUser: (payload: { firstName: string; lastName: string }) => void;
  isLoading: boolean;
  setIsLoading: (payload: boolean) => void;
}>((set) => ({
  user: {
    firstName: "",
    lastName: "",
  },
  setUser: (payload) => set({ user: payload }),
  isLoading: false,
  setIsLoading: (payload) => set({ isLoading: payload }),
}));

export default function ForgotEmailPage() {
  const t = useTranslations();
  const locale = useLocale();
  const { user, setUser, isLoading, setIsLoading } = useStore();

  useEffect(() => {
    setUser({ firstName: "", lastName: "" });
    setIsLoading(false);
  }, [locale, setUser, setIsLoading]);

  const handleSubmitLogin: SubmitHandler<ForgotEmailFormValues> = async (
    values
  ) => {
    try {
      setIsLoading(true);
      await fetch("https://httpbin.org/post", {
        method: "POST",
      });
      setTimeout(() => {
        setIsLoading(false);
        setUser(values);
      }, 2000);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const fullName =
    user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : "";

  return (
    <>
      <ForgotEmailCard
        isLoading={isLoading}
        onSubmit={handleSubmitLogin}
        className={
          fullName
            ? "z-0 pointer-events-none animate-slideOut"
            : "z-[1] animate-slideFromTopBounce"
        }
      />
      <p
        className={`absolute text-3xl opacity-0 z-0 ${
          fullName ? "animate-fadeIn animation-delay-500 z-[1]" : ""
        }`}
      >
        {t("forgotEmail.contacting")} <b>{fullName}</b>
      </p>
    </>
  );
}
