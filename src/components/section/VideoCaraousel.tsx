import {
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
  type Movie,
} from "../../movies";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Button } from "../Button";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = movies.length - 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
      <div className="relative top-1/2 left-0 right-0 flex justify-between px-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-all"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-all"
        >
          &gt;
        </button>
      </div>

      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{
                opacity: postersOpacity,
                x: posterTranslateXLeft,
              }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[currentSlide].poster}
                alt={movies[currentSlide].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] w-[200px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[currentSlide + 1].poster}
                alt={movies[currentSlide + 1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <p>Best Movie to Watch</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>

            {/* Next Movie */}
            <motion.div
              style={{
                opacity: postersOpacity,
                x: posterTranslateXRight,
              }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[currentSlide + 2].poster}
                alt={movies[currentSlide + 2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-20 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} duration="40s" />{" "}
        <div className="[--carousel-offset:-32px] [--duration:40s]">
          {" "}
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>

      <div className="flex items-center justify-center mt-5">
        <button className="bg-none border-white border-2 rounded-full px-6 py-3 text-white font-semibold mt-5">
          See full lineup &gt;
        </button>
      </div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({
  movies,
  duration = "80s",
}: {
  movies: Movie[];
  duration?: string;
}) => {
  return (
    <div className="overflow-clip">
      <div
        className="animate-carousel-move hover:animate-carousel-move-slow relative left-[var(--carousel-offset,0px)] flex gap-3"
        style={{ "--duration": duration } as React.CSSProperties}
      >
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[60vw] shrink-0 md:w-[23vw] relative group"
            key={`${movie.name}-${index}`}
          >
            <img
              className="h-full w-full rounded-xl object-cover"
              src={movie.poster}
              alt={movie.name}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center rounded-xl">
              <Button
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-textBlack px-4 py-2 rounded-full"
                size="md"
              >
                Stream Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
