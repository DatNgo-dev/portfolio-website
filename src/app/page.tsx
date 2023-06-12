import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Title from "../components/Title";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  return (
      <div className="bg-white dark:bg-stone-900 relative text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <ThemeButton/>
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <div className="flex justify-center">
            <Title>Portfolios</Title>
          </div>
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
  );
}
