import { createStitches, defaultThemeMap } from "@stitches/react";
import { colors } from "./tokens/colors";
import { fontSizes } from "./tokens/font-sizes";
import { fontWeights } from "./tokens/font-weights";
import { fonts } from "./tokens/fonts";
import { lineHeights } from "./tokens/line-heights";
import { radii } from "./tokens/radii";
import { space } from "./tokens/space";

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
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
  },
  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    lineHeights: lineHeights,
    radii: radii,
    space: space,
  },
});
