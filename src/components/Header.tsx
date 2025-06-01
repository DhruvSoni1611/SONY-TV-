import { Button } from "./Button";
import { Container } from "./Container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white relative z-20">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="-ml-6 flex items-center px-6 h-[--header-row-height] text-xl"
          >
            <img
              className="h-5 w-20"
              src="/logo/main_logo.png"
              alt="main logo"
            />
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 z-20 text-white">
        <Container className="flex items-center min-h-[--header-row-height] justify-between">
          <p className="text-xl font-semibold">SONY TV+</p>
          <Button size="sm">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};
