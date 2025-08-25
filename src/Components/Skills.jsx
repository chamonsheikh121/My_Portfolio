import React from "react";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/textxjavascript_103696.png";
import htmlLogo from "../assets/html_plain_wordmark_logo_icon_146476.png";
import nodeLogo from "../assets/file_type_node_icon_130301.png";
import mongoLogo from "../assets/mongodb_logo_icon_170943.png";
import bootstrap from "../assets/bootstrap_plain_logo_icon_146619.png";
import css3 from "../assets/css_plain_wordmark_logo_icon_146574.png";
import express from "../assets/express_original_wordmark_logo_icon_146528.png";
import tailwind from "../assets/file_type_tailwind_icon_130128.png";
import github from "../assets/github-logo_icon-icons.com_73546.png";
import next from "../assets/next_js_logo_icon_145038.png";
import typescript from "../assets/typescript_original_logo_icon_146317.png";
// import vercel from "../assets/vercel_logo_icon_249276.png";
import { motion } from 'framer-motion';

const skills = [
  { name: "React", level: 90, img: reactLogo },
  { name: "JavaScript", level: 90, img: jsLogo },
  { name: "HTML", level: 95, img: htmlLogo },
  { name: "Node.js", level: 90, img: nodeLogo },
  { name: "MongoDB", level: 90, img: mongoLogo },
  { name: "Bootstrap", level: 70, img: bootstrap },
  { name: "CSS3", level: 90, img: css3 },
  { name: "Express.js", level: 90, img: express },
  { name: "Tailwind", level: 90, img: tailwind },
  { name: "github", level: 80, img: github },
  { name: "Next.js", level: 70, img: next },
  { name: "Typescript", level: 80, img: typescript },
  // { name: "Vercel", level: 80, img: vercel },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16"
    >
      <div className="pb-32  pl-10">
        <h2 data-aos="fade-up" className="text-5xl text-purple-700 font-extrabold mb-6">
          <span className="text-purple-100">My</span> Skills
        </h2>
        <p data-aos="fade-up" className="text-lg mb-8 text-purple-100">
          Explore some of our best work, crafted with precision and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <motion.div

            data-aos="zoom-in"
          
            key={skill.name}
            className="bg-gray-800 p-4 rounded-2xl flex flex-col items-center
                 shadow-purple-600 transition-transform hover:shadow-purple-600 shadow-md hover:shadow-xl transform perspective-1000"
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
            }}
          >
            {/* Technology Image with glow */}
            <div className="w-24 h-24 mb-4 p-2 rounded-full bg-white flex items-center justify-center shadow-inner transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Technology Name */}
            <h3 className="text-xl font-semibold mb-2 text-center text-white transition-colors duration-500 hover:text-blue-400">
              {skill.name}
            </h3>

            {/* Skill Progress */}
            <div className="w-3/4 bg-gray-700 rounded-full h-3 overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r  from-blue-400 via-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Percentage */}
            <span className="mt-2 text-sm text-gray-300">{skill.level}%</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
