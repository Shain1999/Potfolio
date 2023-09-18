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
        title: "Web Developer - Ness Technologies",
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

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="h-full py-32 text-center xl:text-left">
      <div className="continer mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex gap-x-2 items-center"></div>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={`indexAbout${item.id}`}
                className={`${
                  selectedIndex === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => handleTabClick(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div>
          {aboutData[selectedIndex].info.map((item, index) => {
            return (
              <div key={`info${index}`}>
                {/* title */}
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
