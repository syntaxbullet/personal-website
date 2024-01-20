import { useRef, useState } from "react"
import { useScroll, motion, useMotionValueEvent} from "framer-motion"
export default function HighlightedParagraph({children}: {children: React.ReactNode})  {
    const ref = useRef(null);
    const [currentOpacity, setCurrentOpacity] = useState(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
      });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // this uses a gaussian function to smooth out the highlight effect
        const amplitude = 1;
        const mean = .5;
        let standardDeviation = 0.1 // this will affect the "size" of the light source
        if (screen.orientation.type.includes("portrait")) {
            standardDeviation = 0.33;
        }
        setCurrentOpacity(amplitude * Math.exp(-((latest - mean) ** 2) / (2 * standardDeviation ** 2)))
    })
    return (
        <motion.p ref={ref} style={{opacity: currentOpacity}}>{children}</motion.p>
    )
}


