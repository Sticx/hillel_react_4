import { LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { objPiple } from '../../imagesResurses/imgResurs'
import { data } from '../../translations/translator.json'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useContext } from 'react'

const KartisComponent = ({ kartisProps, indexLanguages }) => {
    const { language } = useContext(LanguageContext)

    const {
        name,
        gender,
        population,
        starship_class,
        birth_year,
        rotation_period,
        hyperdrive_rating,
        eye_color,
        diameter,
        length,
    } = kartisProps

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {
                            data[language][
                                gender
                                    ? 'people'
                                    : population
                                        ? 'planets'
                                        : starship_class
                                            ? 'starships'
                                            : null
                                ][indexLanguages].name
                        }
                    </Typography>
                    <Typography>
                        {(gender
                                ? `${data[language].decor[1].titleCardPeople[0].gender} : ` +
                                gender
                                : '') ||
                            (population
                                ? `${data[language].decor[2].titleCardPlanet[0].population} : ` +
                                population
                                : '') ||
                            (starship_class
                                ? `${data[language].decor[3].titleCardStarships[0].starship_class} : ` +
                                starship_class
                                : '')}
                    </Typography>
                    <Typography>
                        {birth_year
                            ? `${data[language].decor[1].titleCardPeople[1].birth_year} : ` +
                            birth_year
                            : '' || rotation_period
                                ? `${data[language].decor[2].titleCardPlanet[1].rotation_period} : ` +
                                rotation_period
                                : '' || hyperdrive_rating
                                    ? `${data[language].decor[3].titleCardStarships[1].hyperdrive_rating} : ` +
                                    hyperdrive_rating
                                    : ''}
                    </Typography>
                    <Typography>
                        {eye_color
                            ? `${data[language].decor[1].titleCardPeople[2].eye_color} : ` +
                            eye_color
                            : '' || diameter
                                ? `${data[language].decor[2].titleCardPlanet[2].diameter} : ` +
                                diameter
                                : '' || length
                                    ? `${data[language].decor[3].titleCardStarships[2].length} : ` +
                                    length
                                    : ''}
                    </Typography>
                </CardContent>
                <CardMedia component="img" image={objPiple[name]} alt={name} />
            </Card>
        </motion.div>
    )
}

export default KartisComponent