import { useState } from "react"
import { navLinks } from "../constants/constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))

      }
    </ul>
  )
}

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((e) => !e);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            triet.ngo
          </a>

          <button onClick={clickHandler} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Only, takes full height of the screen */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems></NavItems>
        </nav>
      </div>
    </header>
  )
}

export default NavBar