import {
  slate,
  slateDark,
  crimson,
  crimsonDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...indigo,
      ...crimson,
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      4: "12px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    marginX: (value: unknown) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: unknown) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    ...slateDark,
    ...indigoDark,
    ...crimsonDark,
  },
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "$untitled",
    fontSize: "$2",
    background: "$slate1",
    color: "$slate11",
  },
  button: {
    ":hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  },
});
