import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Animation library

import { DiPython, DiJava, DiGit, DiMysql } from "react-icons/di"; // Assuming icons from ai set
import { FaDocker, FaCode, FaAws, FaHtml5, FaJenkins } from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiKubernetes,
  SiApachekafka,
} from "react-icons/si";
import { DiMongodb, DiJavascript, DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const skillsData = [
  { name: "Data Structures", icon: <FaCode />, progress: 90 },
  { name: "Python", icon: <DiPython />, progress: 75 },
  { name: "Java", icon: <DiJava />, progress: 65 },
  { name: "Javascript", icon: <DiJavascript />, progress: 90 },
  { name: "SpringBoot", icon: <SiSpringboot />, progress: 90 },
  { name: "MySQL", icon: <DiMysql />, progress: 90 },
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, progress: 90 },
  { name: "MongoDB", icon: <DiMongodb />, progress: 90 },
  { name: "Firebase", icon: <IoLogoFirebase />, progress: 90 },
  { name: "Redis", icon: <DiRedis />, progress: 90 },
  { name: "Kafka", icon: <SiApachekafka />, progress: 90 },
  { name: "Git", icon: <DiGit />, progress: 80 },
  { name: "Docker", icon: <FaDocker />, progress: 90 },
  { name: "Kubernetes", icon: <SiKubernetes />, progress: 90 },
  { name: "Jenkins", icon: <FaJenkins />, progress: 90 },
  { name: "AWS", icon: <FaAws />, progress: 90 },
  { name: "HTML", icon: <FaHtml5 />, progress: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, progress: 90 },
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null); // State for selected skill

  const skillCardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const handleDeselectSkill = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="SkillsSection" className="skills container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-left mb-8">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.name}
            className="mb-8 font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl skill-card flex items-center justify-center p-4 rounded-lg shadow-md hover:bg-gray-200"
            variants={skillCardVariants}
            initial="hidden"
            animate="visible"
            onClick={() => handleSelectSkill(skill)} // Update selected skill on click
          >
            <span className="icon-wrapper mr-4">{skill.icon}</span>
            <p className="text-base font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      {selectedSkill && (
        <AnimatePresence>
          <motion.div
            key={selectedSkill.name}
            className="skill-detail fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleDeselectSkill} // Deselect skill on click outside detail card
          >
            <div className="detail-card bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-500">
                {selectedSkill.name}
              </h3>
              <div className="progress-bar bg-gray-200 h-2 rounded-full">
                <div
                  className="progress-fill bg-green-500 h-full rounded-full"
                  style={{ width: `${selectedSkill.progress}%` }} // Use selectedSkill.progress here
                ></div>
              </div>
              <p className="text-sm mt-4">{`Proficiency: ${selectedSkill.progress}%`}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default SkillsSection;
