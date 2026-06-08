"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, []);

  // Track scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click (desktop dropdown & mobile drawer)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeMenu]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeMenu]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClasses = (href: string) =>
    `block rounded-lg py-3 px-4 text-lg transition-colors duration-200 ${
      pathname === href
        ? "bg-cyan-400/10 text-cyan-400 font-semibold"
        : "text-gray-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-2xl shadow-black/20" : ""
      } bg-blue-950/95 backdrop-blur-md`}
    >
      <div className="container mx-auto flex h-17.5 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white sm:text-2xl"
          onClick={closeMenu}
        >
          Lightup<span className="text-cyan-600"> Service</span>
        </Link>

        {/* Desktop navigation (hidden on mobile) */}
        <nav className="hidden md:flex md:items-center md:gap-1">
          <Link
            href="/"
            className={`rounded-lg px-3 py-2 text-sm transition hover:text-cyan-400 ${
              pathname === "/" ? "text-cyan-400 font-semibold" : "text-white/80"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded-lg px-3 py-2 text-sm transition hover:text-cyan-400 ${
              pathname === "/about" ? "text-cyan-400 font-semibold" : "text-white/80"
            }`}
          >
            About
          </Link>

          {/* Desktop dropdown (hover) */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:text-cyan-400"
            >
              Products
              <FiChevronDown className="transition-transform group-hover:rotate-180" size={16} />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-1 w-48 -translate-x-1/2 rounded-lg bg-blue-950 shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="py-2">
                <Link
                  href="./products/lighting"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Lighting
                </Link>
                <Link
                  href="./products/solar"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Solar
                </Link>
                <Link
                  href="/products/accessories"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/services"
            className={`rounded-lg px-3 py-2 text-sm transition hover:text-cyan-400 ${
              pathname === "/services" ? "text-cyan-400 font-semibold" : "text-white/80"
            }`}
          >
            Services
          </Link>
          <Link
            href="/faq"
            className={`rounded-lg px-3 py-2 text-sm transition hover:text-cyan-400 ${
              pathname === "/faq" ? "text-cyan-400 font-semibold" : "text-white/80"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/quote"
            className="ml-3 rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Get A Quote
          </Link>
          <Link
            href="/contact"
            className={`rounded-lg px-3 py-2 text-sm transition hover:text-cyan-400 ${
              pathname === "/contact" ? "text-cyan-400 font-semibold" : "text-white/80"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          ref={hamburgerRef}
          className="group relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile slide-in drawer */}
      <div
        ref={drawerRef}
        className={`fixed right-0 top-0 z-40 h-full w-80 max-w-[85vw] bg-blue-950 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-17.5 items-center justify-between border-b border-white/10 px-4">
          <Link href="/" className="text-xl font-bold text-white" onClick={closeMenu}>
            Lightup<span className="text-cyan-400">.</span>
          </Link>
          <button
            onClick={closeMenu}
            className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 overflow-y-auto p-4">
          <Link href="/" className={linkClasses("/")} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")} onClick={closeMenu}>
            About
          </Link>

          {/* Mobile dropdown (accordion) */}
          <div>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex w-full items-center justify-between rounded-lg py-3 px-4 text-lg text-gray-300 transition hover:bg-white/5 hover:text-white"
              aria-expanded={dropdownOpen}
            >
              Products
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                dropdownOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <Link
                  href="/products/lighting"
                  className="block rounded-lg py-3 pl-8 pr-4 text-gray-400 transition hover:bg-white/5 hover:text-white"
                  onClick={closeMenu}
                >
                  Lighting
                </Link>
                <Link
                  href="/products/solar"
                  className="block rounded-lg py-3 pl-8 pr-4 text-gray-400 transition hover:bg-white/5 hover:text-white"
                  onClick={closeMenu}
                >
                  Solar
                </Link>
                <Link
                  href="/products/accessories"
                  className="block rounded-lg py-3 pl-8 pr-4 text-gray-400 transition hover:bg-white/5 hover:text-white"
                  onClick={closeMenu}
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>

          <Link href="/services" className={linkClasses("/services")} onClick={closeMenu}>
            Services
          </Link>
          <Link href="/faq" className={linkClasses("/faq")} onClick={closeMenu}>
            FAQ
          </Link>
          <Link
            href="/quote"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-cyan-600 py-3 px-4 text-center text-lg font-semibold text-white transition hover:bg-cyan-500"
          >
            Get A Quote
          </Link>
          <Link href="/contact" className={linkClasses("/contact")} onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}