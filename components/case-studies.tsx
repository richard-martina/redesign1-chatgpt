const cases = [
  {
    title: "AI Adoption Framework",
    client: "Healthcare Organization",
    result: "30% Efficiency Gain"
  },
  {
    title: "Business Model Innovation",
    client: "Technology Scale-Up",
    result: "New Revenue Streams"
  },
  {
    title: "Data Strategy",
    client: "Manufacturing Firm",
    result: "Forecast Accuracy +42%"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-widest text-green-600">
          Success Stories
        </span>

        <h2 className="text-5xl font-bold mt-4 mb-16">
          Delivering Measurable Results
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {cases.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
              "
            >
              <div className="h-56 bg-gradient-to-br from-[#0B1F4D] to-[#00AEEF]" />

              <div className="p-8">

                <div className="text-sm text-gray-500">
                  {item.client}
                </div>

                <h3 className="text-2xl font-semibold mt-3">
                  {item.title}
                </h3>

                <div
                  className="
                  mt-6
                  inline-flex
                  bg-green-100
                  text-green-700
                  px-4
                  py-2
                  rounded-full
                "
                >
                  {item.result}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
