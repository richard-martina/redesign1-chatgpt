export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      bg-gradient-to-b
      from-slate-50
      to-white
    "
    >
      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-widest text-green-600">
          Empowering Businesses
        </span>

        <h1
          className="
          text-6xl
          md:text-8xl
          font-bold
          text-[#0B1F4D]
          mt-6
          max-w-4xl
        "
        >
          Unlock Innovation.
          Accelerate Growth.
        </h1>

        <p
          className="
          text-xl
          mt-8
          max-w-2xl
          text-gray-600
        "
        >
          AI Strategy, Data Solutions, Technology Innovation
          and Business Modeling consulting for ambitious
          organizations.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-[#00AEEF] text-white px-8 py-4 rounded-xl">
            Schedule Consultation
          </button>

          <button className="border px-8 py-4 rounded-xl">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
