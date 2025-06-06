import { Container } from "../Container";
import { FadeIn } from "../FadeIn";

export const Usps = () => {
  return (
    <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
      <FadeIn>
        <p>New Sony Originals every month — always ad‑free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Sony TV app on Sony devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
