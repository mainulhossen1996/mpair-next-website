// app/articles/page.jsx
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "How SaaS is Transforming B2B Operations",
    excerpt: "Discover how SaaS is revolutionizing efficiency, scalability, and customer engagement for modern B2B enterprises.",
    date: "June 3, 2025",
    readingTime: "5 min read",
    category: "SaaS",
    Image: "/article1.jpg"
  },
  {
    id: 2,
    title: "Marketing Automation: Future of Lead Nurturing",
    excerpt: "From personalized email flows to smart CRM systems — learn what tools are shaping B2B marketing.",
    date: "June 1, 2025",
    readingTime: "4 min read",
    category: "Marketing",
    Image: "/article2.jpg"
  },
  {
    id: 3,
    title: "Top ERP Trends in 2025",
    excerpt: "Explore the top ERP innovations that are changing how businesses handle their backend processes.",
    date: "May 28, 2025",
    readingTime: "6 min read",
    category: "ERP",
    Image: "/article3.jpg"
  },
];

export default function NewBlog() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto relative bg-white overflow-hidden">

<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[30px_30px]"></div>

      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Insights for Business Growth</h1>
        <p className="text-gray-600">Explore trends, expert advice, and innovations shaping the B2B world.</p>
      </div>

      {/* Featured Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* New Posts */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">New Posts</h2>
          {articles.slice(0, 2).map((article) => (
            <div key={article.id} className="mb-6 border-b pb-4">
              <Link className="block hover:text-blue-600" href={`./articles/${article.id}`}> 
            
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <p className="text-sm text-gray-500">{article.date} • {article.readingTime}</p>
                  <p className="mt-2 text-gray-700">{article.excerpt}</p>
            
              </Link>
            </div>
          ))}
        </div>

        {/* Most Read */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Most Read</h2>
          {articles.slice().reverse().map((article) => (
            <div key={article.id} className="mb-4">
              <Link className="hover:text-blue-600 text-sm block" href={`./articles/${article.id}`}>
               
                  • {article.title}
              
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Article List */}
      <div className="grid gap-8">
        {articles.map((article) => (
          <div key={article.id} className="flex gap-6 border rounded-xl p-4 hover:shadow-md transition">
            <Image
              src={article.Image}
              alt={article.title}
              width={120}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <span className="text-sm text-blue-600 font-medium">{article.category}</span>
              <h3 className="text-xl font-semibold mb-1 mt-1">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{article.date} • {article.readingTime}</p>
              <p className="text-gray-700 text-sm line-clamp-2">{article.excerpt}</p>
              <Link className="text-blue-600 text-sm mt-2 inline-block hover:underline" href={`./articles/${article.id}`}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
