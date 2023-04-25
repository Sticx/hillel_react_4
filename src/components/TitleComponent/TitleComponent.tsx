import { Button, ListItem, Stack } from '@mui/material'
import { motion } from 'framer-motion'

const TitleComponent = ({ handleClick, itemsState }) => {
    return (
        <ListItem>
            <Stack direction="row" spacing={2}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <Button
                        variant="contained"
                        color="success"
                        style={{ width: 350 }}
                        onClick={handleClick}
                    >
                        {itemsState.name}
                    </Button>
                </motion.div>
            </Stack>
        </ListItem>
    )
}

export default TitleComponent