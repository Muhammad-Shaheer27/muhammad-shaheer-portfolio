"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling when image is open
    document.body.style.overflow = isImageOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isImageOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo + Profile Image */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              className="relative h-8 w-8 cursor-zoom-in overflow-hidden rounded-full"
              aria-label="Open profile picture"
            >
              <Image
                src="/my-image.jpg"
                alt="Muhammad Shaheer"
                fill
                sizes="32px"
                className="object-cover"
              />
            </button>

            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              Shaheer<span className="text-indigo-600">.dev</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Resume</Button>
            </a>

            <a
              href="https://github.com/Muhammad-Shaheer27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Fullscreen Profile Image */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile picture preview"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute right-6 top-6 text-4xl leading-none text-white transition hover:text-slate-300"
            aria-label="Close profile picture"
          >
            ×
          </button>

          {/* Large Image */}
          <div
            className="relative h-[85vh] w-[85vw] max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/my-image.jpg"
              alt="Muhammad Shaheer"
              fill
              priority
              sizes="85vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}