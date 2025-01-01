import { useState, createContext, useContext, useMemo } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const value = useMemo(() => [theme, setTheme], [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };