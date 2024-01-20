import { MainLayout } from "components/layouts";
import { Container } from "components/common";
import { Group, Text, Paper, Box } from "@mantine/core";
import { ContactForm } from "components/form";
import Head from "head";

export default function ContactUs() {
  return (
    <MainLayout>
      <Head page="kontak" />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            filter: "brightness(35%)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            background: `url("/neo-map-bw.png") no-repeat`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* <Image
            src="/map.svg"
            layout="fill"
            objectFit="cover"
            priority
            alt=""
          /> */}
        </Box>
        <Container>
          <Group
            position="apart"
            noWrap
            align="center"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                flexDirection: "column",
                "& > div:first-of-type": {
                  marginBottom: 30,
                },
              },
            })}
          >
            <Text sx={{ fontSize: "3.8125rem" }} weight={700} align="center">
              Kontak Kami
            </Text>
            <Paper
              sx={(theme) => ({
                borderRadius: "0px",
                width: "100%",
                maxWidth: 456,
                background: theme.white,
                color: theme.colors.dark[8],
              })}
              pt={70}
              px={30}
              pb={60}
            >
              <ContactForm />
            </Paper>
          </Group>
        </Container>
      </Box>
    </MainLayout>
  );
}
