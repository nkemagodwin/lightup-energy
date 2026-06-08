import { testimonials } from "../../data/content";

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="italic text-gray-700">“{t.text}”</p>
              <p className="mt-4 font-semibold text-primary">– {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}