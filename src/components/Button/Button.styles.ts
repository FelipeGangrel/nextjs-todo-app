import { VariantProps } from "@stitches/react";
import { styled } from "@root/stitches.config";

export const Button = styled("button", {
  padding: "$2 $3",
  background: "transparent",
  border: "none",
  borderRadius: "$2",

  variants: {
    color: {
      gray: {
        background: "$gray3",
        color: "$gray11",
      },
      blue: {
        background: "$blue3",
        color: "$blue11",
      },
      red: {
        background: "$red3",
        color: "$red11",
      },
      green: {
        background: "$green3",
        color: "$green11",
      },
    },
  },
});

export type StyledButtonVariants = VariantProps<typeof Button>;
