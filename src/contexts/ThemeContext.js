import React, { createContext, useState } from 'react';

//creating a theme context so that it can be used
const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  //theme state
  const [theme,setTheme] = useState(true)

  return (
    //providing the theme context to children 
    <ThemeContext.Provider value={{ theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;