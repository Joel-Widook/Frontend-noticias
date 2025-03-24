"use client";

import { useEffect, useState, useRef } from "react";

import Link from "next/dist/client/link";

// Import channel icons
import {
  Canal3Icon,
  Canal7Icon,
  Canal23Icon,
} from "../../../components/icons/channels";
// Import social media icons
import {
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  YouTubeIcon,
  TikTokIcon,
  PinterestIcon,
} from "../../../components/icons/social";

const ChannelBar = () => {
  const [position, setPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const channels = [
    { name: "Canal 3", Icon: Canal3Icon },
    { name: "Canal 7", Icon: Canal7Icon },
    { name: "Canal 23", Icon: Canal23Icon },
  ];

  // Duplicamos los canales para crear un efecto infinito
  const allChannels = [...channels, ...channels, ...channels];

  useEffect(() => {
    const interval = setInterval(() => {
      // Mover el carrusel
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 1;

        // Si llegamos al final del primer conjunto, reiniciamos la posición
        if (newPosition >= channels.length) {
          return 0;
        }

        return newPosition;
      });
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [channels.length]);

  // Calcular la transformación para el movimiento
  // Ajustamos el cálculo para mover los elementos de manera más precisa
  const itemWidth = 112; // Ancho de cada elemento del carrusel
  const translateX = -position * itemWidth;

  return (
    <div className="w-full h-[44px] bg-primary-1100 flex items-center justify-center lg:justify-between lg:px-10">
      <div className="hidden lg:block lg:w-[250px]"></div>
      <div className="w-full sm:flex sm:w-[336px] overflow-hidden lg:mx-auto">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {allChannels.map((channel, index) => (
            <div
              key={`${channel.name}-${index}`}
              className="min-w-[112px] h-[16px] flex items-center justify-center"
            >
              <p className="text-white text-sm mr-2.5">{channel.name}</p>
              <channel.Icon size={16} color="#fff" />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-center gap-3.5">
        <p>SÍGUENOS</p>
        <div className="flex items-center justify-center gap-2">
          <Link
            href="https://www.facebook.com/chapintv/"
            target="_blank"
            title="Facebook"
          >
            <FacebookIcon size={16} color="#fff" className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.instagram.com/chapintv/"
            target="_blank"
            title="Instagram"
          >
            <InstagramIcon size={16} color="#fff" className="w-4 h-4" />
          </Link>
          <Link
            href="https://x.com/chapintv_"
            target="_blank"
            title="Twitter/X"
          >
            <TwitterXIcon size={16} color="#fff" className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCJcN367ge_Yo1p7b20_KSaA"
            target="_blank"
            title="Youtube"
          >
            <YouTubeIcon size={16} color="#fff" className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.tiktok.com/@chapintv_"
            target="_blank"
            title="Tiktok"
          >
            <TikTokIcon size={16} color="#fff" className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.pinterest.com/webchapintv"
            target="_blank"
            title="Pinterest"
          >
            <PinterestIcon size={16} color="#fff" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChannelBar;
