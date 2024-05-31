"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "components/InputField";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Card, { CardProps } from "@/components/Card";

export type ForgotEmailFormValues = typeof defaultValues;
const defaultValues = {
  firstName: "",
  lastName: "",
};

interface ForgotEmailCardProps extends Omit<CardProps, "onSubmit"> {
  onSubmit: SubmitHandler<ForgotEmailFormValues>;
  isLoading?: boolean;
}

const ForgotEmailCard: React.FC<ForgotEmailCardProps> = ({
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
    <Card isLoading={isLoading} className={`max-w-3xl w-full flex justify-between items-stretch p-0 ${className}`}>
      <div className="flex-1 p-6 flex flex-col items-center">
        <h1 className="text-center text-2xl font-medium mb-6">
          {t("forgotEmail.subTitle")}
        </h1>
        <p className="text-center">{t("forgotEmail.description")}</p>
      </div>
      <div className="border-l-2 border-orange-500 border-solid my-6" />
      <div className="flex-1 p-6">
        <h1 className="text-center text-2xl font-medium mb-6">
          {t("forgotEmail.title")}
        </h1>
        <form className="block" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            placeholder={t("form.lastName")}
            name="lastName"
            control={control}
            rules={{
              required: t("validation.required"),
            }}
          />
          <InputField
            placeholder={t("form.lastName")}
            name="firstName"
            control={control}
            rules={{
              required: t("validation.required"),
            }}
          />
          <button type="submit" className="w-full block mt-4">
            {t("forgotEmail.send")}
          </button>
          <div className="text-center block mt-4">
            <Link
              href={`/`}
              className="hover:underline text-orange-500 text-center"
            >
              {t("login.title")}
            </Link>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ForgotEmailCard;
