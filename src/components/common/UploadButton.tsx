import { useRef, ChangeEvent } from "react";
import { Button, ButtonProps } from "@mantine/core";

type UploadButtonProps = {
  onChange?(file: File): void;
  children: React.ReactNode;
  disabled?: boolean;
} & Omit<ButtonProps<"button">, "onChange">;

export const UploadButton = ({
  onChange,
  children,
  disabled,
  ...rest
}: UploadButtonProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null && !Array.isArray(e.target.files)) return;
    onChange(e.target.files[0]);
  };

  return (
    <>
      <Button
        {...rest}
        onClick={handleClick}
        radius="sm"
        size="lg"
        disabled={disabled}
      >
        {children}
      </Button>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        ref={ref}
        onChange={handleChange}
      />
    </>
  );
};
