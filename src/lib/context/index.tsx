"use client"
import React, { useEffect, createContext, useState, ReactNode } from 'react';
// import debounce from 'lodash/debounce';

interface ThemeContextType {
    isMobile: boolean;
    setIsMobile: (newValue: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // const handleResize = () => setIsMobile(window.innerWidth < 1170);
        const handleResize = () => setIsMobile(window.innerWidth < 1140);
        // const handleResize = () => setIsMobile(window.innerWidth < 1280);
        // const handleResize = debounce(() => {
        //     setIsMobile(window.innerWidth < 1280);
        // }, 200);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            // handleResize.cancel(); // Clean up the debounced function
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ isMobile, setIsMobile }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
