import {
  EmblaBreakpointsProps,
  EmblaCarousel,
  MemberAvatar,
} from "components/common";
import { PengurusBidangType, KoordinatorWilayahType } from "generated/graphql";

interface Props {
  data?: PengurusBidangType[] | KoordinatorWilayahType[];
  rows?: number;
  slidesToShow?: number;
  responsive?: EmblaBreakpointsProps[];
  loading?: boolean;
  withTitle?: boolean;
  withClassYear?: boolean;
  loop?: boolean;
}

export const AvatarCarousel = ({
  data,
  rows = 2,
  slidesToShow = 4,
  responsive,
  loading,
  withClassYear,
  withTitle,
  loop = true,
}: Props) => {
  return (
    <EmblaCarousel
      loop={loop}
      withDots
      rows={rows}
      slidesPerView={slidesToShow}
      breakpoints={responsive}
      dotType="numbers"
    >
      {loading
        ? [...Array(6).fill(0)].map((item, index) => (
            <MemberAvatar loading={loading} key={index} />
          ))
        : data?.map((item) => (
            <MemberAvatar
              data={item}
              key={item.id}
              withTitle={withTitle}
              withClassYear={withClassYear}
            />
          ))}
    </EmblaCarousel>
  );
};
