"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Estado para controlar qué columnas están expandidas
  const [expandedColumns, setExpandedColumns] = useState<{
    [key: string]: boolean;
  }>({});
  return (
    <footer className="bg-primary-1100">
      <div className="w-full text-white text-[15px]">
        <div className="grid grid-cols-1 gap-8 px-4 pt-20 md:pt-25  pb-7 md:pb-15 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mx-auto max-w-screen-xl">
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              className="mb-5 w-[240px] h-auto"
              src="/logo-chapintv-white.svg"
              alt="Logo ChapinTV"
              width={240}
              height={72}
              priority
            />
            <p className="text-base font-normal">
              Tu portal de noticias, entretenimiento y televisión en Guatemala
            </p>
          </div>
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() =>
                setExpandedColumns({
                  ...expandedColumns,
                  info: !expandedColumns.info,
                })
              }
            >
              <h2 className="mb-4 text-xl font-bold">Información Útil</h2>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 md:hidden ${expandedColumns.info ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div className="mb-5 h-[5px] w-[32px] bg-primary-600"></div>
            <ul
              className={`font-medium transition-all duration-300 overflow-hidden md:max-h-full ${expandedColumns.info ? "max-h-[500px]" : "max-h-0 md:max-h-full"}`}
            >
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Guía de TV"
                >
                  Guía de TV
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Transmisiones en Vivo"
                >
                  Transmisiones en Vivo
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Noticias"
                >
                  Noticias
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Eventos"
                >
                  Eventos
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Empleos"
                >
                  Empleos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() =>
                setExpandedColumns({
                  ...expandedColumns,
                  support: !expandedColumns.support,
                })
              }
            >
              <h2 className="mb-4 text-xl font-bold">Soporte y Ayuda</h2>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 md:hidden ${expandedColumns.support ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div className="mb-5 h-[5px] w-[32px] bg-primary-600"></div>
            <ul
              className={`font-medium transition-all duration-300 overflow-hidden md:max-h-full ${expandedColumns.support ? "max-h-[500px]" : "max-h-0 md:max-h-full"}`}
            >
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Centro de Ayuda"
                >
                  Centro de Ayuda
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Preguntas Frecuentes"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Contáctanos"
                >
                  Contáctanos
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Términos y Privacidad"
                >
                  Términos y Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() =>
                setExpandedColumns({
                  ...expandedColumns,
                  business: !expandedColumns.business,
                })
              }
            >
              <h2 className="mb-4 text-xl font-bold">Negocios</h2>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 md:hidden ${expandedColumns.business ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div className="mb-5 h-[5px] w-[32px] bg-primary-600"></div>
            <ul
              className={`font-medium transition-all duration-300 overflow-hidden md:max-h-full ${expandedColumns.business ? "max-h-[500px]" : "max-h-0 md:max-h-full"}`}
            >
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Información para Anunciantes"
                >
                  Información para Anunciantes
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:underline"
                  title="Contacto para Patrocinios"
                >
                  Contacto para Patrocinios
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() =>
                setExpandedColumns({
                  ...expandedColumns,
                  social: !expandedColumns.social,
                })
              }
            >
              <h2 className="mb-4 text-xl font-bold">Síguenos en Redes</h2>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 md:hidden ${expandedColumns.social ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div className="mb-5 h-[5px] w-[32px] bg-primary-600"></div>
            <ul
              className={`font-medium transition-all duration-300 overflow-hidden md:max-h-full ${expandedColumns.social ? "max-h-[500px]" : "max-h-0 md:max-h-full"}`}
            >
              <li className="mb-4">
                <Link
                  href="https://www.facebook.com/chapintv"
                  target="_blank"
                  className="hover:underline"
                  title="Facebook"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://x.com/chapintv_"
                  target="_blank"
                  className="hover:underline"
                  title="Twitter"
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.instagram.com/chapintv/"
                  target="_blank"
                  className="hover:underline"
                  title="Instagram"
                >
                  Instagram
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.youtube.com/channel/UCJcN367ge_Yo1p7b20_KSaA"
                  target="_blank"
                  className="hover:underline"
                  title="Youtube"
                >
                  Youtube
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.tiktok.com/@chapintv_"
                  target="_blank"
                  className="hover:underline"
                  title="Tiktok"
                >
                  Tiktok
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-5 md:py-6 lg:py-9 border-t border-primary-1000 flex items-center justify-center">
          <span className="text-base text-center text-[#b5b5b5]">
            {new Date().getFullYear()} <a href="#"> ChapinTV</a>. Todos los
            derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
