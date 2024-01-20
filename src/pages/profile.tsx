import { Box, Center, Group, Loader, Tabs, Text } from "@mantine/core";
import { Container, showNotification } from "components/common";
import { AddressForm, BiodataForm, OccupationForm } from "components/form";
import { MainLayout } from "components/layouts";
import { ProfileTabs, StatusIuran, VerifiedTag } from "components/profile";
import { useGetProfileDetailQuery } from "generated/graphqlExtended";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { ProfileFormProps } from "redux/profileForm/profileFormSlice";

export interface FormRefProps {
  getValues(): ProfileFormProps;
}

export default function Profile() {
  const user = useAppSelector((state) => state.profileForm.user);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<number>(0);
  const { isLoading, isError, error } = useGetProfileDetailQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isError) return;
    showNotification({ message: "Belum login." });
    router.push("/login");
  }, [isError, router]);

  if (isLoading || isError) {
    return (
      <MainLayout>
        <Container sx={{ height: "80vh" }} light>
          <Center sx={{ height: "100%" }}>
            <Loader />
          </Center>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container light>
        <Group position="apart" mb={38}>
          <div>
            <Text sx={{ fontSize: "2rem" }} weight={600}>
              Halo, {user.fullName}
            </Text>
            <Text sx={{ fontSize: "1.375rem", fontWeight: 400 }} color="dimmed">
              Selamat datang di IKATA UPN
            </Text>
          </div>
          <VerifiedTag isVerified={user.isVerified} />
        </Group>
        <StatusIuran />
        <Group position="apart" mb={22}>
          <Text sx={{ fontSize: "1.5rem" }} weight={600}>
            Data Diri
          </Text>
        </Group>
        <ProfileTabs
          active={activeTab}
          onTabChange={(tab: number) => setActiveTab(tab)}
        >
          <Tabs.Tab
            label={
              <TabLabel active={activeTab === 0} title="Biodata" index={1} />
            }
          >
            <BiodataForm />
          </Tabs.Tab>
          <Tabs.Tab
            label={
              <TabLabel active={activeTab === 1} title="Alamat" index={2} />
            }
          >
            <AddressForm />
          </Tabs.Tab>
          <Tabs.Tab
            label={
              <TabLabel active={activeTab === 2} title="Pekerjaan" index={3} />
            }
          >
            <OccupationForm />
          </Tabs.Tab>
        </ProfileTabs>
      </Container>
    </MainLayout>
  );
}

const TabLabel = ({
  active,
  index,
  title,
}: {
  active?: boolean;
  title: string;
  index: number;
}) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: 15,
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: 120,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: active ? theme.colors.orange[0] : "#c4c4c4",
          height: 28,
          width: 28,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "white",
        })}
      >
        {index}
      </Box>
      <Text>{title}</Text>
    </Box>
  );
};
