import {
  DatePicker as BaseDatePicker,
  DatePickerProps as BaseDatePickerProps,
} from "@mantine/dates";
import { forwardRef, Ref } from "react";

interface DatePickerProps extends BaseDatePickerProps {}

const DatePickerComponent = (
  { ...rest }: DatePickerProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <BaseDatePicker
      ref={ref}
      {...rest}
      inputFormat="DD / MM / YYYY"
      size="lg"
      styles={(theme) => ({
        dropdown: {
          backgroundColor: "white",
          border: "0px",
        },
        day: {
          color: theme.colors.dark[8],
          "&:hover": {
            background: theme.fn.darken(theme.white, 0.1),
          },
        },
        calendarHeaderControl: {
          ":hover": {
            background: theme.fn.darken(theme.white, 0.1),
          },
        },
        calendarHeaderLevel: {
          background: theme.colors.orange[0],
          color: "white",
          "&:hover": {
            background: `${theme.fn.lighten(
              theme.colors.orange[0],
              0.1
            )} !important`,
          },
        },
        calendarHeaderLevelIcon: {
          color: `${theme.white} !important`,
        },
        monthPickerControl: {
          color: theme.colors.dark[8],
          "&:hover": {
            background: theme.fn.darken(theme.white, 0.1),
          },
        },
        yearPickerControl: {
          color: theme.colors.dark[8],
          "&:hover": {
            background: theme.fn.darken(theme.white, 0.1),
          },
        },
        arrow: {
          background: theme.white,
          border: "0px",
        },
        invalid: {
          borderColor: `${theme.other.errorRed} !important`,
        },
      })}
      locale="id"
    />
  );
};

export const DatePicker = forwardRef(DatePickerComponent);
