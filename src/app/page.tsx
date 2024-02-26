;
import FeaturedArea from "@/components/FeaturedArea";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Hero/>
      <FeaturedArea/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  )
}