import Link from "next/link";
import MobileNav from "./MobileNav";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full px-6 py-4 lg:px-12 fixed flex justify-between items-center bg-bg-primary z-10"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      <p className="text-text-primary text-xl md:text-2xl font-bold flex items-center gap-2">
        Coach Training
      </p>
      <ul className="hidden lg:flex gap-8 text-lg">
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="hover:text-accent transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="hidden lg:block px-4 py-2 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-lg text-text-secondary transition tracking-wide"
      >
        Book A Meeting
      </Link>
      <MobileNav links={navLinks} />
    </nav>
  );
}
