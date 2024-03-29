import { useMemo } from "react";
import { Time } from "utils";
import { Paper, PaperProps, Text, Divider, Group, Stack } from "@mantine/core";
import { IconArrowUp, IconArrowDown, IconEqual } from "@tabler/icons";

export function PriceList(props: PaperProps<"div">) {
  const date = useMemo(
    () => Time.formatTime(new Date().getTime().toString()),
    []
  );

  return (
    <Paper radius="lg" {...props}>
      <Text size="lg" mb={20} weight={700}>
        Harga Acuan Batubara Mineral
      </Text>
      <Text size="lg" mb={28} weight={600} color="orange">
        {date}
      </Text>
      <PriceItem title="Batubara" price="900.000" />
      <Divider mb={20} />
      <PriceItem title="Nikel" price="900.000" icon="down" />
      <Divider mb={20} />
      <PriceItem title="Emas" price="900.000" />
      <Divider mb={20} />
      <PriceItem title="Lain-lain" price="900.000" icon="equal" />
    </Paper>
  );
}

const PriceItem = ({
  title,
  price,
  icon = "up",
}: {
  title: string;
  price: string;
  icon?: "up" | "down" | "equal";
}) => {
  const arrowIcon = () => {
    switch (icon) {
      case "up":
        return <IconArrowUp size={16} />;
      case "down":
        return <IconArrowDown size={16} />;
      case "equal":
        return <IconEqual size={16} />;
      default:
        return <IconArrowUp size={16} />;
    }
  };
  return (
    <Group position="apart" align="center" style={{ width: "100%" }} mb="10px">
      <Stack spacing={0}>
        <Text size="sm" weight="bold" style={{ lineHeight: "25px" }}>
          {title}
        </Text>
        <Text size="sm" weight="bold" style={{ lineHeight: "25px" }}>
          {price}
        </Text>
      </Stack>
      {arrowIcon()}
    </Group>
  );
};
