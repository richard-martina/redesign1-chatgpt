export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-3xl font-bold">
              FIIT
            </h3>

            <p className="mt-4 text-gray-400">
              Foundry in Innovative Technologies
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>AI Strategy</li>
              <li>Data Analytics</li>
              <li>Business Modeling</li>
              <li>Innovation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Insights</li>
              <li>Cases</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Rotterdam</li>
              <li>info@fiitadvisory.nl</li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
  );
}
