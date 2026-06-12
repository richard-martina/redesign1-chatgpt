export default function Challenges() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="container">

        <h2 className="text-5xl font-bold mb-16">
          Challenges We Solve
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              AI Adoption
            </h3>

            <p className="mt-4 text-gray-600">
              Moving beyond experimentation into
              business value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Data Value Creation
            </h3>

            <p className="mt-4 text-gray-600">
              Turning data into strategic decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Innovation Management
            </h3>

            <p className="mt-4 text-gray-600">
              Creating sustainable innovation capability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
