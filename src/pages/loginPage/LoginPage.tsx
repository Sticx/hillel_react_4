import BackButton from '../../components/BackButton/BackButton'
import './_LoginPage.scss'
import { useFollowPointer } from './use-follow-pointer'
import { Button, ButtonGroup, Checkbox } from '@mui/material'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
    }
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)
    return (
        <div className="homePages white">
            <motion.div
                ref={ref}
                className="box"
                animate={{ x, y }}
                transition={{
                    type: 'spring',
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001,
                }}
            />
            <BackButton />

            <h1 className="white">Confirm Login</h1>
            <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                color="secondary"
            />
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <ButtonGroup variant="contained" className="buttongrup">
                    {isChecked ? (
                        <Link to={'/login-page/app-page'}>
                            <Button color="success" className="button-LOG IN">
                                LOG IN
                            </Button>
                        </Link>
                    ) : (
                        <Button disabled className="button-LOG IN">
                            LOG IN
                        </Button>
                    )}
                </ButtonGroup>
            </motion.div>
        </div>
    )
}

export default LoginPage