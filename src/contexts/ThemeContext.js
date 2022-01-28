import React, { useEffect, useContext, useState } from "react";
const ThemeContext = React.createContext();

const light = {
  color: "#202124",
  background: "white",
  borderColor: "#ddd",
};
const dark = {
  color: "white",
  background: "#202124",
  borderColor: "#555",
};
export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [styles, setStyles] = useState({ ...light });

  useEffect(() => {
    isLightTheme ? setStyles({ ...light }) : setStyles({ ...dark });
  }, [isLightTheme]);

  return (
    <ThemeContext.Provider
      value={{
        styles,
        setIsLightTheme,
        isLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
