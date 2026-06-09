const metrics = [
  ["50+", "Projects Delivered"],
  ["15+", "Industries Served"],
  ["10+", "Years Experience"],
  ["98%", "Client Satisfaction"]
];

export default function Metrics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {metrics.map(([value,label]) => (
          <div key={label} className="text-center">

            <div className="text-5xl font-bold text-[#0B1F4D]">
              {value}
            </div>

            <div className="mt-2 text-gray-600">
              {label}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
