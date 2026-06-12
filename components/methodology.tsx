const steps = [
  "Discover",
  "Model",
  "Validate",
  "Scale"
];

export default function Methodology() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="container">

        <h2 className="text-5xl font-bold mb-16">
          Our Approach
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white rounded-3xl p-8"
            >
              <div className="text-[#00AEEF] font-bold">
                0{index + 1}
              </div>

              <h3 className="mt-4 text-2xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
