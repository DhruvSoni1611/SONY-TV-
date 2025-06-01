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
        />
      </motion.div>
      <Container className="relative ml-20 pb-7 z-10 h-[--hero-height]">
        <motion.div
          className="flex h-full flex-col justify-end items-start"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold mb-10 md:text-5xl">
            Watch All Originals. <br />
            Only on Sony TV+
          </h1>
          <Button size="lg" className="mb-16">
            Stream Now
          </Button>
          <p className="font-semibold">Watch on the 📺 app</p>
        </motion.div>
      </Container>
    </div>
  );
};
