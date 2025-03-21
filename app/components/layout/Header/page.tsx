"use client";

import { Fragment, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { useAds } from "../../../context/AdsContext";

const Header = () => {
  // Estado para controlar qué columnas están expandidas
  const [expandedColumns, setExpandedColumns] = useState<{
    [key: string]: boolean;
  }>({
    columnOne: true,
    columnTwo: true,
    columnThree: true,
    columnFour: true,
    columnFive: true,
  });
  // Estado para controlar el menú completo
  const [fullMenuOpen, setFullMenuOpen] = useState(false);

  // Usar el hook useAds para acceder al valor del contexto
  const { ads } = useAds();

  const handleMenu = (active: boolean) => {
    setFullMenuOpen(!fullMenuOpen);
    setExpandedColumns({
      columnOne: active,
      columnTwo: active,
      columnThree: active,
      columnFour: active,
      columnFive: active,
    });
  };

  return (
    <Fragment>
      {ads === "full" && (
        <div className="p-4 sm:p-10">
          <div className="col-span-3 h-[60px] lg:h-[100px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        </div>
      )}
      <header className="bg-background">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between px-4 sm:px-10 lg:px-0"
        >
          <div className="flex lg:flex-1 items-center">
            <div className="hidden lg:flex border-r-secondary-300 border-r-[1px] h-[100px] w-[94px] items-center justify-center cursor-pointer">
              <Image
                className="h-auto w-auto"
                src="/hamburguer-menu.svg"
                alt="Hamburguer Menu"
                width={34}
                height={24}
                priority
                onClick={() => handleMenu(true)}
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
              />
            </Link>
          </div>
          <div className="flex lg:hidden bg-foreground h-[40px] w-[40px] m-4 rounded-sm items-center justify-center cursor-pointer">
            {fullMenuOpen ? (
              <Image
                className="h-auto w-auto"
                src="/X.svg"
                alt="Abrir Menu"
                width={34}
                height={24}
                priority
                onClick={() => handleMenu(false)}
              />
            ) : (
              <Image
                className="h-auto w-auto"
                src="/hamburguer-mobile-menu.svg"
                alt="Cerrar Menu"
                width={24}
                height={24}
                priority
                onClick={() => handleMenu(false)}
              />
            )}
          </div>
          <div className="hidden lg:flex mr-3">
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
                        href="#"
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
          </div>
        </nav>
        <div
          className={`mx-auto flex-col p-2 md:p-4  ${fullMenuOpen ? "flex" : "hidden"}`}
        >
          <div className="flex mx-auto md:mb-6 items-center bg-foreground rounded-4xl w-fit">
            <form
              action="/search"
              className="flex items-center py-4 pl-5 pr-4 gap-3 font-normal text-sm"
            >
              <input
                type="text"
                placeholder="Buscar aquí..."
                name="search"
                className="focus:outline-none min-w-[200px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[550px] text-secondary-800"
              />
              <button type="submit">
                <Image
                  alt=""
                  src="/search.svg"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-5 py-4 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-screen-xl w-full">
            <div className="grid grid-cols-1 gap-5 pb-5 md:hidden border-b-2 border-secondary-300">
              <div>
                <div className="flex items-center justify-between cursor-pointer">
                  <Link
                    href="/"
                    className="text-xl font-bold text-secondary-700 active:text-primary-950 hover:text-primary-950"
                  >
                    Inicio
                  </Link>
                </div>
              </div>
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setExpandedColumns({
                      ...expandedColumns,
                      news: !expandedColumns.news,
                    })
                  }
                >
                  <Link
                    href="/news"
                    className="text-xl font-bold text-secondary-700 active:text-primary-950 hover:text-primary-950"
                    title="Noticias"
                  >
                    Noticias
                  </Link>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.news ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="#d0d0d0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <ul
                  className={`font-semibold text-sm text-secondary-700 active:text-primary-950 hover:text-primary-950 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.news ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <li className="p-3 mt-3">
                    {" "}
                    <Link
                      href="#"
                      className="hover:underline"
                      title="Más noticias"
                    >
                      Más noticias
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setExpandedColumns({
                      ...expandedColumns,
                      sports: !expandedColumns.sports,
                    })
                  }
                >
                  <Link
                    href="#"
                    className="text-xl font-bold text-secondary-700 active:text-primary-950 hover:text-primary-950"
                  >
                    Deportes
                  </Link>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.sports ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="#d0d0d0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <ul
                  className={`font-semibold text-sm text-secondary-700 active:text-primary-950 hover:text-primary-950 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.sports ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <li className="p-3 mt-3">
                    {" "}
                    <Link
                      href="/news/example"
                      className="hover:underline"
                      title="Más deportes"
                    >
                      Más deportes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center justify-between cursor-pointer">
                  <Link
                    href="#"
                    className="text-xl font-bold text-secondary-700 active:text-primary-950 hover:text-primary-950"
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
                </div>
              </div>
            </div>
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setExpandedColumns({
                    ...expandedColumns,
                    columnOne: !expandedColumns.columnOne,
                  })
                }
              >
                <h2 className="text-xl font-bold text-primary-950">
                  Vertical 1
                </h2>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.columnOne ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#d0d0d0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul
                className={`font-semibold text-sm text-primary-900 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.columnOne ? "max-h-[500px]" : "max-h-0"}`}
              >
                <li className="p-3 mt-3">
                  {" "}
                  <Link href="#" className="hover:underline" title="Guía de TV">
                    Sección 1
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    title="Transmisiones en Vivo"
                  >
                    Sección 2
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Noticias">
                    Sección 3
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Eventos">
                    Sección 4
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Empleos">
                    Sección 5
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setExpandedColumns({
                    ...expandedColumns,
                    columnTwo: !expandedColumns.columnTwo,
                  })
                }
              >
                <h2 className="text-xl font-bold text-primary-950">
                  Vertical 2
                </h2>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.columnTwo ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#d0d0d0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul
                className={`font-semibold text-sm text-primary-900 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.columnTwo ? "max-h-[500px]" : "max-h-0"}`}
              >
                {" "}
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Guía de TV">
                    Sección 1
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    title="Transmisiones en Vivo"
                  >
                    Sección 2
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Noticias">
                    Sección 3
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Eventos">
                    Sección 4
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Empleos">
                    Sección 5
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setExpandedColumns({
                    ...expandedColumns,
                    columnThree: !expandedColumns.columnThree,
                  })
                }
              >
                <h2 className="text-xl font-bold text-primary-950">
                  Vertical 3
                </h2>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.columnThree ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#d0d0d0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul
                className={`font-semibold text-sm text-primary-900 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.columnThree ? "max-h-[500px]" : "max-h-0"}`}
              >
                {" "}
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Guía de TV">
                    Sección 1
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    title="Transmisiones en Vivo"
                  >
                    Sección 2
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Noticias">
                    Sección 3
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:underline"
                    title="Eventos"
                  >
                    Sección 4
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Empleos">
                    Sección 5
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setExpandedColumns({
                    ...expandedColumns,
                    columnFour: !expandedColumns.columnFour,
                  })
                }
              >
                <h2 className="text-xl font-bold text-primary-950">
                  Vertical 4
                </h2>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.columnFour ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#d0d0d0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul
                className={`font-semibold text-sm text-primary-900 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.columnFour ? "max-h-[500px]" : "max-h-0"}`}
              >
                {" "}
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Guía de TV">
                    Sección 1
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    title="Transmisiones en Vivo"
                  >
                    Sección 2
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Noticias">
                    Sección 3
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:underline"
                    title="Eventos"
                  >
                    Sección 4
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Empleos">
                    Sección 5
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setExpandedColumns({
                    ...expandedColumns,
                    columnFive: !expandedColumns.columnFive,
                  })
                }
              >
                <h2 className="text-xl font-bold text-primary-950">
                  Vertical 5
                </h2>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 my-auto ${expandedColumns.columnFive ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="#d0d0d0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul
                className={`font-semibold text-sm text-primary-900 gap-3 transition-all duration-300 overflow-hidden ${expandedColumns.columnFive ? "max-h-[500px]" : "max-h-0"}`}
              >
                {" "}
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Guía de TV">
                    Sección 1
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link
                    href="#"
                    className="hover:underline"
                    title="Transmisiones en Vivo"
                  >
                    Sección 2
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Noticias">
                    Sección 3
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:underline" title="Eventos">
                    Sección 4
                  </Link>
                </li>
                <li className="p-3 mt-3">
                  <Link href="#" className="hover:unLinkine" title="Empleos">
                    Sección 5
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mx-auto max-w-screen-xl border-t-foreground border-t-2">
            <div className="flex items-center justify-center gap-3.5 py-4">
              <Link
                href="https://www.facebook.com/chapintv/"
                target="_blank"
                title="Facebook"
              >
                <Image
                  alt="Facebook"
                  src="/facebook.svg"
                  className="w-6 h-6"
                  width={9}
                  height={17}
                />
              </Link>
              <Link
                href="https://www.instagram.com/chapintv/"
                target="_blank"
                title="Instagram"
              >
                <Image
                  alt="Instagram"
                  src="/instagram.svg"
                  className="w-6 h-6"
                  width={13}
                  height={17}
                />
              </Link>
              <Link
                href="https://x.com/chapintv_"
                target="_blank"
                title="Twitter/X"
              >
                <Image
                  alt="Twitter"
                  src="/twitter-x.svg"
                  className="w-6 h-6"
                  width={14}
                  height={17}
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCJcN367ge_Yo1p7b20_KSaA"
                target="_blank"
                title="Youtube"
              >
                <Image
                  alt="YouTube"
                  src="/youtube.svg"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@chapintv_"
                target="_blank"
                title="Tiktok"
              >
                <Image
                  alt="TikTok"
                  src="/tiktok.svg"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.pinterest.com/webchapintv"
                target="_blank"
                title="Pinterest"
              >
                <Image
                  alt="Pinterest"
                  src="/pinterest.svg"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
