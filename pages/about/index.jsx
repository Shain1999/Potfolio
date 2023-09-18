// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDotnet,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMicrosoftsqlserver,
  SiMongodb,
} from "react-icons/si";

//  data
const aboutData = [
  {
    id: 1,
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <SiDotnet />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaNodeJs />,
        ],
      },
      {
        title: "BackEnd",
        icons: [<SiMicrosoftsqlserver />, <SiMongodb />],
      },
    ],
  },

  {
    id: 2,
    title: "experience",
    info: [
      {
        title: "Full Stack Developer - Ness Technologies",
        stage: "2022 - Current",
      },
    ],
  },
  {
    id: 3,
    title: "credentials",
    info: [
      {
        title: "Aws Solution Architect Associate SAA-003",
        stage: "2023",
      },
    ],
  },
];

//framer motion
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="h-full text-center xl:text-left mx-auto w-full bg-secondary/5">
      <div className="container h-full py-32 text-center xl:text-left mx-auto w-full ">
        <div className="flex flex-1 flex-col gap-x-2 min-w-[500px] min-h-[100px] items-center"></div>
        <div className="mx-auto flex xl:flex-row flex-col items-center gap-x-6">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden flex flex-col gap-x-2 justify-center items-center "
          >
            <Image
              className="z-60 shadow-2xl rounded-full border-2 border-secondary"
              src={"/aboutImage.jpg"}
              width={150}
              height={200}
            />
          </motion.div>
          <div className="flex-1 flex flex-row justify-center ">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col justify-center items-center"
            >
              <h2 className="h2">
                Bringing <span className="text-accent">your vision </span> to
                life{" "}
              </h2>
              <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-2">
                1 year ago , I began freelancing as a Web Developer. <br />{" "}
                Since then, I created captivating projects for many clients,
                <br />
                Enhanced my development skills and collaborated with other
                developers for major projects
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-x-2 min-w-[500px] min-h-[300px] items-center rounded-xl shadow-xl border-secondary/30 border-2"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 px-5 justify-between items-center min-h-[100px]">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={`indexAbout${item.id}`}
                    className={`${
                      selectedIndex === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                    } 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] group:hover:after:bg-secondary after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => handleTabClick(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-x-1 gap-y-2">
              {aboutData[selectedIndex].info.map((item, index) => {
                return (
                  <div
                    key={`info${index}`}
                    className="flex-1 flex flex-row text-white/60 max-w-max gap-x-2 items-center"
                  >
                    {/* title */}
                    <div>
                      {item.title}
                      <div className="hidden lg:flex md:flex">{item.stage}</div>
                    </div>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="text-2xl text-secondary">{icon}</div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
