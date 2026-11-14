import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS, PROFILE } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-[88rem] items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled || open
            ? "border-white/10 bg-ink/80 shadow-card backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Main"
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-xs font-bold text-ink">
            YR
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === link.id ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-lime transition-opacity ${
                    active === link.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1.5 rounded-full border border-white/10 p-1 md:flex">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-8 w-8 place-items-center rounded-full text-neutral-300 transition-colors hover:text-lime"
          >
            <FaGithub />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-8 w-8 place-items-center rounded-full text-neutral-300 transition-colors hover:text-lime"
          >
            <FaLinkedin />
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:bg-lime"
          >
            Resume <FiArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="panel mx-auto mt-2 max-w-[88rem] p-3 shadow-card lg:hidden"
          >
            <ul className="grid gap-1 sm:grid-cols-2">
              {NAV_LINKS.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-white transition-colors hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs text-lime">0{i + 1}</span>
                      {link.label}
                    </span>
                    <FiArrowUpRight className="text-neutral-500" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 border-t border-white/10 px-1 pt-3">
              <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn-lime flex-1">
                Resume <FiArrowUpRight />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
