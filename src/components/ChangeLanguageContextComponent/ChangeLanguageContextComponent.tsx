import { LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { data } from '../../translations/translator.json'
import { useContext } from 'react'

function ChangeLanguageContextComponent() {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return (
        <div>
            <button onClick={toggleLanguage}>{data[language].decor[0].title} </button>
        </div>
    )
}

export default ChangeLanguageContextComponent