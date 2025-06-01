// import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Hero } from "./components/section/Hero";
import { PromoCards } from "./components/section/PromoCards";
import { Usps } from "./components/section/Usps";
import { VideoCarousel } from "./components/section/VideoCaraousel";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
          <PromoCards />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}

export default App;
