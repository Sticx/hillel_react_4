import { ThemeContext,LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { useContext } from 'react'
import { data } from '../../translations/translator.json'


const ThemeToggle = () => {
    const { language } = useContext(LanguageContext)
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? data[language].decor[0].titleDark : data[language].decor[0].titleLight}
        </button>
    )
}
export default ThemeToggle