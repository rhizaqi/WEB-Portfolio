import { useTheme } from "../../context/ThemeContext";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../../utils/helper";

export default function AboutSection() {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Get to know me
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About
            <span className="text-blue-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>

        <div className="">
          {/* Personal Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className=""
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="">My Mission</h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I believe technology should be a bridge that connects people and
                solves real-world problems. My passion lies in crafting digital
                experiences that are not just funcitional, but delightful and
                accessible to everyone.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                When iam not coding, you'll find me exploring new frameworks,
                contributing to open source, or mentoring aspiring developers. I
                love the constant evolution of web technologies and endless
                possibilities they bring to create meaningful digital
                experiences.
               </p>
            </motion.div>

            {/* What I Love Building */}
            <motion.div>
                {/* 1:19:41 */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
