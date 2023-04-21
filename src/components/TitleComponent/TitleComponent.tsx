import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'

const TitleComponent = ({ handleClick, itemsState }) => {
    return (
        <ListItem>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    color="success"
                    style={{ width: 350 }}
                    onClick={handleClick}
                >
                    {itemsState.name}
                </Button>
            </Stack>
        </ListItem>
    )
}

export default TitleComponent