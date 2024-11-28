import { motion } from "framer-motion";
import { SliderHero } from "..";
import AboutBrand from "./aboutBrand";
import PopularItemsSlider from "./popularSlider";
import Advantages from "./advantages";
import FeedbackSection from "./feedbackForm";

export const HomeLayout = () => {
  return (
    <>
      <SliderHero />
      <motion.section
        initial={{ opacity: 0.2, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-20"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <PopularItemsSlider />
      </motion.section>
      <motion.section
        initial={{ opacity: 0.2, x: -250 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-20"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <AboutBrand />
      </motion.section>
      <motion.section
        initial={{ opacity: 0.2, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-20"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Advantages />
      </motion.section>
      <motion.section
        initial={{ opacity: 0.2, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-20"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <FeedbackSection />
      </motion.section>
    </>
  );
};
