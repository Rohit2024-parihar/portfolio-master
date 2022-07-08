import React, { createContext, useState, useEffect } from "react";

import { themeData } from "../data/themeData";
import { redThemeLight, orangeThemeDark, pinkThemeLight } from "../theme/theme";
export const ThemeContext = createContext(null);

function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(themeData);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    let x = Math.floor(Math.random() * 10 + 1);

    if (x === 1 || x === 2 || x === 3 || x === 4) {
      setTheme(redThemeLight);
    } else if (x === 5 || x === 6 || x === 7) {
      setTheme(orangeThemeDark);
    } else {
      setTheme(pinkThemeLight);
    }
  }, [props.value1]);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  console.log(theme);

  const value = { theme, drawerOpen, setHandleDrawer };
  console.log(value);
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
