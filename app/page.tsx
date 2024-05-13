import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Details from "./components/Details";
import { categories } from "./constants";
import SearchFilter from "./components/SearchFilter";
import HomeView from "./components/Home";

export default function Home() {
  return (
    <main className="">
      <p>Walk The Isle</p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt
      fugiat amet placeat illo quam voluptas. Eos itaque iusto maiores obcaecati
      veritatis. Illo nobis maxime, repudiandae dolorum dignissimos explicabo
      libero.
      <Footer />
    </main>
  );
}
