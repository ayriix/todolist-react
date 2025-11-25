import { Theme, Themes } from "../models/theme";

const lightTheme: Theme = {
  name: "light",
  colors: {
    backgroundPrimary: "#4682b4",
    backgroundSecondary: "rgb(237, 240, 241)",
  },
};

const nightTheme: Theme = {
  name: "night",
  colors: {
    backgroundPrimary: "black",
    backgroundSecondary: "gray",
  },
};

export const themes: Themes = {
  light: lightTheme,
  dark: nightTheme,
};
