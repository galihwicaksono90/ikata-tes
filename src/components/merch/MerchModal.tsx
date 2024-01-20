import {
  SimpleGrid,
  AspectRatio,
  Box,
  Button,
  Divider,
  Group,
  Skeleton,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { Modal, ModalProps, NoData } from "components/common";
import {
  useGetMerchandiseDetailQuery,
  useGetMerchandiseContactQuery,
  StatusMerchandises,
} from "generated/graphql";
import Image from "next/image";
import { numberToCurrency } from "utils";
import { useState } from "react";

interface MerchModalProps extends ModalProps {
  id: string;
}

const images = ["/merch1.png", "/merch2.png", "/merch3.png"];

const Wrapper = ({ children, ...rest }: ModalProps) => {
  return (
    <Modal {...rest} title="Detail Produk">
      {children}
    </Modal>
  );
};

export const MerchModal = ({ id, ...rest }: MerchModalProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { data: contact, isFetching: contactIsFetching } =
    useGetMerchandiseContactQuery();
  const { data, isFetching } = useGetMerchandiseDetailQuery(
    { id },
    { skip: !id }
  );

  if (isFetching) {
    return (
      <Wrapper {...rest} size={744}>
        <Group
          align="flex-start"
          noWrap
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
            },
          })}
        >
          <Group
            sx={(theme) => ({
              width: "100%",
              flex: "0 0 319px",
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                flexDirection: "row",
              },
            })}
            direction="column"
          >
            <AspectRatio
              ratio={319 / 280}
              sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Skeleton height="100%" width="100%" />
            </AspectRatio>
            <Group sx={{ width: "100%" }} noWrap>
              {[...Array(3).fill(0)].map((_item, index) => (
                <Skeleton
                  sx={{
                    width: "100%",
                    height: 84,
                    borderRadius: "12px",
                  }}
                  key={index}
                ></Skeleton>
              ))}
            </Group>
          </Group>
          <Stack sx={{ width: "100%" }}>
            <Skeleton height={30} width="80%" mb={10} />
            <Skeleton height={40} width="60%" />
            <Divider sx={{ borderTopColor: "#eaeaea" }} />
            <Stack spacing={30}>
              <Skeleton height={16} width="40%" />
              <Skeleton height={16} width="40%" />
              <Skeleton height={16} width="40%" />
              <Skeleton height={16} width="40%" />
            </Stack>
            <Divider sx={{ borderTopColor: "#eaeaea" }} />
            <Skeleton height={14} width="30%" />
            <Skeleton height={90} width="100%" />
            <Skeleton height={40} width="50%" />
          </Stack>
        </Group>
      </Wrapper>
    );
  }

  if (!data?.getMerchandiseDetail) {
    return (
      <Wrapper {...rest}>
        <NoData light />;
      </Wrapper>
    );
  }

  return (
    <Wrapper {...rest} size={744}>
      <Group
        align="flex-start"
        noWrap
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column",
          },
        })}
      >
        <Stack sx={{ width: "100%", flex: "0 0 319px" }}>
          <AspectRatio
            ratio={319 / 280}
            sx={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {data?.getMerchandiseDetail?.photos[imageIndex]?.thumbnailPath ? (
              <Image
                src={data.getMerchandiseDetail.photos[imageIndex].thumbnailPath}
                layout="fill"
                objectFit="cover"
                alt={data.getMerchandiseDetail.name}
              />
            ) : (
              <Box
                sx={(theme) => ({ ...theme.fn.cover(), background: "gray" })}
              />
            )}
          </AspectRatio>
          <SimpleGrid cols={3}>
            {data?.getMerchandiseDetail?.photos.map((photo, index) => (
              <UnstyledButton
                onClick={() => setImageIndex(index)}
                sx={{ height: 84, width: "100%" }}
                key={index}
              >
                <AspectRatio
                  ratio={1}
                  sx={{
                    position: "relative",
                    height: 84,
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={photo?.thumbnailPath}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </AspectRatio>
              </UnstyledButton>
            ))}
          </SimpleGrid>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Text sx={{ fontSize: "1.375rem" }} weight={600}>
            {data.getMerchandiseDetail.name}
          </Text>
          <Text sx={{ fontSize: "1.75rem" }} weight={700}>
            {!!data.getMerchandiseDetail.price
              ? numberToCurrency(data.getMerchandiseDetail.price)
              : null}
          </Text>
          <Divider sx={{ borderTopColor: "#eaeaea" }} />
          <Box
            component="table"
            sx={(theme) => ({
              width: "fit-content",
              color: theme.colors.dark[8],
              fontSize: theme.fontSizes.sm,
              fontWeight: 500,
              "& tr": {
                height: 30,
              },
              "& tbody tr td:first-child": {
                width: 80,
                color: theme.colors.dark[2],
              },
              "& tbody tr td:nth-child(2)": {
                "&:before": {
                  content: '": "',
                  textAlign: "right",
                },
              },
            })}
          >
            <tbody>
              <tr>
                <td>Stok</td>
                <Box
                  component="td"
                  sx={(theme) => ({
                    color:
                      data?.getMerchandiseDetail?.status ===
                      StatusMerchandises.OutOfStock
                        ? theme.colors.red[5]
                        : theme.colors.dark[8],
                  })}
                >
                  {data?.getMerchandiseDetail?.status ===
                  StatusMerchandises.OutOfStock
                    ? "Out Of Stock"
                    : data.getMerchandiseDetail?.stock !== ""
                    ? data.getMerchandiseDetail.stock
                    : "-"}
                </Box>
              </tr>
              <tr>
                <td>Kategori</td>
                <td>
                  {data.getMerchandiseDetail?.merchandisecategory?.name !== ""
                    ? data.getMerchandiseDetail?.merchandisecategory?.name
                    : "-"}
                </td>
              </tr>
              <tr>
                <td>SKU</td>
                <td>
                  {data.getMerchandiseDetail?.sku !== ""
                    ? data.getMerchandiseDetail.sku
                    : "-"}
                </td>
              </tr>
              <tr>
                <td>Berat</td>
                <td>
                  {data.getMerchandiseDetail?.weight !== ""
                    ? data.getMerchandiseDetail.weight
                    : "-"}
                </td>
              </tr>
              <Box component="tr">
                <td>Ukuran</td>
                <Box
                  component="td"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 5,
                  }}
                >
                  <Group spacing={10}>
                    {data.getMerchandiseDetail.size.map((i, index) => {
                      return <MerchSize key={index}>{i}</MerchSize>;
                    })}
                  </Group>
                </Box>
              </Box>
            </tbody>
          </Box>
          <Divider sx={{ borderTopColor: "#eaeaea" }} />
          <Text size="sm" weight={600}>
            Deskripsi
          </Text>
          <Text size="sm" weight={500} mb={30}>
            {data.getMerchandiseDetail.description !== ""
              ? data.getMerchandiseDetail.description
              : "-"}
          </Text>
          <Box
            href={`https://wa.me/${contact.getWhatsappMerchandise.nomor}?text=Hai Admin merchandise IKATA, saya mau info produk ${data.getMerchandiseDetail.name}.`}
            target="_blank"
            rel="noreferrer"
            component="a"
            sx={{ textDecoration: "none" }}
          >
            <Button
              size="lg"
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[8],
                color: theme.white,
                "&:hover": {
                  backgroundColor: theme.fn.lighten(theme.colors.dark[8], 0.05),
                },
              })}
              loading={contactIsFetching}
              fullWidth
            >
              Beli Sekarang
            </Button>
          </Box>
        </Stack>
      </Group>
    </Wrapper>
  );
};

const MerchSize = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.colors.orange[0],
        borderRadius: "50px",
        fontSize: theme.fontSizes.sm,
        fontWeight: 600,
      })}
      px={10}
    >
      {children}
    </Box>
  );
};
