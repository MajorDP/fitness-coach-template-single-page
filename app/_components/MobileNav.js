"use client";
import { useState } from "react";
import Link from "next/link";

function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:flex md:items-center md:gap-8 lg:hidden">
      <Link
        href="#contact"
        className="hidden md:block lg:hidden px-4 py-2 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-lg text-text-secondary transition"
      >
        Book A Meeting
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-50">
        {isOpen ? "X" : "☰"}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full lg:hidden z-40 bg-bg-secondary">
          <ul className="flex flex-col gap-4 p-6 text-lg">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                className="block mt-2 px-4 py-2 bg-gradient-to-br from-accent hover:to-accent to-accent-hover text-lg text-text-secondary text-center"
              >
                Book A Meeting
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
