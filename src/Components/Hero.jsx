import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import myImage from "../assets/Adobe Express - file (1).png";
import "../index.css"



const skills = ["Full Stack Developer", "Front End Developer", "Backend Developer", "MERN Stack Developer", "Freelancer"];

const Hero = () => {

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [borderRadius, setBorderRadius] = useState("50%"); // start circle


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);


  // const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  // Generate random border radius values
  const generateRandomRadius = () => {
    return {
      borderTopLeftRadius: `${Math.floor(Math.random() * (800 - 200 + 1)) + 300
        }px`,
      borderTopRightRadius: `${Math.floor(Math.random() * (800 - 200 + 1)) + 300
        }px`,
      borderBottomLeftRadius: `${Math.floor(Math.random() * (800 - 200 + 1)) + 300
        }px`,
      borderBottomRightRadius: `${Math.floor(Math.random() * (800 - 200 + 1)) + 300
        }px`,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        ...generateRandomRadius(),
        transition: { duration: 2, ease: "easeInOut" }, // smooth transition
      });
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, [controls]);


  return (
    <section
      id="hero"
      className="min-h-screen w-full h-full"
    >
      <div className="absolute w-full h-full bg-black opacity-80">

      </div>
      <div className="absolute h-full w-full min-h-screen flex  flex-col md:flex-row justify-center items-center  text-white px-32 gap-20">
        {/* LEFT CONTENT */}
        <div className="  text-center md:text-left space-y-8">
          <motion.h1
            className="text-2xl md:text-3xl mb-20 font-bold bg-white bg-clip-text text-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >

            HEY,  WELCOME
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            It's Chamon Ali
          </motion.h1>
          <div className="flex flex-col   text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold relative">
              <p className="text-3xl"> I'm a</p>{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 filter-liquidy">
                {skills[index]}
              </span>
            </h1>

            {/* SVG Filter for liquid effect */}
            <svg className="absolute w-0 h-0">
              <filter id="liquid">
                <feTurbulence
                  id="turbulence"
                  baseFrequency="0.02"
                  numOctaves="3"
                  result="turb"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turb"
                  scale="10"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </svg>

            <style>
              {`
          .filter-liquidy {
            filter: url(#liquid);
            display: inline-block;
            animation: wave 6s infinite ease-in-out;
          }
        `}
            </style>
          </div>


          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
          I help businesses grow by building modern, responsive, and interactive web applications. As a Front-end & MERN stack developer, I craft solutions that enhance user experience, streamline operations, and drive measurable results.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="../assets/Resume_MD. CHAMON ALI (1).pdf" // replace with your resume link
              download
              className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="https://www.fiverr.com/chamonsheikh" // replace with Fiverr link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fiverr Profile
            </motion.a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-up" className="flex flex-col items-center">
          <motion.div
            className="relative md:w-96 md:h-96 w-80 h-80 overflow-hidden shadow-lg 
        bg-gradient-to-br from-purple-700 via-gray-200 hover:via-purple-400 to-blue-600 
        hover:shadow-purple-900 hover:shadow-2xl p-6 text-center  transition-transform 
        duration-300 transform"
            animate={controls}
            initial={{
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "80px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "100px",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Overlay Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-0 transition-opacity duration-500"
              animate={{ opacity: hovered ? 0.6 : 0 }}
            />

            {/* Overlay Text */}
            <motion.div
              className="absolute inset-0 ml-10 flex mt-30 justify-start text-5xl md:text-6xl font-extrabold uppercase text-white opacity-0 -rotate-30  transition-opacity duration-500"
              animate={{ opacity: hovered ? 0.2 : 0, y: hovered ? -20 : 0 }}
            >
              Programer
            </motion.div>

            {/* Profile Image */}
            <motion.img
              className="w-80 h-80 md:w-96 md:h-96 object-cover absolute bottom-0 left-1/2 -translate-x-1/2 drop-shadow-[0_10px_10px_rgba(128,128,128,0.8)]"
              style={{ borderRadius: "inherit" }}
              src={myImage}
              alt="Profile"
              animate={{ scale: hovered ? 1.1 : 1, y: hovered ? 20 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
