import {
  crimson,
  crimsonDark,
  indigo,
  indigoDark,
  slate,
  slateDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  theme: {
    borderStyles: {},
    borderWidths: {
      1: '1px',
      2: '2px',
    },
    colors: {
      ...slate,
      ...indigo,
      ...crimson,
    },
    fonts: {
      mono: 'Söhne Mono, menlo, monospace',
      untitled: 'Untitled Sans, apple-system, sans-serif',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 600,
    },
    letterSpacings: {},
    lineHeights: {},
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      round: '9999px',
    },
    shadows: {
      1: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      2: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    },
    sizes: {},
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
    },
    transitions: {},
    zIndices: {},
  },
  utils: {
    marginX: (value: unknown) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: unknown) => ({
      marginBottom: value,
      marginTop: value,
    }),
  },
})

export const darkTheme = createTheme('dark', {
  colors: {
    ...slateDark,
    ...indigoDark,
    ...crimsonDark,
  },
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  ':focus': {
    outline: 'none',
    boxShadow: 'none',
  },
  button: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  'html, body': {
    background: '$slate1',
    color: '$slate12',
    fontFamily: '$untitled',
    fontSize: '$2',
    margin: 0,
    padding: 0,
  },
})
