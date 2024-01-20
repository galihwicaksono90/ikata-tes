import { useCallback, Dispatch, SetStateAction } from "react";
import { Input, InputProps, UnstyledButton } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons";
import { useForm } from "react-hook-form";

interface SearchInputSmallProps extends Omit<InputProps<"input">, "onSubmit"> {
  placeholder?: string;
  onSubmit: (value: string) => void;
  defaultValue?: string;
}

interface FormProps {
  searchText: string;
}

export const SearchInputSmall = ({
  placeholder,
  onSubmit,
  value,
  defaultValue = "",
  ...rest
}: SearchInputSmallProps) => {
  const { register, handleSubmit, reset } = useForm<FormProps>({
    mode: "onSubmit",
    defaultValues: {
      searchText: defaultValue,
    },
  });

  const onConfirm = useCallback(
    (values: FormProps) => {
      onSubmit(values.searchText);
    },
    [onSubmit]
  );

  const onClear = useCallback(() => {
    reset();
    onSubmit("");
  }, [onSubmit, reset]);

  return (
    <form onSubmit={handleSubmit(onConfirm)}>
      <Input
        {...register("searchText")}
        sx={(theme) => ({
          backgroundColor: theme.white,
          border: `1px solid`,
          borderColor: theme.colors.gray[2],
          borderRadius: theme.radius.md,
          input: {
            maxWidth: 420,
            width: "100%",
            color: theme.colors.dark,
          },
        })}
        placeholder={placeholder}
        icon={<IconSearch />}
        size="md"
        variant="unstyled"
        rightSection={
          <UnstyledButton onClick={onClear}>
            <IconX color="#1d1d1d" size={16} />
          </UnstyledButton>
        }
        {...rest}
      />
    </form>
  );
};
