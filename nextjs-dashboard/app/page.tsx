import Header from "./components/header";
import Hero from "./components/hero";

import Mission from "./components/mission";
import Values from "./components/values";
import Programs from "./components/programs";
import Impact from "./components/impact";
import CTA from "./components/CTA";
import Footer from "./components/footer";
//import Footer from "./components/footer";
//import CTA from "./components/CTA";


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Mission />
        <Values />
        <Programs />
        <Impact />
        <CTA />
      </main>
      <Footer />

    </>
  );
}
