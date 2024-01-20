import React from "react";
import {
  Box,
  Container as BaseContainer,
  ContainerProps,
  useMantineTheme,
} from "@mantine/core";

interface Props extends ContainerProps {
  light?: boolean;
  children: React.ReactNode;
  noPadding?: boolean;
  primary?: boolean;
}

export function Container({
  children,
  light = false,
  noPadding = false,
  primary,
  ...rest
}: Props) {
  const theme = useMantineTheme();
  const padding = () => {
    if (noPadding) return {};

    return {
      pt: 50,
      pb: 75,
    };
  };

  if (light || primary) {
    return (
      <Box
        sx={(theme) => ({
          width: "100%",
          backgroundColor: primary ? theme.colors.orange[0] : theme.white,
          color: theme.colors.dark,
        })}
      >
        <BaseContainer
          size={theme.other.containerSize}
          {...padding()}
          {...rest}
        >
          {children}
        </BaseContainer>
      </Box>
    );
  }

  return (
    <BaseContainer size={theme.other.containerSize} {...padding()} {...rest}>
      {children}
    </BaseContainer>
  );
}
