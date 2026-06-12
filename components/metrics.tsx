const metrics = [
  {
    value: "50+",
    label: "Projects Delivered"
  },
  {
    value: "15+",
    label: "Industries Served"
  },
  {
    value: "10+",
    label: "Years Experience"
  },
  {
    value: "98%",
    label: "Client Satisfaction"
  }
];

export default function Metrics() {
  return (
    <section className="py-24 bg-white">

      <div className="container">

        <div className="grid md:grid-cols-4 gap-8">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#071B38]">
                {metric.value}
              </div>

              <div className="mt-2 text-gray-500">
                {metric.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
