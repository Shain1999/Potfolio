//next image

import Image from "next/image"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

//motion

import { motion } from "framer-motion"

import { fadeIn } from "../variants"


const Home = () => {
  return <div className="bg-primary h-full bg-site bg-cover bg-no-repeat bg-blend-difference ">
    {/* text */}
    <div className="w-full h-full relative">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
        {/* title */}
        <motion.h1
          variants={fadeIn('down', 0.1)}
          initial='hidden'
          animate="show"
          exit="hidden"
          className="h1">

          Shai Nir <br />
          <span className="text-accent">Full Stack Developer <br /></span>
          Getting your project done
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={fadeIn('up', 0.1)}
          initial='hidden'
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">As an experienced web developer with a strong background in secure API creation and both front and back-end development, I am committed to crafting exceptional web experiences. My lifelong passion for web design drives me to create unforgettable websites. My primary goal is to ensure client satisfaction while expanding my client base and fostering valuable connections</motion.p>
        {/* btn */}
        <motion.div variants={fadeIn('down', 0)} initial="hidden" animate="show" exit={"hidden"} className="justify-center relative flex"><ProjectsBtn /></motion.div>
        <div>

        </div>
      </div>

    </div>
  </div >
};

export default Home;
