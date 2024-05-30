import { useController } from "react-hook-form";
import type { FieldPath, Control, FieldValues, RegisterOptions } from 'react-hook-form';

interface InputFieldProps<
  TFormValues extends FieldValues = FieldValues,
  TPath extends FieldPath<TFormValues> = FieldPath<TFormValues>
> extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<TFormValues>;
  name: TPath;
  rules?: RegisterOptions<TFormValues, TPath>;
  label?: string;
  customError?: string;
}

const InputField = <
  TFormValues extends FieldValues,
  TPath extends FieldPath<TFormValues>
>({
  label,
  customError,
  name,
  control,
  rules,
  ...inputProps
}: InputFieldProps<TFormValues, TPath>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules
  });

  const formError = error?.message || customError;

  return (
    <div className='block'>
      {label && (
        <label className="text-lg font-normal mb-1 block" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        data-invalid={!!formError}
        {...field}
        {...inputProps}
      />
      <div className="text-red-500 h-6 text-base">{formError}</div>
    </div>
  );
};

export default InputField;
