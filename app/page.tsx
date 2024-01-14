import Camp from "@/components/City";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <>
      {/* <PackagesList /> */}
      <Hero />
      <Camp />
      <Guide />
      <Features />

    </>
  )
}
