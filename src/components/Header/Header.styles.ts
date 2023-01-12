import { styled } from "@root/stitches.config";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$3",
  backgroundColor: "$slate2",
  color: "$slate11",
  boxShadow: "0 0 0 1px $slate6, 0 1px 2px $slate8",
  "@bp2": {
    padding: "$4",
  },
});
