const services = [
  "AI Strategy",
  "Data Analytics",
  "Business Modeling",
  "Innovation Management",
  "Digital Transformation",
  "Technology Advisory"
];

export default function Services() {
  return (
    <section className="py-32">

      <div className="container">

        <h2 className="text-5xl font-bold mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service}
              className="
                border
                rounded-3xl
                p-8
                hover:shadow-xl
                transition
              "
            >
              <h3 className="text-2xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-500">
                Strategic advisory and implementation support.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
