const services = [
  {
    title: "AI Strategy & Advisory",
    text: "Turn AI opportunities into measurable business value."
  },
  {
    title: "Data & Analytics",
    text: "Transform data into actionable intelligence."
  },
  {
    title: "Business Modeling",
    text: "Design scalable and sustainable business models."
  },
  {
    title: "Innovation Management",
    text: "Build innovation capabilities across teams."
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map(service => (
            <div
              key={service.title}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              <h3 className="font-semibold text-xl">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
