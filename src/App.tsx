import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Link from "./Components/Link";
import Statistic from "./Components/Statistic";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container  max-w-[86.93%] mx-auto md:max-w-[1108px]">
        <Header />
        <Hero />
        <Link />
        <Statistic />
      </div>
      <Footer />
    </>
  );
}

export default App;
