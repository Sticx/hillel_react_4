import { LanguageContext } from './LanguageProvider/LanguageProvider'
import KartisComponent from './components/KartisComponent/KartisComponent'
import TitleComponent from './components/TitleComponent/TitleComponent'
import { data } from './translations/translator.json'
import List from '@mui/material/List'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import { v4 as uuidv4 } from 'uuid'

const Api = ({ stateCategories }) => {
    const { language } = useContext(LanguageContext)

    const [itemsState, setItemsState] = useState([])
    let keys = Object.keys(stateCategories)

    const [personState, setPersonState] = useState({
        birth_year: data[language].people[0].birth_year,
        eye_color: data[language].people[0].eye_color,
        gender: data[language].people[0].gender,
        name: data[language].people[0].name,
        id: '665becf8-b443-4323-b083-4b07c35fec39',
    })

    const [isLoading, setIsLoading] = useState(false)

    const requestData = () => {
        if (language === 'en') {
            if (stateCategories[keys[0]]) {
                setPersonState(peopleState())
                return 'people'
            }
            if (stateCategories[keys[1]]) {
                setPersonState(planetsState())
                return 'planets'
            }
            if (stateCategories[keys[2]]) {
                setPersonState(starshipsState())
                return 'starships'
            }
        }
        if (language === 'uk') {
            if (stateCategories[keys[0]]) {
                setPersonState(peopleState())
                return 'people'
            }
            if (stateCategories[keys[1]]) {
                setPersonState(planetsState())
                return 'planets'
            }
            if (stateCategories[keys[2]]) {
                setPersonState(starshipsState())
                return 'starships'
            }
        }

        function starshipsState() {
            return {
                hyperdrive_rating: data[language].starships[0].hyperdrive_rating,
                length: data[language].starships[0].length,
                starship_class: data[language].starships[0].starship_class,
                name: data[language].starships[0].name,
                id: '665becf8-b443-4323-b083-4b07c35ec394',
            }
        }

        function planetsState() {
            return {
                ['diameter']: data[language].planets[0].diameter,
                rotation_period: data[language].planets[0].rotation_period,
                population: data[language].planets[0].population,
                name: data[language].planets[0].name,
                id: '665becf8-b443-4323-b083-4b07c35ec393',
            }
        }
        function peopleState() {
            return {
                birth_year: data[language].people[0].birth_year,
                eye_color: data[language].people[0].eye_color,
                gender: data[language].people[0].gender,
                name: data[language].people[0].name,
                id: '665becf8-b443-4323-b083-4b07c35fec39',
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [
        stateCategories[keys[0]],
        stateCategories[keys[1]],
        stateCategories[keys[2]],
    ])

    const [stringCategoris, setstringCategoris] = useState('')
    const fetchData = async (): Promise<void> => {
        setIsLoading(true)
        await fetch(`https://swapi.dev/api/${requestData()}`)
            .then((response) => response.json())
            .then((itemsApi) => {
                setstringCategoris(requestData())
                setItemsState(
                    itemsApi.results.map((item: { id: string; name: string }) => ({
                        ...item,
                        id: uuidv4(),
                    }))
                )
            })
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }
    const [indexLanguages, setIndexLanguages] = useState(0)
    const clickHandle = (id: string, index) => {
        const filteredData = itemsState.filter((item) => item.id === id)
        setIndexLanguages(index)
        if (filteredData.length > 0) {
            setPersonState(filteredData[0])
        }
    }

    const renderTitleComponent = itemsState.map(({ id }, index) => (
        <TitleComponent
            key={id}
            itemsState={data[language][stringCategoris][index]}
            handleClick={() => clickHandle(id, index)}
        />
    ))
    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                <List
                    dense
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                >
                    {renderTitleComponent}
                </List>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={personState.name}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <List dense sx={{ width: '100%', maxWidth: 360 }}>
                            <KartisComponent
                                kartisProps={personState}
                                indexLanguages={indexLanguages}
                            />
                        </List>
                    </motion.div>
                </AnimatePresence>
            </div>
            <RingLoader size={150} color={'#123abc'} loading={isLoading} />
        </div>
    )
}

export default Api