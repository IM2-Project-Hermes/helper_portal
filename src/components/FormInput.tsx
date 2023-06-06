import { FC, ReactNode } from "react";

interface FormProps {
  label: string;
  children: ReactNode;
  placeholder: string;
}

export const FormTextInput: FC<FormProps> = ({
  label,
  children,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={label}>{children}</label>
      <input
        className="rounded-sm placeholder-amber-300"
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
      />
    </>
  );
};
