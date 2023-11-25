import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

import FeatureDemo from "../Components/LandingPage/FeatureDemo";
import { staggerChildren, wordAnimation } from "../utils/animations";

function LandingPage() {
  return (
    <main>
      <section className="flex justify-center w-screen mt-4">
        <motion.div className=" flex flex-col gap-y-8 justify-center items-center text-center my-8 w-[700px]">
          <motion.h1
            className="text-7xl font-black indigo_gradient leading-relaxed "
            // initial="initial"
            // animate="animate"
          >
            <AnimatedWords title={"Create And Share Forms Easily !!"} />
            {/* <motion.span
              initial={{ x: 0 }}
              animate={{ x: 100 }}
              transition={{ delay: 1 }}
            >
              <motion.span>Create </motion.span>
              <motion.span>And </motion.span>
              <motion.span>Share </motion.span>
              <motion.span>Forms </motion.span>
              <motion.span>Easily </motion.span>
              <motion.span>!!</motion.span>
            </motion.span> */}
            {/* <motion.div
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
              Create And Share Forms Easily !!
            </motion.div> */}
          </motion.h1>
          <div className="bg-indigo-500 text-lg w-1/2 text-slate-100 p-3 flex justify-center rounded-md cursor-pointer hover:text-xl hover:bg-indigo-200 hover:text-indigo-500 hover:font-bold transition-all ease-in-out duration-300">
            <Link to={"/dashboard"}>
              <span>Let's get started &#10140;</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <motion.section className="flex justify-center flex-col items-center gap-16 py-32 relative ">
        <FeatureDemo
          description={"Create forms with different types of questions"}
          gif={"Create_form2.gif"}
          alt={"Create Form"}
          textSide={"LHS"}
        />

        <FeatureDemo
          description={"Share form link via Email"}
          gif={"Send_email.gif"}
          alt={"Send Email"}
          textSide={"RHS"}
        />

        <FeatureDemo description={"View Respones"} textSide={"Center"} />

        <FeatureDemo
          description={"Per Individual Response"}
          gif={"Per_Response.gif"}
          alt={"View Responses per individual response"}
          textSide={"LHS"}
        />

        <FeatureDemo
          description={"Per Individual Question"}
          gif={"Per_Question.gif"}
          alt={"View Responses per individual question"}
          textSide={"RHS"}
        />
      </motion.section>

      <div class="waves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="  flex flex-col w-screen justify-center items-center relative">
        <div class="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <Link to={"/dashboard"}>
          <div className="flex justify-center items-center bg-indigo-500 h-full w-screen py-6">
            <p className="text-slate-100 text-2xl font-bold ">
              Start making your first form today !!
            </p>
            <span className="text-slate-100 text-2xl font-bold pl-3">
              <FaExternalLinkAlt />
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}

function AnimatedWords({ title }) {
  return (
    <motion.span
      initial="inital"
      animate="animate"
      // variants={{
      //   animate: {
      //     transition: {
      //       delayChildren: 0.4,
      //       staggerChildren: 0.1,
      //     },
      //   },
      // }}
    >
      {/* {title.split(" ").map((word, idx) => {
        return (
          <motion.div key={idx} className="inline-block">
            <motion.span
              variants={{
                initial: {
                  y: 100,
                },
                animate: {
                  y: 0,
                  transition: {
                    ease: [0.6, 0.01, 0.05, 0.95],
                    duration: 1,
                  },
                },
              }}
            >
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        );
      })} */}

      <motion.span
        variants={{
          initial: {
            y: 200,
          },
          animate: {
            y: 0,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 1,
            },
          },
        }}
      >
        {title}
      </motion.span>
    </motion.span>
  );
}

export default LandingPage;
