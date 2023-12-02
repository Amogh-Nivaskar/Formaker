import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

function FeatureDemo({ description, textSide, gif, alt }) {
  const divRef = useRef(null);
  const pRef = useRef(null);
  const isPInView = useInView(pRef);
  const mainControl = useAnimation();

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    if (isPInView) {
      mainControl.start("animate");
    }
  }, [isPInView, mainControl]);

  if (textSide === "LHS") {
    return (
      <motion.div
        className="flex w-3/4 my-5"
        initial="initial"
        animate={mainControl}
      >
        <motion.p
          ref={pRef}
          className={`flex items-center overflow-hidden relative justify-center font-bold text-xl text-indigo-500 w-1/2 pr-2`}
          variants={{
            initial: {
              x: 100,
              opacity: 0,
            },
            animate: {
              x: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 2,
              },
            },
          }}
        >
          {description}
        </motion.p>

        <motion.div
          ref={divRef}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className=" shadow-lg w-full "
        >
          <img src={gif} alt={alt} />
        </motion.div>
      </motion.div>
    );
  }

  if (textSide === "RHS") {
    return (
      <motion.div
        className="flex w-3/4 my-5"
        initial="initial"
        animate={mainControl}
      >
        <motion.div
          ref={divRef}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className=" shadow-lg w-full "
        >
          <img src={gif} alt={alt} />
        </motion.div>

        <motion.p
          ref={pRef}
          className="flex items-center justify-center overflow-hidden relative font-bold text-xl text-indigo-500 w-1/2 pl-2 "
          variants={{
            initial: {
              x: -100,
              opacity: 0,
            },
            animate: {
              x: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 2,
              },
            },
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    );
  }

  if (textSide === "Center")
    return (
      <motion.div
        ref={pRef}
        className="m-3 w-full flex justify-center overflow-hidden"
        initial="initial"
        animate={mainControl}
      >
        <motion.p
          className="font-bold text-xl text-indigo-500 "
          variants={{
            initial: {
              y: 100,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.95],
                duration: 1.3,
              },
            },
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    );
}

export default FeatureDemo;
