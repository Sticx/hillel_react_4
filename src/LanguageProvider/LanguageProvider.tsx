import { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext()
export const ThemeContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const toggleLanguage = () => {
        useEffect(
            setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'uk' : 'en')),
            [language]
        )
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <LanguageContext.Provider value={{ language, toggleLanguage }}>
                {children}
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    )
}