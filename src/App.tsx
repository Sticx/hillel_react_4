import {
    LanguageContext,
    ThemeContext,
} from './LanguageProvider/LanguageProvider'
import Api from './Api'
import BackButton from './components/BackButton/BackButton'
import ChangeLanguageContextComponent from './components/ChangeLanguageContextComponent/ChangeLanguageContextComponent'
import CustomButton from './components/CustomButton/CustomButton'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import './components/ThemeToggle/dark-theme.css'
import './components/ThemeToggle/light-theme.css'
import { data } from './translations/translator.json'
import { CategoryState } from './types/type'
import { List, Toolbar } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function App(): JSX.Element {
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)
    const [stateButtons, setStateButtons] = useState<CategoryState>({
        Peoples: false, Planets: false, Starships: false,
        [data[language].decor[0].titleButtons[0].title]: true,
        [data[language].decor[0].titleButtons[1].title]: false,
        [data[language].decor[0].titleButtons[2].title]: false
    })
    const renderButton = data[language].decor[0].titleButtons.map((itemMap) => (
        <CustomButton
            key={uuidv4()}
            itemMaps={stateButtons}
            title={itemMap.title}
            stateButtons={(): void => changeButtons(itemMap)}
        />
    ))
    function changeButtons(itemMap) {
        const newButtonsState = {}
        data[language].decor[0].titleButtons.forEach((itemFilter) => {
            newButtonsState[itemFilter.title] =
                itemFilter.title === itemMap.title
                    ? !stateButtons[itemMap.title]
                    : false
        })
        setStateButtons(newButtonsState)
    }
    console.log(
        '' +
        Object.values(stateButtons)[0] +
        Object.values(stateButtons)[1] +
        Object.values(stateButtons)[2]
    )

    return (
        <div className={theme && ' homePage'}>
            <Toolbar
                className={theme}
                sx={{ display: 'flex', justifyContent: 'space-around' }}
            >
                {renderButton}
                <ChangeLanguageContextComponent />
                <ThemeToggle />
                <BackButton />
            </Toolbar>
            <AnimatePresence mode="wait">
                <motion.div
                    key={
                        '' +
                        Object.values(stateButtons)[0] +
                        Object.values(stateButtons)[1] +
                        Object.values(stateButtons)[2]
                    }
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <List dense className={theme}>
                        <Api stateCategories={stateButtons} />
                    </List>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}