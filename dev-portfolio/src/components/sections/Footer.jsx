import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Code2, Heart, Mail } from "lucide-react";
import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { containerVariants, itemVariants } from "../../utils/helper";

export default function Footer() {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ockytumocky@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //   Animated Gradient Line Component

  const AnimatedGradientLineComponent = () => {
    <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
      <motion.div
        className={`h-px bg-gradient-to-r ${
          isDarkMode
            ? "from-transparent via-blue-500 to-transparent"
            : "from-transparent via-blue-600 to-transparent"
        }`}
        initial={{ width: "0%", opacity: 0 }}
        animate={isInView ? { width: "100%", opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-0 h-px w-32 bg-gradient-to-r ${
          isDarkMode
            ? "from-blue-400 via-purple-500 to-blue-400"
            : "from-blue-500 via-purple-600 to-blue-500"
        } blur-sm`}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          },
        }}
      ></motion.div>
    </div>;
  };
  return (
    <footer
      ref={footerRef}
      className={`relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } overflow-hidden`}
    >
      {/* Animated Wave/Gradient Line */}
      <AnimatedGradientLineComponent />

      {/* Background Elements */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-3 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-3 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center space-y-8"
          >
            {/* Logo Brand */}
            <motion.div variants={itemVariants} className="">
              <motion.div
                className="inline-flex items-center space-x-2 text-2xl font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    className: "text-blue-500",
                  }}
                >
                  <Code2 size={28} />
                </motion.div>
                <span>Alex Johnson</span>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } max-w-md mx-auto`}
              >
                Crafting digital experiences with passion, precision, and a
                touch of magic.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
