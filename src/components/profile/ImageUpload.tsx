import { Avatar, Box, Group, Progress, Text } from "@mantine/core";
import { showNotification, UploadButton } from "components/common";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setUserImage } from "redux/profileForm/profileFormSlice";
import { bytesToMb, compressImage, Options } from "utils";

const maxSize = 5;

interface ImageUploadProps {
  disabled?: boolean;
}

export function ImageUpload({ disabled }: ImageUploadProps) {
  const userImage = useAppSelector((state) => state.profileForm.userImage);
  const [progress, setProgress] = useState(0);
  const dispatch = useAppDispatch();
  const onProgress = (p: number) => {
    setProgress(p);
  };

  const handleUploadFile = async (file: File) => {
    if (!file) return;

    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/png" &&
      file.type !== "image/jpg"
    ) {
      showNotification({ message: "Jenis file tidak didukung" });
      return;
    }

    if (bytesToMb(file.size) > maxSize) {
      showNotification({
        message: "Ukuran file melebihi 5Mb",
      });
      return;
    }

    const options: Options = {
      onProgress,
    };

    try {
      const result = await compressImage({ file, options });
      setProgress(0);
      dispatch(
        setUserImage({ file: result, url: URL.createObjectURL(result) })
      );
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <Group
      spacing={30}
      mb={60}
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: "column",
          alignItems: "center",
        },
      })}
    >
      <Avatar size={175} radius="xl" src={userImage?.url} />
      <Group
        direction="column"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            alignItems: "center",
          },
        })}
      >
        <Text mb={20}>
          JPG atau PNG, maksimal ukuran {maxSize.toString()}Mb
        </Text>
        <Group
          noWrap
          sx={(theme) => ({
            width: "100%",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column",
            },
          })}
          align="center"
          position="apart"
        >
          <UploadButton onChange={handleUploadFile} disabled={disabled}>
            Ubah Foto
          </UploadButton>
          {disabled ? null : progress > 0 ? (
            <Box sx={{ width: "100%" }}>
              <Progress
                value={progress}
                color="blue"
                label={`${progress}%`}
                size="xl"
              />
            </Box>
          ) : null}
        </Group>
      </Group>
    </Group>
  );
}
