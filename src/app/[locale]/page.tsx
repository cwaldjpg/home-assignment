"use client";
import { SubmitHandler } from "react-hook-form";
import LoginCard, { LoginFormValues } from "./LoginCard";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { create } from "zustand";
import Overlay from "components/Overlay";

const useStore = create<{
  email: string;
  setEmail: (payload: string) => void;
}>((set) => ({
  email: "",
  setEmail: (payload) => set({ email: payload }),
}));

export default function LoginPage() {
  const t = useTranslations();
  const { email, setEmail } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitLogin: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      setIsLoading(true);
      await fetch("https://httpbin.org/post", {
        method: "POST",
      });
      setTimeout(() => {
        setIsLoading(false);
        setEmail(values.email);
      }, 3000);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <>
      <div
        key="once"
        className={`max-w-md w-full relative z-10 animate-slideFromTopBounce ${
          email ? "pointer-events-none animate-slideOut" : ""
        }`}
      >
        <LoginCard onSubmit={handleSubmitLogin} />
        <Overlay visible={isLoading} />
      </div>
      <p
        className={`absolute text-3xl opacity-0 z-0 ${
          email ? "animate-fadeIn animation-delay-500" : ""
        }`}
      >
        {t("login.welcome")} <b>{email}</b>
      </p>
    </>
  );
}
