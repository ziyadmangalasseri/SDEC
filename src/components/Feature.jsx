import { contents } from "../contents";
import { motion } from "framer-motion";

const Feature = () => {
  const { feature } = contents;

  // Animation variants for each element
  const iconsImageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const mainImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const extraDivVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative bg-[#000A1F] text-white py-8 px-4 md:px-12 overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center z-10">
        {/* Left Side - Illustration */}
        <div className="relative w-full md:w-3/7 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="flex justify-center items-center w-full">
            {/* Animated Icons Image */}
            <motion.img
              src={feature.iconsImage}
              alt="icons"
              className="absolute top-10 left-8 w-16 ml-5 md:w-20"
              initial="hidden"
              whileInView="visible"
              variants={iconsImageVariants}
              transition={{
                duration: 1, // Control the duration of the animation
                ease: "easeOut",
              }}
            />

            {/* Animated Main Image */}
            <motion.img
              src={feature.mainImage}
              alt="Business Illustration"
              className="w-48 ml-15 md:w-60"
              initial="hidden"
              whileInView="visible"
              variants={mainImageVariants}
              transition={{
                duration: 1, // Control the duration of the animation
                ease: "easeOut",
              }}
            />
          </div>

          {/* Background Heading (Only for Mobile) */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[50px] font-extrabold uppercase text-transparent stroke-white md:hidden">
            {feature.backgroundHeading}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 relative">
          {/* Background Heading (Only for Desktop) */}
          <div className="absolute md:right-2 top-8 md:top-3 font-extrabold text-[40px] sm:text-[50px] md:text-[70px] lg:text-[140px] leading-[0] tracking-tight uppercase text-transparent stroke-white hidden md:block">
            {feature.backgroundHeading}
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            <img
              src={feature.headingLineImage}
              alt=""
              className="mx-auto md:mx-0"
            />
            {feature.heading}
          </h2>

          {/* Animated Extra Div (Added New Section) */}
          {/* <motion.div
            className="p-4 md:p-6 bg-gray-800 rounded-lg"
            initial="hidden"
            whileInView="visible"
            variants={extraDivVariants}
            transition={{
              duration: 1, // Control the duration of the animation
              ease: "easeOut",
            }}
          >
            <p className="text-sm text-gray-400">
              This is an additional section with animation applied. You can customize it further.
            </p>
          </motion.div> */}

          {/* Feature List - Centered in Mobile View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center justify-center text-center md:text-left">
            {feature.featuresList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <div>
                  <h3 className="text-base md:text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
