const industries = [
  "Healthcare",
  "Manufacturing",
  "Public Sector",
  "Education",
  "Energy",
  "Technology"
];

export default function Industries() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-widest text-green-600">
          Industries
        </span>

        <h2 className="text-5xl font-bold mt-4 mb-16">
          Sector Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {industries.map((industry) => (
            <div
              key={industry}
              className="
              border
              rounded-2xl
              p-10
              hover:bg-[#0B1F4D]
              hover:text-white
              transition-all
              cursor-pointer
            "
            >
              <h3 className="text-2xl font-semibold">
                {industry}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
