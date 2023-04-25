import {
    LanguageContext,
    ThemeContext,
} from '../../LanguageProvider/LanguageProvider'
import { data } from '../../translations/translator.json'
import { Switch } from '@mui/material'
import { useContext } from 'react'

const ThemeToggle = () => {
    const { language } = useContext(LanguageContext)
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
			<span>
				<Switch
                    onChange={toggleTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                {theme === 'dark'
                    ? data[language].decor[0].titleDark
                    : data[language].decor[0].titleLight}
			</span>
        </>
    )
}
export default ThemeToggle