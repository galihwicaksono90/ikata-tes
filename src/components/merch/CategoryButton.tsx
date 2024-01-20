import { UnstyledButton } from "@mantine/core";

interface CategoryButtonProps {
  label: string;
  setCurrentCategory: () => void;
  active?: boolean;
}

export const CategoryButton = ({
  label,
  setCurrentCategory,
  active,
}: CategoryButtonProps) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        color: active ? theme.colors.dark[8] : theme.colors.dark[3],
        fontSize: theme.fontSizes.sm,
        fontWeight: active ? 600 : 500,
      })}
      onClick={setCurrentCategory}
    >
      {label}
    </UnstyledButton>
  );
};
