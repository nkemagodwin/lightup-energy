export interface Slide {
  src: string;
  fallback: string;   // we keep it for consistency, but it's now the same
  alt: string;
  caption: string;
}

export interface Product {
  img: string;
  fallback: string;
  name: string;
  desc: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  text: string;
  author: string;
}

export const heroSlides: Slide[] = [
  {
    src: "https://6a26ff53494af3e82080619a.imgix.net/img/wall-light.jpg?auto=format&fit=fill&w=828",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/wall-light.jpg?auto=format&fit=fill&w=828",
    alt: "Wall Light",
    caption: "Wall Light",
  },
  {
    src: "https://6a26ff53494af3e82080619a.imgix.net/img/socket&switch.jpg?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/socket&switch.jpg?auto=format&fit=fill&w=1080",
    alt: "Sockets & Switches",
    caption: "Sockets & Switches",
  },
  {
    src: "https://6a26ff53494af3e82080619a.imgix.net/img/chandelier.jpg?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/chandelier.jpg?auto=format&fit=fill&w=1080",
    alt: "Chandelier Light",
    caption: "Chandelier Light",
  },
  {
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop",
    fallback: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop",
    alt: "Smart Lock",
    caption: "Smart Lock",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    fallback: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    alt: "Solar Panels",
    caption: "Solar Panels",
  },
];

export const lightingProducts: Product[] = [
  {
    img: "https://6a26ff53494af3e82080619a.imgix.net/img/celling_light.jpg?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/celling_light.jpg?auto=format&fit=fill&w=1080",
    name: "LED Ceiling Light",
    desc: "Brighten your home with energy-efficient LED ceiling lights.",
  },
  {
    img: "https://6a26ff53494af3e82080619a.imgix.net/img/Pendant-Lights.jpg?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/Pendant-Lights.jpg?auto=format&fit=fill&w=1080",
    name: "Pendant Lights",
    desc: "Modern pendant lights ideal for kitchens and dining areas.",
  },
  {
    img: "https://6a26ff53494af3e82080619a.imgix.net/img/wall-light.jpg?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/wall-light.jpg?auto=format&fit=fill&w=1080",
    name: "Wall Light",
    desc: "Elegant wall lights for ambient lighting in any space.",
  },
];

export const solarProducts: Product[] = [
  {
    img: "https://6a26ff53494af3e82080619a.imgix.net/img/solar-installation-hero-mobile.png?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/solar-installation-hero-mobile.png?auto=format&fit=fill&w=1080",
    name: "Solar Panels",
    desc: "High-efficiency solar panels for your home or business.",
  },
  {
    img: "https://6a26ff53494af3e82080619a.imgix.net/img/3.6allinone.jpg?auto=format&fit=fill&w=828",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/3.6allinone.jpg?auto=format&fit=fill&w=828",
    name: "3.6KVA Inverter",
    desc: "Reliable inverter systems for uninterrupted power supply.",
  },
  {
    img: "https://6a26ff53494af3e82080619a.imgix.net/img/lithium.jpg?auto=format&fit=fill&w=1080",
    fallback: "https://6a26ff53494af3e82080619a.imgix.net/img/lithium.jpg?auto=format&fit=fill&w=1080",
    name: "Grade A cell Lithium  Battery",
    desc: "Long-lasting solar batteries for energy storage.",
  },
];

export const services: Service[] = [
  { icon: "💡", title: "Lighting Installation", desc: "Expert indoor and outdoor lighting setup." },
  { icon: "⚡", title: "Electrical Repairs", desc: "Fast, safe repairs for homes and businesses." },
  { icon: "🔌", title: "Switch & Socket Replacement", desc: "Modern switches and sockets upgrade." },
  { icon: "☀️", title: "Solar Panel Setup", desc: "Complete solar solutions for energy saving." },
];

export const testimonials: Testimonial[] = [
  { text: "Excellent service! They installed my chandelier perfectly.", author: "Amina K." },
  { text: "Solar panels working flawlessly. Very professional team.", author: "Chidi O." },
  { text: "Fast response, fair pricing, and clean workmanship.", author: "Fatima B." },
];