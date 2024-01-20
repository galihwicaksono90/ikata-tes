import {
  Badge as BaseBadge,
  BadgeProps as BaseBadgeProps,
} from "@mantine/core";

interface BadgeProps extends BaseBadgeProps<"div"> {}

export const Badge = ({ children, ...rest }: BadgeProps) => {
  return (
    <BaseBadge
      {...rest}
      sx={(theme) => ({
        width: "min-content",
        borderRadius: "50px",
        height: 38,
        background: theme.other.gradientColor,
        color: theme.white,
        textTransform: "uppercase",
        fontSize: "0.75rem",
      })}
    >
      {children}
    </BaseBadge>
  );
};
