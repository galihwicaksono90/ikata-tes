import { Grid } from "@mantine/core";
import { PengurusBidangType, KoordinatorWilayahType } from "generated/graphql";
import { MemberAvatar } from "components/common";

interface AvatarGridProps {
  data: PengurusBidangType[] | KoordinatorWilayahType[];
  loading?: boolean;
}

export const AvatarGrid = ({ data, loading }: AvatarGridProps) => {
  return (
    <Grid>
      {loading
        ? [...Array(6).fill(0)].map((i, index) => (
            <Grid.Col span={6} sm={4} key={index}>
              <MemberAvatar loading />
            </Grid.Col>
          ))
        : data?.map((i) => {
            return (
              <Grid.Col span={6} sm={4} key={i.id}>
                <MemberAvatar data={i} withTitle withClassYear />
              </Grid.Col>
            );
          })}
    </Grid>
  );
};
