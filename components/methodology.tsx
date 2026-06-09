import {
  Search,
  Lightbulb,
  CheckCircle,
  Rocket
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    text: "Assess opportunities, challenges and market dynamics."
  },
  {
    icon: Lightbulb,
    title: "Model",
    text: "Design business models and innovation frameworks."
  },
  {
    icon: CheckCircle,
    title: "Validate",
    text: "Test assumptions using data and experimentation."
  },
  {
    icon: Rocket,
    title: "Scale",
    text: "Implement solutions and accelerate growth."
  }
];

export default function Methodology() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-widest text-green-600">
            Methodology
          </span>

          <h2 className="text-5xl font-bold mt-4">
            From Idea to Impact
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
            >
              <div className="bg-slate-50 rounded-3xl p-8 h-full">

                <step.icon
                  className="mb-6 text-[#00AEEF]"
                  size={42}
                />

                <div className="text-sm text-gray-500 mb-2">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {step.text}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
