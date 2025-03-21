"use client";

import { Fragment } from "react";

import { useAds } from "./context/AdsContext";

export default function Home() {
  // Usar el hook useAdds para acceder al valor del contexto
  const { ads } = useAds();
  return (
    <Fragment>
      <div className="grid lg:grid-cols-[9%_80%_9%] lg:gap-[1%] h-auto p-4 sm:p-10 bg-background rounded-[10px] ">
        {ads && (
          <div className="col-span-3 h-[60px] lg:h-[100px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        )}
        {ads === "full" && (
          <div className="hidden lg:block h-[400px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        )}
        <div
          className={`col-span-3 lg:col-span-1 flex h-[800px] bg-primary-400 ${ads === "full" ? "" : "lg:col-start-2"}`}
        ></div>
        {ads === "full" && (
          <div className="hidden lg:block h-[400px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        )}
        {ads && (
          <div className="col-span-3 h-[60px] lg:h-[100px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
        )}
      </div>
      {ads === "full" && (
        <div className="fixed bottom-4 right-4 h-[144px] w-[240px] lg:h-[240px] lg:w-[360px] bg-[#FEECEC] rounded-[10px] border-[1px] border-[#FF4F4F]"></div>
      )}
    </Fragment>
  );
}
