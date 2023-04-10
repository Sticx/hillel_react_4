import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { objPiple } from '../../imagesResurses/imgResurs';


const KartisComponent= ({ kartisProps }) => {
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
        length
    } = kartisProps;

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
                <Typography>
                    {(gender ? 'GENDER: ' + gender : '') ||
                        (population ? 'POPULATION: ' + population : '') ||
                        (starship_class ? 'STARSHIP CLASS: ' + starship_class : '')}
                </Typography>
                <Typography>
                    {birth_year
                        ? 'BIRTH YEAR: ' + birth_year
                        : '' || rotation_period
                            ? 'ROTATION PERIOD: ' + rotation_period
                            : '' || hyperdrive_rating
                                ? 'HYPERDIVE RATING: ' + hyperdrive_rating
                                : ''}
                </Typography>
                <Typography>
                    {eye_color
                        ? 'EYE COLOR: ' + eye_color
                        : '' || diameter
                            ? 'DIAMETER: ' + diameter
                            : '' || length
                                ? 'LENGTH: ' + length
                                : ''}
                </Typography>
            </CardContent>
            <CardMedia component='img' image={objPiple[name]} alt={name} />
        </Card>
    );
};

export default KartisComponent;