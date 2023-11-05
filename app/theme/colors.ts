// TODO: write documentation for colors and palette in own markdown file and add links from here

export const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#EAFCFB",
  primary200: "#D5F9FA",
  primary300: "#BBEAF0",
  primary400: "#A3D6E1",
  primary500: "#82BBCD",
  primary600: "#5F96B0",

  secondary100: "#F9F8F4",
  secondary200: "#F3F1EB",
  secondary300: "#DCD8D1",
  secondary400: "#BAB5AE",
  secondary500: "#8C8780",
  secondary600: "#786C5D",

  accent100: "#F8FEF1",
  accent200: "#EFFDE3",
  accent300: "#E3FAD4",
  accent400: "#D6F5C7",
  accent500: "#C2EFB3",
  accent600: "#90CD82",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
