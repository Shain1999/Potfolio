// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { Carousel } from "flowbite-react";
import {
  SiJquery,
  SiCsharp,
  SiFlutter,
  SiPython,
  SiAxios,
  SiNextdotjs,
  SiDotnet,
  SiFramer,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiReact,
} from "react-icons/si";

//  data
const aboutData = [
  {
    id: 1,
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <SiPython />, name: "Python" },
          { icon: <SiCsharp />, name: "C#" },
        ],
      },
      {
        title: "Front end",
        icons: [
          { icon: <FaHtml5 />, name: "HTML5" },
          { icon: <FaAngular />, name: "Angular.js" },
          { icon: <SiJquery />, name: "Jquery" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaReact />, name: "React.js" },
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <SiFramer />, name: "Framer" },
        ],
      },
      {
        title: "Back End",
        icons: [
          { icon: <SiMicrosoftsqlserver />, name: "Microsoft SQL Server" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <SiDotnet />, name: "Dotnet" },
          { icon: <SiAxios />, name: "Axios" },
          { icon: <FaNodeJs />, name: "Node.js" },
        ],
      },
      {
        title: "Mobile",
        icons: [
          { icon: <SiFlutter />, name: "Flutter" },
          { icon: <SiReact />, name: "React Native" },
        ],
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
    <div className="h-full text-center xl:text-left mx-auto w-full ">
      <div className="container h-full py-5 text-center xl:text-left mx-auto w-full  ">
        <div className="flex flex-1 flex-col gap-x-2 min-w-[500px] min-h-[100px] items-center"></div>
        <div className="mx-auto flex flex-col items-center gap-x-6">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden flex flex-col gap-x-2 justify-center items-center "
          ></motion.div>
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
          {/* container */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex xl:flex-1 flex-col gap-x-2 items-center rounded-xl shadow-xl border-secondary/30 border-2 w-full"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 px-5 justify-between items-center min-h-[100px] xl:w-1/2 lg:w-1/2 w-4/5">
              {/* about links */}
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
            <div className="flex flex-col gap-x-1 gap-y-2 w-full px-8 items-center justify-center">
              {/* info container */}
              {aboutData[selectedIndex].info.map((item, index) => {
                return (
                  <div
                    key={`info${index}`}
                    className="group flex flex-col text-white/60 gap-x-10 items-center w-[90%] py-7 xl:px-20 
                    hover:scale-110 transition-all duration-400 ease-in hover:bg-grey/10 hover:rounded-sm"
                  >
                    {/* title */}
                    <div className="lg:text-2xl text-xl pb-4 group-hover:text-accent">
                      {item.title}
                      <div className="hidden lg:flex md:flex">{item.stage}</div>
                    </div>
                    {/* icons */}
                    <div className="grid grid-cols-3 xl:grid-cols-5 w-full gap-x-1 gap-y-5 place-items-center">
                      {item.icons?.map((icon, iconIndex) => {
                        return (
                          <div className="flex flex-col items-center text-white/60 justify-center hover:text-accent transition-all duration-300 hover:scale-125 hover:animate-jello ">
                            <div className="xl:text-6xl text-5xl pb-1">
                              {/* icon */}
                              {icon.icon}
                            </div>
                            <div className="flex items-center text-center xl:text-xl lg:text-lg md:text-md sm:text-sm">
                              {/* name */}
                              {icon.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
