import { VariantProps } from "@stitches/react";
import { styled } from "@root/stitches.config";

export const Button = styled("button", {
  padding: "$2 $3",
  border: "none",
  borderRadius: "$2",
  fontWeight: "$2",
  color: "$slate11",
  background: "transparent",
  "&:hover": {
    background: "$slate2",
  },
  "&:active": {
    background: "$slate3",
  },

  variants: {
    color: {
      primary: {
        color: "$indigo12",
        background: "$indigo3",
        "&:hover": {
          background: "$indigo4",
        },
        "&:active": {
          background: "$indigo5",
        },
      },
      danger: {
        color: "$crimson12",
        background: "$crimson3",
        "&:hover": {
          background: "$crimson4",
        },
        "&:active": {
          background: "$crimson5",
        },
      },
    },
  },
});

export type StyledButtonVariants = VariantProps<typeof Button>;
