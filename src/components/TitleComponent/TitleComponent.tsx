import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { FC } from 'react';



const TitleComponent = ({ itemName, handleClick }) => {
    return (
        <ListItem >
            <Stack direction='row' spacing={2}>
                <Button
                    variant='contained'
                    color='success'
                    style={{ width: 350 }}
                    onClick={handleClick}
                >
                    {itemName}
                </Button>
            </Stack>
        </ListItem>
    );
};

export default TitleComponent;