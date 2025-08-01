import React from 'react';
import { Code, Copy, Star, Download } from 'lucide-react';

const Snippets = () => {
  const snippets = [
    {
      title: 'React Custom Hook for API Calls',
      description: 'A reusable custom hook for handling API requests with loading states, error handling, and caching.',
      language: 'JavaScript',
      category: 'React',
      stars: 45,
      downloads: 1200,
      code: `const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};`,
    },
    {
      title: 'CSS Grid Auto-Fit Layout',
      description: 'Responsive grid layout that automatically adjusts the number of columns based on available space.',
      language: 'CSS',
      category: 'CSS',
      stars: 32,
      downloads: 890,
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}`,
    },
    {
      title: 'Node.js Error Handler Middleware',
      description: 'Express middleware for centralized error handling with logging and user-friendly error responses.',
      language: 'JavaScript',
      category: 'Node.js',
      stars: 67,
      downloads: 2100,
      code: `const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const isDev = process.env.NODE_ENV === 'development';
  
  res.status(err.status || 500).json({
    message: err.message,
    ...(isDev && { stack: err.stack })
  });
};

module.exports = errorHandler;`,
    },
    {
      title: 'TypeScript Utility Types',
      description: 'Collection of useful TypeScript utility types for better type safety and developer experience.',
      language: 'TypeScript',
      category: 'TypeScript',
      stars: 89,
      downloads: 3400,
      code: `type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type NonNullable<T> = T extends null | undefined ? never : T;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};`,
    },
    {
      title: 'Python Data Validator',
      description: 'Simple yet powerful data validation utility for Python applications with custom rules support.',
      language: 'Python',
      category: 'Python',
      stars: 23,
      downloads: 567,
      code: `class Validator:
    def __init__(self, data):
        self.data = data
        self.errors = []
    
    def required(self, field):
        if field not in self.data or not self.data[field]:
            self.errors.append(f"{field} is required")
        return self
    
    def email(self, field):
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
        if field in self.data and not re.match(pattern, self.data[field]):
            self.errors.append(f"{field} must be a valid email")
        return self`,
    },
    {
      title: 'Tailwind CSS Animation Classes',
      description: 'Custom Tailwind CSS animation classes for smooth and performant UI animations.',
      language: 'CSS',
      category: 'CSS',
      stars: 156,
      downloads: 4200,
      code: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}`,
    },
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

  return (
    <section id="snippets" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Code Snippets & Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Useful code snippets, utilities, and resources that I've created and use regularly in my projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {snippets.map((snippet, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {snippet.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {snippet.description}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs rounded-full shrink-0 ml-4">
                    {snippet.language}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Star size={16} className="mr-1" />
                      {snippet.stars}
                    </span>
                    <span className="flex items-center">
                      <Download size={16} className="mr-1" />
                      {snippet.downloads}
                    </span>
                  </div>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    {snippet.category}
                  </span>
                </div>

                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{snippet.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(snippet.code)}
                    className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors duration-200"
                    title="Copy to clipboard"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Snippets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Snippets;