import { services } from "../../data/content";

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 text-center shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-primary">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}