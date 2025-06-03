import { Button } from "../Button";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";

export const Testimonial = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Container className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              See it on your smart TV
              <br className="hidden md:block" /> or streaming device.
            </h2>

            {/* CTA Button */}
            <FadeIn>
              <div className="flex justify-center mb-12 md:mb-16">
                <Button className="border-2 border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors">
                  Set up your device &gt;
                </Button>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  alt="Transistor"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Reform"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Tuple"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="SavvyCal"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Statamic"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Transistor"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Reform"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="Tuple"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
                <img
                  alt="SavvyCal"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                />
                <img
                  alt="Statamic"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>
    </div>
  );
};
