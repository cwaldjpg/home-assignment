"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "components/InputField";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";

export type LoginFormValues = typeof defaultValues;
const defaultValues = {
  email: "",
  firstName: "",
  lastName: "",
};

interface LoginCardProps {
  onSubmit: SubmitHandler<LoginFormValues>;
}

const LoginCard: React.FC<LoginCardProps> = ({ onSubmit }) => {
  const t = useTranslations();
  const pathname = usePathname();

  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues,
  });

  return (
    <div
      className={`card max-w-md w-full`}
    >
      <h1 className="text-center text-4xl font-medium mb-10">{t('login.title')}</h1>
      <form className="block" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder={t('form.email')}
          name="email"
          control={control}
          rules={{
            required: t('validation.required'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('validation.invalid'),
            },
          }}
        />
        <button type="submit" className="w-full block mt-4">
          {t('login.title')}
        </button>
        <div className="text-center block mt-4">
          <Link href={`${pathname}forgot-email`} className="hover:underline text-orange-500 text-center">
            {t('forgotEmail.title')}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
