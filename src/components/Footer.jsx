import { FiTwitter } from "react-icons/fi"
import { LuGithub, LuInstagram, LuLinkedin, LuMail } from "react-icons/lu"

const Footer = () => {
  return (
    <section>
      <footer className="w-full mt-20 flex flex-col items-center">
        <div className="flex grid-cols-2 space-x-120">
          <p className="text-zinc-500 text-sm mb-4">© 2025 Make with ❤️ by Saksham</p>
          <div className="flex gap-5 mb-4 text-zinc-400">
            {/* Replace # with your URLs */}
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="GitHub"><LuGithub /></a>
            <a href="#" aria-label="Instagram"><LuInstagram /></a>
            <a href="#" aria-label="LinkedIn"><LuLinkedin /></a>
            <a href="#" aria-label="Mail"><LuMail /></a>
          </div>
        </div>
      </footer>

    </section>

  )
}

export default Footer
