import { Tabs, TabsProps, Box, LoadingOverlay } from "@mantine/core";

interface ProfileTabsProps extends TabsProps {}

export const ProfileTabs = ({ children, ...rest }: ProfileTabsProps) => {
  return (
    <Tabs
      {...rest}
      position="apart"
      styles={(theme) => ({
        tabsListWrapper: {
          borderBottom: "0px solid red !important",
          marginBottom: 40,
        },
        tabControl: {
          width: "100%",
          maxWidth: 336,
          height: 60,
          background: "#f4f4f4",
          color: "#c4c4c4",
          fontWeight: 500,
          gap: 2,
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: "calc(100% /3)",
          },
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            width: "100%",
            maxWidth: "initial",
          },
        },
        tabLabel: {
          color: "#c4c4c4",
        },
        tabIcon: {
          backgroundColor: "#c4c4c4",
          height: 28,
          width: 28,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        },
        tabActive: {
          background: theme.other.profileOrange,
          "& .mantine-Tabs-tabLabel": {
            color: theme.colors.orange[0],
          },
          "& .mantine-Tabs-tabIcon": {
            background: theme.colors.orange[0],
            color: theme.white,
          },
        },
      })}
    >
      {children}
    </Tabs>
  );
};

interface ProfileTabPanelProps {
  children: React.ReactNode;
  loading?: boolean;
}

export const ProfileTabPanel = ({
  loading,
  children,
}: ProfileTabPanelProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #eaeaea",
        borderRadius: "12px",
        overlow: "hidden",
      }}
    >
      <LoadingOverlay visible={loading} radius="lg" />
      <Box py={40} px={22}>
        {children}
      </Box>
    </Box>
  );
};
