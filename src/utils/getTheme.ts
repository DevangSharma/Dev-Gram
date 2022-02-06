import { DARK, LIGHT, THEME } from "../constants/localStorage";

function getTheme() {
  const theme = localStorage.getItem(THEME);

  return theme ? theme : LIGHT;
}

export function toggleTheme() {
  const theme = getTheme();

  if (theme === LIGHT) {
    document.documentElement.style.setProperty("--primaryColor", "#1D1D1D");
    document.documentElement.style.setProperty(
      "--primaryBackground",
      "#121212"
    );
    document.documentElement.style.setProperty("--primaryMainColor", "#ebebeb");

    localStorage.setItem(THEME, DARK);
  } else {
    document.documentElement.style.setProperty("--primaryColor", "#ffffff");
    document.documentElement.style.setProperty(
      "--primaryBackground",
      "#f6f6f7"
    );
    document.documentElement.style.setProperty("--primaryMainColor", "#44475a");
    localStorage.setItem(THEME, LIGHT);
  }
}

export function setInitialTheme() {
  const theme = getTheme();

  if (theme === DARK) {
    document.documentElement.style.setProperty("--primaryColor", "#1D1D1D");
    document.documentElement.style.setProperty(
      "--primaryBackground",
      "#121212"
    );
    document.documentElement.style.setProperty("--primaryMainColor", "#ebebeb");
  } else {
    document.documentElement.style.setProperty("--primaryColor", "#ffffff");
    document.documentElement.style.setProperty(
      "--primaryBackground",
      "#f6f6f7"
    );
    document.documentElement.style.setProperty("--primaryMainColor", "#44475a");
  }
}

export default getTheme;
