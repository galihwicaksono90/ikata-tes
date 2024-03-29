import { Box, Stack, Text, Title, Group } from "@mantine/core";
import { Container } from "components/common";
import { ResetPasswordForm } from "components/form";
import { LoginLayout, MainLayout } from "components/layouts";
import { api } from "generated/graphql";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { wrapper } from "redux/store";

interface Props {
  tokenValid?: boolean;
}

const ResetPassword = ({ tokenValid }: Props) => {
  if (!tokenValid) {
    return (
      <MainLayout>
        <Container light sx={{ height: 845 }}>
          <Group
            align="center"
            position="center"
            sx={{ textAlign: "center", height: "100%" }}
          >
            <Box>
              <Box
                sx={{
                  position: "relative",
                  height: 282,
                  width: 282,
                  margin: "0px auto",
                }}
              >
                <Image src="/shareLink.png" layout="fill" alt="" />
              </Box>
              <Title order={2} sx={{ fontWeight: 600 }} mb={10}>
                Link Kadaluarsa
              </Title>
              <Text size="lg" weight={600} color="dimmed">
                Halaman yang anda cari sudah tidak tersedia untuk saat ini.
              </Text>
            </Box>
          </Group>
        </Container>
      </MainLayout>
    );
  }

  return (
    <LoginLayout containerSize={440} headerTitle="Reset Password" center>
      <Text align="center" mb={30}>
        Masukkan password baru anda
      </Text>
      <ResetPasswordForm />
    </LoginLayout>
  );
};

export default ResetPassword;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    try {
      const token = query?.token;
      if (!token) throw Error;
      const response = await store.dispatch(
        api.endpoints.GetForgotPasswordToken.initiate({
          user: { token: token as string },
        })
      );

      return {
        props: {
          tokenValid: response.data.getForgotPasswordToken.isValid,
        },
      };
    } catch (error) {
      return {
        props: {
          tokenValid: false,
        },
      };
    }
  });
