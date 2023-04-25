import { imgResursMasonry } from '../../imagesResurses/imgResursMasonry'
import './_HomePage.scss'
import { wrap } from '@motionone/utils'
import { Button, ButtonGroup, Toolbar } from '@mui/material'
import {
    Variants,
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

interface ParallaxProps {
    children: string
    baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    const x = useTransform(baseX, (v) => `${wrap(10, -45, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    )
}
const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

function Card({ image }) {
    const background = `linear-gradient(306deg, ${hue(79)}, ${hue(80)})`

    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="splash" style={{ background }} />
            <motion.div className="card" variants={cardVariants}>
                <img src={image} alt="food" />
            </motion.div>
        </motion.div>
    )
}

function HomePage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div className="homePage">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <ParallaxText baseVelocity={-5}>Star Wars</ParallaxText>
            <ParallaxText baseVelocity={5}>Star Wars</ParallaxText>
            <Toolbar className="toolbar">
                <Link to={'/login-page'}>
                    <motion.div
                        className="box"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <ButtonGroup variant="contained" className="buttongrup">
                            <Button color="success" className="button-LOG IN">
                                LOG IN
                            </Button>
                        </ButtonGroup>
                    </motion.div>
                </Link>
            </Toolbar>

            <ul>
                <li>
                    <p>
                        Welcome to our home page where you can dive into the exciting world
                        of <strong>Star Wars</strong>! Our app provides information about
                        the people, planets and starships that are found in this famous
                        cosmic sphere.
                    </p>
                </li>

                <li>
                    <p>
                        All about favorite characters such as <b>Luke Skywalker</b>,{' '}
                        <b>Han Solo</b> and
                        <b>Princess Leia</b> are typed in, as well as new characters that
                        have appeared in recent films. Explore planets like Tatooine, Hoth
                        and Coruscant and learn more about them than ever before.
                    </p>
                </li>

                <li>
                    <p>
                        If you are passionate about<strong> starships</strong> then you will
                        not be disappointed! We received detailed information about famous
                        ships such as the Millennium Falcon, Darth Vader Interceptor and
                        Star Destroyer.
                    </p>
                </li>

                <li>
                    <p>
                        Our app is the complete reference for any <strong>Star Wars</strong>{' '}
                        fan. Don't wait and start your exciting journey through the galaxy
                        right now!
                    </p>
                </li>
            </ul>
            {imgResursMasonry.map(({ img }, index) => (
                <Card image={img} key={index} />
            ))}
        </div>
    )
}

export default HomePage