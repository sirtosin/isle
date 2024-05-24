import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Banner2 from "./components/Banner2";
import Features from "./components/Features";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <div className="-mt-16">
        <Features />
      </div>
      <Banner2 />
      <Contact/>
      <Footer />
    </main>
  );
}
