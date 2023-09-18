//next image

import Image from "next/image"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

//motion

import { motion } from "framer-motion"

import { fadeIn } from "../variants"


const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
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
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">lorem ipsum test something letters emmet not working fro some reason Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis ipsa rem commodi eveniet consectetur. Sapiente architecto harum exercitationem eum?</motion.p>
        {/* btn */}
        <motion.div variants={fadeIn('down', 0)} initial="hidden" animate="show" exit={"hidden"} className="justify-center relative flex"><ProjectsBtn /></motion.div>
      </div>
    </div>
  </div >
};

export default Home;
