import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>

        <section
          className="
          min-h-screen
          bg-[#071B38]
          text-white
          flex
          items-center
        "
        >
          <div className="container">

            <div className="max-w-4xl">

              <div
                className="
                inline-flex
                border
                border-cyan-400/30
                rounded-full
                px-5
                py-2
              "
              >
                AI • DATA • INNOVATION • BUSINESS MODELING
              </div>

              <h1
                className="
                text-6xl
                md:text-8xl
                font-bold
                mt-8
              "
              >
                Transform Ideas Into
                Intelligent Growth.
              </h1>

              <p
                className="
                mt-8
                text-xl
                text-slate-300
                max-w-2xl
              "
              >
                Helping organizations leverage AI,
                data and innovation to create
                sustainable competitive advantage.
              </p>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
