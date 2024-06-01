"use client";
import { SubmitHandler } from "react-hook-form";
import LoginCard, { LoginFormValues } from "./LoginCard";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { create } from "zustand";

const useStore = create<{
  email: string;
  setEmail: (payload: string) => void;
  isLoading: boolean;
  setIsLoading: (payload: boolean) => void;
}>((set) => ({
  email: "",
  setEmail: (payload) => set({ email: payload }),
  isLoading: false,
  setIsLoading: (payload) => set({ isLoading: payload }),
}));

export default function LoginPage() {
  const t = useTranslations();
  const locale = useLocale();
  const { email, setEmail, isLoading, setIsLoading } = useStore();

  useEffect(() => {
    setEmail("");
    setIsLoading(false);
  }, [locale, setEmail, setIsLoading]);

  const handleSubmitLogin: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      setIsLoading(true);
      await fetch("https://httpbin.org/post", {
        method: "POST",
      });
      setTimeout(() => {
        setIsLoading(false);
        setEmail(values.email);
      }, 2000);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <>
      <LoginCard
        onSubmit={handleSubmitLogin}
        className={
          email
            ? "z-0 pointer-events-none animate-slideOut"
            : "z-[1] animate-slideFromTopBounce"
        }
        isLoading={isLoading}
      />
      <p
        className={`absolute text-3xl px-6 text-center opacity-0 z-0 ${
          email ? "animate-fadeIn animation-delay-500 z-[1]" : ""
        }`}
      >
        {t("login.welcome")} <b>{email}</b>
      </p>
    </>
  );
}
