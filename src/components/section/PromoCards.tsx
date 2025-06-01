import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { useRef, useState } from "react";
import { motion, type PanInfo } from "framer-motion";

export const PromoCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Buy an Apple device",
      highlight: "3 months free.",
      description:
        "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.²",
      cta: "Check eligibility",
    },
    {
      title: "Free 7-day trial",
      highlight: "$9.99/mo.",
      description:
        "A monthly subscription is just $9.99 per month after a free 7-day trial.³ Share Apple TV+ with your family.⁶",
      cta: "Try it free",
    },
    {
      title: "Free 1-month trial",
      highlight: "Apple One",
      description:
        "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
      cta: "Try Apple One free⁵",
    },
  ];

  const handleDragEnd = (_event: MouseEvent, info: PanInfo) => {
    if (info.offset.x > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -50 && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container className="relative z-10 max-w-[1120px] py-6">
      {/* Desktop Grid (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <FadeIn key={index}>
            <div className="flex flex-col h-full pb-44 rounded-2xl bg-transparent text-white">
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-4x font-bold mb-4 text-gray-800">
                {card.highlight}
              </p>
              <p className="text-lg text-textGray mb-6 flex-grow">
                {card.description}
              </p>
              <Button className="w-fit mt-4 font-semibold" size="lg">
                {card.cta}
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile Carousel (hidden on desktop) */}
      <div className="md:hidden relative max-w-[380px] overflow-hidden py-0 pb-28">
        <motion.div
          ref={carouselRef}
          className="flex cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: -currentIndex * 100 + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full flex-shrink-0 px-10">
              <div className="flex flex-col h-full rounded-2xl bg-transparent text-white">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-4xl font-bold mb-4 text-gray-800">
                  {card.highlight}
                </p>
                <p className="text-lg text-textGray mb-6 flex-grow">
                  {card.description}
                </p>
                <Button className="w-fit mt-auto font-semibold" size="lg">
                  {card.cta}
                </Button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-textGray"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
