"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Left Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Company Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-sm font-semibold text-white">
            Product
          </Link>
          <Link href="#" className="text-sm font-semibold text-white">
            Features
          </Link>
          <Link href="#" className="text-sm font-semibold text-white">
            Marketplace
          </Link>
          <Link href="#" className="text-sm font-semibold text-white">
            Company
          </Link>
        </div>

        {/* Login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu panel (hidden by default) */}
      <div className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-900 p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Company Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                >
                  Product
                </Link>
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
