"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "components/InputField";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Card, { CardProps } from "components/Card";
import Button from "@/components/Button";

export type LoginFormValues = typeof defaultValues;
const defaultValues = {
  email: "",
};

interface LoginCardProps extends Omit<CardProps, "onSubmit"> {
  onSubmit: SubmitHandler<LoginFormValues>;
  isLoading?: boolean;
}

const LoginCard: React.FC<LoginCardProps> = ({
  onSubmit,
  isLoading,
  className,
}) => {
  const t = useTranslations();
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues,
  });

  return (
    <Card isLoading={isLoading} className={`max-w-md w-full border-t-8 border-orange-500 ${className}`}>
      <h1 className="text-center text-4xl font-medium mb-10">
        {t("login.title")}
      </h1>
      <form className="block" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          placeholder={t("form.email")}
          name="email"
          control={control}
          rules={{
            required: t("validation.required"),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t("validation.invalid"),
            },
          }}
        />
        <Button type="submit" className="w-full block mt-4">
          {t("login.title")}
        </Button>
        <div className="text-center block mt-4">
          <Link
            href={`/forgot-email`}
            className="hover:underline text-orange-500 text-center"
          >
            {t("forgotEmail.title")}
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default LoginCard;
