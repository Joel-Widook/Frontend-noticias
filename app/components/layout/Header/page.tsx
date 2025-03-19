"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between"
      >
        <div className="flex lg:flex-1 items-center">
          <div className="border-r-secondary-300 border-r-[1px] h-[100px] w-[94px] flex items-center justify-center cursor-pointer">
            <Image
              className="h-auto w-auto"
              src="/hamburguer-menu.svg"
              alt="Logo ChapinTV"
              width={34}
              height={24}
              priority
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
          <Link href="/" className="ml-3.5">
            <span className="sr-only">ChapinTV</span>
            <Image
              className="h-auto w-[268px]"
              src="/logo-chapintv-black.svg"
              alt="Logo ChapinTV"
              width={268}
              height={82}
              priority
              onClick={() => console.log("Logo clicked")}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex mr-3">
          <Link
            href="/"
            className="text-sm/6 px-3 font-semibold text-secondary-1100 hover:text-primary-900 active:text-primary-900"
          >
            Inicio
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center cursor-pointer gap-x-1 text-sm/6 px-3 font-semibold text-secondary-1100 hover:text-primary-900 active:text-primary-900">
              Noticias
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 max-w-fit w-screen overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <Link
                      href="/news/example"
                      className="block font-semibold text-secondary-1100 hover:text-primary-900 active:text-primary-900"
                    >
                      Más noticias
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center cursor-pointer gap-x-1 text-sm/6 px-3 font-semibold text-secondary-1100 hover:text-primary-900 active:text-primary-900">
              Deportes
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 max-w-fit w-screen overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div className="flex-auto">
                    <Link
                      href="/news/example"
                      className="block font-semibold text-secondary-1100 hover:text-primary-900 active:text-primary-900"
                    >
                      Más deportes
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/live"
            className="text-sm/6 px-3 font-semibold text-secondary-1100 hover:text-primary-900 active:text-primary-900"
          >
            Transmisiones
          </Link>
          <div className="flex justify-between items-center gap-3 rounded-lg text-xs p-1 font-normal bg-[#BB120C] text-white">
            <Image
              alt=""
              src="/wifi.svg"
              className="h-4 w-4"
              width={16}
              height={16}
            />
            <p className="cursor-default">En vivo</p>
          </div>
        </PopoverGroup>
      </nav>
      <div className="mx-auto flex items-center justify-center">
        <p>ChapinTV</p>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <Image
                alt=""
                src="/logo-chapintv.png"
                className="h-8 w-auto"
              /> */}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Link
                  href="/search"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Busqueda
                </Link>
              </div>
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Inicio
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Noticias
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2"></DisclosurePanel>
                </Disclosure>
                <Link
                  href="/sports"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Deportes
                </Link>
                <Link
                  href="/live"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Transmisiones
                </Link>
                <Link
                  href="/opinion"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Opinión
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
