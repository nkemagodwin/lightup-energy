import HeroCarousel from "../app/components/home/HeroCarousel";
import ServicesSection from "../app/components/home/ServicesSection";
import CounterSection from "../app/components/home/CounterSection";
import TestimonialsSection from "../app/components/home/TestimonialsSection";
import ReviewForm from "../app/components/home/ReviewForm";
import ProductTabs from "../app/components/home/ProductTabs";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <CounterSection />
      <TestimonialsSection />
      <ReviewForm />
      <ProductTabs />
    </>
  );
}