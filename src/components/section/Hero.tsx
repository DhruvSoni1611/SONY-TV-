// import { useRef } from "react";
// import { Button } from "../Button";
// import { Container } from "../Container";
// import { useScroll, useTransform, motion } from "framer-motion";

// export const Hero = () => {
//   const videoContainerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: videoContainerRef,
//     offset: ["start start", "end end"],
//   });
//   const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

//   return (
//     <div className="bg-background text-white">
//       <motion.div
//         style={{ opacity }}
//         ref={videoContainerRef}
//         className="absolute left-0 -top-[--header-height] w-full h-[200vh]"
//       >
//         <img
//           className="sticky top-0 h-screen w-screen object-cover"
//           src="/posters/far-cry2.jpg"
//         />
//       </motion.div>
//       <Container className="relative ml-20 pb-7 z-10 h-[--hero-height] md:ml-4">
//         <motion.div
//           className="flex h-full flex-col justify-end items-start"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1 },
//           }}
//           whileInView="visible"
//           exit="hidden"
//           animate="hidden"
//           viewport={{ amount: 0.9 }}
//         >
//           <h1 className="text-5xl font-bold mb-10 md:text-xl">
//             Watch All Originals. <br />
//             Only on Sony TV+
//           </h1>
//           <Button size="lg" className="mb-16">
//             Stream Now
//           </Button>
//           <p className="font-semibold">Watch on the 📺 app</p>
//         </motion.div>
//       </Container>
//     </div>
//   );
// };

import { useRef } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { useScroll, useTransform, motion } from "framer-motion";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 -top-[--header-height] w-full h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen w-screen object-cover"
          src="/posters/far-cry2.jpg"
          alt="Hero background"
        />
      </motion.div>
      <Container className="relative pb-7 z-10 h-[--hero-height]">
        <motion.div
          className="flex h-full flex-col justify-end items-center px-4 md:items-start md:px-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <div className="w-full max-w-2xl text-center md:text-left">
            <h1 className="text-3xl font-bold mb-10 sm:text-4xl md:text-5xl">
              Watch All Originals.
              <br />
              Only on Sony TV+
            </h1>
            <div className="flex flex-col items-center md:items-start">
              <Button size="lg" className="mb-10 md:mb-16">
                Stream Now
              </Button>
              <p className="font-semibold">Watch on the 📺 app</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
