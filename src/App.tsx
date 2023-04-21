import {
    LanguageContext,
    ThemeContext,
} from './LanguageProvider/LanguageProvider'
import Api from './Api'
import ChangeLanguageContextComponent from './components/ChangeLanguageContextComponent/ChangeLanguageContextComponent'
import CustomButton from './components/CustomButton/CustomButton'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import './components/ThemeToggle/dark-theme.css'
import './components/ThemeToggle/light-theme.css'
import { data } from './translations/translator.json'
import { CategoryState } from './types/type'
import { AppBar, Box, Toolbar } from '@mui/material'
import List from '@mui/material/List'
import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function App(): JSX.Element {
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    const [stateButtons, setStateButtons] = useState<CategoryState>({
        [data[language].decor[0].titleButtons[0].title]: true,
        [data[language].decor[0].titleButtons[1].title]: false,
        [data[language].decor[0].titleButtons[2].title]: false,
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

    return (
        <div className={theme}>
            <div>
                <Box>
                    <AppBar>
                        <Toolbar
                            className={theme}
                            sx={{ display: 'flex', justifyContent: 'space-around' }}
                        >
                            {renderButton}
                            <ChangeLanguageContextComponent />
                            <ThemeToggle />
                        </Toolbar>
                    </AppBar>
                    <List dense sx={{ marginTop: 15 }} className={theme}>
                        <Api stateCategories={stateButtons} />
                    </List>
                </Box>
            </div>
        </div>
    )
}
