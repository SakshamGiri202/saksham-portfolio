const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white px-4">
      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 mt-24">
        {/* Left Section: Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-3">Saksham Giri</h1>
          <p className="mb-4">
            I'm a backend developer who loves building the logic behind great user experiences. From designing scalable APIs to working with databases and authentication systems, I enjoy crafting reliable systems that power modern applications.
          </p>
          <p className="mb-4">
            Currently a CSE undergrad, I’ve worked on projects using Node.js, MongoDB, REST APIs, real-time data sync, and more. I’m all about clean architecture, performance, and writing code that makes sense.
          </p>
          <p className="mb-4">

            In my free time, you’ll probably find me ricing my Linux setup (yes, I’m that kind of person) — tweaking everything from window managers to terminal themes to get that perfect dev flow.
          </p>
        </div>
        {/* Profile Image */}
        <div>
          <img
            src="./profile.jpg"
            alt="Profile"
            className="rounded-full w-40 h-40 object-cover border-2 border-zinc-800"
          />
        </div>
      </div>
    </main>


  )
}

export default Home
