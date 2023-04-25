import './_BackButton.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    let navigate = useNavigate()

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button
                variant="contained"
                color="success"
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIosIcon />}
            >
                BackButton
            </Button>
        </motion.div>
    )
}

export default BackButton
