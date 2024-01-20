import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from "@mantine/core";

interface TypographyProps extends TypographyStylesProviderProps {
  light?: boolean;
}

export const Typography = ({ children, light }: TypographyProps) => {
  return (
    <TypographyStylesProvider
      sx={(theme) => ({
        color: light ? theme.colors.dark[8] : theme.white,
        "& img": {
          maxWidth: "100%",
          width: "initial",
          height: "initial",
        },
        "& iframe": {
          width: "100%",
          aspectRatio: "16/9",
          height: "auto",
        },
      })}
    >
      {children}
    </TypographyStylesProvider>
  );
};
