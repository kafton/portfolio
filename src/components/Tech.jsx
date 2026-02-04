import React from "react";
import Tilt from "react-tilt";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pb-5">
        <h2 className={`${styles.sectionHeadText} text-center`} alt="My Skills, Technologies, and Tech Stack">
          Technologies
        </h2>
      </motion.div>
      
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <motion.div
          variants={textVariant((index+9) * .05)}
          key={technology.name}
          >
            <div className='xs:w-[115px] w-full'>
              <div className='w-28 h-27 p-[2px] green-pink-gradient rounded-full' style={{ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }}>
                <div className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col">
                    {technology.icon ? (
                      <img src={technology.icon} className="w-16 h-16 object-contain" alt={technology.name}/>
                    ) : (
                      <p className="text-white text-[12px] font-bold text-center px-2">{technology.name}</p>
                    )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
