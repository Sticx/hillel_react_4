import Button from '@mui/material/Button';
import { FC } from 'react';
import { CustomButtonProps } from '../../types/type';

const CustomButton: FC<CustomButtonProps> = (
    {
        title,
        itemMaps,
        stateButtons
    }
    ) => {
    return (
        <Button
            variant='contained'
            color='success'
            onClick={() => stateButtons()}
            disabled={itemMaps[title]}
        >
            {title}
        </Button>
    );
};

export default CustomButton;