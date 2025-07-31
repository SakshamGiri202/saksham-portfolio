




const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Resources", href: "/resources" },
  { name: "Spotify", href: "/spotify" },
];




const Navbar = () => {

  return (
    <nav className="bg-[#18191b] w-full py-5">
      <div className="max-w-6xl mx-auto px-12 flex justify-end justify-between">

        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium text-lg transition-colors ${item.active
                ? "text-[#42e6cf]"
                : "text-gray-100 hover:text-[#42e6cf]"
                }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>

  )
}

export default Navbar
