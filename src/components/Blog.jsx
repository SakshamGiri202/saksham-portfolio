import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allPosts = [
    {
      title: "How to configure your kitty terminal and nvim for smooth workflow",
      views: "0, views",
      hasComments: true
    }
  ];


  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <main className="max-w-4xl mx-auto mt-0 px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I've been learning and programming for 2 years now. Throughout this year, I've worked with various
            technologies. I'm here to share just that. Use the search below to filter by title.
          </p>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-6">All Posts</h2>
          <div className="space-y-4">
            {allPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors cursor-pointer group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors flex-1 pr-4">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <span className="text-sm whitespace-nowrap">
                      {post.views}
                    </span>
                    {post.hasComments && (
                      <FiMessageCircle className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default Blog
