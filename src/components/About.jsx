import React, { useEffect, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useBackgroundContext } from "../utils/background.jsx";
import { gsap, ScrollTrigger } from "gsap/all";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { me, github, linkedin, outlook, resume } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-22 h-22 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const { setCurrentBG } = useBackgroundContext();
  const aboutRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG("#1e0a55");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setCurrentBG("#050816");
          gsap.to(textRef.current, {
            duration: 1,
          });
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={aboutRef}>
        <motion.div variants={textVariant()}>
          <div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Hey, I'm Abdul!</h2>
          </div>
        </motion.div>

        <div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex items-center min-[1000px]:flex-row flex-col-reverse"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {/* Left Column */}
            <div className="flex flex-col items-center min-[1000px]:items-start">
              <p
                className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]"
                style={{ textAlign: "justify" }}
              >
                I am a Digital Marketing Executive with 1.5+ years of experience in SEO, social media marketing, Meta Ads, content creation, and WordPress website management. 
                I have worked with businesses in both India and the UAE, helping them improve online visibility and generate quality leads.
                <br /> <br />
               I enjoy building strong online presence for brands through clean websites, engaging content, and data-based marketing strategies.
                I am always learning and upgrading my skills to stay updated with the latest digital trends. 
                Currently based in Dubai, I am looking for opportunities where I can contribute to business growth and develop further as a digital marketing professional.
               <br /> <br />I love working with people, and I'm always looking
                for new opportunities to grow. If this interests you, check out
                my resume and links below! And feel free to reach out at
                <a href="mailto:abduljubairudma@gmail.com">
                  {" "}
                  <u>abduljubairudma@gmail.com</u>{" "}
                </a>
                if want to learn more and chat!
              </p>
            </div>
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14"
          >
            {/* Right Column */}
            {/* Photo */}
            <div className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
              <div className="xs:w-[375px] w-full green-pink-gradient p-[4px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
                  <img
                    src={me}
                    alt="Steven Le Profile Picture"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.p>
        </div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="flex mt-6 gap-5 flex-wrap justify-center sm:justify-start"
        >
          {/* LinkedIn Button */}
          <Tilt className="h-full max-[1000px]:my-14">
            <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a
                href="linkedin.com/in/abdul-jubair-pa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                  <img
                    src={linkedin}
                    alt="LinkedIn Logo"
                    class="w-[40px] h-[40px] object-contain"
                  />
                  <p class="text-[21px]">LinkedIn</p>
                </div>
              </a>
            </div>
          </Tilt>

          {/* GitHub Button */}
          <Tilt className="h-full max-[1000px]:my-14">
            <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a
                href="https://github.com/kafton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                  <img
                    src={github}
                    alt="GitHub Logo"
                    class="w-[40px] h-[40px] object-contain"
                  />
                  <p class="text-[21px]">GitHub</p>
                </div>
              </a>
            </div>
          </Tilt>

          {/* Outlook Button */}
          <Tilt className="h-full max-[1000px]:my-14">
            <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a
                href="mailto:abduljubairudma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                  <img
                    src={outlook}
                    alt="Outlook Logo"
                    class="w-[40px] h-[40px] object-contain"
                  />
                  <p class="text-[21px]">Email</p>
                </div>
              </a>
            </div>
          </Tilt>

          {/* Resume */}
          <Tilt className="h-full max-[1000px]:my-14">
            <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a
                href={resume}
                title="Abdul Jubair Resume"
                target="_blank"
                className="py-3 px-8 rounded-xl outline-none text-white font-bold z-10"
              >
                <span className="hidden sm:inline">View</span> Resume
              </a>
            </div>
          </Tilt>
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
