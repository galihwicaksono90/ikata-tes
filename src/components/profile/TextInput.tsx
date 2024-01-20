import {
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
} from "@mantine/core";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps extends Omit<BaseTextInputProps, "error"> {
  error?: FieldError | boolean;
  register: UseFormRegisterReturn;
  optional?: boolean;
  light?: boolean;
}

export const TextInput = ({
  styles,
  error,
  optional,
  register,
  light,
  ...rest
}: TextInputProps) => {
  return (
    <BaseTextInput
      size="lg"
      error={
        typeof error === "boolean" ? error : !!error ? error.message : null
      }
      description={optional ? "Optional" : null}
      {...register}
      {...rest}
      styles={(theme) => ({
        ...styles,
      })}
    />
  );
};

{
  /* !!error ? error.message : null */
}
