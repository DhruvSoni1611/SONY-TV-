import { FadeIn } from "../FadeIn"; // Your existing fade-in component
import { Container } from "../Container";

export const WatchAnywhere = () => {
  const platforms = [
    {
      category: "Sony TV",
      devices: ["iPhone", "iPad", "Mac"],
    },
    {
      category: "Sony Vision Pro",
      devices: ["AirPlay", "Android", "PC"],
    },
    {
      category: "Download on",
      devices: ["Google Play", "Microsoft Store"],
    },
  ];

  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Watch Sony TV+ anywhere on the Sony TV app.
        </h2>

        {/* Description */}
        <FadeIn>
          <p className="text-xl text-center mb-12">
            Find the Sony TV app on your favorite devices. Or watch Sony TV+
            online at tv.Sony.com.
          </p>
        </FadeIn>

        <div className="border-t border-gray-200 my-12"></div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <FadeIn key={index}>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  {platform.category}
                </h3>
                <ul className="space-y-3">
                  {platform.devices.map((device, i) => (
                    <li key={i} className="text-lg">
                      {device}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
};
