const posts = [
  {
    title: "The Future of Generative AI",
    category: "Artificial Intelligence"
  },
  {
    title: "Business Model Innovation Frameworks",
    category: "Strategy"
  },
  {
    title: "Data-Driven Decision Making",
    category: "Analytics"
  }
];

export default function Insights() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-widest text-green-600">
          Insights
        </span>

        <h2 className="text-5xl font-bold mt-4 mb-16">
          Latest Thinking
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-3xl p-8"
            >
              <div className="text-sm text-[#00AEEF]">
                {post.category}
              </div>

              <h3 className="text-2xl font-semibold mt-4">
                {post.title}
              </h3>

              <button className="mt-8 font-medium">
                Read More →
              </button>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
